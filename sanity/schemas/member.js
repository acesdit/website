export const member = {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'membershipId',
      title: 'Membership ID',
      type: 'string',
      description: 'Only Uppercase alphabets & numbers allowed',
      validation: Rule => Rule.required().regex('^[A-Z0-9]+$')
    },
    {
      title: 'Club Posts',
      name: 'clubPosts',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'position',
            title: 'Position',
            type: 'string',
          },
          {
            name: 'year',
            title: 'Tenure',
            type: 'date',
            options: {
              dateFormat: 'YYYY',
              calendarTodayLabel: 'Today'
            }
          },
        ]
      }]
    },
    {
      name: 'image',
      title: 'Profile photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
    {
      type: 'object',
      name: 'socials',
      description: 'Enter URLs to your following profiles',
      fieldsets: [
        {name: 'social', title: 'Social media handles'}
      ],
      fields: [
        {
          title: 'Twitter(Now X)',
          name: 'x',
          type: 'string',
          fieldset: 'social'
        },
        {
          title: 'Instagram',
          name: 'instagram',
          type: 'string',
          fieldset: 'social'
        },
        {
          title: 'LinkedIn',
          name: 'linkedIn',
          type: 'string',
          fieldset: 'social'
        },
        {
          title: 'Github',
          name: 'github',
          type: 'string',
          fieldset: 'social'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
