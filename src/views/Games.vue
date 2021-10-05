<template>
    <h2>GAMES</h2>
    <el-container style="height:100%;">
        
        <el-aside class="" width="220px">

            <el-menu
                    :style="{'height':'100%'}"
                    default-active="0"
            >
                <el-menu-item index="1" @click="ngame=1">
                    <i class="el-icon-basketball"></i>
                    <span>Game one</span>
                </el-menu-item>

                <el-menu-item index="2" @click="ngame=2">
                    <i class="el-icon-football"></i>
                    <span>Game two</span>
                </el-menu-item>

                <el-menu-item index="3" @click="logoff">
                    <i class="el-icon-switch-button"></i>
                    <span>Exit</span>
                </el-menu-item>

            </el-menu>
        </el-aside>
        <el-main><MiGame :name="ngame"/></el-main>
    </el-container>

</template>

<script>
    import MiGame from '@/components/MiGame.vue'
    import {reactive, ref} from 'vue'
import { store } from '@/store'
import router from '@/router'

    export default {
        name: "Games",
        components:{
            MiGame
        },
        setup(){
            const ngame = reactive(1)
            const logoff = async()=>{
                await store.dispatch('auth/logout')
                router.push('/login')
            }
            return {ngame, logoff}
        }
    }
</script>

<style scoped>



</style>