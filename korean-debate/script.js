const buttons = document.querySelectorAll(".vote-button");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        const debate = this.dataset.debate;
        const choice = this.dataset.choice;

        const result = document.getElementById(`${debate}-result`);

        const group = document.querySelectorAll(
            `.vote-button[data-debate="${debate}"]`
        );

        group.forEach(btn=>{
            btn.style.background="#111";
            btn.style.color="white";
        });

        this.style.background="#ff4d4d";
        this.style.color="white";

        result.textContent=`✅ You voted: ${this.textContent}`;

    });

});