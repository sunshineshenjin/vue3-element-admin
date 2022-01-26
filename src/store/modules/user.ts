import { Module } from 'vuex';
import RootState from '../model/RootState';
import UserState from '../model/UserState';

export const userStoreModule:Module<UserState,RootState> = {
    state: {
        token: 'token',
        isLogin: false,
        roles: ['admin']
    },
    getters: {
        getToken: state => {
            return state.token
        }
    }
}