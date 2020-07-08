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
});

function getNotes(taste, aroma) {
  console.log(taste, aroma);
  $.ajax("/api/whiskey/" + aroma, {
    type: "POST"
  }).then((result) => {
    console.log(result);
  });
}
