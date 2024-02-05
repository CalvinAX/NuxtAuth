export default defineNuxtRouteMiddleware(() => {
    const { status, cookieSignIn } = useAuth();
    cookieSignIn();
    if(status === 'authenticated') {
        return;
    } else {
        return navigateTo('/login');
    }
})