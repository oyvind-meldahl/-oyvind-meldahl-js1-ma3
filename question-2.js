const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=42dd5a0b671847789d85fb03aadf4bc0";
const resultsContainer = document.querySelector(".results");

async function getData() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const facts = results.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < facts.length; i++) {
      if (i === 8) {
        break;
      }

      resultsContainer.innerHTML += `<div class="box"> <p> NAME: ${facts[i].name} </p><p> RATING: ${facts[i].rating} </p><p> TAGS: ${facts[i].tags.length} </p> <div>`;
    }
  } catch (error) {
    resultsContainer.innerHTML = "There has been an error...";
  }
}

getData();
