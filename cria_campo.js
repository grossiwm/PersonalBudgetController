$(".novo-campo").hide();
$(".novo-campo .alert").hide();

$( ".cria-novo-campo" ).click(function() {
    console.log( "Botao 2 Funciona." ); 
    
    $(".novo-campo").show();

});

$(".commit").click(function(){
    var nome = $(".novo-campo-input").val();
    var div = `
        <div class="form-group">
            <label for="exampleFormControlInput1">${nome}</label>
            <input type="number" class="form-control passagem somavel" id="exampleFormControlInput1" placeholder="0.00">
        </div>
    `
    if (!nome){
        $(".novo-campo .alert").show();
    }else{
        $(".inputs").append(div);
        $(".novo-campo .alert").hide();
        $(".novo-campo").hide();
        $(".novo-campo-input").val("");
    }
})

$(".commit-cancel").click(function(){
    $(".novo-campo").hide();
    $(".novo-campo .alert").hide();
})