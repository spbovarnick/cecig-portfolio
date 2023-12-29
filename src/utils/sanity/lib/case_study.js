let yearNow = new Date().getFullYear()

export default {
  name: 'case_study',
  title: 'Case Study',
  type: 'document',
  fields: [
    {
      title: "Project",
      name: "project",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "NDA",
      name: "nda",
      type: "boolean",
      description: "Is this project under NDA?",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Client",
      name: "client",
      type: "string",
      hidden: ({ document }) => document?.nda,
      validation: (Rule) => Rule.custom((client, context) => {
        if (!context.document.nda && !client) {
          if (client) {
            return true
          } else {
            return "Client name must be disclosed for non-NDA projects"
          }
        }
        return true
      }).error('Client name must be disclosed for non-NDA projects'),
    },
    {
      title: "Year",
      name: "year",
      type: "number",
      validation: (Rule) => Rule.min(2022).integer().positive().max(yearNow).required(),
    },
    {
      title: "Banner Image",
      name: "banner_image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ]
}