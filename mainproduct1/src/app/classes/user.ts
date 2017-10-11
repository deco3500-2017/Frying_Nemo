export class user {
    name: string;
    gender: string;
    age: number;
    weight: number;
    height: number;

    constructor(
        name: string,
        gender: string,
        age: number,
        weight: number,
        height: number
    ) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
}