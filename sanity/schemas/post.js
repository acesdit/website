export const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ name: 'Club Members', type: 'reference', to: { type: 'member' } }, { name: 'Volunteer', type: 'object', fields: [{ name: 'volunteerName', title: 'Volunteer Name', type: 'string' }] }]
    },
    {
      name: 'mainImage',
      title: 'Main image',
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
    // {
    //   name: 'categories',
    //   title: 'Categories',
    //   type: 'array',
    //   of: [{type: 'reference', to: {type: 'category'}}],
    // },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'summary',
      type: 'text',
      title: 'Post Summary',
      rows: 3,
      validation: Rule => Rule.required().max(400).error("Only 400 characters are allowed at max")
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  // preview: {
  //   select: {
  //     title: 'title',
  //     author: 'author.name',
  //     media: 'mainImage',
  //   },
  // prepare(selection) {
  //   const {author} = selection
  //   return {...selection, subtitle: author && `by ${author}`}
  // },
  // },
}
