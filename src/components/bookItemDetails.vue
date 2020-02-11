<template>
    <div id="bookItemDetails">
        <router-link to="/">
            <md-button class="md-primary">Menu</md-button>
        </router-link>
        <md-card v-if="data" md-with-hover>
            <md-card-header>
                <div class="md-title">{{data.id}} - {{data.name}}</div>
            </md-card-header>
            <md-card-content>
                <p>Opis: {{data.description}}</p> <br>
                <img class="itemImg" :src="data.picture" alt="">
                <p>Cena: <b>{{data.price}}</b></p>
            </md-card-content>
        </md-card>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "bookItemDetails",
        props: ['id'],
        data() {
            return {
                data: null
            }
        },
        created() {
            axios.get('http://91.241.62.142/api/v1/products/products/' + this.$route.params.slug)
                .then(response => {
                    this.data = response.data;
                    console.log(response);
                })
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