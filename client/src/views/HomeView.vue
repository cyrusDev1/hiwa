<template>
  <main>
    <HeaderComp/>
    <div class="home">
      <div class="title">Découvrir: Des milliers d'histoires gratuites en ligne<br><hr></div>
      
      <StoryCard></StoryCard> <StoryCard></StoryCard>
 
    </div>
    <FooterComp/>
  </main>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import StoryCard from '../components/StoryCard.vue'

export default {
  components: {
    HeaderComp,
    FooterComp,
    StoryCard,
    },
    data() {
        return {
            
        };
    },
    mounted(){
      
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
