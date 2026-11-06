const expectedPassword = "cameronmoghisisaballer";
const passwordScreen = document.querySelector("#password-screen");
const passwordForm = document.querySelector("#password-form");
const passwordInput = document.querySelector("#password-input");
const passwordError = document.querySelector("#password-error");
const siteContent = document.querySelector("#site-content");
const fixButton = document.querySelector("#fix-button");
const actionStatus = document.querySelector("#action-status");

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (passwordInput.value === expectedPassword) {
    passwordScreen.hidden = true;
    siteContent.hidden = false;
    fixButton.focus();
    return;
  }

  passwordError.hidden = false;
  passwordInput.select();
});

passwordInput.addEventListener("input", () => {
  passwordError.hidden = true;
});

fixButton.addEventListener("click", () => {
  actionStatus.textContent = "The captured README did not include the Fix action code.";
});