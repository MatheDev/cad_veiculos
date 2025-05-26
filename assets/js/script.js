
// Requisição a API de consulta de placas

$("#placa").on('blur', function(){
    $.ajax({
        url: '',
        type: 'posto',
        data: placa,
        success: function(response){
            console.log(response);
            
        },error: function(error){
            console.log(error);
            
        }
    })
})