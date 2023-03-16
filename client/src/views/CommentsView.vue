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
            <div class="comment">
                <p>J'aime bien</p>
            </div>
            <div class="comment">
                <p>J'aime bien</p>
            </div>
            <div class="comment">
                <p>J'aime bien</p>
            </div>
        </div>
        <div class="foot">
            <form>
                <div>
                    <input type="text" placeholder="Laisser un commentatire">
                    <button type="submit"><i class="fa fa-send"></i></button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

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
    color: var(--color-four)
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


.foot form input {
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

.foot form button {
    border: none;
    outline: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: var(--color-one);
    padding: 8px;
}
</style>