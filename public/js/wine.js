$(document).ready(() => {
  // Getting references to our form and inputs
  const taste = $("#taste");
  const aroma = $("#aroma");

  whiskeyForm.on("submit", event => {
    event.preventDefault();
    const userInput = {
      tasteInput: taste.val().trim(),
      aromaInput: aroma.val().trim()
    };
    if (!userInput.taste || !userInput.aroma) {
      return;
    }

    getNotes(userInput.taste, userInput.aroma);
    tasteInput.val("");
    aromaInput.val("");
  });

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
