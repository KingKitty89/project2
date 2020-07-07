$(document).ready(() => {
  // Getting references to our form and inputs
  const taste = $("#taste");
  const aroma = $("#aroma");

  $("select").on("change", function(event) {
    event.preventDefault();
    console.log("==========================");
    console.log("TASTE AND AROMA");
    console.log(
      $(this)
        .val()
        .trim()
    );
    const userInput = {
      tasteInput: taste.val().trim(),
      aromaInput: aroma.val().trim()
    };
    if (!userInput.tasteInput || !userInput.aromaInput) {
      return;
    }
    // getNotes(userInput.tasteInput, userInput.aromaInput);
  });
  let tasteInput = taste.val().trim();

  $.get("/api/wine/:taste", + tasteInput, function(data){
    console.log(taste.val());
    if (data.length !== 0) {
      for (var i = 0; i < data.length; i++) {
      } else {
        $('#put-cards-here').addClass('.no-games').text('No games found!');
      }
    });

    taste.val("");

  });

  

  // function getNotes(taste, aroma) {
  //   $.get("/api/wine/:aroma", {
  //     aromaInput: aroma
  //     tasteInput: taste
  //   })
  //     .then(() => {
  //       res.redirect("/wine-results");
  //       // If there's an error, log the error
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
});
