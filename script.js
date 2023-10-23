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


function atualizaTabela(index) {
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
        <td><button onclick="deletar()" id="edit-${index}"class="btn btn-danger">Excluir</button></td>
    </tr>
    `)
        id++;
    }

}

const getLocalStorage = () => JSON.parse(localStorage.getItem('bancoDeDados')) ?? []
const setLocalStorage = (consultarBanco) => localStorage.setItem("bancoDeDados", JSON.stringify(consultarBanco))
const lerCliente = () => getLocalStorage()

function deletar(index){
    const consultarBanco = lerCliente()
    consultarBanco.splice(index,1)
    setLocalStorage(consultarBanco)
    window.location.reload()

}const editClient = (index) => {
    const elemento = lerCliente()[index]
    elemento.index = index
    fillFields(elemento)    
}
const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editClient(index)
        } else {
            const elemento = readClient()[index]
            const response = confirm(`Deseja realmente excluir a anotação ' ${elemento.anotacao} '?`)
            if (response) {
                lerCliente(index)
                atualizaTabela()
            }
        }
    }
}

