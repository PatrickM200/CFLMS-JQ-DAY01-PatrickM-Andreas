$(document).ready(function() {

    $("a").attr("href", "https://codefactory.wien")

    $("code").css("color", "red");

    $("ol li").css("background-color", "#2a7b90");

    $("input").attr("placeholder","Express your opinion");

    $("img").attr("src","https://codefactory.wien/wp-content/themes/hestia/cf-images/big-jpg/1-frontend.jpg");

    $("blockquote").css({"background-color":"orange","font-style":"italic"});

    $("#logo").css("color", "black");
    $(".gray").css("color", "white");

    $(".date").remove();

    $(".sidemenu:first").append("<li>New Templates</li><li>Order Template</li><li>Contact Us</li>");

    
    $("#sidebar p:first").text(`"When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop."`);

  });
