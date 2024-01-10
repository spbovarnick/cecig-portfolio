export default {
  name: 'landing_blurb',
  title: 'Landing Blurb',
  type: 'document',
  fields: [
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'array',
      description: 'The text that appears on the landing page',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: "Heading", value: 'h3' },
          ],
        }
      ]
    }
  ]
}