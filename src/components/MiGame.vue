<template>
    <div :id="containerId" v-if="downloaded" />
    <div class="placeholder" v-else>
        Downloading ...
    </div>
</template>

<script>
    import {ref} from "@vue/reactivity";
import { nextTick, onMounted, watch } from '@vue/runtime-core';

    export default {
        name: "MiGame",
        props:['name'],
        setup(props){
            var game = null
            const gameInstance = ref(null)
            const containerId = ref('game-container')
            const downloaded = ref(false)
            onMounted(async ()=>{
                
                switch(props.name){
                    case 1:
                        game = await import(/* webpackChunkName: "game" */'@/game1/game')
                        break
                    case 2:
                        game = await import(/* webpackChunkName: "game" */'@/game2/game')
                        break

                }
                
                downloaded.value = true
                nextTick(()=>{
                    gameInstance.value = game.launch(containerId.value)
                })
            })
            
            return {containerId,downloaded,gameInstance}
        }
    }
</script>

<style scoped lang="scss">
.placeholder{
    font-size: 2rem;
    font-family: 'Courier New', Courier, monospace;
}
</style>