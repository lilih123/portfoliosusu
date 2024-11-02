const check = document.querySelector("#check")

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if (check.checked) {
    element.classList.add("dark")
    localStorage.setItem("dark-mode","true")
       }

  else{ element.classList.remove("dark")
    localStorage.setItem("dark-mode","false")

  }
}

// Obtém os elementos
const modal = document.getElementById("modal");
const btn = document.getElementById("lupa"); // Substitua pelo ID do seu botão
const span = document.getElementById("closeModal");

// Quando o botão é clicado, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clica no "x" (span), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica fora do modal, também fecha
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
