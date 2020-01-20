<template>
  <div class="crumb">
      {{links}}
        <ul>
            <li v-for="(link, index) in links" v-bind:key="index">
               <router-link to="">{{link}}</router-link>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
    data: function(){
        return {
            links: Array
        }
    },
    methods :{
        convertString(link) {
            let linkArray = link.split('/')
            let returnArray = []
            linkArray.forEach(element => {
                if(element !== "") {
                    returnArray.push(element)
                }
            });
            // console.log(linkArray)
            
            return returnArray
        }
    },
    mounted() {
        this.links = this.convertString(window.location.pathname);
        console.log(this.links)
    }
}
</script>

<style>
    
</style>