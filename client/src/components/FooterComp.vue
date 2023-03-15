<template>
    <div id="menu">
        <div class="row menu">
            <div class="col-3">
                <router-link to="/"><i class="fa fa-home"></i></router-link>
            </div>

            <div class="col-3">
                <router-link to="/my-stories"><i class="fa fa-book"></i></router-link>
            </div>

            <div class="col-3">
                <router-link to="/post-story"><i class="fa fa-pencil"></i>

                </router-link>
            </div>

            <div class="col-3">
                <router-link to="/about"><i class="fa fa-question"></i></router-link>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
#menu .menu {
    background-color: white;
    text-align: center;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    margin: 0;
    border-top: 3px solid #CCCCCC;
    z-index: 1;

}

#menu .menu a {
    color: var(--color-four);
    font-size: 25px;
}

#menu .menu .col-3 span {
    font-size: 12px;
    text-align: center;
    display: block;

}

#menu .menu .router-link-active {
    color: var(--color-three);
}
</style>
