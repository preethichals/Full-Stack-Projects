const project = {

  name:'project',
  title:'Projects',
  type:'document',
  fields: [ 
      {
          name:'name',
          title:'Name',
          type:'string',
      },
      {
        name:'slug',
        title:'Slug',
        type:'slug',
        options: { source:'name' }
      },
      {
        name:'image',
        title:'Image',
        type:'image',
        options: {
          hotspot:true
        },
        fields: [
          {
            name:'caption',
            title:'Caption',
            type:'string',
          },
          { 
            name:'alt',
            title:'Alt',
            type:'string'
          }

        ]
      },
      {
        name:'url',
        title:'URL',
        type:'url',
      },
      {
        name:'git',
        title:'Git',
        type:'url',
      },
      {
        name:'render',
        title:'Render',
        type:'url',
      },
      { 
        name:'content',
        title:'Content',
        type:'array',
        of: [{type:'block'}]
      },

    ]
  }
  export default project