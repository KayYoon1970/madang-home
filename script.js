// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
}

const BLOG_BASE_URL = 'https://realkoreawithflo.blogspot.com';
const BLOG_FEED_URL =
  `${BLOG_BASE_URL}/feeds/posts/default?alt=json-in-script&max-results=12&callback=renderBloggerFeed`;

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  })[char]);
}

function stripHtml(html = '') {
  const temporary = document.createElement('div');
  temporary.innerHTML = html;
  return (temporary.textContent || temporary.innerText || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function shorten(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim().replace(/[.,;:!?-]+$/, '')}…`;
}

function getPostUrl(entry) {
  const alternate = (entry.link || []).find(link => link.rel === 'alternate');
  return alternate ? alternate.href : BLOG_BASE_URL;
}

function enlargeBloggerImage(url) {
  if (!url) return '';

  return url
    // Older Blogger image URL formats
    .replace(/\/s\d+(?:-c)?\//, '/s1600/')
    .replace(/\/w\d+-h\d+(?:-[^/]+)?\//, '/s1600/')
    // Newer googleusercontent parameter formats
    .replace(/=s\d+(?:-c)?(?:-[^&]+)?$/, '=s1600')
    .replace(/=w\d+-h\d+(?:-[^&]+)?$/, '=s1600');
}

function getPostImage(entry) {
  // Prefer the original image embedded in the post body.
  const html = entry.content?.$t || entry.summary?.$t || '';
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);

  if (match) {
    return enlargeBloggerImage(match[1]);
  }

  // Use the feed thumbnail only as a fallback.
  if (entry.media$thumbnail && entry.media$thumbnail.url) {
    return enlargeBloggerImage(entry.media$thumbnail.url);
  }

  return 'assets/hero.jpg';
}

function getPostText(entry) {
  return stripHtml(entry.summary?.$t || entry.content?.$t || '');
}

function getStoryCategory(entry) {
  const title = (entry.title?.$t || '').toLowerCase();
  const labels = (entry.category || [])
    .map(item => item.term.toLowerCase())
    .filter(Boolean);
  const labelText = labels.join(' ');

  // Keep the three published stories in their intended MADANG categories,
  // even when older Blogger labels overlap.
  if (title.includes('hot outside') || title.includes('ice-cold') || title.includes('drink in summer')) {
    return { label: 'Food & Drink', filter: 'food' };
  }

  if (title.includes('highway rest stop') || title.includes('rest stops are worth')) {
    return { label: 'Culture', filter: 'culture' };
  }

  if (title.includes('moment above the east sea') || title.includes('naksansa')) {
    return { label: 'Travel', filter: 'travel' };
  }

  if (labelText.includes('food') || labelText.includes('drink')) {
    return { label: 'Food & Drink', filter: 'food' };
  }
  if (labelText.includes('culture')) return { label: 'Culture', filter: 'culture' };
  if (labelText.includes('travel')) return { label: 'Travel', filter: 'travel' };
  if (labelText.includes('k-vibe') || labelText.includes('kvibe')) {
    return { label: 'K-Vibe', filter: 'kvibe' };
  }
  if (labelText.includes('local life') || labelText.includes('local')) {
    return { label: 'Local Life', filter: 'local' };
  }

  return { label: 'Local Life', filter: 'local' };
}

function getPostCategory(entry) {
  return getStoryCategory(entry).label;
}

function getFilterCategory(entry) {
  return getStoryCategory(entry).filter;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

function createHomeCard(entry) {
  const title = entry.title?.$t || 'Real Korea with Flo';
  const description = shorten(getPostText(entry), 125);
  const category = getPostCategory(entry);
  const url = getPostUrl(entry);
  const image = getPostImage(entry);
  const date = formatDate(entry.published?.$t);

  return `
    <article class="story-card">
      <a class="story-img" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy">
      
      </a>

      <div class="story-body">
<div class="story-category">${escapeHtml(category)}</div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(description)}</p>
        <small>${escapeHtml(date)}</small>
        <a class="home-story-link"
           href="${escapeHtml(url)}"
           target="_blank"
           rel="noopener noreferrer">
          Read Story →
        </a>
      </div>
    </article>`;
}

function createStoriesPageCard(entry) {
  const title = entry.title?.$t || 'Real Korea with Flo';
  const description = shorten(getPostText(entry), 165);
  const category = getPostCategory(entry);
  const filterCategory = getFilterCategory(entry);
  const url = getPostUrl(entry);
  const image = getPostImage(entry);
  const date = formatDate(entry.published?.$t);

  return `
    <article class="story-card" data-category="${escapeHtml(filterCategory)}">
      <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeHtml(image)}" alt="${escapeHtml(title)}" loading="lazy">
      </a>

      <div class="story-card-body">
        <span class="story-category">${escapeHtml(category)}</span>
        <h2>${escapeHtml(title)}</h2>
        <p>${escapeHtml(description)}</p>
        <small>${escapeHtml(date)} · Curated by Flo</small>
        <a class="story-read-link"
           href="${escapeHtml(url)}"
           target="_blank"
           rel="noopener noreferrer">
          Read Story →
        </a>
      </div>
    </article>`;
}

function activateStoryFilters() {
  const filterButtons = document.querySelectorAll('.category-button');
  const storyCards = document.querySelectorAll('#all-blog-feed .story-card');

  if (!filterButtons.length || !storyCards.length) return;

  filterButtons.forEach(button => {
    button.onclick = () => {
      filterButtons.forEach(item => item.classList.remove('active'));
      button.classList.add('active');

      const filter = button.dataset.filter;

      storyCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    };
  });
}

// Blogger calls this function through the JSONP feed URL.
window.renderBloggerFeed = function renderBloggerFeed(feedData) {
  const entries = feedData?.feed?.entry || [];

  const homeFeed = document.getElementById('home-blog-feed');
  if (homeFeed && entries.length) {
    homeFeed.innerHTML = entries.slice(0, 3).map(createHomeCard).join('');
  }

  const allFeed = document.getElementById('all-blog-feed');
  if (allFeed && entries.length) {
    allFeed.innerHTML = entries.map(createStoriesPageCard).join('');
    activateStoryFilters();
  }
};

function loadBloggerFeed() {
  if (!document.querySelector('[data-blog-feed]')) return;

  const script = document.createElement('script');
  script.src = BLOG_FEED_URL;
  script.async = true;
  script.onerror = () => {
    console.warn('Blogger feed could not be loaded. Existing story cards remain visible.');
  };
  document.body.appendChild(script);
}

loadBloggerFeed();
