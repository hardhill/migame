<template>
    <div class="mi-screen">
        <div class="dark">
            <div class="container">
                <router-view/>
            </div>
        </div>

    </div>
</template>

<script lang="ts">

    import { defineComponent } from "@vue/runtime-core";
    export default defineComponent({
        name: 'AuthLayout',

    })
</script>

<style scoped>
    .mi-screen{
        background-size: auto;
        background-position: center;
        background-image: url("/images/abstract.jpg");
        height: 100vh;
        width: 100%;
        background-repeat: repeat;
    }
    .dark {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-color: rgba(135, 154, 114, 0.7);
        /* z-index: 1; */
        width: 100%;
        height: 100vh;
    }
    .container{
        max-width: 20rem;
        margin: auto;

    }
</style>