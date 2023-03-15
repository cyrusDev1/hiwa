<template>
    <main>
      <HeaderComp/>
      <div class="story">
        <StoryComp></StoryComp>
      </div>
      <FooterComp/>
    </main>
  </template>
  
  <script>
  import HeaderComp from '../components/HeaderComp.vue'
  import FooterComp from '../components/FooterComp.vue'
  import StoryComp from '../components/StoryComp.vue'
  
  export default {
    components: {
      HeaderComp,
      FooterComp,
      StoryComp,
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
  .story{
    z-index: 0;
    margin-top: 100px;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 150px;
  }
  .story .title{
    font-size: 20px;
    margin-bottom: 10px;
    color: var(--color-three);
  }
  a{
    position: relative;
  }
  </style>
  