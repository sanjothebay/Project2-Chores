$(function () {
  $(".completed-button").on("click", function (event) {
    event.preventDefault();
    const userId = $(this).data("user");
    const choreId = $(this).data("chore");
    console.log({ userId, choreId });

    $.ajax("/api/chore/" + choreId, {
      type: "PUT",
      data: {choreId},
      
  }).then(function(data){
      console.log(data);
      location.reload();
  })
  });
});
