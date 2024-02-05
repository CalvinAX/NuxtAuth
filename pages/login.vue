<template>
    <div>
        <h1>Login Page</h1>
        <div>
            <input v-model="email" type="text" placeholder="Email" />
            <input v-model="password" type="password" placeholder="Password" />
            <input v-model="save" type="radio" />
            <button @click="login()">Login</button>
        </div>
        <p>{{ status }}</p>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/account">Account</NuxtLink>
    </div>
</template>

<script setup>
    var email = ref('');
    var password = ref('');
    var save = ref('');

    const { signIn, status, data } = useAuth();

    async function login() {
        console.log(save.value);
        await signIn(email.value, password.value);
        if (save.value == 'on') {
            const cookie = useCookie('auth', {
                maxAge: 500,
            });
            cookie.value = 1;
        }
    }
</script>

<style lang="scss">

</style>