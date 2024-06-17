import { clienteService } from "../service/cliente-service.js";

const pegaUrl = new URL(window.location);
const id = pegaUrl.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]');
const inputEmail = document.querySelector('[data-email]');

async function mostraCliente(id){
    const infoCliente = await clienteService.detalhaCliente(id);
    inputNome.value = infoCliente.nome;
    inputEmail.value = infoCliente.email;
}
mostraCliente(id);

const formulario = document.querySelector('[data-form]');

async function atualizarCliente(evento){
    evento.preventDefault();
    await clienteService.atualizaCliente(id, inputNome.value, inputEmail.value);
    window.location.href = "../telas/edicao_concluida.html";
}

formulario.addEventListener('submit', evento => atualizarCliente(evento));
