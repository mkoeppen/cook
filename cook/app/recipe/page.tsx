import { getRecipes } from "@/sanity/sanity-utils";

export default async function Recipe() {
    const recipes = await getRecipes();

    return <div className=" text-slate-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{recipes.map(recipe => (
        <a key={recipe._id} className="bg-slate-900 relative rounded-lg overflow-hidden">
            <img src={recipe.image}/>
            <div className="absolute bottom-0 w-full left-0 bg-opacity-70 bg-slate-900 p-4">
                <h2 className="text-2xl font-semibold">{recipe.name}</h2>
                
            </div>
            { recipe.time && <span className="absolute top-0 right-0 bg-orange-400 py-2 px-4 rounded-bl-md font-bold">{recipe.time} min</span> }
        </a>
    ))}</div>
}