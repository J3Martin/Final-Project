$(document).ready(function(){
        new WOW().init();
        $(window).on("scroll", function() {
                var scrollDistance = $(window).scrollTop();
                 if (scrollDistance > 50) {
                        $("#mainNav").removeClass("affix-top").addClass("affix");
                 }
                 else {
                        $("#mainNav").removeClass("affix").addClass("affix-top");
                 }

        });
        $(document).on("click",".page-scroll",function(event){
            event.preventDefault();
            var kittens = $(this).attr("href");
                  $("body").animate({
                  scrollTop:$(kittens).offset().top
                  },2000);
        });

        $("body").scrollspy({ target: "#mainNav" });


        $("#one").on("click",function(event){
                event.preventDefault();
                $("#first").modal('show');
        });
        $("#two").on("click",function(event){
                event.preventDefault();
                $("#second").modal('show');
        });
        $("#three").on("click",function(event){
                event.preventDefault();
                $("#third").modal('show');
        });

        $("#enter").on("click", function(event){
                event.preventDefault();
                var input = $("#lgFormGroupInput").val();
                console.log(input);
                if(input.length>0){
                        swal("Your email has been saved.")
                }
                else{
                        swal("Please enter your email address.")
                }
        });
       


});