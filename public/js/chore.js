$(function(){
    $(".addChore").on("submit", function(event){
        event.preventDefault();
        var choreInput = $("#choreInput").val();
        //console.log(choreInput);
        $.ajax("/api/chore", {
            type: "POST",
            data: {
                chore: choreInput
            }
        }).then(function(){
            console.log("it worked!");
        })
    })
})