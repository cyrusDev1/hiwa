<template>
    <div class="comment-section">
        <div class="head">
            <div class="text">
                <i class="fa fa-arrow-left"></i>
            </div>
            <div>
                <span> Commentaires</span>
            </div>
            <div class="icon">
                <i class="fa fa-refresh"></i>
            </div>
        </div>
        <div class="comments">
            <div v-for="comment in Comments" class="comment">
                <p class="p">{{ comment }}</p>
            </div>
            
        </div>
        <div class="foot">
           
                <div>
                    <input type="text" v-model="commentText" placeholder="Laisser un commentatire">
                    <a @click="postComment()"><i class="fa fa-send"></i></a>
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
            Comments: [],
            Loading: true,
            commentText: ''
        }
    },
    methods: {
        getComments(){
            
            req.get(this.$route.fullPath)
                .then(response => {
                    this.Comments = response.data.reverse()
                    console.log(this.Comments)
                }).catch(error => {
                    console.log(error.response)
                });
        },
        postComment(){
            const value = {
                idStory: this.$route.params.id,
                comment: this.commentText,
            }

            req({
                method: 'post',
                url: '/comment',
                data: value
            })
                .then(response => {
                    console.log(response.data[0]);
                    this.Comments = response.data.reverse()
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response);
                        
                    }
                })
                this.commentText = "";

        }

    },
    created() {
        this.getComments()
    }
}
</script>

<style>
.head {
    position: fixed;
    display: flex;
    background-color: white;
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 0;
    z-index: 1;
}

.comments {
    position: relative;
    margin-top: 100px;
}

.comments .comment {
    background-color: white;
    margin: 0 20px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 15px;
    

}



.comments .comment p {
    display: flex;
    align-items: center;
    margin: 0;
    color: var(--color-four);
}

.foot {
    position: fixed;
    display: flex;
    background-color: white;
    padding: 12px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    z-index: 1;
    border-top: 0.1px solid var(--color-three);
}


.foot input {
    width: auto;
    border: none;
    outline: none;
    border-radius: 15px;
    background-color: var(--color-one);
    padding: 8px;
    color: var(--color-four);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

}

.foot a {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--color-one);
    padding: 8px;
}
</style>