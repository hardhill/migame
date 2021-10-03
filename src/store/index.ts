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
        messages:[],
        error: {}
    },
    mutations: {
        SET_ERROR(state,payload){
            state.error = {
                message: payload.message
            }
        }
    },
    actions: {

    },
    getters:{

    },
    modules: {
        auth
    }
});