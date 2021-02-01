$(function(){
    $(".addUser").on("submit", function(event){
        event.preventDefault();
        var userInput = $("#userInput").val();
        $.ajax("/api/user", {
            type: "POST",
            data: {
                user: userInput
            }
        }).then(function(){
            console.log("it worked!");
        })
    })
})