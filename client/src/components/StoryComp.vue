<template>
    {{    }}
    <div v-if="!this.Loading" id="story">
        <i class="fa fa-arrow-left prev mb-3"></i>

        <div class="card">
            
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <a href="#" class="type">{{ Story.type }}</a>
                    <a href="#"><i class="fa fa-heart"></i></a>
                </div>
                <p class="info-1"  ><span><i class="fa fa-calendar"></i>{{ Story.datePost.split(', ')[0] }}</span>
                    <span class="span"><i class="fa fa-clock"></i>{{ Story.timeRead }} minutes de lecture</span>
                </p>
                <RouterLink :to="{path: this.$route.fullPath + '/comments'}" class="comment"><i class="fa fa-comment"></i> Commentaires</RouterLink>
                <p class="info"><span>{{ Story.views }}<i class="fa fa-eye"></i></span>
                    <span class="span">{{ Story.love }}<i class="fa fa-heart"></i></span>
                    <span class="span">{{  Story.comments.length }}<i class="fa fa-comments"></i></span></p>
                <h5 class="card-title  mt-4">{{ Story.title }}</h5>
                <p class="card-text" v-html="Story.content"></p>
                
            </div>
        </div>
    </div>

</template>

<script>
import req from '../store'

export default{
    props: ['storyPath'],
    data(){
        return{
            Story: {},
            Loading: true
        }
    },
    methods: {
        getOneStory(){
            console.log(this.$route.fullPath)
            req.get(this.$route.fullPath)
                .then(response => {
                    this.Story = response.data
                    this.Loading = false
                    console.log(this.Story)
                    this.readTime()
                }).catch(error => {
                    console.log(error.response)
                });
        },

        readTime(){
            const content = this.Story.content.replace("\\n", " ")
            const numberWord = content.split(" ").length;
            const timeRead = (numberWord / 150)
            this.Story.timeRead = Math.round(timeRead) === 0 ? 1 : Math.round(timeRead)
        }
    },
    created() {
        this.getOneStory()

    }
}
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
white-space:pre-wrap;
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