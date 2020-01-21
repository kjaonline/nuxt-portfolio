<template>
  <div v-bind:class="{ loaded: loaded }" class="single-post">
    <breadcrumb 
		type="Blog"
		v-bind:currentpage=title
		/>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
    <div class="post-content">
      <h1>{{title}}</h1>
      <div class="categories">
      </div>
      <div v-html="content"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import breadcrumb from '@/components/Breadcrumb'

export default {
   data: function () {
    return {
      loaded: false,
      slug: '',
      title: '',
      content: '',
      categories: []
    }
  },
  components: {
    breadcrumb
  },
  methods: {
    async getPostData() {
     try {
       let result = await axios({
         method: "POST",
         url: "https://api.krisalcordo.com/graphql",
         data: {
           query: `query MyQuery($slug: String!) {
              postBy(slug: $slug ) {
                id
                title
                content(format: RENDERED)
                date
                categories {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
            }
           `,
           variables: {slug: this.$route.params.slug }
         }
       })
       this.title = await result.data.data.postBy.title
       this.content = await result.data.data.postBy.content
       this.categories = await result.data.data.postBy.categories.edges
       this.loaded = true
     } catch(error) {
       console.log(error)
     }
    }
    
  },
  mounted(){
    this.getPostData(),
    this.slug = this.$route.params.slug;
    
  }
}

</script>

<style lang="scss" scoped>
 
</style>