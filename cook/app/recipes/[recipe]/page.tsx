import { getRecipe } from "@/sanity/sanity-utils";
import {PortableText} from '@portabletext/react'

type Props = {
    params: { recipe: string }
}

export default async function Recipe({ params } : Props) {
    const slug = params.recipe;
    const recipe = await getRecipe(slug);

    return <article className="bg-slate-900 rounded-lg overflow-hidden text-white">
        <img src={recipe.image}/>
        <div className="p-4">
            <h2 className="text-2xl font-semibold">{recipe.name}</h2>
        </div>
        { recipe.time && <span className="absolute top-0 right-0 bg-orange-400 py-2 px-4 rounded-bl-md font-bold">{recipe.time} min</span> }
        <table>
        { recipe.ingredient.map(i => (
                <tr>
                    <td>{i.amount}</td>
                    <td>{i.ingredient}</td>
                </tr>
        ))}
        </table>
        <div>
            {recipe.content.map(step => (
                <div>
                    <PortableText value={step.content}/>
                </div>
            ))}
        </div>
    </article>
}

// https://youtu.be/OcTPaUfay5I?t=4816