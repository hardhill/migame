import { createStore, createLogger } from 'vuex'
import auth from './modules/auth'

// @ts-ignore
const plugins = [];
if(process.env.NODE_ENV == 'development'){
    plugins.push(createLogger())
};

export const store =  createStore({
    plugins,
    state: {
        message:{}
    },
    mutations: {
        
        SET_MESSAGE(state,payload:any){
            state.message = payload
        }
        
    },
    actions: {

    },
    getters:{
        
        GET_MESSAGE(state):object{
            let m = state.message
            state.message = {}
            return m
        }
    },
    modules: {
        auth
    }
});