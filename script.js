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
name:"Chicken Biryani",
image:"https://www.ruchiskitchen.com/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1.jpg",
time:"15 mins",
ingredients:[
"500 g chicken",
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
"Heat oil or ghee in a pressure cooker or pot",
"Add bay leaf, cinnamon, cloves, and cardamoms. Sauté for a few seconds",
"Add sliced onions and fry until golden brown",
"Add ginger-garlic paste and green chilies. Sauté for 1 minute",
"Add tomatoes and cook until soft",
"Add turmeric powder, chili powder, garam masala, and salt",
"Add curd, mint leaves, and coriander leaves. Mix well",
"Add the chicken and cook for 5–7 minutes",
"Pour in water and bring it to a boil",
"Add the soaked rice and mix gently",
"Cook until done",
"Pressure Cooker: 1 whistle on medium flame",
"Pot Method: Cover and cook for 15–20 minutes on low flame",
"Let it rest for 5 minutes",
"Fluff the rice gently and serve hot",
]
},

{
name:"Chicken 65",
image:"https://i0.wp.com/www.sharmiskitchen.com/wp-content/uploads/2017/07/chicken-65.jpg?fit=1194%2C1791&ssl=1",
time:"20 mins",
ingredients:[
"500 g boneless chicken",
"1 tbsp ginger-garlic paste",
"1 tsp red chili powder",
"½ tsp turmeric powder",
"1 tsp garam masala",
"2 tbsp corn flour",
"2 tbsp rice flour",
"1 egg (optional)",
"Salt to taste",
"Oil for frying"
],
steps:[
"Wash and clean the chicken pieces",
"Add ginger-garlic paste, chili powder, turmeric, garam masala, corn flour, rice flour, egg, and salt",
"Mix well and marinate for 30 minutes",
"Heat oil in a pan",
"Fry the chicken pieces on medium flame until golden brown and crispy",
"Remove and drain excess oil"
]
},

{
name:"Chicken Noodles",
image:"https://i0.wp.com/mariasmenu.com/wp-content/uploads/Curried-Chicken-Noodles.png?fit=650%2C836&ssl=1",
time:"25 mins",
ingredients:[
"200 g noodles",
"250 g boneless chicken, cut into small pieces",
"1 onion, sliced",
"1 carrot, thinly sliced",
"½ cup cabbage, shredded",
"1 capsicum, sliced",
"1 tbsp ginger-garlic paste",
"2 tbsp soy sauce",
"1 tbsp tomato ketchup",
"1 tsp pepper powder",
"2 tbsp oil",
"Salt to taste",
"Spring onions (optional)"
],
steps:[
"Boil the noodles according to the package instructions. Drain and keep aside",
"Heat oil in a pan or wok",
"Add ginger-garlic paste and sauté for 30 seconds",
"Add chicken pieces and cook for 5–7 minutes until done",
"Add onion, carrot, cabbage, and capsicum. Stir-fry for 2–3 minutes",
"Add soy sauce, tomato ketchup, pepper powder, and salt",
"Add the cooked noodles and toss well",
"Stir-fry for another 2–3 minutes",
"Garnish with spring onions and serve hot"
]
},

{
name:"Chicken Fried Rice",
image:"https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1043177881.jpg",
time:"25 mins",
ingredients:[
"2 cups cooked rice (preferably cooled)",
"250 g boneless chicken, diced",
"1 onion, finely chopped",
"1 carrot, finely chopped",
"½ cup cabbage, shredded",
"1 capsicum, finely chopped",
"1 tbsp ginger-garlic paste",
"2 tbsp soy sauce",
"1 tsp pepper powder",
"2 tbsp oil",
"Salt to taste",
"Spring onions for garnish (optional)"
],
steps:[
"Heat 1 tbsp oil in a pan or wok",
"Add the chicken pieces and cook until fully done. Remove and keep aside",
"Add the remaining oil to the pan",
"Add ginger-garlic paste and sauté for 30 seconds",
"Add onion, carrot, cabbage, and capsicum. Stir-fry on high flame for 2–3 minutes",
"Add the cooked chicken back to the pan",
"Add soy sauce, pepper powder, and salt. Mix well",
"Add the cooked rice and toss gently until everything is combined",
"Stir-fry for another 2–3 minutes",
"Garnish with spring onions and serve hot"
]
},

