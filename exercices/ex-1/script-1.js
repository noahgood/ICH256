$(function (){
//var change = (true);$("img").on('click', function() {if (change){$("div#content").css("background-color","grey");$("h1, h2:not(.anecdote)").css("color","red");$("h1, h2:not(.anecdote)").css("border-left","1px solid red");$("h1, h2:not(.anecdote)").css("border-bottom","1px solid red");change = false;}else{location.reload();$("div#content").css("background-color","black");("h1, h2:not(.anecdote)").css("color","white");("h1, h2:not(.anecdote)").css("border-left","1px solid gray");("h1, h2:not(.anecdote)").css("border-bottom","1px solid gray");change = true;}});
    $("#content").on("click",function (){
        change_color()
    });

function change_color(){
    if ($("#content").hasClass("light")){
        $("#content").removeClass("light")
    }else{
        $("#content").addClass("light")
    }
}
});

