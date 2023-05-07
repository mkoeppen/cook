
import { Recipe } from '../../types/recipe';
import { groq } from 'next-sanity';
import { client } from './client'

export async function getRecipes(): Promise<Recipe[]> {
    return client.fetch(
        groq`*[_type == "recipe"]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            portion,
            time,
            ingredient,
            content
        }`
    )
}

export async function getRecipe(slug: string): Promise<Recipe> {
    return client.fetch(
        groq`*[_type == "recipe" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            'slug': slug.current,
            'image': image.asset->url,
            portion,
            time,
            ingredient,
            content
        }`, { slug }
    )
}