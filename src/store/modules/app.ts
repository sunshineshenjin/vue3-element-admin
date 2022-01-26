import { GetterTree, Module } from "vuex";
import AppState from "../model/AppState";
import RootState from "../model/RootState";

const appGetter: GetterTree<AppState, RootState> = {
    appName: state => {
        return state.appName
    }
}
export const appStoreModule:Module<AppState, RootState> = {
    state: {
        appName: 'abbba',
    },
    getters: appGetter,
    mutations: {
    },
    actions: {
    }
}