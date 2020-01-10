import axios from 'axios'

export const state = () => ({
    posts: Object,
})
export const mutations = {
    SETPOSTS(state, value){
        state.posts = value
    }
}
export const actions = {
   	async getBlogPostsAction(context) {
		// console.log(context)
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						__typename
						posts {
						  edges {
							node {
							  id
							  title
							  date
							  excerpt
							}
						  }
						}
					  }
					`
				}	
			})
			let data = result.data.data.posts.edges;
			context.commit('SETPOSTS', data)
		} catch (error) {
			console.error(error)
		}
	}
}
  