<template>
  <div class="resume">
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
         Please <nuxt-link to="/about">click here</nuxt-link> for non developer job history.
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: function() {
        return {
            // initialJobs: this.resume,
            devJobs: [],
            otherJobs: []
        }
    },
    computed: {
        ...mapState([
            'resume'
        ]),
        viewState: function(data) {
           console.log(data)
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
    
    .resume {
        padding: 50px 20px;
        margin: 50px auto;
        background: #f5f5f5;
        display: block;
        max-width: 1600px;
        width: calc(100% - 10px);

        .view-full {
            margin: 30px auto 0;
            text-align: center;
        }

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
   
</style>