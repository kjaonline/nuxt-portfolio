<template>
  <div v-bind:class="{ loaded: loaded }" class="resume">
	
	<div class="resume-header">
		<h2>Resume</h2>
	</div>

	<Loader />
	
	<div class="job" v-for="job in resume" v-bind:key="job.id">
		<h2>{{ job.jobTitle }}</h2>
		<h3>{{ job.company }}</h3>
		<div v-html=job.jobDescription class="description"></div>
		<div class="dates">
			<span class="date">{{ job.jobStart }}</span> &mdash; <span class="date">{{ job.active ?'Present' : job.jobEnd }}</span>
		</div>
	</div>
	<div class="view-full">
		Please <nuxt-link to="/about">click here</nuxt-link> for my full resume.
	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '@/components/Loader'

export default {
	components: {
		Loader
	},
    data: function() {
        return {
            // loaded: false
			// loaded: this.$store.state.loaded
        }
    },
    computed: {
        ...mapState([
            'resume', 'loaded'
        ])
    }
}
</script>

<style lang="scss" scoped>
    .resume {
        padding: 30px 30px 50px;
        margin: 10px;
		background: #f5f5f5;
		width: 70%;
		position: relative;
		min-height: 500px;
        &-header {
            h2 {
                font-weight: bold;
                text-transform: uppercase;
                font-size: 1.2em;
            }
        }
      
        .date {
            font-style: italic;
        }
        h2, h3 {
            margin: 0;
            line-height: 1.1;
        }
        h3 {
            font-weight: normal;
        }
        
        .job {
            padding-bottom: 30px;
            border-bottom: 1px dotted rgb(206, 206, 206);
            
            &:nth-child(n + 2) {
                margin-top: 30px;
            }
             &:last-child{
                padding-bottom: 0;
                border-bottom: none;
            }
        }
    }
	.view-full {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 10px;
	}
</style>