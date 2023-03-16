<template>
    
    <div class="register">
        <i class="fa fa-arrow-left prev mb-3"></i>
        <FormKit type="form" submit-label="S'inscrire" @submit="register(value)" #default="{ value }">
            <h1 class="">S'inscrire</h1>
            <p id="text-align-start">
                Inscivez-vous sur Hiwa pour publier une histoire
            </p>
            <FormKit type="text" name="username" label="Votre nom d'utilusateur" placeholder="cyrusDev"
                validation="required" />
            <FormKit type="email" name="email" label="Votre email" placeholder="cyrus@gmail.com" validation="required" />
            <FormKit type="password" name="password" label="Votre mot de passe" placeholder="Your password"
                validation="required" />
        </FormKit>
        <p>Vous avez déja un compte ?<RouterLink to="/login">S'identifier</RouterLink>
        </p>
    </div>
</template>
<script>
import req from '../store';

export default {
    data() {
        return {
            
        }
    },

    setup() {
    },

    methods: {
        register(value) {
            console.log(value);
            req({
                method: 'post',
                url: '/register',
                data: value
            })
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                    }
                })

        },
    }
}
</script>
<style>
.register {
    padding: 15px;
    margin-top: 30px;
    width: 350px;
    margin-left: auto;
    margin-right: auto;
}

.register p {
    text-align: center;
}

#text-align-start {
    text-align: start;
}

.register p a {
    color: var(--color-three);
    text-decoration: none;
    margin-left: 7px;
}

.formkit-wrapper button {
    width: 100% !important;
    background-color: var(--color-three) !important;
    font-size: 15px !important;
    font-weight: bold !important;
}

.formkit-wrapper button:hover {
    background-color: var(--color-two) !important;
}

.prev {
    color: var(--color-four);
}</style>
