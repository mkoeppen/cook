import {toHTML} from '@portabletext/to-html'

const recipeStep = {
    name: 'recipeStep',
    title: 'Schritt',
    type: 'object',
    fields: [
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
            name: 'content',
            title: 'Inhalt',
            type: 'array',
            of: [{ type: 'block' }]
        },
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare(selection: {content:string}) {
            const content = (selection.content || []).find(content => content._type === 'block')
            return {
                title: content
                ? content.children
                    .filter(child => child._type === 'span')
                    .map(span => span.text)
                    .join('')
                : 'No title'
            }
        }
    }
}

export default recipeStep;


