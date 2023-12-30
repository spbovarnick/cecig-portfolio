export default {
  name: 'writing',
  title: 'Writing',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publication',
      title: 'Publication/Platform',
      description: 'Where was this published or for whom?',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }
  ]
}