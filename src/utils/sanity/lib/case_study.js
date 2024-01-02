import { Rule } from "postcss";

let yearNow = new Date().getFullYear()

export default {
  name: 'case_study',
  title: 'Case Study',
  type: 'document',
  icon: () => '📑',
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
      title: "Banner Image",
      name: "banner_image",
      type: "image",
      description: "This will be used as the banner/hero image at the top of this case study's dedicated page",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity.',
          validation: (Rule) => Rule.required(),
        },
      ]
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "This will be used to generate the URL for this case study",
      validation: (Rule) => Rule.required(),
      options: {
        source: 'project',
      }
    },
    {
      title: "Client",
      name: "client",
      type: "string",
      // hidden: ({ document }) => document?.nda,
      description: "If this project is under NDA, whoever you identify as the 'client' here will be used in place of the actual client name before a sentence explaining that the client name cannot be disclosed, eg: 'IDEO - This one is under NDA so has limited shareable information'",
      // validation: (Rule) => Rule.custom((client, context) => {
      //   if (!context.document.nda && !client) {
      //     if (client) {
      //       return true
      //     } else {
      //       return "Client name must be disclosed for non-NDA projects"
      //     }
      //   }
      //   return true
      // }).error('Client name must be disclosed for non-NDA projects'),
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Timeline",
      name: "timeline",
      type: "string",
      description: "Ex: 3 months, 9 weeks, etc.",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Year",
      name: "year",
      type: "number",
      validation: (Rule) => Rule.min(2022).integer().positive().max(yearNow).required(),
    },
    {
      name: 'skills',
      title: 'Skills',
      description: 'What skills did you use on this project?',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          name: 'skill',
          type: 'reference',
          weak: true,
          to: [{type: 'skill'}],
        },
      ],
    },
    {
      name: 'team',
      title: 'Team',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: () => '👤',
          fields: [
            {
              name: 'team_member',
              title: 'Team Member',
              type: 'reference',
              weak:  true,
              to: [{type: 'team_member'}],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'count',
              title: 'Count',
              type: 'number',
              description: 'How many team members of this type worked on this project?',
              validation: (Rule) => Rule.min(1).integer().positive().required(),
            }
          ],
          preview: {
            select: {
              title: 'team_member.member_type',
              count: 'count',
            },
            prepare(selection) {
              const {title, count} = selection;
              return {
                title: `${count}x ${title}`
              };
            },
          },
        },
      ],
    },
    {
      name: "problem_principles",
      title: "Problem & Principles",
      description: "What was the problem you were trying to solve? What were the guiding principles you used to solve it? (This will be used in the 'Problem & Principles' section of the case study page)",
      type: "object",
      fields: [
        {
          name: "problem",
          title: "Problem",
          type: "array",
          of: [{type: "block"}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "principles",
          title: "Principles",
          type: "array",
          of: [{type: "block"}],
          validation: (Rule) => Rule.required(),
        },
        {
          name: "pp_image",
          title: "Problem & Principles Image",
          type: "image",
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'scope',
      title: 'Scope of Work',
      description: "An ordered list that describes the scope of work for this project",
      validation: Rule => Rule.required(),
      type: 'array',
      of: [
        {
          name: 'deliverable',
          type: 'reference',
          weak: true,
          to: [{ type: 'deliverable' }],
        },
      ],
    },
  ],
}