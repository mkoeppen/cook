import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import recipeIngredient from './schemas/recipe-ingredient'
import recipeStep from './schemas/recipe-step'
import recipe from './schemas/recipe'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, recipeIngredient, recipeStep, recipe],
}
