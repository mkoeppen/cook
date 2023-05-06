import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'recipe',
    title: 'Rezepte',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' }
        }),
        defineField({
            name: 'image',
            title: 'Bild',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }
            ]
        }),
        defineField({
            name: 'portion',
            title: 'Portionen',
            type: 'number'
        }),
        defineField({
            name: 'time',
            title: 'Zeit in Minuten',
            type: 'number'
        }),
        defineField({
            name: 'ingredient',
            title: 'Zutaten',
            type: 'array',
            of: [{ type: 'ingredient' }],
            options: {
                modal: {
                    type: 'popover'
                }
            }
        }),
        defineField({
            name: 'content',
            title: 'Zubereitung',
            type: 'array',
            of: [{ type: 'recipeStep' }]
        }),
    ],

    preview: {
      select: {
        title: 'name',
        media: 'image',
      }
    },
})