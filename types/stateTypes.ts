export type StateNav={
    active:boolean
}
export type ProviderValue={
    nav:StateNav,
    toggleNav?:()=>void,
    changeTheme?:()=>void
}