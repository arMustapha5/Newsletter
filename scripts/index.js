import { subscribeTemplate, successTemplate } from "./templates.js";

function renderSubscribeTemplate(container) {
    container.innerHTML = subscribeTemplate()
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function clearError(emailInput, errorElem) {
    setTimeout(() => {
        emailInput.classList.remove("email_error")
        errorElem.classList.remove("show_error_msg")
    }, 1000)
}

function showError(emailInput, errorElem) {
    emailInput.classList.add("email_error")
    errorElem.classList.add("show_error_msg")
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".form-container")

    renderSubscribeTemplate(container)

    if (container) {
        const form = document.querySelector(".js-form")
        const emailInput = document.querySelector(".js-email-input")
        const errorElem = document.querySelector(".error_msg")


        form.addEventListener("submit", (event) => {
            event.preventDefault()

            const valid = isValidEmail(emailInput.value)
            let enteredEmail = emailInput.value


            if (!valid) {
                showError(emailInput, errorElem)
                clearError(emailInput, errorElem)
            } else {
                container.innerHTML = successTemplate(enteredEmail)
                // add an event listener to dimiss the success message
                const dismissBtn = document.querySelector(".dismiss")
                // console.log(dismissBtn)
                dismissBtn.addEventListener("click", (event) => {
                    event.preventDefault()
                    dismissBtn.innerHTML = renderSubscribeTemplate(container)

                })
            }
        })
    }
})
