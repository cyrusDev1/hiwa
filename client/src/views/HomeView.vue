<template>
  <main>
    <HeaderComp/>
    <div class="home">
      <div class="title">Découvrir: Des milliers d'histoires gratuites en ligne<br><hr></div>
      
      <StoryCard v-for="story in AllStories.reverse()" :Story="story"></StoryCard>
 
    </div>
    <FooterComp/>
  </main>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import StoryCard from '../components/StoryCard.vue'
import req from '../store'

export default {
  components: {
    HeaderComp,
    FooterComp,
    StoryCard,
    },
    data() {
        return {
          AllStories: []
        };
    },
    mounted(){
      
    },

    created(){
      this.getAllStories()
    },

    methods: {
        getAllStories(){
            req.get('/stories')
                .then(response => {
                    this.AllStories = response.data
                    console.log(this.AllStories)
                }).catch(error => {
                    console.log(error.response)
                });
        }
    }
}
</script>
<style>
.home{
  z-index: 0;
  margin-top: 100px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 150px;
}
.home .title{
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--color-three);
}
a{
  position: relative;
}
</style>
