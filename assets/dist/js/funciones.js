function enviar(){
    //alert('hola mexico');

        ed = document.getElementById("edad").value; //lee el valor escrito en el cuadro de texto
       if(casillaVacia(ed)==true){
           alert("debes meter un valor en la casilla");
       }else{

        var datosaEnviar = new FormData();
        datosaEnviar.append('edad',ed);

          $.ajax({
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
                method: 'post',
                url: 'procesa.php',
                data: datosaEnviar,
                processData: false,
                contentType: false,
                success: function (resp) {
                    
                       $('#resultado').html(resp);
                      
                   }
                
            });
        } //else

}

function casillaVacia(cuadro){
    if(cuadro==''){
      return true;
    }else{
       return false;
    }
    /*if(cuadro==null){

    }*/

}