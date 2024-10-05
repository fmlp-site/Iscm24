// Referência aos elementos da interface
const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");
const switchToSignup = document.getElementById("switch-to-signup");
const switchToLogin = document.getElementById("switch-to-login");
const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const messageDiv = document.getElementById("message");

// Alternar entre formulários de login e cadastro
switchToSignup.addEventListener("click", () => {
  loginContainer.style.display = "none";
  signupContainer.style.display = "block";
});

switchToLogin.addEventListener("click", () => {
  signupContainer.style.display = "none";
  loginContainer.style.display = "block";
});

// Função para exibir mensagens de erro/sucesso
function showMessage(message, isError = true) {
  messageDiv.textContent = message;
  messageDiv.style.color = isError ? "red" : "green";
}

// Login com Firebase
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showMessage("Login realizado com sucesso!", false);
      console.log("Usuário logado:", userCredential.user);
    })
    .catch((error) => {
      showMessage("Erro no login: " + error.message);
    });
});

// Cadastro com Firebase
signupBtn.addEventListener("click", () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      showMessage("Cadastro realizado com sucesso!", false);
      console.log("Usuário cadastrado:", userCredential.user);
    })
    .catch((error) => {
      showMessage("Erro no cadastro: " + error.message);
    });
});
