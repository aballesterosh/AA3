// Crea alerta de contacto
$(function(){

    $("#bclick").click(function(){
        alert("Contactanos al numero 925145961");
    });
// Inicia con informacion oculta
    $("#lnkwa").hide();
    $("#demo").hide();
    $("#receta").hide();

// Al hacer click aparece y desaparece la informacion o imagenes
    $("#bclick2").click(function(){

        $("#demo").toggle();
    });

// Al hacer click aparece la receta del coctel
    $("#bclick3").click(function(){

        $("#receta").show();
    });
        
// Al hacer click desaparece la receta del coctel

    $("#cerrar").click(function(){

        $("#receta").hide();
        
    });

// Redirecciona a la pagina especificada
// Facebook


    $(document).ready(function(){
        $("#facebook").click(function(){
           window.location.href = "https://www.facebook.com";
        });
    });
    
        $("#facebook").click(function(){
           var url = $(this).data('url');
           window.location.href = url;
    });
    
// Redirecciona a la pagina especificada
// Twiter

    $(document).ready(function(){
        $("#twitter").click(function(){
           window.location.href = "https://www.twitter.com";
        });
    });

        $("#twitter").click(function(){
            var url = $(this).data('url');
            window.location.href = url;
    });
    
// Redirecciona a la pagina especificada
// youtube

    $(document).ready(function(){
        $("#youtube").click(function(){
        window.location.href = "https://www.youtube.com";
        });
    });

    $("#youtube").click(function(){
         var url = $(this).data('url');
         window.location.href = url;
    });
// Redirecciona a la pagina especificada
// instagram

    $(document).ready(function(){
        $("#instagram").click(function(){
        window.location.href = "https://www.instagram.com";
        });
    });

    $("#instagram").click(function(){
        var url = $(this).data('url');
         window.location.href = url;
        });

});