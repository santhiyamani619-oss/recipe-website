// Splash Screen

window.onload = function(){

setTimeout(() => {

document.getElementById("splashScreen").style.display = "none";

},3000);

};

let selected = [];

// Select Ingredient

function selectIngredient(card,name){

card.classList.toggle("selected");

if(selected.includes(name)){
selected = selected.filter(item => item !== name);
}
else{
selected.push(name);
}

updatePantry();
}

// Update Pantry

function updatePantry(){

let html = "";

if(selected.length === 0){

html = "<p>No ingredients selected</p>";

}
else{

selected.forEach(item => {

html += `<span class="tag">${item}</span>`;

});

}

document.getElementById("selectedItems").innerHTML = html;
}

// Recipe Database

const recipes = {

Egg:[

{
name:"Egg Fried Rice",
image:"https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
time:"20 mins",
ingredients:[
"4 boiled eggs",
"2 onions, finely chopped",
"2 tomatoes, finely chopped",
"1 tsp ginger-garlic paste",
"1 tsp red chili powder",
"1 tsp coriander powder",
"¼ tsp turmeric powder",
"½ tsp garam masala",
"Salt to taste",
"2 tbsp oil",
"A few curry leaves",
"Fresh coriander leaves for garnish"
],
steps:[
"Boil the eggs, remove the shells, and keep them aside",
"Heat oil in a pan and add curry leaves",
"Add chopped onions and sauté until golden brown",
"Add ginger-garlic paste and cook until the raw smell disappears",
"Add tomatoes and cook until soft and mushy",
"Add turmeric powder, chili powder, coriander powder, garam masala, and salt. Mix well",
"Pour in 1–1½ cups of water and let it simmer for 5 minutes",
"Make small slits on the boiled eggs and add them to the gravy",
"Cook on low heat for another 5 minutes",
"Garnish with fresh coriander leaves and serve hot"
]
},

{
name:"Egg gravy",
image:"https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?w=600",
time:"25 mins",
ingredients:[
"4 Eggs",
"2 Tomatoes",
"1 Onion",
"Spices"
],
steps:[
"Boil eggs",
"Prepare masala",
"Add eggs",
"Cook for 10 mins"
]
},

{
name:"Egg Biryani",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjYcAKbgP8XmwTRasRWr6aZDq4vGotL9-XQ&s",
time:"40 minutes",

ingredients:[
"4 boiled eggs",
"2 cups basmati rice",
"2 onions, thinly sliced",
"2 tomatoes, chopped",
"2 green chilies, slit",
"1 tbsp ginger-garlic paste",
"½ cup curd (yogurt)",
"1 tsp red chili powder",
"½ tsp turmeric powder",
"1 tsp garam masala",
"1 bay leaf",
"1 cinnamon stick",
"2 cloves",
"2 cardamoms",
"Mint leaves and coriander leaves",
"4 cups water",
"3 tbsp oil or ghee",
"Salt to taste"
],
steps:[
"Wash and soak the basmati rice for 20 minutes",
"Heat oil/ghee in a cooker or pot. Add bay leaf, cinnamon, cloves, and cardamoms",
"Add sliced onions and sauté until golden brown",
"Add ginger-garlic paste and green chilies. Sauté for 1 minute",
"Add tomatoes and cook until soft",
"Add turmeric, chili powder, garam masala, and salt",
"Add curd, mint leaves, and coriander leaves. Mix well",
"Add the boiled eggs and coat them with the masala",
"Pour in water and bring it to a boil",
"Add the soaked rice and mix gently",
"Cook until the rice is done (1 whistle in a pressure cooker or 15–20 minutes in a pot)",
"Let it rest for 5 minutes, then fluff with a fork and serve",
]
}

],

Rice:[

{
name:"Potato Rice",
image:"https://www.sharmispassions.com/wp-content/uploads/2013/04/potato-rice7.jpg",
time:"25 mins",
ingredients:[
"2 cups cooked rice",
"2 medium potatoes, diced",
"1 onion, sliced",
"1 green chili, chopped",
"1 tsp ginger-garlic paste (optional)",
"½ tsp turmeric powder",
"1 tsp red chili powder",
"½ tsp garam masala",
"1 tsp mustard seeds",
"1 tsp urad dal",
"Curry leaves",
"2 tbsp oil",
"Salt to taste",
"Fresh coriander leaves for garnish"
],
steps:[
"Heat oil in a pan",
"Add mustard seeds, urad dal, and curry leaves. Let them splutter",
"Add onions and green chili. Sauté until onions turn soft",
"Add ginger-garlic paste and cook for 1 minute",
"Add diced potatoes and cook for 8–10 minutes until tender",
"Add turmeric powder, chili powder, garam masala, and salt. Mix well",
"Add the cooked rice and gently mix until the masala coats the rice evenly",
"Cook for 2–3 minutes on low heat",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Lemon Rice",
image:"https://www.flavourstreat.com/wp-content/uploads/2020/12/turmeric-lemon-rice-recipe-02.jpg",
time:"15 mins",
ingredients:[
"2 cups cooked rice (cooled)",
"2 tbsp lemon juice",
"1 tbsp oil",
"1 tsp mustard seeds",
"1 tsp urad dal",
"1 tsp chana dal",
"2 dried red chilies",
"1–2 green chilies, chopped",
"A few curry leaves",
"¼ tsp turmeric powder",
"2 tbsp peanuts",
"Salt to taste",
"Coriander leaves (optional)"
],
steps:[
"Heat oil in a pan",
"Add mustard seeds and let them splutter",
"Add urad dal, chana dal, peanuts, and fry until golden",
"Add dried red chilies, green chilies, and curry leaves",
"Add turmeric powder and mix well",
"Add the cooked rice and salt. Mix gently",
"Turn off the heat and add lemon juice",
"Mix well and garnish with coriander leaves"
]
},

{
name:"Tomato Rice",
image:"https://aromaticessence.co/wp-content/uploads/2022/11/tomato_rice_featured_image.jpg",
time:"25 mins",
ingredients:[
"2 cups cooked rice",
"3 ripe tomatoes, finely chopped",
"1 onion, sliced",
"2 green chilies, slit",
"1 tsp ginger-garlic paste",
"½ tsp turmeric powder",
"1 tsp red chili powder",
"½ tsp garam masala",
"1 tsp mustard seeds",
"1 tsp cumin seeds",
"Curry leaves",
"2 tbsp oil",
"Salt to taste",
"Coriander leaves for garnish"
],
steps:[
"Heat oil in a pan",
"Add mustard seeds, cumin seeds, and curry leaves",
"Add onions and green chilies. Sauté until the onions turn golden",
"Add ginger-garlic paste and cook for 1 minute",
"Add chopped tomatoes and cook until soft and mushy",
"Add turmeric powder, chili powder, garam masala, and salt. Mix well",
"Cook until the oil starts separating from the masala",
"Add the cooked rice and mix gently",
"Cook for 2–3 minutes on low heat",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Coconut Rice",
image:"https://static.toiimg.com/thumb/52413325.cms?imgsize=190896&width=800&height=800",
time:"15 mins",
ingredients:[
"2 cups cooked rice (cooled)",
"1 cup fresh grated coconut",
"2 tbsp oil",
"1 tsp mustard seeds",
"1 tsp urad dal",
"1 tsp chana dal",
"2 dried red chilies",
"1–2 green chilies, chopped",
"A few curry leaves",
"2 tbsp cashews or peanuts",
"Salt to taste"
],
steps:[
"Heat oil in a pan",
"Add mustard seeds and let them splutter",
"Add urad dal, chana dal, cashews/peanuts, and fry until golden",
"Add dried red chilies, green chilies, and curry leaves",
"Add the grated coconut and sauté for 1–2 minutes. (Do not overcook",
"Add salt and mix well",
"Add the cooked rice and gently combine everything",
"Cook for 2 minutes on low heat and switch off the flame"
]
},



],

Chicken:[

{
name:"Chicken Gravy",
image:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
time:"35 mins",
ingredients:[
"500 g chicken",
"2 onions, finely chopped",
"2 tomatoes, finely chopped",
"1 tbsp ginger-garlic paste",
"1 tsp red chili powder",
"1 tsp coriander powder",
"¼ tsp turmeric powder",
"½ tsp garam masala",
"2 tbsp oil",
"Curry leaves",
"Salt to taste",
"2 cups water",
"Coriander leaves for garnish"
],
steps:[
"Heat oil in a pan or cooker",
"Add curry leaves and chopped onions. Sauté until golden brown",
"Add ginger-garlic paste and cook until the raw smell disappears",
"Add tomatoes and cook until soft and mushy",
"Add turmeric powder, chili powder, coriander powder, garam masala, and salt. Mix well",
"Add the chicken pieces and coat them with the masala",
"Cook for 5–7 minutes",
"Add water and mix well",
"Cover and cook until the chicken becomes tender (about 15–20 minutes)",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Lemon Rice",
image:"https://static.toiimg.com/thumb/53870704.cms?width=1200&height=900",
time:"15 mins",
ingredients:[
"Rice",
"Tomato",
"Onion",
"Spices"
],
steps:[
"Cook rice",
"Prepare tomato masala",
"Mix rice",
"Serve hot"
]
}

],

Butter:[

{
name:"Paneer Butter Masala",
image:"https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg",
time:"30 mins",
ingredients:[
"200 g paneer, cubed",
"2 tomatoes, chopped",
"1 onion, chopped",
"1 tbsp ginger-garlic paste",
"2 tbsp butter",
"1 tbsp fresh cream (optional",
"1 tsp red chili powder",
"½ tsp turmeric powder",
"1 tsp garam masala",
"1 tsp coriander powder",
"Salt to taste",
"1 cup water",
"Coriander leaves for garnish"

],
steps:[
"Heat 1 tbsp butter in a pan",
"Sauté the onion until soft",
"Add ginger-garlic paste and cook for 1 minute",
"Add tomatoes and cook until mushy",
"Let the mixture cool, then grind it into a smooth paste",
"Heat the remaining butter in a pan and add the ground paste",
"Add turmeric powder, chili powder, coriander powder, garam masala, and salt",
"Cook for 3–4 minutes until the masala thickens",
"Add water and bring it to a simmer",
"Add paneer cubes and cook for 3–5 minutes",
"Stir in fresh cream (optional)",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Bun Butter Jam",
image:"https://cdn.uengage.io/uploads/64261/image-987484-1754155873.jpeg",
time:"5 mins",
ingredients:[
"1 bun",
"1–2 tbsp butter",
"1–2 tbsp jam (strawberry, mixed fruit, or your favorite)",
],
steps:[
"Cut the bun into two halves",
"Spread butter evenly on both sides",
"Spread jam over the butter",
"Close the bun and serve"
]
},

{
name:"Butter Vanilla Ice Cream",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_cnpn1eQfQxahD7KCphKxm-4KpGXXVwWO8Q&s",
time:"45 mins",
ingredients:[

],
steps:[
"Cut the bun into two halves",
"Spread butter evenly on both sides",
"Spread jam over the butter",
"Close the bun and serve"
]
}

]

};

// Show Recipes

function showRecipes(){

let recipeContainer =
document.getElementById("recipes");

if(selected.length === 0){

recipeContainer.innerHTML =
"<h3>Please select ingredients first.</h3>";

return;
}

let html = "";

selected.forEach(ingredient => {

if(recipes[ingredient]){

recipes[ingredient].forEach(recipe => {

html += `

<div class="recipe-card"
onclick="showRecipeDetail('${recipe.name}')">

<img src="${recipe.image}"
alt="${recipe.name}">

<div class="recipe-info">

<h3>${recipe.name}</h3>

<p class="match">
${ingredient} Recipe
</p>

<p>
Cooking Time:
${recipe.time}
</p>




</div>

</div>

`;

});

}

});

recipeContainer.innerHTML = html;
}

// Search Recipe

function searchRecipe(){

let search =
document.getElementById("searchInput")
.value.toLowerCase();

let html = "";

Object.values(recipes).forEach(recipeArray => {

recipeArray.forEach(recipe => {

if(
recipe.name.toLowerCase()
.includes(search)
){

html += `

<div class="recipe-card"
onclick="showRecipeDetail('${recipe.name}')">

<img src="${recipe.image}"
alt="${recipe.name}">

<div class="recipe-info">

<h3>${recipe.name}</h3>

<p>
Cooking Time:
${recipe.time}
</p>

</div>

</div>

`;

}

});

});

if(html === ""){

html = "<h2>No Recipe Found 😔</h2>";

}

document.getElementById("recipes")
.innerHTML = html;

}

// Full Recipe Details

function showRecipeDetail(recipeName){

let foundRecipe = null;

Object.values(recipes).forEach(arr => {

arr.forEach(recipe => {

if(recipe.name === recipeName){

foundRecipe = recipe;

}

});

});

if(!foundRecipe) return;

let ingredientsHTML = "";

foundRecipe.ingredients.forEach(item => {

ingredientsHTML += `<li>${item}</li>`;

});

let stepsHTML = "";

foundRecipe.steps.forEach(step => {

stepsHTML += `<li>${step}</li>`;

});

document.getElementById("recipes").innerHTML = `

<div class="recipe-detail">

<img src="${foundRecipe.image}">

<h2>${foundRecipe.name}</h2>

<p>
⏰ Cooking Time:
${foundRecipe.time}
</p>

<h3>🥘 Ingredients</h3>

<ul>
${ingredientsHTML}
</ul>

<h3>👩‍🍳 Cooking Steps</h3>

<ol>
${stepsHTML}
</ol>

<br>

<button
class="find-btn"
onclick="showRecipes()">

← Back

</button>

</div>

`;

}