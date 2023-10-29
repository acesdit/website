export const clubPost = {
  name: 'clubPost',
  title: 'Club Post',
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
  ],
}
