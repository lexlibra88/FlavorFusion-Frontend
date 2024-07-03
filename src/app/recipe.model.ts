export interface Ingredient {
    idAlimentary: number;
    categoryFood: string;
    nameAlimentaryFood: string;
  }
  
  export interface Recipe {
    name: string;
    ingredients: Ingredient[];
  }
  