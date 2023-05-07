import {PortableText} from '@portabletext/react'
import { getRecipe } from '../../sanity/lib/sanity-utils';
import { client } from '../../sanity/lib/client';
import { Recipe } from '../../types/recipe';
import { GetStaticProps } from 'next';

type Props = {
    recipe: Recipe
}

const Recipe = ({ recipe } : Props) => {
    if(!recipe) {
        return <div>Upps</div>
    }
    let content = undefined;
    if (recipe.content) {
        content = <div>
           {recipe.content.map(step => (
               <div>
                   <PortableText value={step.content}/>
               </div>
           ))}
       </div>
    }  

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
            {recipe.content?.map(step => (
                <div>
                    <PortableText value={step.content}/>
                </div>
            ))}
        </div>
     </article>
}

export default Recipe;

export const getStaticPaths = async () => {
    const query = `*[_type == "recipe"]{
        _id,
        slug{
            current
        }
    }`;
    const recipes = await client.fetch(query);
    const paths = recipes.map((recipe: Recipe) => ({
        params: {
            slug: recipe.slug.current,
        }
    }));
    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const recipe = await getRecipe(params.slug);

    if(!recipe) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            recipe
        },
        revalidate: 60
    }
}