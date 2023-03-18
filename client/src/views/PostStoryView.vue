<template>
  <main>
    <HeaderComp />
    <div class="post-story">
      <FormKit type="form" submit-label="Envoyez votre histoire" @submit="postStory">
        <h2 class="">Envoyez votre histoire</h2>
        <FormKit type="text" name="title" label="Le titre de votre histoire" placeholder="Alice au pays des merveilles"
          validation="required" />
        <FormKit type="select" label="Quel genre d'histoire voulez-vous envoyer" name="type" :options="[
          'Romance',
          'Aventure',
          'Humour',
          'Drame',
          'Amitié',
          'Vie',
          'Famille',
          'Sorcellerie',
          'Amour',
          'Cœur brisé'
        ]" />
        <FormKit type="textarea" name="content" label="Racconter votre histoire" placeholder="Alice se repose sur un talus lorsqu’elle voit passer un lapin blanc vêtu d’un gilet, visiblement pressé. Elle décide de le suivre et, sans hésitation, s’engouffre à sa suite dans un terrier."
          validation="required" />

      </FormKit>
    </div>
    <FooterComp />
  </main>
</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import req from '../store'

export default {
  components: {
    HeaderComp,
    FooterComp,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '',
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo']
      }
    };
  },
  mounted() {

  },

  methods: {
    isLogin() {
      return this.$cookies.get('token') !== "und" ? true : false
    },

    postStory(data){
      data.views = 0
      data.love = 0
      data.comments = []
      data.commentStat = "on"
      req({
                method: 'post',
                url: '/story',
                data: data,
                headers: {
                  'authorization': "Beaear " + this.$cookies.get('token')
                }
            })
                .then(response => {
                    console.log(response.data);
                    this.$notify({
                            text: 'Votre Histoire a été bien publiée',
                            type: 'success',
                            duration: 8000,
                        });
                    this.$router.push('/my-stories')
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        this.$notify({
                            text: error.response.data.error,
                            type: 'error',
                        });
                    }
                })
    }
  },

  created() {
    if (!this.isLogin()) {
      this.$router.push('/login')
      this.$notify({
        text: "Vous devez d'abord vous connecter pour envoyer une histoire",
        type: 'warn',
      });
    }
  }
}
</script>
<style>
.post-story {
  margin-top: 120px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
}

.post-story .formkit-wrapper button {
  margin-top: 30px;
}
</style>
