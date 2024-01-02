export default {
  name: 'deliverable',
  title: 'Deliverable',
  type: 'document',
  icon: () => '📦',
  description: 'Each scope will describe a single deliverable or milestone for a project/casestudy. These can be reused across projects/casestudies.',
  fields: [
    {
      name: 'deliverable_name',
      title: 'Deliverable Name/Term',
      description: 'The name of the deliverable or milestone, eg User Testing, Exploratory Opportunity Finding, etc.',
      validation: (Rule) => Rule.required(),
      type: 'string',
    }
  ]
}