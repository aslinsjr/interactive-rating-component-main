const container = document.querySelector(".container")
const submitButton = document.querySelector("#submit-btn")

const buttons = document.querySelectorAll("#rating-container li")
const selectedNumber = document.querySelector("#selected-number")

submitButton.addEventListener("click", () => {
    container.classList.add("active")
})

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log(e)

        const button = e.target

        button.classList.add("selected")

        const id = button.getAttribute("id")

        console.log(id)

        selectedNumber.innerHTML = id
    })
})