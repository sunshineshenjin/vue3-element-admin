// typings.d.ts or router.ts
import 'vue-router'
declare module 'vue-router' {
    interface RouteMeta {
          /**
         * 当前菜单的角色,默认值为空
         */
           roles?: Array<string>;
        /**
         * 是否在菜单树中隐藏, 默认值为false
         */
        hideInMenu?: boolean;
        /**
         * 是否是需要身份信息，此时忽略 roles, 默认值为false
         */
        requireAuth?: boolean
    }
}