{
name:"Chilli Chicken",
image:"https://images.slurrp.com/prod/recipe_images/transcribe/side%20dish/Chilli_Chicken.webp?impolicy=slurrp-20210601&width=1200&height=900&q=75",
time:"30 mins",
ingredients:[
"For marination",
"250 g boneless chicken",
"1 tbsp corn flour",
"1 tbsp maida (all-purpose flour)",
"½ tsp pepper powder",
"Salt to taste",
"For Sauce",
"1 onion, cubed",
"1 capsicum, cubed",
"2 green chilies, slit",
"1 tbsp ginger-garlic paste",
"2 tbsp soy sauce",
"1 tbsp tomato ketchup",
"1 tsp chili sauce (optional)",
"2 tbsp oil"
],
steps:[
"Mix chicken with corn flour, maida, pepper powder, and salt",
"Fry the chicken pieces until golden brown. Keep aside",
"Heat oil in a pan",
"Add ginger-garlic paste and sauté for 30 seconds",
"Add onion, capsicum, and green chilies. Stir-fry for 2 minutes",
"Add soy sauce, tomato ketchup, and chili sauce",
"Mix well and cook for 1 minute",
"Add the fried chicken and toss until coated with the sauce",
"Serve hot"
]
},

{
name:"Chicken Tikka",
image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-kebab.jpg",
time:"20 mins",
ingredients:[
"500 g boneless chicken, cut into cubes",
"½ cup curd (yogurt)",
"1 tbsp ginger-garlic paste",
"1 tsp red chili powder",
"½ tsp turmeric powder",
"1 tsp garam masala",
"1 tsp lemon juice",
"1 tbsp oil",
"Salt to taste"
],
steps:[
"In a bowl, mix curd, ginger-garlic paste, chili powder, turmeric powder, garam masala, lemon juice, oil, and salt",
"Add the chicken pieces and coat them well",
"Marinate for at least 1 hour (or overnight for better flavor)",
"Thread the chicken pieces onto skewers (optional)",
"Grill, bake, air-fry, or cook on a pan until the chicken is fully cooked and slightly charred",
"Turn occasionally for even cooking",
"Serve hot"
]
},

