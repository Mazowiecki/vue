<template>
    <div id="app" class="global_container">
        <router-view/>
    </div>
</template>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .global_container {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
    }
</style>