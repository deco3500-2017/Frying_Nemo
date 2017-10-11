export class Ingredient {
    name: string;
    type: string;
    description: string;
    carbohydrates: number;
    protein: number;
    sodium: number;
    cholesterol: number;
    fat: number;
    imgURL?: string;

    constructor(
        name: string,
        type: string,
        description: string,
        carbohydrates: number,
        protein: number,
        sodium: number,
        cholesterol: number,
        fat: number,
        imgURL: string
    ) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.carbohydrates = carbohydrates;
        this.protein = protein;
        this.sodium = sodium;
        this.cholesterol = cholesterol;
        this.fat = fat;
        this.imgURL = imgURL;
    }
}