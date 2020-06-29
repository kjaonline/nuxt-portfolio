<template>
  <div class="portfolio">
      <div class="header">
        <h1>Portfolio</h1>
      </div>
      <div class="content">
        <div class="tags">
          <h2>Filter</h2>
          <ul class="tags-filter">
            <li class="dynamic" v-for="tag in portfoliotags" v-bind:key="tag.id" v-on:click="modifyTagsArray($event, tag.slug), modifyClasses($event), getPosts();">
              {{ tag.name }}
            </li>
			<li  id="lastTag" class="active" v-on:click="resetTags(), modifyClasses($event)">Reset</li>
          </ul>
        </div>
        <div class="posts">
          <div v-for="(portfolio, index) in portfolioItems" v-bind:key="portfolio.index">
            <h3>{{ portfolio.title }}</h3>
            <div class="excerpt">{{ portfolio.excerpt }}</div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import axios from 'axios'
import Loader from '@/components/Loader'


export default {
	components: {
		Loader
	},
	data: function() {
		return{
			activeTags: [],
			portfolioItems: []
		}
	},
	computed: {
		...mapState([
		'portfoliotags', 'portfolio'
		])
	},
	mounted(){
		this.getinitialPosts()
	},
	methods: {
		modifyTagsArray: function(event, tag){
			if(!this.activeTags.includes(tag)) {
				this.activeTags.push(tag)
			} else {
				this.activeTags.splice(this.activeTags.indexOf(tag), 1)
			}
		},
		modifyClasses:function(event){
			event.target.classList.toggle('active')
			let lastTag = document.getElementById('lastTag')

			if(this.activeTags.length == 0) {
				lastTag.classList.add('active')
				this.getPosts()
			} else {
				lastTag.classList.remove('active')
			}
		},
		resetTags: function(){
			let tags = document.querySelectorAll('.tags-filter li');
			tags.forEach(element => element.classList.remove('active'));
			this.activeTags = [];
		},
		getPosts: async function() {
			let data = this.activeTags
			let requestobject = data
			try {
				let result = await axios({
					method: 'post',
					url: "https://api.krisalcordo.com/wp-json/kris_portfolio/v1/portfolio",
					data: {'tags': requestobject }
				})
				this.portfolioItems = result.data;
			} catch(error) {
				console.log(error)
			}
		},
		getinitialPosts: async function(){
			let data = this.activeTags
			let requestobject = data
			try {
				let result = await axios({
					method: 'post',
					url: "https://api.krisalcordo.com/wp-json/kris_portfolio/v1/portfolio",
					data: {'tags': requestobject }
				})
				this.portfolioItems = result.data;
			} catch(error) {
				console.log(error)
			}
		}
	}
}

</script>

<style lang="scss" scoped>

  .posts {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
     > div {  
       width: calc(100% / 4 - 10px);
       margin: 5px;
       padding: 20px;
       h2 {
         text-align: center;
       }
    }
  }
  ::v-deep .clear {
    cursor: pointer;
    margin: 5px;
    padding: 5px;
    user-select: none;
  }
  .content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    .tags {
      width: 20%;
      padding: 20px;
    }
    .content {
      width: 100%;
    }
  }
  .tags {
    h2 {
      text-transform: uppercase;
      font-size: 1.5em;
    }
    ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
      
      li {
		text-align: center;
		cursor: pointer;
		margin: 5px;
		padding: 5px;
		user-select: none;
		border-radius: 5px;
		font-size: .8em;
		border: 1px solid rgba(#132a13, .5);
		&:last-child{
			width: 100%;
		}
      }

    }
  }

  .active{
		background: #132a13;
		color: #ffffff;   
  }
</style>