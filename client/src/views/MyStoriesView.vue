<template>
  <main>
    <HeaderComp />
    <div class="home">
      <div class="title">Retrouvez toutes vos histoires publiées<br>
        <hr>
      </div>
      <StoryCard v-for="story in MyStories.reverse()" :Story="story"></StoryCard>


    </div>
    <FooterComp />
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
          MyStories: []
        };
    },
    mounted(){
      
    },

    created(){
      if (!this.isLogin()) {
      this.$router.push('/login')
      this.$notify({
        text: "Vous devez d'abord vous connecter pour envoyer une histoire",
        type: 'warn',
      });
    }
      this.getMyStories()
    },

    methods: {
      isLogin() {
      return this.$cookies.get('token') !== "und" ? true : false
    },
        getMyStories(){
            req.get('/my-stories', {  headers: {
                  'authorization': "Beaear " + this.$cookies.get('token'),
                }})
                .then(response => {
                    this.MyStories = response.data
                    console.log(this.MyStories)
                }).catch(error => {
                    console.log(error.response)
                });
        }
    }
}
</script>
<style>
.home {
  z-index: 0;
  margin-top: 100px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 150px;
}

.home .title {
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--color-three);
}

a {
  position: relative;
}</style>
