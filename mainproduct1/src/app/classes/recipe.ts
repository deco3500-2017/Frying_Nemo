export class recipe {
    name: string;
    instruction: string[];
    ingredients: string[];
    description: string;
    sharedRecipe: boolean;
    type: string;
    rating?: number;
    imgURL?: string;
    constructor(
        name: string,
        instruction: string[],
        ingredients: string[],
        description: string,
        sharedRecipe: boolean,
        type: string,
        rating: number,
        imgURL: string,
    ) {
        this.name = name;
        this.instruction = instruction;
        this.description = description;
        this.sharedRecipe = sharedRecipe;
        this.type = type;
        this.ingredients = ingredients;
        this.rating = rating; 
        if (this.imgURL == null) {
            this.imgURL = '/assets/images/pestomuffin.jpg';
        } else {
            this.imgURL = imgURL;
        }
    }
}