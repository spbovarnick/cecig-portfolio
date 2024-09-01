/* eslint-disable import/no-anonymous-default-export */
let yearNow = new Date().getFullYear()
import { PasswordInput } from "../components/PasswordInput";

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
      title: "Password",
      name: "password",
      type: "string",
      description: "If this project is under NDA, enter the access password here",
      hidden: ({ parent }) => !parent?.nda,
      // validation: Rule => Rule.custom((password, context))
      validation: (Rule) => Rule.custom((value, context) => {
        if (context.parent?.nda && !value) {
          return 'Password is required for projects under NDA';
        }
        return true;
      }),
      components: {
        input: PasswordInput,
      }
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
      description: "If this project is under NDA, simply use IDEO.",
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
              name: "bg_color",
              title: "Background Color",
              description: "The background color of this full-bleed row",
              type: "color",
              hidden: ({ parent }) => !parent?.full_bleed || parent?.full_bleed_text_or_img !== 'text',
              options: {
                disableAlpha: true,
              },
            },
            {
              name: "text_color",
              title: "Text Color",
              description: "The color of the text in this full-bleed row",
              type: "color",
              hidden: ({ parent }) => !parent?.full_bleed || parent?.full_bleed_text_or_img !== 'text',
              options: {
                disableAlpha: true,
              },
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
                    { title: 'Full Bleed Huge (48px)', value: 'h1'},
                    { title: 'Full Bleed Medium (32px)', value: 'h2'},

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
              name: "left_col_text",
              title: "Left Column",
              description: "The content that will appear in the left column of this row",
              hidden: ({ parent }) => parent?.full_bleed || parent?.img_side === 'left' || !parent?.img_side,
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
              name: "right_col_text",
              title: "Right Column",
              description: "The content that will appear in the right column of this row",
              type: "array",
              hidden: ({ parent }) => parent?.full_bleed || parent?.img_side === 'right' || !parent?.img_side,
              icon: () => '👈',
              of: [
                {
                  type: "block",
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: "Heading", value: 'h3' },
                  ],
                },
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
            select: {
              title: 'row_title',
              full_bleed_img: "full_bleed_row_img",
              left_col_img: "left_col_img",
              right_col_img: "right_col_img",
              full_bleed: "full_bleed",
              full_bleed_text_or_img: "full_bleed_text_or_img",
              img_side: "img_side",
              full_bleed: "full_bleed",
              icon: '↔️'
            },
            prepare(selection) {
              const { title, full_bleed_img, left_col_img, right_col_img, full_bleed, full_bleed_text_or_img, img_side, icon } = selection;
              const imgLeftIcon = '🖼👈'
              const imgRightIcon = '👉🖼'
              let media, subtitle;
              if (full_bleed) {
                full_bleed_text_or_img == 'image' ? media = full_bleed_img : media = icon;
              } else {
                if (img_side == "left") {
                  left_col_img ? media = left_col_img : imgLeftIcon;
                } else {
                  right_col_img ? media = right_col_img : imgRightIcon;
                }
              }

              if (full_bleed) {
                full_bleed_text_or_img == 'image' ? subtitle = 'Full Bleed Image' : subtitle = 'Full Bleed Text'
              } else {
                if (img_side == 'left') {
                  subtitle = 'Left Column Image'
                } else {
                  subtitle = 'Right Column Image'
                }
              }
              return {
                title: title ? title : 'Row',
                subtitle: subtitle,
                media: media,
              }
            }
          }
        },
      ],
    },
    {
      name: "inspo",
      title: "Inspiration",
      description: "A list of tiles blurbing inspo for this project",
      type: "array",
      // validation: (Rule) => Rule.required(),
      of: [
        {
          name: 'inspo_icon',
          title: 'Icon',
          description: 'The icon that will appear in the tile',
          type: 'image',
          validation: (Rule) => Rule.required(),
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'inspo_text',
              title: 'Blurb',
              description: 'The text that will appear in the tile',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'inspo_link',
              title: 'Link',
              description: 'The link that will be followed when the tile is clicked',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }
          ],
        },
      ]
    },
  ],
}