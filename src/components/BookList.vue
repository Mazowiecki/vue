<template>
    <div class="bookList">
        <div v-for="data in datas" :key="data.id">
            <bookItem v-on:click="openItem('fds')" :id="data.id" :picture="data.picture" :price="data.price" :name="data.name" :description="data.description"></bookItem>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import bookItem from "@/components/bookItem";

    export default {
        name: 'bookList',
        components: {
            bookItem
        },
        data() {
            return {
                datas: null
            }
        },
        mounted() {
            axios.get('http://91.241.62.142/api/v1/products/products')
                .then(response => {
                    this.datas = response.data;
                    //console.log(response);
                })
        },
        created: function(){
        }
    }
</script>
<style>
    .bookList {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }
</style>