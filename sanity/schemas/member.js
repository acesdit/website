export const member = {
  name: 'member',
  title: 'Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email',
      validation: Rule => Rule.required()
    },
    {
      name: 'membershipId',
      title: 'Membership ID',
      type: 'string',
      description: 'Only Uppercase alphabets & numbers allowed',
      validation: Rule => Rule.required()
    },
    {
      title: 'Club Posts',
      name: 'clubPosts',
      type: 'array',
      validation: Rule => Rule.required(),
      of: [{
        type: 'object',
        fields: [
          {
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: Rule => Rule.required()
          },
          {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
              list: ['core', 'senior', 'junior', 'faculty'],
              initialValue: 'junior',
              validation: Rule => Rule.required()
            }
          },
          // {
          //   name: 'year',
          //   title: 'Tenure',
          //   type: 'date',
          //   options: {
          //     dateFormat: 'YYYY',
          //     calendarTodayLabel: 'Today',
          //     validation: Rule => Rule.required()
          //   }
          // },
          {
            name: 'tenure',
            title: 'Tenure',
            type: 'string',
            options: {
              initialValue: new Date().getFullYear.toString(),
              validation: Rule => Rule.required()
            }
          }
        ]
      }]
    },
    {
      name: 'image',
      title: 'Profile photo',
      type: 'image',
      // validation: Rule => Rule.required(),
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
      type: 'text',
      title: 'Bio',
      rows: 5,
      validation: Rule => Rule.max(600).error("Only 600 characters are allowed at max")
    },
    {
      type: 'object',
      name: 'socials',
      description: 'Enter URLs to your following profiles',
      fieldsets: [
        { name: 'social', title: 'Social media handles' }
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
