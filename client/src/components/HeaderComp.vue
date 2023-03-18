<template>
    <div id="header">
        <div class="row header">
            <div class="col-6">
                <router-link to="/"><span>HIWA</span></router-link>
            </div>
            <div class="col-6 auth">
                <a @click="checkAuth()">{{ this.checkAuthText }} <i
                        class="fa fa-sign-out"></i></a>
                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            checkAuthText: '',
        }
    },

    created() {
        if (this.isLogin()){
            this.checkAuthText = 'Deconnexion'
        }else{
            this.checkAuthText = 'Connexion'
        }
    },

    methods: {
        isLogin() {
            return this.$cookies.get('token') !== "und" ? true : false
        },
        checkAuth(){
            if (this.isLogin()){
                this.$cookies.set('token', 'und');
                this.checkAuthText = 'Connexion'
                this.$notify({
                    text: "Déconnexion avec success",
                    type: 'warn',
                });
            }else{
                this.$router.push('/login')
            }
            
        }
    }
}
</script>

<style>
#header .header {
    background-color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    top: 0;
    width: 100%;
    margin: 0;
    border-bottom: 3px solid #CCCCCC;
    z-index: 1;

}

#header .header div {
    display: flex;
    justify-content: center;
    align-items: center;
}

#header .header a {
    color: var(--color-four);
    font-size: 15px;
    text-decoration: none;
}

#header .header .col-6 span {
    font-size: 30px;
    text-align: center;
    display: block;
}

#header .header .auth a {
    font-size: 13px;
    background-color: var(--color-three);
    padding: 8px;
    color: white;
    border-radius: 6%;
    cursor: pointer;
}

#header .header .auth a:hover {
    background-color: var(--color-two);
}
</style>
