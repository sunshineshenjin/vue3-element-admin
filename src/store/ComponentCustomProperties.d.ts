// vuex.d.ts
import { ComponentCustomProperties } from "vue";
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
    // 定义自己的 state
    interface State {
        count: number
    }
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}