export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  icon: () => '🧠',
  fields: [
    {
      title: 'Skill Name',
      name: 'skillName',
      type: 'string',
      description: 'What is the name of this skill (e.g. User Research, Visual Storytelling, etc.)?',
      validation: (Rule) => Rule.required(),
    },
  ]
}