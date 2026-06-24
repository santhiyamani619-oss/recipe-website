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
image:"https://www.sharmispassions.com/wp-content/uploads/2022/06/ChickenGravy1.jpg",
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


],

Tomato :[
{
name:"Tomato Rice",
image:"https://www.dillandthyme.com/wp-content/uploads/2025/02/Tomato-Rice-2.jpg",
time:"25 mins",
ingredients:[
"2 cups cooked rice",
"3 tomatoes, finely choppe",
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
"Coriander leaves for garnish",
],

steps:[
"Heat oil in a pan",
"Add mustard seeds, cumin seeds, and curry leaves",
"Add onions and green chilies. Sauté until golden",
"Add ginger-garlic paste and cook for 1 minute",
"Add chopped tomatoes and cook until soft and mushy",
"Add turmeric powder, chili powder, garam masala, and salt",
"Cook until the masala thickens",
"Add cooked rice and mix gently",
"Cook for 2–3 minutes",
"Garnish with coriander leaves and serve hot"
]
},

{
name:"Tomato Soup",
image:"https://italianfoodforever.com/wp-content/uploads/2019/01/tomatosouptop-480x480.jpg",
time:"30 mins",
ingredients:[
"4 ripe tomatoes, chopped",
"1 small onion, chopped",
"2 garlic cloves, chopped",
"2 cups water",
"1 tbsp butter",
"½ tsp pepper powder",
"Salt to taste",
"Coriander leaves (for garnish)"
],

steps:[
"4 ripe tomatoes, chopped",
"1 small onion, chopped",
"2 garlic cloves, chopped",
"2 cups water",
"1 tbsp butter",
"½ tsp pepper powder",
"Salt to taste",
"Coriander leaves (for garnish)"
]
},

{
name:"Tomato Chutney",
image:"https://someindiangirl.com/wp-content/uploads/2021/06/Spicy-Garlic-Tomato-Chutney-Recipe-7-of-7-2-scaled.jpg",
time:"25 mins",
ingredients:[
"4 ripe tomatoes, chopped",
"1 onion, chopped",
"3 dried red chilies",
"2 garlic cloves",
"1 tbsp oil",
"Salt to taste",
"For Tempering",
"1 tsp mustard seeds",
"1 tsp urad dal",
"A few curry leaves",
"1 tsp oil"
],

steps:[
"Heat 1 tbsp oil in a pan",
"Add red chilies and garlic. Sauté for 1 minute",
"Add onion and cook until soft",
"Add chopped tomatoes and salt",
"Cook until the tomatoes become soft and the water evaporates",
"Let the mixture cool completely",
"Grind it into a smooth chutney",
"Heat 1 tsp oil in a small pan",
"Add mustard seeds, urad dal, and curry leaves",
"Pour this tempering over the chutney",
"Best Served With"
]
},

{
name:"Tomato Pasta",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1BWuT0FOJGhnN64Bdll83h08qDCzpnzLsB0gK0WMBG-LRbguRbT-m81sB&s=10",
time:"30 mins",
ingredients:[
"200 g pasta",
"3 ripe tomatoes, chopped",
"1 onion, finely chopped",
"2 garlic cloves, minced",
"1 tbsp olive oil or regular oil",
"1 tsp chili flakes (optional)",
"½ tsp mixed herbs or oregano",
"Salt to taste",
"Grated cheese (optional)"
],

steps:[
"Boil the pasta according to the package instructions. Drain and keep aside",
"Heat oil in a pan",
"Add garlic and onion. Sauté until soft",
"Add chopped tomatoes and cook for 8–10 minutes until mushy",
"Add salt, chili flakes, and mixed herbs",
"Cook until a thick tomato sauce forms",
"Add the cooked pasta and toss well",
"Cook for 2 minutes so the pasta absorbs the sauce",
"Sprinkle grated cheese on top (optional) and serve hot"
]
},

{
name:"Tomato Curry",
image:"https://vegancocotte.com/wp-content/uploads/2024/02/Tomato-Curry-1.jpg",
time:"30 mins",
ingredients:[
"4 ripe tomatoes, chopped",
"1 onion, finely chopped",
"2 green chilies, slit",
"1 tsp ginger-garlic paste",
"½ tsp turmeric powder",
"1 tsp red chili powder",
"1 tsp coriander powder",
"½ tsp garam masala",
"2 tbsp oil",
"1 tsp mustard seeds",
"Curry leaves",
"Salt to taste",
"1 cup water",
"Coriander leaves for garnish",
],

steps:[
"Heat oil in a pan",
"Add mustard seeds and curry leaves",
"Add onions and green chilies. Sauté until golden brown",
"Add ginger-garlic paste and cook for 1 minute",
"Add chopped tomatoes and cook until soft and mushy",
"Add turmeric powder, chili powder, coriander powder, garam masala, and salt",
"Mix well and cook for 2–3 minutes",
"Add water and simmer for 10 minutes",
"Garnish with coriander leaves and serve hot",
]
},

{
name:"Butter Corn",
image:"https://www.courtneyssweets.com/wp-content/uploads/2025/11/buttered-corn-7.jpg",
time:"5 mins",
ingredients: [
  "3 ripe tomatoes, chopped",
  "2 cups water",
  "1 tsp tamarind paste",
  "1 tsp rasam powder",
  "2 garlic cloves, crushed",
  "¼ tsp turmeric powder",
  "Salt to taste",
  "2 tbsp coriander leaves"
],

steps: [
  "Crush or blend the tomatoes lightly.",
  "Add tomatoes, tamarind paste, water, turmeric powder, rasam powder, garlic, and salt to a pot.",
  "Mix well and bring to a boil.",
  "Reduce the heat and simmer for 10 minutes.",
  "Do not overboil after the rasam starts frothing.",
  "Garnish with coriander leaves.",
  "Serve hot with rice or as a soup."
]
},

{
name:"Tomato Sandwich",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-EAi_-YT8k9aFbTTD5k73DPbAYT0EjniGK3i39LqLyyAQ49FdK6foHsE&s=10",
time:"10 mins",
ingredients: [
  "4 bread slices",
  "1 tomato, thinly sliced",
  "1 tbsp butter",
  "1 tbsp mayonnaise (optional)",
  "Salt to taste",
  "Pepper powder to taste"
],

steps: [
  "Spread butter on the bread slices.",
  "Apply mayonnaise if using.",
  "Arrange the tomato slices on two bread slices.",
  "Sprinkle salt and pepper powder.",
  "Cover with the remaining bread slices.",
  "Cut into halves and serve.",
  "Toast the sandwich if desired."
]
},

{
name:"Tomato Omelette",
image:"https://www.lizshealthytable.com/wp-content/uploads/2017/08/slow-roasted-tomato-omelet-e1501695714399.jpg",
time:"15 mins",
ingredients: [
  "2 tomatoes, finely chopped",
  "2 eggs",
  "1 small onion, finely chopped",
  "1 green chili, finely chopped",
  "2 tbsp coriander leaves",
  "Salt to taste",
  "1 tbsp oil"
],
steps: [
  "Beat the eggs in a bowl.",
  "Add tomatoes, onion, green chili, coriander leaves, and salt.",
  "Mix everything well.",
  "Heat oil in a pan.",
  "Pour the egg mixture into the pan.",
  "Cook on medium flame for 2–3 minutes.",
  "Flip and cook the other side until done.",
  "Serve hot."
]
},

],

