const nameLibrary = {
  female: {
    modern: [
      ["서윤", "Seo-yoon", "A graceful presence with a bright, thoughtful spirit."],
      ["지우", "Ji-woo", "Wisdom, kindness, and the courage to protect what matters."],
      ["하린", "Ha-rin", "A precious person with a clear and open heart."],
      ["유나", "Yu-na", "Gentle elegance and a warm, confident charm."],
      ["채원", "Chae-won", "A colorful spirit with a calm and beautiful center."]
    ],
    traditional: [
      ["연화", "Yeon-hwa", "A lotus in bloom—graceful, resilient, and serene."],
      ["정아", "Jeong-a", "A sincere and refined person with a steady heart."],
      ["혜원", "Hye-won", "Wisdom and grace gathered in a beautiful garden."],
      ["선영", "Seon-young", "Virtuous, radiant, and quietly dignified."]
    ],
    elegant: [
      ["서아", "Seo-a", "Poised, graceful, and naturally sophisticated."],
      ["수현", "Soo-hyun", "A person of excellent character and quiet brilliance."],
      ["예린", "Ye-rin", "Refined beauty with a delicate, luminous spirit."],
      ["다인", "Da-in", "A person of many gifts, kindness, and depth."]
    ],
    cute: [
      ["아린", "A-rin", "Lovely, bright, and full of gentle joy."],
      ["보라", "Bo-ra", "Vivid, playful, and memorable like the color violet."],
      ["나리", "Na-ri", "Fresh and cheerful, like a lily in spring."],
      ["소미", "So-mi", "Small moments of beauty gathered into one charming soul."]
    ],
    royal: [
      ["세령", "Se-ryeong", "Noble, discerning, and born with quiet authority."],
      ["화영", "Hwa-young", "A splendid flower with radiant dignity."],
      ["은비", "Eun-bi", "A hidden treasure with elegant strength."],
      ["명희", "Myeong-hee", "Bright joy and a presence worthy of admiration."]
    ],
    kpop: [
      ["제니", "Je-ni", "Bold, stylish, and effortlessly magnetic."],
      ["유진", "Yu-jin", "Confident energy balanced by warmth and intelligence."],
      ["채린", "Chae-rin", "Colorful talent with a strong, modern edge."],
      ["나연", "Na-yeon", "Bright, lively, and naturally captivating."]
    ]
  },
  male: {
    modern: [
      ["도윤", "Do-yoon", "A wise path guided by balance and integrity."],
      ["시우", "Si-woo", "Poetic sensitivity with a protective, dependable heart."],
      ["하준", "Ha-joon", "Great potential, talent, and an open-minded spirit."],
      ["이안", "Ian", "Calm confidence and a clear sense of self."],
      ["지호", "Ji-ho", "Wisdom and courage held in generous measure."]
    ],
    traditional: [
      ["성민", "Seong-min", "Sincere, accomplished, and considerate of others."],
      ["태현", "Tae-hyun", "Great virtue joined with intelligence and clarity."],
      ["진우", "Jin-woo", "True-hearted, loyal, and strong in character."],
      ["영호", "Young-ho", "A brilliant and courageous spirit."]
    ],
    elegant: [
      ["준서", "Joon-seo", "Talented, composed, and naturally distinguished."],
      ["현우", "Hyun-woo", "Wise, capable, and quietly dependable."],
      ["서진", "Seo-jin", "Refinement and progress carried with calm confidence."],
      ["민재", "Min-jae", "Quick-minded, gifted, and gracious."]
    ],
    cute: [
      ["우주", "Woo-joo", "A joyful spirit as open and limitless as the universe."],
      ["해온", "Hae-on", "Warm sunlight arriving with hope and happiness."],
      ["로운", "Ro-woon", "Gentle, friendly, and naturally lovable."],
      ["단우", "Dan-woo", "Sweet sincerity paired with quiet courage."]
    ],
    royal: [
      ["태원", "Tae-won", "Great purpose, dignity, and a generous heart."],
      ["건우", "Geon-woo", "Strength, honor, and reliable leadership."],
      ["세준", "Se-joon", "A gifted person with noble bearing."],
      ["왕현", "Wang-hyun", "A commanding yet wise and thoughtful presence."]
    ],
    kpop: [
      ["지민", "Ji-min", "Quick intelligence, charm, and graceful confidence."],
      ["태민", "Tae-min", "Bold talent with a precise and artistic spirit."],
      ["민호", "Min-ho", "Bright, athletic energy and a generous heart."],
      ["도영", "Do-young", "A shining path filled with creativity and warmth."]
    ]
  },
  neutral: {
    modern: [
      ["지우", "Ji-woo", "Wisdom and kindness with a quietly strong heart."],
      ["수현", "Soo-hyun", "Excellent character, insight, and calm brilliance."],
      ["하늘", "Ha-neul", "Free, expansive, and full of possibility like the sky."],
      ["가온", "Ga-on", "The center of warmth, balance, and connection."],
      ["서진", "Seo-jin", "Refined, forward-moving, and confidently individual."]
    ],
    traditional: [
      ["정원", "Jeong-won", "A peaceful garden shaped by sincerity and balance."],
      ["한결", "Han-gyeol", "Steady and wholehearted, unchanged in true character."],
      ["다솜", "Da-som", "An old Korean word carrying the warmth of love."],
      ["슬기", "Seul-gi", "Wisdom, good judgment, and a thoughtful nature."]
    ],
    elegant: [
      ["윤서", "Yoon-seo", "Grace, refinement, and a gentle intellectual spirit."],
      ["시현", "Si-hyun", "Poetic sensitivity and a clear, admirable presence."],
      ["재인", "Jae-in", "Talent and humanity expressed with quiet elegance."],
      ["은결", "Eun-gyeol", "A precious bond with a clean, luminous spirit."]
    ],
    cute: [
      ["봄", "Bom", "Fresh beginnings, warmth, and cheerful energy."],
      ["별", "Byeol", "A bright, unique presence that shines on its own."],
      ["누리", "Nu-ri", "A joyful person connected to the whole world."],
      ["토리", "To-ri", "Playful, friendly, and full of curious charm."]
    ],
    royal: [
      ["세원", "Se-won", "A dignified presence with a broad and noble vision."],
      ["은성", "Eun-seong", "A silver star—precious, radiant, and composed."],
      ["규린", "Gyu-rin", "Elegant standards and a rare, refined spirit."],
      ["태린", "Tae-rin", "Great dignity balanced by grace and sensitivity."]
    ],
    kpop: [
      ["지안", "Ji-an", "Smart, stylish, and comfortably self-assured."],
      ["유빈", "Yu-bin", "Bright talent with an easy, modern charm."],
      ["현진", "Hyun-jin", "Distinctive creativity and a polished presence."],
      ["세온", "Se-on", "Fresh energy that lights up every room."]
    ]
  }
};


