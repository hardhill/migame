<template>

    <el-container style="height:100%;">
        <el-aside class="" width="220px">

            <el-menu
                    :style="{'height':'100%'}"
                    default-active="0"
            >

                <el-menu-item index="1">
                    <i class="el-icon-close"></i>
                    <span>Exit</span>
                </el-menu-item>
                <el-menu-item index="1">
                    <i class="el-icon-close"></i>
                    <span>Exit</span>
                </el-menu-item>

            </el-menu>
        </el-aside>
        <el-main>Main</el-main>
    </el-container>

</template>

<script>
    export default {
        name: "Games"
    }
</script>

<style scoped>



</style>