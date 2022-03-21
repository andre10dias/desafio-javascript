
//class contato

class contato {

    constructor (nome, sobrenome, email, cpf, telefone, contato, mensagem) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
        this._telefone = telefone;
        this._contato = contato;
        this._mensagem = mensagem;
    }
    
}

function Post(e, form) {
    e.preventDefault();

    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value, 
        form.elements.namedItem("email").value, 
        form.elements.namedItem("cpf").value, 
        form.elements.namedItem("telefone").value, 
        form.elements.namedItem("contato").value,
        form.elements.namedItem("mensagem").value
    );

    if (validaForm()) {
        Enviar(form);
    }
    else {
        alert('Todos os campos são obrigatórios');
    }
  
}

function Enviar(form) {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
        form.reset();
    }

}

function validaForm() {
    fields = document.querySelectorAll(".fordform");
    var retorno = true;

    fields.forEach(field => {
        if (field.value.trim() == "") {
            retorno = false;
            return;
        }
    });

    return retorno;
}