$(document).ready(() => {
  // Getting references to our form and inputs
  const taste = $("#taste");
  const aroma = $("#aroma");

  $(".submit").on("click", function(event) {
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
  $.ajax("/api/wine/" + aroma, {
    type: "POST"
  }).then(result => {
    displayDrinkCard(result);
  });
}

function displayDrinkCard({ wine }) {
  //const wine = _wine;
  console.log(wine);
  const templates = [];
  wine.forEach(drink => {
    templates.push(`
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="./assets/wine-bottle.jpg" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">${drink.name}</h5>
          <p class="card-text">
              ${drink.brand}<br>
              Price: $${drink.price}
          </p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    `);
  });
  $(".drink-info").html(templates);
}
