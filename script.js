const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault()

  const btnItalico = document.getElementById('Itálico')
  const btnNegrito = document.getElementById('Negrito')
  const btnSublinhado = document.getElementById('Sublinhado')
  const btnAumentarFonte = document.getElementById('AumentarFonte')
  const btnDiminuirFonte = document.getElementById('DiminuirFonte')

  const entradaTexto = document.getElementById('texto-entrada')
  const saidaTexto = document.getElementById('texto-saida')
  saidaTexto.innerHTML = entradaTexto.value

  function italico() {
    saidaTexto.classList.toggle('italico')
  }

  btnItalico.addEventListener('click', italico)

  function negrito() {
    saidaTexto.classList.toggle('negrito')
  }

  btnNegrito.addEventListener('click', negrito)

  function sublinhado() {
    saidaTexto.classList.toggle('sublinhado')
  }

  btnSublinhado.addEventListener('click', sublinhado)

  function aumentarFonte() {
    saidaTexto.classList.toggle('fonte-grande')
  }

  btnAumentarFonte.addEventListener('click', aumentarFonte)

  function diminuirFonte() {
    saidaTexto.classList.toggle('fonte-pequena')
  }

  btnDiminuirFonte.addEventListener('click', diminuirFonte)
})
