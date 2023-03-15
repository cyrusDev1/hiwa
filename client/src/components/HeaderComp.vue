<template>
    <div id="header">
        <div class="row header">
            <div class="col-6">
                <router-link to="/"><span>HIWA</span></router-link>
            </div>

            <div class="col-6 auth">
                <router-link to="/login">Connexion <i class="fa fa-sign-in"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>

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

#header .header div{
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
}

#header .header .auth a:hover {
    background-color: var(--color-two);
}
</style>
