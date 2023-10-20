const elemento = document.getElementById("inputNomeElemento")
const data = document.getElementById("data")
let id = 1
let tabela = document.querySelector("#tabela-corpo")
function cadastrar() {




    const elementos = {
        produto: elemento.value,
        data: data.value
    };
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        bancoDeDados = [];
    }
    bancoDeDados.push(elementos);
    localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
    
    localStorage.setItem("tabelinha", JSON.stringify(elementos))
    atualizaTabela()
}

function atualizaTabela() {
    let elements = []
    elements = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (elements == null) {
        elements = [];
    }
    for (let element of elements) {
        tabela.innerHTML += (`
    <tr>
        <td>
            ${id}
        </td>
        <td>
        ${element.produto}
        </td>
        <td>
        ${element.data}
        </td>
        <td>ativo</td>
        <td><button onclick="deletar()" class="btn btn-danger">Excluir</button></td>
    </tr>
    `)
        id++;
    }

}
function deletar(){
    
    
    if(id){
        localStorage.removeItem("bancoDeDados", JSON.stringify(elemento.id))
        
       
    }

}
