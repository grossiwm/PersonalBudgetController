$( ".calcula" ).click(function() {
    console.log( "Botao Funciona." );

    var sum = 0;
    $(".somavel").each(function(){
        sum += parseFloat($(this).val());  // Or this.innerHTML, this.innerText
  
    });

    console.log(sum);

    $(".div-total").html(`

        <h6 class="card-subtitle mb-2 text-muted">Total: <span class="total-value">R$3000.00</span></h6>
    `);
    
    $(".total-value").text(sum);    

});
