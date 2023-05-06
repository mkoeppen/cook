import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'recipeStep',
    title: 'Schritt',
    type: 'object',
    fields: [
        defineField({
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
        }),        
        defineField({
            name: 'content',
            title: 'Inhalt',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ],
    preview: {
        select: {
            content: 'content',
        },
        prepare(selection) {
            const content = (selection.content || []).find((content: { _type: String }) => content._type === 'block')
            return {
                title: content
                ? content.children
                    .filter((child: { _type: String }) => child._type === 'span')
                    .map((span: { text: String}) => span.text)
                    .join('')
                : 'No title'
            }
        }
    }
})


