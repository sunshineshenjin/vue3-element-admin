export default interface UserState {
    token: string
    isLogin: boolean
    userName?: string
    roles: Array<string>
}