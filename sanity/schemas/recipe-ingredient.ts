import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'ingredient',
    title: 'Zutaten',
    type: 'object',
    fields: [
        defineField({
            name: 'amount',
            title: 'Menge',
            type: 'string',
        }),
        defineField({
            name: 'ingredient',
            title: 'Zutat',
            type: 'string'
        }),
    ],
    preview: {
        select: {
            amount: 'amount',
            unit: 'unit',
            ingredient: 'ingredient',
        },
        prepare(selection: {amount:string, ingredient:string}) {
          const {amount, ingredient} = selection
          return {
            title: [amount, ingredient].join(' ')
          }
        }
    }
})


