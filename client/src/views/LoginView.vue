<template>
    <div class="login">
        <i class="fa fa-arrow-left prev mb-3"></i>
        <FormKit type="form" submit-label="S'identifier">
            <h1 class="">S'identifier</h1>
            <p id="text-align-start">
                Connectez-vous sur Hiwa pour publier votre histoire
            </p>

            <FormKit type="email" name="email" label="Votre email" placeholder="jane@gmail.com" validation="required" />
            <FormKit type="password" name="password" label="Votre mot de passe" placeholder="Your password"
                validation="required" />
        </FormKit>
        <p>Vous n'avez pas de compte ?<RouterLink to="/register">S'inscrire</RouterLink></p>
    </div>

</template>
<script>


export default {
    data() {
        return {
        }
    },

    setup() {
        
    },

    methods: {
       
    }
}
</script>
<style>
.login{
    padding: 15px;
    margin-top: 30px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
}
.login p{
    text-align: center;
}
#text-align-start{
    text-align: start;
}
.login p a{
    color: var(--color-three);
    text-decoration: none;
    margin-left: 7px;
}
.formkit-wrapper button{
    width: 100% !important;
    background-color: var(--color-three) !important;
    font-size: 15px !important;
    font-weight: bold !important;
}
.formkit-wrapper button:hover{
    background-color: var(--color-two) !important;
}
.prev{
    color: var(--color-four);
}
</style>
