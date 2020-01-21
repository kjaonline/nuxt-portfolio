import axios from 'axios'

export const state = () => ({
	posts: Object,
	portfolio: Object
})
export const mutations = {
    SETPOSTS(state, value){
        state.posts = value
	},
	SETPORTFOLIO(state, value) {
		state.portfolio = value	
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
						posts(where: {categoryName: "featured"}) {
						  edges {
							node {
							  id
							  title
							  date
							  excerpt
							  slug
							  categories {
								edges {
								  node {
									id
									slug
								  }
								}
							  }
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
	},
	async getPortfolioAction(context) {
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						__typename
						posts(where: {categoryName: "portfolio"}) {
						  edges {
							node {
							  id
							  title
							  date
							  excerpt
							  slug
							  categories {
								edges {
								  node {
									id
									slug
								  }
								}
							  }
							}
						  }
						}
					  }  
					`
				}
			})
			let data = result.data.data.posts.edges;
			context.commit('SETPORTFOLIO', data)
		} catch (error) {
			console.error(error)
		}
	}
}
  