<template>
  <div v-bind:class="{ loaded: loaded }" class="resume">
	  <Loader />
      <div class="resume-header">
          <h2>Resume</h2>
      </div>
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
    },
    methods: {
        
	}
}
</script>

<style lang="scss" scoped>
    .resume {
		position: relative;
		min-height: 500px;
	}
</style>