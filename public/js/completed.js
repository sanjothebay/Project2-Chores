$(function () {
  $(".completed-button").on("click", function (event) {
    event.preventDefault();
    const userId = $(this).data("user");
    const choreId = $(this).data("chore");
    console.log({ userId, choreId });

    var gotCleanedUp = {
      setValue: true
    };

    $.ajax("/api/chore/", {
      type: "PUT",
      data: gotCleanedUp
          
      
  }).then(function(){
      console.log("it worked!");
  })
  });
});
