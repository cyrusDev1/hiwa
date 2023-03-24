<template>
    <router-link :to="{path: '/story/' + Story._id}">
    <div id="story-card">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ Story.title }}</h5>
                <p class="card-text">{{ Story.content.replace(/<\/?[^>]+(>|$)/gi, " ") }}</p>
                <a href="#" class="type">{{ Story.type }}</a>
                <p class="info"><span>{{ Story.views }}<i class="fa fa-eye"></i></span>
                    
                    <span class="span">{{  Story.comments.length }}<i class="fa fa-comments"></i></span>
</p>
            </div>
        </div>
    </div>
</router-link>

</template>

<script>
export default{
    props: [
        "Story"
    ],
    data(){
        return{
            label: "Activer les commentaires"
        }
    },
    methods: {
        lengthComment(){
            const arr = Array.from(this.Story.comments, x => x).length;
            return arr.length;
        },
        shouldReceiveNewsletter(){
            
        }
    }
}
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
