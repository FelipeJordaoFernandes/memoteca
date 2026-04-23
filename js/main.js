import ui from "./ui.js"
import api from "./api.js"

document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById("pensamento-form")
    const botaoCancelar = document.getElementById("botao-cancelar")

    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", limparFormulario)
})

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const conteudo = document.getElementById("pensamento-conteudo").value
    const autoria = document.getElementById("pensamento-autoria").value

    try {
        await api.salvarPensamento({ conteudo, autoria })
        ui.renderizarPensamentos()
        limparFormulario()
    } catch {
        alert("Erro ao salvar pensamentos.")
    }
}

function limparFormulario() {
    document.getElementById("pensamento-id").value = ""
    document.getElementById("pensamento-conteudo").value = ""
    document.getElementById("pensamento-autoria").value = ""
}
