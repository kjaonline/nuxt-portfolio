import { getPosts } from '../api/posts'


export const state = () => ({
    posts: Object,
})
export const mutations = {
    SETPOSTS(state, value){
        state.posts = value
    }
}
export const actions = {
    async getPostsAction(context) {
        const posts = await getPosts()
        context.commit('SETPOSTS', posts)
    }
}
  