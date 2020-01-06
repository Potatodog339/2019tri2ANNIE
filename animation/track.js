$(".color").click(
    function(){
     var color =  $(this).css("background-color");
     $(".circle").css("background-color",color);
     alert("Only one and a half days left Annie, you can do it");
    }
);