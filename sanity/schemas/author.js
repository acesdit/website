export const author = {
  name: 'author',
  title: 'Author',
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
    // {
    //   name: 'clubPosts',
    //   title: 'Club Posts',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'clubPost'}}],
    // },
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
    // {
    //   title: 'Club Posts',
    //   name: 'clubPosts',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'position',
    //       title: 'Position',
    //       type: 'string',
    //     },
    //     {
    //       name: 'year',
    //       title: 'Tenure',
    //       type: 'date',
    //       options: {
    //         dateFormat: 'YYYY',
    //         calendarTodayLabel: 'Today'
    //       }
    //     },
    //   ]
    // },
    {
      name: 'image',
      title: 'Image',
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
