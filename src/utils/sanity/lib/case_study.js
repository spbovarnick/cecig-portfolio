

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
      description: "If this project is under NDA, whoever you identify as the 'client' here will be used in place of the actual client name before a sentence explaining that the client name cannot be disclosed, eg: 'IDEO - This one is under NDA so has limited shareable information'",
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
      name: "role",
      title: "Role",
      description: "What was your role on this project?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "problem_principles",
      title: "Problem & Principles",
      description: "What was the problem you were trying to solve? What were the guiding principles you used to solve it? (This will be used in the 'Problem & Principles' section of the case study page)",
      type: "object",
      fields: [
        {
          name: "pp_image",
          title: "Problem & Principles Image",
          type: "image",
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
          ],
        },
        {
          name: "problem",
          title: "Problem",
          type: "array",
          of: [
            {
              type: "block",
              styles: [
                { title: 'Normal', value: 'normal' },
                { title: "Heading", value: 'h3' },
              ],
            },
          ],
          validation: (Rule) => Rule.required(),
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
    {
      name: 'body',
      title: 'Body',
      description: "The main body of the case study, broken up into rows of content",
      type: 'array',
      of: [
        {
          name: 'row',
          type: 'object',
          icon: () => '↔',
          fields: [
            {
              name: "row_title",
              title: "Row Title",
              type: "string",
              description: "For your own organization in the CMS. Feel free to use this field to number rows or just give them semantic names"
            },
            {
              name: "full_bleed",
              title: "Full Bleed",
              type: "boolean",
              description: "Should this row be full bleed, ie span the entire width of the row?",
              validation: (Rule) => Rule.required(),
              initialValue: false,
            },
            {
              name: "full_bleed_text_or_img",
              title: "Text or Image",
              type: "string",
              description: "Should this full bleed row contain text or an image?",
              hidden: ({ parent }) => !parent?.full_bleed,
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Image", value: "image" },
                ],
                layout: "radio",
                direction: "vertical",
              },
            },
            {
              name: "img_side",
              title: "Image Left or Right?",
              type: "string",
              description: "Should the image in this row be oriented to the left or right?",
              hidden: ({ parent }) => parent?.full_bleed,
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
                layout: "radio",
                direction: "vertical",
              }
            },
            {
              name: "full_bleed_row_img",
              type: "image",
              icon: () => '🖼️',
              hidden: ({ parent }) => !parent?.full_bleed || parent?.full_bleed_text_or_img !== 'image',
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
              ],
            },
            {
              name: "full_bleed_text",
              title: "Full Bleed Text",
              hidden: ({ parent }) => !parent?.full_bleed || parent?.full_bleed_text_or_img !== 'text',
              icon: () => '👐',
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: 'Full Bleed Huge', value: 'h1'},
                    { title: 'Full Bleed medium', value: 'h2'},
                  ],
                  marks: {
                    annotations: [
                      {
                        name: 'deliverableReference',
                        type: 'object',
                        title: 'Deliverable reference',
                        fields: [
                          {
                            name: 'deliverable',
                            type: 'reference',
                            to: [
                              { type: 'deliverable' },
                            ],
                          },
                        ],
                      },
                    ],
                  }
                },
                // {
                //   name: "full_bleed_img",
                //   type: "image",
                //   icon: () => '🖼️',
                //   options: {
                //     hotspot: true,
                //   },
                //   fields: [
                //     {
                //       name: 'alt',
                //       type: 'string',
                //       title: 'Alternative text',
                //       description: 'Important for SEO and accessiblity.',
                //       validation: (Rule) => Rule.required(),
                //     },
                //   ],
                // },
                {
                  name: "scope_step",
                  title: "Scope Deliverable",
                  type: "object",
                  icon: () => '🪜',
                  fields: [
                    {
                      name: "deliverable",
                      title: "Deliverable",
                      type: "reference",
                      to: [{ type: "deliverable" }],
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "scope_step",
                      title: "Scope Step",
                      description: "What step in the scope of work does this deliverable correspond to?",
                      type: "number",
                      validation: (Rule) => Rule.min(1).integer().positive().required(),
                    }
                  ],
                  preview: {
                    select: {
                      title: 'deliverable.deliverable_name',
                      step: 'scope_step',
                    },
                    prepare(selection) {
                      const { title, step } = selection;
                      return {
                        title: `${step}: ${title}`
                      }
                    }
                  }
                },
              ],
            },
            {
              name: "left_col_img",
              title: "Left Column Image",
              hidden: ({ parent }) => parent?.img_side !== 'left',
              type: "image",
              icon: () => '🖼️',
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
              ],
            },
            {
              name: "left_col",
              title: "Left Column",
              description: "The content that will appear in the left column of this row",
              hidden: ({ parent }) => parent?.full_bleed || parent?.img_side === 'left',
              icon: () => '👈',
              type: "array",
              of: [
                {
                  type: "block",
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: "Heading", value: 'h3'},
                  ],
                },
                // {
                //   name: "left_col_img",
                //   type: "image", 
                //   icon: () => '🖼️',
                //   options: {
                //     hotspot: true,
                //   },
                //   fields: [
                //     {
                //       name: 'alt',
                //       type: 'string',
                //       title: 'Alternative text',
                //       description: 'Important for SEO and accessiblity.',
                //       validation: (Rule) => Rule.required(),
                //     },
                //   ],
                // },
                {
                  name: "scope_step",
                  title: "Scope Deliverable",
                  type: "object", 
                  icon: () => '🪜',
                  fields: [
                    {
                      name: "deliverable",
                      title: "Deliverable",
                      type: "reference",
                      to: [{type: "deliverable"}],
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "scope_step",
                      title: "Scope Step",
                      description: "What step in the scope of work does this deliverable correspond to?",
                      type: "number",
                      validation: (Rule) => Rule.min(1).integer().positive().required(),
                    }
                  ],
                  preview: {
                    select: {
                      title: 'deliverable.deliverable_name',
                      step: 'scope_step',
                    },
                    prepare(selection) {
                      const { title, step } = selection;
                      return {
                        title: `${step}: ${title}`
                      }
                    }
                  }
                },
              ],
            },
            {
              name: "right_col_img",
              type: "image",
              icon: () => '🖼️',
              hidden: ({ parent }) => parent?.img_side !== 'right',
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
              ],
            },
            {
              name: "right_col",
              title: "Right Column",
              description: "The content that will appear in the right column of this row",
              type: "array",
              hidden: ({ parent }) => parent?.full_bleed || parent?.img_side === 'right',
              icon: () => '👈',
              of: [
                {
                  type: "block",
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: "Heading", value: 'h3' },
                  ],
                  marks: {
                    annotations: [
                      {
                        name: 'deliverableReference',
                        type: 'object',
                        title: 'Deliverable reference',
                        fields: [
                          {
                            name: 'deliverable',
                            type: 'reference',
                            to: [
                              { type: 'deliverable' },
                            ],
                          },
                        ],
                      },
                    ],
                  } 
                },
                // {
                //   name: "right_col_img",
                //   type: "image", 
                //   icon: () => '🖼️',
                //   options: {
                //     hotspot: true,
                //   },
                //   fields: [
                //     {
                //       name: 'alt',
                //       type: 'string',
                //       title: 'Alternative text',
                //       description: 'Important for SEO and accessiblity.',
                //       validation: (Rule) => Rule.required(),
                //     },
                //   ],
                // },
                {
                  name: "scope_step",
                  title: "Scope Deliverable",
                  type: "object", 
                  icon: () => '🪜',
                  fields: [
                    {
                      name: "deliverable",
                      title: "Deliverable",
                      type: "reference",
                      to: [{type: "deliverable"}],
                      validation: (Rule) => Rule.required(),
                    },
                    {
                      name: "scope_step",
                      title: "Scope Step",
                      description: "What step in the scope of work does this deliverable correspond to?",
                      type: "number",
                      validation: (Rule) => Rule.min(1).integer().positive().required(),
                    }
                  ],
                  preview: {
                    select: {
                      title: 'deliverable.deliverable_name',
                      step: 'scope_step',
                    },
                    prepare(selection) {
                      const { title, step } = selection;
                      return {
                        title: `${step}: ${title}`
                      }
                    }
                  }
                },
              ],
            },
          ],
          preview: {
            prepare() {
              return {
                title: 'Row'
              }
            }
          }
        },
      ],
    }
  ],
}