Milk:[
{
name:"Chocolate Milkshake",
image:"https://cookilicious.com/wp-content/uploads/2025/01/Brownie-Milkshake-Recipe-20-scaled.jpg",
time:"5 mins",
ingredients: [
  "2 cups milk",
  "2 tbsp cocoa powder",
  "2 tbsp sugar",
  "3 ice cubes",
  "1 scoop chocolate ice cream (optional)"
],
steps: [
  "Add milk, cocoa powder, sugar, and ice cubes to a blender.",
  "Blend until smooth and frothy.",
  "Add chocolate ice cream if using.",
  "Blend again for a few seconds.",
  "Pour into a glass.",
  "Serve chilled."
]
},

{
name:"Mango Milkshake",
image:"https://ikneadtoeat.com/wp-content/uploads/2021/07/mango-milkshake-photos-2.jpg",
time:"5 mins",
ingredients: [
  "1 ripe mango, chopped",
  "2 cups chilled milk",
  "2 tbsp sugar",
  "3 ice cubes",
  "1 scoop vanilla ice cream (optional)"
],
steps: [
  "Add mango pieces, milk, sugar, and ice cubes to a blender.",
  "Blend until smooth and creamy.",
  "Add vanilla ice cream if using.",
  "Blend again for a few seconds.",
  "Pour into a glass.",
  "Serve chilled."
]
},

{
name:"Vanilla Milkshake",
image:"https://iambaker.net/wp-content/uploads/2024/06/Vanilla-milkshake-2.jpg",
time:"5 mins",
ingredients: [
  "2 cups chilled milk",
  "2 scoops vanilla ice cream",
  "2 tbsp sugar",
  "1 tsp vanilla essence",
  "3 ice cubes"
],
steps: [
  "Add milk, vanilla ice cream, sugar, vanilla essence, and ice cubes to a blender.",
  "Blend until smooth and creamy.",
  "Pour into a glass.",
  "Serve chilled."
]
},

{
name:"Badam milk",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKwdt9L1R2w_44f4kdaa7gYwLo6S3oulzyH4wclnESxI2d1momIMHNtA&s=10",
time:"5 mins",
ingredients: [
  "2 cups milk",
  "10 almonds (badam), soaked and peeled",
  "2 tbsp sugar",
  "2 cardamom pods",
  "A few saffron strands (optional)",
  "Chopped almonds for garnish"
],
steps: [
  "Grind the soaked almonds and cardamom into a smooth paste.",
  "Heat the milk in a saucepan.",
  "Add the almond paste and sugar.",
  "Stir well and simmer for 5–7 minutes.",
  "Add saffron strands if using.",
  "Pour into glasses.",
  "Garnish with chopped almonds and serve hot or chilled."
]
},

{
name:"Rose Milk",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjsoDaFW7R-g2BcklbhZ4yGfA0UPGyXKa1wMR8YqIGGfo2PYmqIMI8AE&s=10",
time:"5 mins",
ingredients: [
  "2 cups chilled milk",
  "2 tbsp rose syrup",
  "2 tbsp sugar (optional)",
  "3 ice cubes",
  "Rose petals for garnish (optional)"
],
steps: [
  "2 cups chilled milk",
  "2 tbsp rose syrup",
  "2 tbsp sugar (optional)",
  "3 ice cubes",
  "Rose petals for garnish (optional)"
]
},

{
name:"Rose Milk Cake",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv16F4qthi-PQCga9Tt59uRdGBDqA5KL84wlRS2MNPmhSikGqG_r67eMRv&s=10",
time:"40 mins",
ingredients: [
  "1 cup all-purpose flour (maida)",
  "1/2 cup sugar",
  "1 tsp baking powder",
  "1/4 cup butter",
  "1/2 cup milk",
  "2 tbsp rose syrup",
  "1 tsp rose essence (optional)",
  "Rose petals for garnish (optional)"
],
steps: [
  "Preheat the oven to 180°C.",
  "Mix flour and baking powder in a bowl.",
  "In another bowl, whisk butter and sugar until creamy.",
  "Add milk, rose syrup, and rose essence.",
  "Gradually add the flour mixture and mix into a smooth batter.",
  "Pour the batter into a greased cake tin.",
  "Bake for 25–30 minutes or until a toothpick comes out clean.",
  "Allow the cake to cool completely.",
  "Garnish with rose petals and serve."
]
},

{
name:"Milk Pudding",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgz9o7fGVfKNKkZZr4MeGXrJsSGHDvZ7timSl0lQyEo_qfiR060LqyfsG&s=10",
time:"2 hours",
ingredients: [
  "2 cups milk",
  "3 tbsp sugar",
  "2 tbsp corn flour",
  "1 tsp vanilla essence",
  "Chopped nuts for garnish (optional)"
],
steps: [
  "Mix corn flour with 2 tbsp milk to make a smooth paste.",
  "Heat the remaining milk in a pan.",
  "Add sugar and stir until dissolved.",
  "Add the corn flour mixture and stir continuously.",
  "Cook until the mixture thickens.",
  "Add vanilla essence and mix well.",
  "Pour into serving bowls.",
  "Let it cool and refrigerate for 2 hours.",
  "Garnish with chopped nuts and serve chilled."
]
},

{
name:"Milk Cake",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbyuKVzUeeq6VI8vRDKmmGa3nbcaYR0HcuuFH0xsxBe5qwvnMiRFL90tg&s=10",
time:"30 mins",
ingredients: [
  "2 cups milk powder",
  "1/2 cup milk",
  "1/4 cup ghee",
  "1/2 cup powdered sugar",
  "1/2 tsp cardamom powder",
  "Chopped nuts for garnish"
],
steps: [
  "Heat ghee in a pan on low flame.",
  "Add milk and milk powder.",
  "Mix continuously until smooth.",
  "Add powdered sugar and cardamom powder.",
  "Cook until the mixture thickens and leaves the sides of the pan.",
  "Transfer to a greased tray.",
  "Spread evenly and garnish with chopped nuts.",
  "Allow it to cool completely.",
  "Cut into squares and serve."
]
},

{
name:"Pistachio Milk Cake",
image:"https://bakewithshivesh.com/wp-content/uploads/2024/10/IMG_0829.jpg",
time:"40 mins",
ingredients: [
  "1 cup all-purpose flour (maida)",
  "1/2 cup powdered pistachios",
  "1/2 cup sugar",
  "1 tsp baking powder",
  "1/4 cup butter",
  "1/2 cup milk",
  "1/2 tsp cardamom powder",
  "Chopped pistachios for garnish"
],
steps: [
  "Preheat the oven to 180°C.",
  "Mix flour, powdered pistachios, baking powder, and cardamom powder in a bowl.",
  "In another bowl, whisk butter and sugar until creamy.",
  "Add milk and mix well.",
  "Gradually add the dry ingredients and mix into a smooth batter.",
  "Pour the batter into a greased cake tin.",
  "Bake for 25–30 minutes or until a toothpick comes out clean.",
  "Allow the cake to cool completely.",
  "Garnish with chopped pistachios and serve."
]

}
],

