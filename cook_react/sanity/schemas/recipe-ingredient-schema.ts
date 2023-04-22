const recipe = {
    name: 'ingredient',
    title: 'Zutaten',
    type: 'object',
    fields: [
        {
            name: 'amount',
            title: 'Menge',
            type: 'string',
        },
        {
            name: 'ingredient',
            title: 'Zutat',
            type: 'string'
        },
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
}

export default recipe;


