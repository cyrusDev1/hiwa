<template>
  <main>
    <HeaderComp />
    <div class="post-story">
      <FormKit type="form" submit-label="Envoyez votre histoire">
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
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

      </FormKit>
    </div>
    <FooterComp />
  </main>

</template>

<script>
import HeaderComp from '../components/HeaderComp.vue'
import FooterComp from '../components/FooterComp.vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

  }
}
</script>
<style>

.post-story{
  margin-top: 120px;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 25px;
}
.post-story .formkit-wrapper button{
  margin-top: 30px;
}


</style>
