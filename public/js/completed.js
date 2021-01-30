$(function () {
  $(".completed-button").on("click", function (event) {
    event.preventDefault();
    const userId = $(this).data("user");
    const choreId = $(this).data("chore");
    //console.log({ userId, choreId });

    $.ajax("/api/chore/:id", {
      type: "PUT",
          
      
  }).then(function(){
      console.log("it worked!");
  })
  });
});
