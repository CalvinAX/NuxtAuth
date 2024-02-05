export default defineNuxtRouteMiddleware(() => {
    const { cookieSignIn } = useAuth();
    cookieSignIn();
})