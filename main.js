$(document).ready(function() {


    $('#telefone').mask('(00) 00000-0000', {
        placeholder:'(__) ____-____'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Este campo é obrigatório',
            email: 'Este campo é obrigatório',
            mensagem: 'Este campo é obrigatório'
        },
        submitMandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        } 
        
    })

})
