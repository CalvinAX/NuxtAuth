<template>
    <div>
        <h1>Home Page</h1>
        <div>
            <p>Nothing interesting here...</p>
            <p>Status: {{ status }}</p>
        </div>
        <div>
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/account">Account</NuxtLink>
        </div>
        <p>{{ data.loggedIn }}</p>
        <p>{{ data.user }}</p>
    </div>
</template>

<script setup>

const { status, data } = useAuth();

</script>

<style lang="scss"></style>