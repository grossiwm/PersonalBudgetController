$( ".cria-novo-campo" ).click(function() {
    console.log( "Botao 2 Funciona." ); 
    
    $(".novo-campo").html(`
    
    <input type="text" class="form-control somavel" id="exampleFormControlInput1" placeholder="Nome do campo">
    <button type="button" class="btn btn-link">Criar</button>
    `);

});

$( ".cria-novo-campo-commit" ).click(function() {
    console.log( "Botao 3 Funciona." ); 
    

});