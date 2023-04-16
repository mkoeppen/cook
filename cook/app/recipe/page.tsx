import { getRecipes } from "@/sanity/sanity-utils";

export default async function Recipe() {
    const recipes = await getRecipes();

    return <div data-test="test">{recipes.map(recipe => (
        <div key={recipe._id}>{recipe.name}</div>
    ))}</div>
}