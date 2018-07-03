// document.getElementById("aboutlink").addEventListener("click", function(){     
//     this.textContent = "Lels"
// })

// document.getElementById("productslink").addEventListener("click", function(){     
//     this.textContent = "Lels"
// })

// document.getElementById("contactlink").addEventListener("click", function(){     
//     this.textContent = "Lels"
// })

$("#welcomelink").click(function() {
    $('html,body').animate({
        scrollTop: $(".welcome").offset().top},
        'slow');
});

$("#aboutlink").click(function() {
    $('html,body').animate({
        scrollTop: $(".about").offset().top},
        'slow');
});

$("#productslink").click(function() {
    $('html,body').animate({
        scrollTop: $(".products").offset().top},
        'slow');
});

$("#contactlink").click(function() {
    $('html,body').animate({
        scrollTop: $(".contact").offset().top},
        'slow');
});


