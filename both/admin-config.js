AdminConfig = {
  name: 'Quick Polls',
  adminEmails: ['admin@test.com','penrose@zoominternet.net'],
  nonAdminRedirectRoute: 'adminLogin',
  dashboard: {
    homeUrl: '/'
  },
  autoForm: {
    omitFields: ['createdAt', 'updatedAt']
  },
  collections: {
    Polls: {
      tableColumns: [
        { label: 'Approved', name: 'approved' },
        { label: 'Question', name: 'question' }
      ]
    }
  },
};