const familyNames = [
  ["김", "Kim"],
  ["이", "Lee"],
  ["박", "Park"],
  ["최", "Choi"],
  ["정", "Jeong"],
  ["강", "Kang"],
  ["윤", "Yoon"],
  ["한", "Han"]
];

const form = document.getElementById("nameForm");
const generateButton = document.getElementById("generateButton");
const resultCard = document.getElementById("resultCard");
const loadingCard = document.getElementById("loadingCard");
const koreanName = document.getElementById("koreanName");
const romanizedName = document.getElementById("romanizedName");
const nameMeaning = document.getElementById("nameMeaning");
const familyNameDetail = document.getElementById("familyNameDetail");
const givenNameDetail = document.getElementById("givenNameDetail");
const birthdayResult = document.getElementById("birthdayResult");
const genderResult = document.getElementById("genderResult");
const styleResult = document.getElementById("styleResult");
const againButton = document.getElementById("againButton");
const pronounceButton = document.getElementById("pronounceButton");
const copyButton = document.getElementById("copyButton");
const statusText = document.getElementById("loadingStatus");
const loadingProgressBar = document.getElementById("loadingProgressBar");
const loadingRitual = document.getElementById("loadingRitual");
const buttonText = generateButton.querySelector(".button-text");

let lastNameKey = "";
let generationTimer;
let generationTimeout;
let progressAnimationFrame;
const defaultButtonText = buttonText.textContent.trim();

