const input = document.querySelector('.username_input');
const submitButton = document.querySelector('.submit_button');
const errorText = document.querySelector('.error_text');

submitButton.onclick = function() {
    !input.value.trim() ? errorText.classList.toggle('show') : true;
}