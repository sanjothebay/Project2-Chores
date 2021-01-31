$(function () {
  $(".completed-button").on("click", function (event) {
    event.preventDefault();
    const userId = $(this).data("user");
    const choreId = $(this).data("chore");
    console.log({ userId, choreId });
    const choreData = {userId: userId, choreId: choreId }

    $.ajax("/api/chore/" + choreId, {
      type: "PUT",
      data: {choreData},
      
  }).then(function(data){
      console.log(data);
      location.reload();
  })
  });
});
