// var btn = document.querySelector('#show-hide')
// var container = document.querySelector('.container');

// btn.addEventListener('click', function(){
// if(container.style.display ==='block'){
//     container.style.display ='none'
// }else {
//     container.style.display ='block'
// }
// });



$(function() {
    $(".br").click(function() {
    
        $(".nav-menu").children().eq(0).text("Soluções");
        $(".nav-menu").children().eq(1).text("Comunidade");
        $(".nav-menu").children().eq(2).text("Comprar");
        $(".nav-menu").children().eq(3).text("Entrar");
        $(".language-selected").text("pt-BR");
        $(".language-selected").removeClass("change-en");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").addClass("change-br");
     
        $("#title").text("Uma Webpage simples com opção de Milti-language");
   
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Soluções");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Visão Geral");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Pagamentos");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Suporte");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Central de Ajuda");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Termos e Políticas");
    });
});

//English
$(function() {
    $(".en").click(function() {
   
        $(".nav-menu").children().eq(0).text("Solutions");
        $(".nav-menu").children().eq(1).text("community");
        $(".nav-menu").children().eq(2).text("Buy");
        $(".nav-menu").children().eq(3).text("Log in");
        $(".language-selected").text("en-US");
        $(".language-selected").removeClass("change-es");
        $(".language-selected").removeClass("change-br");
        $(".language-selected").addClass("change-en");
     
        $("#title").text("A simple webpage with Milti-language option");
  
        $(".about-container ul:nth-child(1) li:nth-child(1) a").text("Help Center");
        $(".about-container ul:nth-child(1) li:nth-child(2) a").text("Ethics Line");
        $(".about-container ul:nth-child(1) li:nth-child(3) a").text("Payments");
        $(".about-container ul:nth-child(2) li:nth-child(1) a").text("Support");
        $(".about-container ul:nth-child(2) li:nth-child(2) a").text("Help Center");
        $(".about-container ul:nth-child(2) li:nth-child(3) a").text("Terms and Policies");
    });
});
