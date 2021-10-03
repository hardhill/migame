<template>
    <div class="mi-screen">
        <div class="dark">
            <div class="container">TEXT</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Welcome"
    }
</script>

<style scoped>
.mi-screen{
    background-size: cover;
    background-position: center;
    background-image: url("/images/welcome.jpeg");
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
}
.dark {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-color: rgba(196, 226, 235, 0.657);
    /* z-index: 1; */
    width: 100%;
    height: 100vh;
}
    .container{
        max-width: 10rem;
        margin: auto;

    }
</style>