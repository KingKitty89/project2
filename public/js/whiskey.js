$(document).ready(() => {
  // Getting references to our form and inputs
  const taste = $("#taste");
  const aroma = $("#aroma");
  const form = $("#form");
  console.log("==========================");
  console.log("TASTE AND AROMA");
  console.log(taste.val().trim(), aroma.val().trim());
  form.on("submit", event => {
    event.preventDefault();
    const userInput = {
      tasteInput: taste.val().trim(),
      aromaInput: aroma.val().trim()
    };
    if (!userInput.tasteInput || !userInput.aromaInput) {
      return;
    }
    getNotes(userInput.tasteInput, userInput.aromaInput);
    tasteInput.val("");
    aromaInput.val("");
    console.log("•••••••••••••••••••••••••••••");
    console.log("TASTE AND AROMA 2");
    console.log(taste.val().trim(), aroma.val().trim());
    console.log("why");
  });

  function getNotes(taste, aroma) {
    $.get("/api/whiskey/:aroma", {
      aroma: aroma,
      taste: taste
    })
      .then(() => {
        window.location.replace("/whiskey-results");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