Snack:[
 {
name:"Easy Potato Snack",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g-SYpMzwDu_HNY5-qVXug7J5cCarkcNIcsd2Lpzc9Icv4gcdgJRZrug&s=10",
time:"20 mins",
ingredients: [
  "2 potatoes (boiled and mashed)",
  "1 onion (finely chopped)",
  "1 green chili (chopped)",
  "2 tbsp coriander leaves",
  "1/2 tsp chili powder",
  "Salt to taste",
  "2 tbsp corn flour",
  "Oil for frying"
],
steps: [
  "Mix mashed potatoes, onion, green chili, coriander leaves, chili powder, salt, and corn flour.",
  "Make small balls or shapes.",
  "Heat oil in a pan.",
  "Fry the snacks until golden and crispy.",
  "Remove and drain excess oil.",
  "Serve hot with sauce."
]
},

{
name:"Easy Potato Snack",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0g-SYpMzwDu_HNY5-qVXug7J5cCarkcNIcsd2Lpzc9Icv4gcdgJRZrug&s=10",
time:"20 mins",
ingredients: [
  "2 potatoes (boiled and mashed)",
  "1 onion (finely chopped)",
  "1 green chili (chopped)",
  "2 tbsp coriander leaves",
  "1/2 tsp chili powder",
  "Salt to taste",
  "2 tbsp corn flour",
  "Oil for frying"
],
steps: [
  "Mix mashed potatoes, onion, green chili, coriander leaves, chili powder, salt, and corn flour.",
  "Make small balls or shapes.",
  "Heat oil in a pan.",
  "Fry the snacks until golden and crispy.",
  "Remove and drain excess oil.",
  "Serve hot with sauce."
]
},

{
name:"Onion Pakoda",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDvvJbowTkwICarORvqBhxgvMpx1uNQUbKF6KD4PJQ-PZry-vmA7EdAIw&s=10",
time:"20 mins",
ingredients: [
"2 onions (thinly sliced)",
"1 cup gram flour (besan)",
"2 tbsp rice flour (for crispiness)",
"2 green chilies (chopped)",
"A few curry leaves",
"Salt (as needed)",
"1 tsp chili powder",
"A pinch of asafoetida (hing)",
"Oil (for frying)",
],
instructions: [
 "Slice the onions thinly",
"Add salt and mix the onions, keep it for 5 minutes (it will release water)",
"Add gram flour, rice flour, chili powder, green chilies, and curry leaves",
"Mix well and make a thick mixture (don’t add extra water if possible)",
"Heat oil in a pan",
"Drop small portions into hot oil and fry",
"Cook until golden brown and crispy"
]
},

{
name:"Jam Sandwich",
image:"https://www.oetker.in/assets/recipes/assets/d65e637c02454051b6d7c11d05fd5a9d/750x400/grilled-peanut-butter-and-jam-sandwich.jpg",
time:"5 mins",
ingredients: [
  "Bread",
  "jam",
  
],
steps: [
"Apply jam on bread",
"Close and cut into shapes"
]
},
],

