import Head from "next/head";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import { getRecipes } from "../sanity/lib/sanity-utils";
import Link from "next/link";
import { Recipe } from "../types/recipe";
import Layout from "../layout/default";

interface Props {
  recipes: [Recipe]
}

export default function Home({ recipes }: Props) {




  return (<>
      <Head>
        <title>My Blog | Explore the new horizon</title>
        <link rel="icon" href="/smallLogo.ico" />
      </Head>
      
        <Banner />
        <div className="max-w-7xl mx-auto h-60 relative">
          <BannerBottom />
        </div>
        <div className="max-w-7xl mx-auto py-20 px-4">
          
        <div className=" text-slate-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">{recipes.map(recipe => (
            <Link href={`/recipes/${recipe.slug}`} key={recipe._id} className="bg-slate-900 relative rounded-lg overflow-hidden hover:scale-105 transition">
                <img src={recipe.image}/>
                <div className="absolute bottom-0 w-full left-0 bg-opacity-70 bg-slate-900 p-4">
                    <h2 className="text-2xl font-semibold">{recipe.name}</h2>
                </div>
                { recipe.time && <span className="absolute top-0 right-0 bg-orange-400 py-2 px-4 rounded-bl-md font-bold">{recipe.time} min</span> }
            </Link>
        ))}</div>
          
        </div></>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      recipes: await getRecipes()
    }
  }
}
