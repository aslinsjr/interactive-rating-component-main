const container = document.querySelector(".container");
const submitButton = document.querySelector("#submit-btn");

const buttons = document.querySelectorAll("#rating-container li");
const selectedNumber = document.querySelector("#selected-number");


buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
    
        const button = e.target

        button.classList.add("selected");

        const id = button.getAttribute("id");

        selectedNumber.innerHTML = id
        
        submitButton.addEventListener("click", () => {

            container.classList.add("active");
            if (!id) container.classList.remove("active");
        });
    });
});



