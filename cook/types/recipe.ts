import { PortableTextBlock } from "sanity"

export type Ingredient = {
    amount: string,
    ingredient: string
}

export type RecipeStep = {
    image: string,
    content: PortableTextBlock[]
}

export type Recipe = {
    _id: string,
    _createdAt: Date;
    name: string,
    slug: string,
    image: string,
    portion: number,
    time: number,
    ingredient: Array<Ingredient>,
    content: Array<RecipeStep>
}