export type UserObject = {
    user: {
        id: number,
        email: string,
        password: string,
    },
    loggedIn: string,
    custom: {},
}