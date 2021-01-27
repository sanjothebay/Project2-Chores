$(function(){
    $(".addUser").on("submit", function(event){
        event.preventDefault();
        var UserNameInput = $("#userNameInput").val();
        console.log(UserNameInput);
        $.ajax("/api/user", {
            type: "POST",
            data: {
                user: UserNameInput
            }
        }).then(function(){
            console.log("it worked!");
        })
    })
})