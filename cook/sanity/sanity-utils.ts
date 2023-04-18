
import { Recipe } from '@/types/recipe';
import { createClient, groq } from 'next-sanity';

export async function getRecipes(): Promise<Recipe[]> {
    const client = createClient({
        projectId: "k9p858xw",
        dataset: "production",
        apiVersion: "2023-04-12",
    });

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
    const client = createClient({
        projectId: "k9p858xw",
        dataset: "production",
        apiVersion: "2023-04-12",
    });

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