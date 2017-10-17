import { user } from '../classes/user';
import { recipe } from '../classes/recipe';

export const recipeList: recipe[] = [
    {
        name: 'Ramp Pesto Muffin',
        instruction: ['dice','fry','eat'],
        description: 'Savory muffins that are flavored with garlicky ramps. Great for bentos, especially when made in mini-size.',
        sharedRecipe: false,
        ingredients: ['tomato', 'cucumber'],
        imgURL: '/assets/images/pestomuffin.jpg',

    },
    {
        name: 'Tomato Fried Egg',
        instruction: [''],
        description: '',
        sharedRecipe: true,
        ingredients: ['tomato', 'egg', 'chicken stock', 'sugar'],
        imgURL: '/assets/images/box.png'
    },
    {
        name: 'Kimchi Fried Chicken',
        instruction: [''],
        description: '',
        sharedRecipe: true,
        ingredients: ['Chicken Drumstick', 'Kimchi', 'Bim Bim Bap Paste'],
        imgURL: '/assets/images/box.png'
    }
]
