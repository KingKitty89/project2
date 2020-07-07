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
    getNotes(userInput.tasteInput, userInput.aromaInput);
  });
  //the below needs work!
  function getNotes(taste, aroma) {
    $.get("/api/wine/:aroma", {
      aroma: aroma,
      taste: taste
    })
      .then(() => {
        window.location.replace("/wine-results");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
