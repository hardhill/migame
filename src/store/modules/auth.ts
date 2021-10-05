import axios from 'axios'

const JWT_KEY_NAME = 'migame-token'
const API_SERVER = 'http://ongameapi/api'


export default {
    namespaced:true,
    state(){
        return {
            token:{
                access_token:window.localStorage.getItem(JWT_KEY_NAME)
            }

        }
    },
    mutations:{
        setToken(state:any,token:any){
            state.token = token
            window.localStorage.setItem(JWT_KEY_NAME,token.access_token)
        },
        logout(state:any){
            state.token = null
            window.localStorage.removeItem(JWT_KEY_NAME)
        }
    },
    actions:{
        async login({commit}:any, payload:Object){
            axios.defaults.withCredentials = true
            try {
                let result = await axios.post(API_SERVER+'/login',payload)
                commit('setToken',result.data)
                return true

            } catch (error:any) {
                let payload = {
                    text:error.response.data.message,
                    status:'error'
                }
                commit('SET_MESSAGE',payload,{root:true})
                throw error.response.data
            }

        },
        async register({commit}:any, payload:Object){
            try {
                let data =  await axios.post(API_SERVER+'/register',payload)
                console.log(data.data)
            } catch (error:any) {
                console.log(error.response)
                throw new Error(error.response)
            }


        },
        async logout({commit}:any){
            try{
                let result = await axios.get(API_SERVER+'/logout')
                commit('SET_MESSAGE',result.data,{root:true})
            }catch(error:any){
                throw error.response.data
                
            }finally{
                commit('logout')
                
            }
            
        }
    },
    getters:{
        token(state:any):Object{
            return state.token
        },
        isAuthenticated(state:any):Boolean{
            return !!state.token.access_token
        }
    }
}