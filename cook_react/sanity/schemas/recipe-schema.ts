const recipe = {
    name: 'recipe',
    title: 'Rezepte',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'image',
            title: 'Bild',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        },
        {
            name: 'portion',
            title: 'Portionen',
            type: 'number'
        },
        {
            name: 'time',
            title: 'Zeit in Minuten',
            type: 'number'
        },
        {
            name: 'ingredient',
            title: 'Zutaten',
            type: 'array',
            of: [{ type: 'ingredient' }],
            options: {
                modal: {
                    type: 'popover'
                }
            }
        },
        {
            name: 'content',
            title: 'Zubereitung',
            type: 'array',
            of: [{ type: 'recipeStep' }]
        }
    ]
}

export default recipe;