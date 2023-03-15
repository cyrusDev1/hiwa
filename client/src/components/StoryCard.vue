<template>
    <router-link to="/story">
    <div id="story-card">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Alice au pays des merveilles</h5>
                <p class="card-text">Qui savait que prendre une bouchée d'un nouveau plat spécial mensuel vous donnerait envie d'un autre type de viande, aussi qui aurait deviné qu'être végétarien ou végétalien sauverait votre peau de la pourriture, mais c'est à vous de vous sauver des envies-vivants Z de votre cerveau.</p>
                <a href="#" class="type">Romance</a>
                <p class="info"><span>45<i class="fa fa-eye"></i></span>
                    <span class="span">89<i class="fa fa-heart"></i></span>
                    <span class="span">22<i class="fa fa-comments"></i></span></p>
            </div>
        </div>
    </div>
</router-link>
</template>

<script>

</script>

<style>
a{
    color: initial;
    text-decoration: none;
}
a:hover{
    color: inherit;
}
#story-card{
    margin-top: 15px;
}
.card-body .type{
    background-color: var(--color-four);
    padding: 7px;
    color: white;
    text-decoration: none;
}
.card-body .info{
    margin-top: 10px;
}
.card-body .info .span{
    margin-left: 15px;
}
.card-body .info i{
    color: var(--color-three);
    margin-left: 5px;
}

</style>
