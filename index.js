// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "a2bb7203e71c48a0ad55821addd45c2e";


const getRecipeButton = document.querySelector('#generate-button');
const displaySection = document.querySelector('#display-div');
getRecipeButton.addEventListener('click', function () {
    console.log('generate recipe clicked');
    generateRecipes();
});

async function generateRecipes() {
    const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
    console.log('response-->', response);
    displaySection.innerHTML = "";
    let newDiv = document.createElement("div");
    let h3 = document.createElement("h3");
    h3.innerHTML = response.data.recipes[0].title;
    displaySection.appendChild(h3);
    newDiv.innerHTML = response.data.recipes[0].summary;
    displaySection.appendChild(newDiv);
}