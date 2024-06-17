import { clienteService } from "../service/cliente-service.js";
const formulario = document.querySelector('[data-form]');

async function cadastroCliente(evento){
    evento.preventDefault();
    const nome = document.querySelector('[data-nome]').value;
    const email = document.querySelector('[data-email]').value;
    try{
        await clienteService.criaCliente(nome, email);
        window.location.href = "../telas/cadastro_concluido.html";
    } catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html';
    }
};

formulario.addEventListener('submit', evento => cadastroCliente(evento));