Cake:[

{
name:"Simple Chocolate Cake",
image:"https://www.cookingclassy.com/wp-content/uploads/2022/04/easy-chocolate-cake-2-500x500.jpg",
time:"40 mins",
ingredients: [
"Maida (all-purpose flour) – 1 cup",
"Sugar – ¾ cup",
"Cocoa powder – 2 tbsp",
"Baking powder – 1 tsp",
"Baking soda – ½ tsp",
"Milk – ¾ cup",
"Oil – ¼ cup",
"Vanilla essence – 1 tsp",
"A pinch of salt"
  
],
steps: [

"🥣 Batter:",
"Take a bowl and mix maida, cocoa powder, baking powder, baking soda, salt",
"In another bowl mix sugar, milk, oil, vanilla essence",
"Combine both and mix well until smooth batter forms",
"🍳 Cooking (Pressure Cooker method)",
"Preheat cooker (without whistle & rubber) for 5–10 mins",
"Grease a cake tin with oil",
"Pour batter into tin",
"Place inside cooker and close lid",
"Cook on low flame for 30–35 minutes",
]
},

{
name:"Eggless Vanilla Cake",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliK6acnp649hR868FQ9NNVukM0ZtinwSevuf56tDIRw8kFrshRNOPV-f6&s=10",
time:"45 mins",
ingredients: [
 "Maida (all-purpose flour) – 1 cup",
 "Sugar – ¾ cup (powdered)",
 "Milk – ¾ cup",
 "Oil – ¼ cup",
 "Baking powder – 1 tsp",
 "Baking soda – ½ tsp",
 "Vanilla essence – 1 tsp",
 "A pinch of salt",
 "Vinegar or lemon juice – 1 tsp (important for softness) "
  
],
steps: [
 "🥣 Batter:",
 "Mix maida, baking powder, baking soda, and salt in a bowl",
 "In another bowl, mix sugar + milk + oil + vanilla essence + vinegar",
 "Combine both mixtures slowly",
 "Stir until smooth (no lumps)",
 "🍳 Cooking (Oven / Cooker)",

 "Oven method:",

 "Preheat oven at 180°C",
 "Bake for 30–35 minutes",

 "Cooker method:",

 "Preheat empty cooker (no whistle, no rubber) for 10 mins",
 "Pour batter into greased tin",
 "Cook on low flame for 30–35 mins"
]
},

{
name:"Chocolate Mug Cake",
image:"https://www.cookingclassy.com/wp-content/uploads/2020/02/chocolate-mug-cake-33.jpg",
time:"5 mins",
ingredients: [
 "Maida (all-purpose flour) – 4 tbsp",
 "Sugar – 2 tbsp",
 "Cocoa powder – 1 tbsp",
 "Milk – 3 tbsp",
 "Oil – 2 tbsp (or melted butter)",
 "Baking powder – ¼ tsp",
 "Vanilla essence – ½ tsp (optional)",
 "A pinch of salt"
  
],
steps: [
"Take a microwave-safe mug",
"Add maida, sugar, cocoa powder, baking powder, salt",
"Mix well first (dry mix)",
"Add milk, oil, vanilla essence",
"Stir until smooth batter (no lumps)",
"Microwave for 1.5 to 2 minutes",
"Check if cooked (top should look fluffy)"
]
},

{
name:"Oreo Mug Cake",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkxz1l8ptvmXaBMZFwyjp_fNwp0Gsi-dGEUhWz8i8VzpFiigl2ZFAXq0sD&s=10",
time:"5 mins",
ingredients: [
"Oreo biscuits – 4 to 6",
"Milk – 4 tbsp",
"Baking powder – ¼ tsp (optional, makes it fluffier)",
"Chocolate chips (optional)"  
  
],
steps: [
"Take a microwave-safe mug",
"Crush the Oreo biscuits into fine powder inside the mug",
"Add milk and mix well until it becomes a smooth batter",
"Add baking powder (optional) and mix again",
"Microwave for 1.5 to 2 minutes",
"Let it cool for 1 minute"
]
},

{
name:"Ragi Cake",
image:"https://www.yummytummyaarthi.com/wp-content/uploads/2023/05/ragi-cake-1.jpeg",
time:"45 mins",
ingredients: [
"Ragi flour (finger millet flour) – 1 cup",
"Wheat flour or maida – ½ cup (optional for softness)",
"Sugar or jaggery – ¾ cup (powdered)",
"Milk – 1 cup",
"Oil – ¼ cup",
"Baking powder – 1 tsp",
"Baking soda – ½ tsp",
"Vanilla essence – 1 tsp (optional)",
"A pinch of salt"
  
],
steps: [
"🥣 Batter:",
"Mix ragi flour + wheat flour + baking powder + baking soda + salt.",
"In another bowl, mix milk + sugar/jaggery + oil + vanilla essence.",
"Combine both mixtures slowly.",
"Stir well until smooth batter forms (no lumps).",
"🍳 Cooking:",

"Oven method:",

"Preheat at 180°C",
"Bake for 30–35 minutes",

"Cooker method:",

"Preheat cooker (no whistle, no rubber) for 10 minutes",
"Pour batter into greased tin",
"Cook on low flame for 30–35 minutes",
]
},

],
Biscuits:[
{
name:"Butter Biscuits",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlz14FgBskVk6g-4Px7vqR4dV3woj8qxcev4b8ZrGt0iZuDYLdKekNkKM&s=10",
time:"35 mins",
ingredients: [
"Maida – 1 cup",
"Sugar – ½ cup (powdered)",
"Butter – ½ cup (soft)",
"Baking powder – ½ tsp",
"Milk – 2–3 tbsp",
"Vanilla essence – ½ tsp (optional) "
  
],
steps: [
"Mix butter + sugar until creamy.",
"Add maida + baking powder and mix.",
"Add milk little by little to make soft dough.",
"Make small biscuit shapes.",
"Bake at 180°C for 15–20 minutes (or cooker method)."
]
},

{
name:"Coconut Biscuits",
image:"https://sangamsweets.in/cdn/shop/files/Coconut_Biscuits_New.webp?v=1745231315",
time:"45 mins",
ingredients: [
"Maida – 1 cup",
"Grated coconut – ½ cup",
"Sugar – ½ cup",
"Butter – ¼ cup"
  
],
steps: [
"Mix all ingredients into dough.",
"Shape into small cookies.",
"Bake until light golden.",
]
},

{
name:"Chocolate Biscuits",
image:"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy_choc_biscuits-59ca9be.jpg",
time:"35 mins",
ingredients: [
"Maida (all-purpose flour) – 1 cup",
"Cocoa powder – 2 tbsp",
"Sugar – ½ cup (powdered)",
"Butter – ½ cup (soft)",
"Baking powder – ½ tsp",
"Milk – 2–3 tbsp",
"Vanilla essence – ½ tsp (optional)",
"A pinch of salt "
  
],
steps: [
"In a bowl, mix butter + sugar until creamy.",
"Add maida, cocoa powder, baking powder, salt and mix well.",
"Add milk little by little to form a soft dough.",
"Make small round biscuit shapes.",
"Place on a tray (greased or lined).",
"🍳 Cooking:",

"Oven method:",

"Preheat at 180°C",
"Bake for 15–18 minutes",

"Cooker method:",

"Preheat empty cooker (no whistle, no rubber) for 10 minutes",
"Place biscuits in plate inside cooker",
"Cook on low flame for 15–20 minutes"
  
]
}


],