function formatBirthday(value) {
  const date = new Date(`${value}T12:00:00`);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function titleCase(value) {
  return value === "kpop"
    ? "K-pop"
    : value.charAt(0).toUpperCase() + value.slice(1);
}

function selectFamilyName(birthday) {
  const numericBirthday = birthday.replaceAll("-", "");
  const seed = [...numericBirthday].reduce((sum, number) => sum + Number(number), 0);
  return familyNames[seed % familyNames.length];
}

function selectName(gender, style, birthday) {
  const pool = nameLibrary[gender][style];
  const seed = birthday.replaceAll("-", "").split("").reduce((sum, n) => sum + Number(n), 0);
  let index = (seed + Math.floor(Math.random() * pool.length)) % pool.length;
  let selected = pool[index];
  let key = `${gender}-${style}-${selected[0]}`;

  if (pool.length > 1 && key === lastNameKey) {
    index = (index + 1) % pool.length;
    selected = pool[index];
    key = `${gender}-${style}-${selected[0]}`;
  }

  lastNameKey = key;
  return selected;
}

function showLoading() {
  resultCard.classList.add("hidden");
  loadingCard.classList.remove("hidden");
  loadingCard.classList.remove("loading-enter");
  void loadingCard.offsetWidth;
  loadingCard.classList.add("loading-enter");

  generateButton.disabled = true;
  generateButton.classList.add("is-loading");
  buttonText.textContent = "Creating Your Name…";

  const stages = [
    {
      message: "Reading the rhythm of your birthday…",
      ritual: "Every Korean name carries a story.",
      progress: 18
    },
    {
      message: "Exploring Korean name traditions…",
      ritual: "A name can hold character, hope, and grace.",
      progress: 43
    },
    {
      message: "Matching your personal style…",
      ritual: "Your preferences guide the mood of your name.",
      progress: 68
    },
    {
      message: "Preparing your Korean identity…",
      ritual: "MADANG is placing the final touch.",
      progress: 90
    }
  ];

  let stageIndex = 0;
  statusText.textContent = stages[0].message;
  if (loadingRitual) loadingRitual.textContent = stages[0].ritual;
  if (loadingProgressBar) loadingProgressBar.style.width = "0%";

  window.requestAnimationFrame(() => {
    if (loadingProgressBar) loadingProgressBar.style.width = `${stages[0].progress}%`;
  });

  generationTimer = window.setInterval(() => {
    stageIndex = Math.min(stageIndex + 1, stages.length - 1);
    const stage = stages[stageIndex];

    statusText.classList.remove("message-swap");
    if (loadingRitual) loadingRitual.classList.remove("message-swap");
    void statusText.offsetWidth;
    statusText.textContent = stage.message;
    if (loadingRitual) loadingRitual.textContent = stage.ritual;
    statusText.classList.add("message-swap");
    if (loadingRitual) loadingRitual.classList.add("message-swap");
    if (loadingProgressBar) loadingProgressBar.style.width = `${stage.progress}%`;

    if (stageIndex === stages.length - 1) {
      window.clearInterval(generationTimer);
    }
  }, 620);

  loadingCard.scrollIntoView({ behavior: "smooth", block: "center" });
}
function showResult(birthday, gender, style) {
  window.clearInterval(generationTimer);
  window.clearTimeout(generationTimeout);
  if (loadingProgressBar) loadingProgressBar.style.width = "100%";
  const [givenKorean, givenRomanized, meaning] = selectName(gender, style, birthday);
  const [familyKorean, familyRomanized] = selectFamilyName(birthday);
  const fullKoreanName = `${familyKorean}${givenKorean}`;
  const fullRomanizedName = `${familyRomanized} ${givenRomanized}`;

  koreanName.textContent = fullKoreanName;
  romanizedName.textContent = fullRomanizedName;
  nameMeaning.textContent = meaning;
  familyNameDetail.textContent = `${familyKorean} · ${familyRomanized}`;
  givenNameDetail.textContent = `${givenKorean} · ${givenRomanized}`;
  birthdayResult.textContent = formatBirthday(birthday);
  genderResult.textContent = titleCase(gender);
  styleResult.textContent = titleCase(style);

  window.setTimeout(() => {
    loadingCard.classList.add("hidden");
  }, 120);
  resultCard.classList.remove("hidden");
  resultCard.classList.remove("stamp-in");
  void resultCard.offsetWidth;
  resultCard.classList.add("stamp-in");

  generateButton.disabled = false;
  generateButton.classList.remove("is-loading");
  buttonText.textContent = defaultButtonText;
  resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const formData = new FormData(form);
  const birthday = formData.get("birthday");
  const gender = formData.get("gender");
  const style = formData.get("style");

  window.clearTimeout(generationTimeout);
  showLoading();
  generationTimeout = window.setTimeout(() => showResult(birthday, gender, style), 2700);
});

againButton.addEventListener("click", () => {
  form.requestSubmit();
});

pronounceButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    alert("Audio pronunciation is not supported in this browser.");
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(koreanName.textContent);
  utterance.lang = "ko-KR";
  utterance.rate = 0.72;
  window.speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", async () => {
    const koreanName = koreanNameElement.textContent.trim();
    const romanizedName = romanizedNameElement.textContent.trim();
    const textToCopy = `${koreanName} (${romanizedName})`;

    try {
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
        } else {
            const temporaryText = document.createElement("textarea");
            temporaryText.value = textToCopy;
            temporaryText.style.position = "fixed";
            temporaryText.style.opacity = "0";

            document.body.appendChild(temporaryText);
            temporaryText.focus();
            temporaryText.select();
            document.execCommand("copy");
            temporaryText.remove();
        }

        copyButton.textContent = "Copied!";
        copyButton.classList.add("copied");

        setTimeout(() => {
            copyButton.textContent = "Copy Name";
            copyButton.classList.remove("copied");
        }, 1500);

    } catch (error) {
        console.error("Copy failed:", error);

        copyButton.textContent = "Copy failed";

        setTimeout(() => {
            copyButton.textContent = "Copy Name";
        }, 1500);
    }
});

const birthdayInput = document.getElementById("birthday");
const today = new Date();
birthdayInput.max = today.toISOString().split("T")[0];
