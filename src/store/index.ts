import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore, StoreOptions, Module } from "vuex";
import { userStoreModule } from './modules/user'
import { appStoreModule } from './modules/app'
import RootState from "./model/RootState";


// 定义injection key
export const key: InjectionKey<Store<RootState>> = Symbol()

export const store: Store<RootState> = createStore<RootState>({
    modules: {
        app: appStoreModule,
        user: userStoreModule
    }
})

export function useStore<T> () {
    return baseUseStore<T>(key)
}