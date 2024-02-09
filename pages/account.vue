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
</script>

<style lang="scss">

</style>