async function listaClientes(){
    const conexao = await fetch('http://localhost:3000/profile');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criaCliente(nome, email) {
    const conexao = await fetch("http://localhost:3000/profile",{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    });
    if(!conexao.ok){
        throw new Error("Não foi possivel se comunicar com o banco de dados");
    }
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

async function removeCliente(id){
   const conexao = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    });
    return conexao;
}

async function detalhaCliente(id){
    const resposta = await fetch(`http://localhost:3000/profile/${id}`);
    return resposta.json();
}

async function atualizaCliente(id, nome, email){
    const conexao = await fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    });
    const conexaoConvertida = conexao.json();
    return conexaoConvertida;
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}