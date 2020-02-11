<template>
    <div class="bookItem">
        <md-card md-with-hover>
            <router-link :to="editArticleLink">
                <md-card-header>
                    <div class="md-title">{{id}} - {{name}}</div>
                </md-card-header>
                <md-card-content>
                    <p>Opis: {{description}}</p> <br>
                    <img class="itemImg" :src="picture" alt="">
                    <p>Cena: <b>{{price}}</b></p>
                </md-card-content>
            </router-link>
        </md-card>
    </div>
</template>

<script>
    export default {
        name: "bookItem",
        props: ['id', 'picture', 'price', 'name', 'description'],
        methods: {},
        computed: {
            editArticleLink() {
                return { name: 'item', params: { slug: this.id } };
            }
        }
    }
</script>

<style scoped>
    .md-card {
        width: 320px;
        margin: 8px;
        display: inline-block;
        vertical-align: top;
        margin-top: 15px;
    }

    .itemImg {
        height: 300px;
    }
</style>