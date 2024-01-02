export default {
  name: 'team_member',
  title: 'Team Member',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'member_type',
      title: 'Member Type',
      type: 'string',
      description: 'What type of team member is this (e.g., Interaction Designer, Data Sceintist, etc.)?',
      validation: (Rule) => Rule.required(),
    },
  ]
}