<template>
    <div>
        <h1>Login Page</h1>
        <div>
            <p>Username: </p>
            <p>Email: {{ data.user.email }}</p>
            <p>Custom Value: {{ data.custom }}</p>
            <p>Status: {{ status }}</p>
        </div>
        <NuxtLink to="/login">Login</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <br />
        <button @click="signOut()">Sign out</button>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'auth',
    })

    const { status, data, signOut } = useAuth();

    await useAuthBuilder('test', 'test');
    await useAuthBuilder('test2', 'test2');
</script>

<style lang="scss">

</style>