Mutton:[
{
  name: "Mutton Gravy",
  image:"https://theartisticcook.com/wp-content/uploads/2024/01/mutton-curry-bihari-500x500.jpg",
  time: "45-50 mins",
  ingredients: [
    "500 g Mutton",
    "2 Onions (chopped)",
    "2 Tomatoes (chopped)",
    "2 tbsp Ginger Garlic Paste",
    "1/2 tsp Turmeric Powder",
    "1 tbsp Chilli Powder",
    "2 tbsp Coriander Powder",
    "1 tsp Garam Masala",
    "Few Curry Leaves",
    "3 tbsp Oil",
    "Salt as needed",
    "2 cups Water",
    "Coriander Leaves for garnish"
  ],
  steps: [
    "Heat oil in a pressure cooker.",
    "Add curry leaves and chopped onions.",
    "Saute until golden brown.",
    "Add ginger garlic paste and cook for 1 minute.",
    "Add tomatoes and cook until soft.",
    "Add turmeric powder, chilli powder, coriander powder, garam masala, and salt.",
    "Mix well and cook for 2 minutes.",
    "Add cleaned mutton and stir well.",
    "Pour 2 cups water and mix.",
    "Close the cooker and pressure cook for 6-8 whistles.",
    "Allow pressure to release naturally.",
    "Open the cooker and simmer for 5 minutes.",
    "Garnish with coriander leaves.",
    "Serve hot."
  ]
},
{
  name: "Mutton Biryani",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuH4cM647s17daFRqNjnWb4gzAn6-252Gvrr7diMISYTPkeG4rLzQPw5c6&s=10",
  time: "60-90 mins",
  ingredients: [
    "500 g Mutton",
    "2 cups Basmati Rice",
    "3 Onions (sliced)",
    "2 Tomatoes (chopped)",
    "2 tbsp Ginger Garlic Paste",
    "1 cup Curd (yogurt)",
    "1 tsp Turmeric Powder",
    "2 tbsp Chilli Powder",
    "2 tbsp Biryani Masala",
    "1 tsp Garam Masala",
    "Few Mint Leaves",
    "Few Coriander Leaves",
    "4 tbsp Oil or Ghee",
    "Salt as needed",
    "4 cups Water",
    "1 Lemon juice"
  ],
  steps: [
    "Wash and soak basmati rice for 20-30 minutes.",
    "Heat oil or ghee in a pressure cooker or heavy pot.",
    "Add sliced onions and fry until golden brown.",
    "Add ginger garlic paste and sauté until raw smell goes.",
    "Add tomatoes and cook until soft.",
    "Add turmeric powder, chilli powder, biryani masala, garam masala, and salt.",
    "Add mutton and mix well.",
    "Add curd and cook until mutton is partially tender.",
    "Add mint and coriander leaves.",
    "Add water and cook mutton until 70% done.",
    "Add soaked rice and lemon juice.",
    "Cook covered until rice is fully cooked and water is absorbed.",
    "Rest for 10 minutes before serving.",
    "Serve hot with raita or gravy."
  ]
},

{
  name: "Mutton Soup",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDz7tmLYERTU1GscBiQLNSNVJkyTDYNOxctBfVVeArFJ4JWo7yWm-CgSx&s=10",
  time: "60-75 mins",
  ingredients: [
    "300 g Mutton (with bones)",
    "1 Onion (chopped)",
    "1 Tomato (chopped)",
    "1 tbsp Ginger Garlic Paste",
    "1/2 tsp Turmeric Powder",
    "1 tbsp Pepper Powder",
    "1 tsp Cumin Seeds",
    "Few Curry Leaves",
    "2 tbsp Oil",
    "Salt as needed",
    "5 cups Water",
    "Coriander Leaves for garnish"
  ],
  steps: [
    "Heat oil in a pressure cooker.",
    "Add cumin seeds and curry leaves.",
    "Add chopped onions and sauté until soft.",
    "Add ginger garlic paste and cook for 1 minute.",
    "Add tomatoes and cook until mushy.",
    "Add turmeric powder, salt, and pepper powder.",
    "Mix well and add mutton pieces.",
    "Add water and mix everything.",
    "Pressure cook for 6-8 whistles until mutton is tender.",
    "Open cooker and boil for 5-10 minutes until soup thickens slightly.",
    "Adjust salt and pepper if needed.",
    "Garnish with coriander leaves.",
    "Serve hot."
  ]
}
],
Fish:[
    {
  name: "Fish Gravy ",
  image:"https://vismaifood.com/storage/app/uploads/public/daa/96d/7bc/thumb__1200_0_0_0_auto.jpg",
  time: "30-35 mins",
  ingredients: [
    "500 g Fish",
    "2 Onions (sliced)",
    "2 Tomatoes (chopped)",
    "1 tbsp Ginger Garlic Paste",
    "1/2 tsp Turmeric Powder",
    "1 tbsp Chilli Powder",
    "2 tbsp Coriander Powder",
    "1 tsp Tamarind Paste",
    "Few Curry Leaves",
    "3 tbsp Oil",
    "Salt as needed",
    "1.5 cups Water",
    "Coriander Leaves for garnish"
  ],
  steps: [
    "Clean the fish and marinate with turmeric and salt for 10 minutes.",
    "Heat oil in a pan.",
    "Add curry leaves and sliced onions.",
    "Saute until onions turn soft.",
    "Add ginger garlic paste and cook for 1 minute.",
    "Add tomatoes and cook until mushy.",
    "Add chilli powder, coriander powder, turmeric powder, and salt.",
    "Mix well and cook for 2 minutes.",
    "Add tamarind water and bring to boil.",
    "Gently add fish pieces and cook on medium flame.",
    "Cook for 10-12 minutes until fish is done.",
    "Simmer until gravy thickens.",
    "Garnish with coriander leaves.",
    "Serve hot with rice."
  ]
},

{
name:"Fish Fry",
image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNa4aTEJEaqxuJLuxwGu3tfxMKDzss6MzCtlJnwekxofO1MHI8C-h0_-R4&s=10",
time:"30 mins",
ingredients: [
  "500 g fish (cleaned and cut pieces)",
  "1 tbsp ginger-garlic paste",
  "1 tsp red chili powder",
  "½ tsp turmeric powder",
  "1 tsp coriander powder",
  "½ tsp garam masala",
  "Salt to taste",
  "2 tbsp oil",
  "Curry leaves"
],
steps: [
  "Wash and clean the fish pieces.",
  "Mix ginger-garlic paste, chili powder, turmeric, coriander powder, garam masala, and salt.",
  "Coat the fish with the masala and marinate for 20 minutes.",
  "Heat oil in a pan.",
  "Add curry leaves.",
  "Place the fish pieces carefully in the pan.",
  "Shallow fry on medium flame until golden and cooked.",
  "Flip and cook the other side.",
  "Serve hot."
]
},
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