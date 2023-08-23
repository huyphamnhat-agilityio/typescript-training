export interface FoodItem {
  name: string
  price: number
  quantity: number
  imageUrl: string
}

/**
 * @class Food
 *
 * Define the model of the data.
 */
export class Food implements FoodItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    public imageUrl: string
  ) {}
}