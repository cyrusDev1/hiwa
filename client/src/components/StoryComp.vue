<template>
    
    <div id="story">
        <i class="fa fa-arrow-left prev mb-3"></i>

        <div class="card">
            
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <a href="#" class="type">Romance</a>
                    <a href="#"><i class="fa fa-heart"></i></a>
                </div>
                <p class="info-1"><span><i class="fa fa-calendar"></i>11 Avril 2023</span>
                    <span class="span"><i class="fa fa-clock"></i>8 minutes de lecture</span>
                </p>
                <RouterLink to="comments" class="comment"><i class="fa fa-comment"></i> Commentaires</RouterLink>
                <p class="info"><span>45<i class="fa fa-eye"></i></span>
                    <span class="span">89<i class="fa fa-heart"></i></span>
                    <span class="span">22<i class="fa fa-comments"></i></span></p>
                <h5 class="card-title  mt-4">Alice au pays des merveilles</h5>
                <p class="card-text">Qui savait que prendre une bouchée d'un nouveau plat spécial mensuel vous donnerait envie d'un autre type de viande, aussi qui aurait deviné qu'être végétarien ou végétalien sauverait votre peau de la pourriture, mais c'est à vous de vous sauver des envies-vivants Z de votre cerveau.</p>
                
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style>

#story{
    margin-top: 15px;
}

#story .card-body .type{
    background-color: var(--color-four);
    padding: 7px;
    color: white;
    text-decoration: none;
}


#story .card-body .info .span{
    margin-left: 15px;
}

#story .card-body .info i{
    color: var(--color-three);
    margin-left: 5px;
}

#story .card-body .info-1{
    margin-top: 10px;
    font-size: 13px;
}

#story .card-body .info-1 .span{
    margin-left: 15px;
}

#story .card-body .info-1 i{
    color: var(--color-three);
    margin-right: 5px;
}


#story .card-body .comment{
    background-color: var(--color-three);
    color: white;
    padding: 8px;
    border-radius: 10px;
}
.prev{
    color: var(--color-four);
}
</style>