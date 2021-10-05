<template>
    <div>
        <div class="logo"><Logo/></div>
        <el-card class="card">
            <div class="header">Welcome</div>
            <div class="sub-header">Just enter your email and password</div>
            <el-form class="mt-4" ref="form" :model="form" label-width="100px" @submit.prevent="onSubmit">
                <el-form-item label="Email">
                    <el-input v-model="form.email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" show-password></el-input>
                </el-form-item>
                <div class="footer">
                    <el-button :loading="loading" @click="onSubmit"
                    >Login</el-button>
                </div>
            </el-form>
        </el-card>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Logo from '@/components/Logo.vue'
    import {store} from '@/store';
    import ElMessage from "element-plus/lib/components/message";



    export default defineComponent({
        name: "Login",
        components:{
            Logo
        },
        data(){
            return {
                form:{
                    email:'',
                    password:''
                },
                loading:false
            }
        },
        computed:{
          error(){
              return store.getters('')
          }
        },
        methods:{
            async onSubmit(){
                try {
                    this.loading = true
                    const result = await store.dispatch('auth/login', this.form)
                    if(result){
                        this.$router.push('/games')
                    }
                }
                catch(error){
                    let err = store.getters.GET_MESSAGE
                    ElMessage({message:err.text, type:err.status})
                }
                finally{
                    this.loading = false;
                }

            }
        }
    })
</script>

<style scoped>
.logo{
    height: 4rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
}
    .card{
        background: #eaeaea;
        color: #2d0707;
    }
    .header{
        font-size: x-large;
        font-weight: bold;
    }
    .sub-header{
        font-size: small;
    }
    .mt-4{
        margin-top: 2rem ;
    }
    .footer{
        display: flex;
        justify-content: center;
    }
</style>