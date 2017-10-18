import { user } from '../classes/user';
import { recipe } from '../classes/recipe';

export const recipeList: recipe[] = [
    {
        name: 'Ramp Pesto Muffin',
        instruction: ['dice', 'fry', 'eat'],
        description: 'Savory muffins that are flavored with garlicky ramps. Great for bentos, especially when made in mini-size.',
        sharedRecipe: false,
        ingredients: ['tomato', 'cucumber'],
        imgURL: '/assets/images/pestomuffin.jpg',

    },
    {
        name: 'Creamy Chicken Mushroom',
        instruction: ['In a large skillet add olive oil and cook the chicken on medium high heat for 3-5 minutes on each side or until brown on each side and cooked until no longer pink in center. Remove chicken and set aside on a plate. Add the sliced mushrooms and garlic and cook for a few minutes until tender. Remove and set aside.',
            'To make the sauce add the chicken broth, heavy cream, cream cheese, garlic powder, salt and pepper. Cook over medium heat and whisk until smooth. Add the flour and continue to cook for 1-2 minutes until it starts to thicken. Add the mushrooms and garlic to the sauce followed by the chicken and coat in the creamy sauce. Heat for a couple of minutes and serve immediately.'],
        description: 'Tender and juicy chicken in the most amazing creamy and delicious garlic mushroom sauce! This makes one incredible 30 minute meal!',
        sharedRecipe: true,
        ingredients: ['chicken thigh', 'mushroom'],
        imgURL: '/assets/images/box.png'
    },
    {
        name: 'Seafood Carbonaro',
        instruction: [`Heat oil in a large, non-stick frying pan over medium heat. Add pancetta and garlic. Cook, stirring, for 5 minutes or until pancetta is crisp. Drain on paper towel.
        `, `Whisk egg yolks, eggs, cream and three-quarters of the parmesan together in a bowl. Season with salt and pepper.`, `Add egg mixture and pancetta mixture to pasta. Season with salt and pepper. Toss over low heat until well combined. Serve with remaining parmesan.`],
        description: 'Carbonara (Italian: [karboˈnaːra]) is an Italian pasta dish from Rome[1][2] made with egg, hard cheese, seafood, and pepper.',
        sharedRecipe: true,
        ingredients: ['Squid', 'prawn', 'scallop', 'mushroom'],
        imgURL: '/assets/images/box.png'
    }
]
