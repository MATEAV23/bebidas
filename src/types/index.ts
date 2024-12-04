import { z } from 'zod'
import { CategoriesAPIResponseSchema, SearchFilterSchema, type DrinksAPIResponse } from '../utils/recipes-schemas'


export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponse>