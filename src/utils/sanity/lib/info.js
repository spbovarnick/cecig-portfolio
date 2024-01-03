let yearNow = new Date().getFullYear()

export default {
  name: 'info',
  title: 'Info',
  type: 'document',
  description: 'All the info for your Info page',
  icon: () => '💁‍♀️',
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: 'about_blurb',
      title: 'About Blurb',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'}
          ]
        }
      ]
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines',
        }
      ]
    },
    {
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [
        {
          type: 'object',
          icon: () => '👩‍💻',
          fields: [
            {
              name: 'role',
              title: 'Role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'employer',
              title: 'Employer',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'contract',
              title: 'Contract?',
              type: 'boolean',
              initialValue: false,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'still_working',
              title: 'Still Working Here?',
              type: 'boolean',
              description: 'Check if you still work here',
              initialValue: false,
              validation: (Rule) => Rule.required(),
              
            },
            {
              name: 'start_date',
              title: 'Start Date',
              type: 'string',
              description: 'When did you start working here? Don\'t worry about the day.',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'end_date',
              title: 'End Date',
              type: 'string',
              description: 'When did you stop working here? Don\'t worry about the day.',
              validation: (Rule) => Rule.custom((endDate, context) => {
                const { start_date, still_working } = context.parent
                if (still_working) {
                  return true
                }
                return endDate > start_date ? true : 'End date must be after start date'
              }),
              hidden: ({ parent, value }) => !value && parent?.still_working,
            }
          ],
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      validation: (Rule) => Rule.required(),
      type: 'array',
      of: [
        {
          name: 'skill',
          type: 'reference',
          weak: true,
          to: [{ type: 'skill' }],
        },
      ],
    },
    {
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [
        {
          type: "object",
          icon: () => '🎓',
          fields: [
            {
              name: 'degree',
              title: 'Degree or Certificate',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'school',
              title: 'School/Institution',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'currently_enrolled',
              title: 'Currently Enrolled?',
              type: 'boolean',
              description: 'Check if you are currently enrolled',
              initialValue: false,
            },
            {
              name: 'start_year',
              title: 'Start Year',
              type: 'number',
              validation: (Rule) => Rule.min(2008).max(yearNow).integer(),
            },
            {
              name: 'end_year',
              title: 'End Year',
              type: 'number',
              validation: (Rule) => [
                Rule.custom((endYear, context) => {
                  // If start_year has a value and endYear is not null or undefined, end_year must be after start_year
                  if (context.parent.start_year != null) {
                    return endYear >= context.parent.start_year ? true : 'End year must be after start year';
                  }
                  // If start_year does not have a value or endYear is null or undefined, no validation is applied
                  return true;
                }).required(),
              ]
            },
            {
              name: 'foci',
              title: 'Majors or Areas of Study',
              type: 'array',
              of: [
                {
                  type: 'string',
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'into_gif',
      title: 'I\'m Into GIF',
      type: 'image',
      description: 'The gif that will play in the bottom-of-page "I\'m Into" section',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for screen readers and search engines',
        },
      ],
    },
  ],
  preview: {
    select: {
      media: 'headshot',
    },
    prepare(selection) {
      return {
        title: 'About Ceci',
        media: selection.media,
      }
    }
  },
}