{
name:"Chicken Soup",
image:"https://www.myspicykitchen.net/wp-content/uploads/2022/10/Chicken-Clear-Soup-SQ.jpg",
time:"35 mins",
ingredients:[
"250 g chicken (with or without bone)",
"1 small onion, chopped",
"2 garlic cloves, minced",
"1 small carrot, chopped",
"4 cups water",
"½ tsp pepper powder",
"Salt to taste",
"1 tsp butter or oil",
"Coriander leaves for garnish"
],
steps:[
"Heat butter or oil in a pot",
"Add onion and garlic. Sauté for 2 minutes",
"Add carrot and chicken pieces. Cook for 3–4 minutes",
"Pour in water and bring it to a boil",
"Cover and simmer for 20–25 minutes until the chicken is tender",
"Remove the chicken, shred it, and add it back to the soup",
"Add pepper powder and salt",
"Simmer for another 5 minutes",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Marry Me Chicken",
image:"https://www.tamingtwins.com/wp-content/uploads/2023/02/image-56.jpeg",
time:"30 mins",
ingredients:[
"2 chicken breasts (or 500 g chicken)",
"Salt and pepper to taste",
"2 tbsp butter",
"3 cloves garlic, minced",
"1 cup fresh cream",
"½ cup chicken broth (or water)",
"¼ cup grated Parmesan cheese (optional)",
"1 tsp chili flakes",
"1 tsp mixed herbs (or oregano)",
"Coriander or parsley for garnish"

],
steps:[
"Season the chicken with salt and pepper",
"Heat butter in a pan and cook the chicken until golden on both sides",
"Remove the chicken and keep aside",
"In the same pan, sauté the garlic for 30 seconds",
"Add cream, chicken broth, Parmesan cheese, chili flakes, and herbs",
"Stir well and let the sauce simmer for 2–3 minutes",
"Add the chicken back to the pan",
"Cook for 8–10 minutes until the chicken is fully cooked and coated in the creamy sauce",
"Garnish with coriander or parsley and serve hot"
]
},

{
name:"Chicken Lollipop ",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSph3A3lksM3L95e0ULiR3S4ixkEp90BlRxmQVwkmFM4HcQZAfA4GE2lcQ&s=10",
time:"1 hour",
ingredients:[
"8 chicken lollipops",
"1 tbsp ginger-garlic paste",
"1 tsp red chili powder",
"½ tsp pepper powder",
"1 tbsp soy sauce",
"2 tbsp corn flour",
"2 tbsp maida (all-purpose flour)",
"Salt to taste",
"Oil for deep frying"
],
steps:[
"Wash and clean the chicken lollipops",
"In a bowl, mix ginger-garlic paste, chili powder, pepper powder, soy sauce, corn flour, maida, and salt",
"Add the chicken lollipops and coat them well",
"Marinate for 30 minutes",
"Heat oil in a deep pan",
"Fry the chicken lollipops on medium flame until golden brown and crispy",
"Remove and drain excess oil",
"Serve hot with your favorite dip",
"Optional Sauce Coating 🌶️",
"Heat 1 tsp oil in a pan",
"Add 1 tbsp garlic (chopped)",
"Add 1 tbsp tomato ketchup and 1 tsp chili sauce",
"Toss the fried chicken lollipops in the sauce for 1–2 minutes"
]
},

{
name:"Chicken Popcorn",
image:"https://www.licious.in/blog/wp-content/uploads/2020/12/Popcorn-Chicken.jpg",
time:"55 mins",
ingredients:[
"250 g boneless chicken, cut into small cubes",
"1 tbsp ginger-garlic paste",
"1 tsp red chili powder",
"½ tsp pepper powder",
"Salt to taste",
"2 tbsp corn flour",
"2 tbsp maida (all-purpose flour)",
"1 egg (optional)",
"Oil for frying"
],
steps:[
"Wash and clean the chicken pieces",
"Add ginger-garlic paste, chili powder, pepper powder, and salt",
"Mix in corn flour, maida, and egg",
"Coat the chicken pieces well",
"Marinate for 20–30 minutes",
"Heat oil in a pan",
"Fry the chicken pieces in batches until golden brown and crispy",
"Remove and drain excess oil on a tissue paper",
"Serve hot"
]
},

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
},

{
name:"Butter Corn",
image:"https://www.courtneyssweets.com/wp-content/uploads/2025/11/buttered-corn-7.jpg",
time:"5 mins",
ingredients:[
"1 cup boiled sweet corn",
"1 tbsp butter",
"Salt and pepper"
],

steps:[
"Mix hot corn with butter, salt, and pepper"
]
},

{
name:"Butter Rice",
image:"https://www.chefnotrequired.com/wp-content/uploads/2023/07/butter-rice-blog-hero.jpg",
time:"10 mins",
ingredients:[
"2 cups cooked rice",
"2 tbsp butter",
"2 garlic cloves, finely chopped (optional)",
"¼ tsp pepper powder",
"Salt to taste",
"1 tbsp coriander leaves (optional)"
],

steps:[
"Heat butter in a pan",
"Add chopped garlic and sauté for 30 seconds until fragrant",
"Add the cooked rice and mix well",
"Add salt and pepper powder",
"Stir gently for 2–3 minutes",
"Garnish with coriander leaves and serve hot"
]
},


{
name:"Garlic Butter Bread",
image:"https://sallysbakingaddiction.com/wp-content/uploads/2025/01/easy-homemade-garlic-bread.jpg",
time:"10 mins",
ingredients:[
"4 bread slices",
"2 tbsp butter (softened)",
"3 garlic cloves, finely minced",
"1 tbsp coriander leaves, chopped",
"A pinch of salt"
],

steps:[
"Mix butter, minced garlic, coriander leaves, and salt in a bowl",
"Spread the garlic butter mixture evenly on the bread slices",
"Heat a pan on low flame",
"Place the bread slices on the pan with the buttered side facing up",
"Cover and cook for 2–3 minutes until the bread becomes crispy",
"Serve hot"
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