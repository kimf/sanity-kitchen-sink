export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb4e146f6832e759eaf4164',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-pe9z2ikc',
                  apiId: '4e715c9e-e153-41a9-8947-3fcf635c8ce5'
                },
                {
                  buildHookId: '5fb4e146bee8726c696e900b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-crz2e9ef',
                  apiId: 'cd88096f-4bdb-4e6e-a48e-4e5198b10a8f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kimf/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-crz2e9ef.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
