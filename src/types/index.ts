import { z } from 'zod'
import { CategoriesAPIResponseSchema, SearchFilterSchema, type DrinkAPIResponse, type DrinksAPIResponse, type RecipeAPIResponseSchema } from '../utils/recipes-schemas'


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>
export type Drink = z.infer<typeof DrinkAPIResponse>
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>