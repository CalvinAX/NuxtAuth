<template>
    <div>
        <h1>Login Page</h1>
        <div>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button @click="">Login</button>
        </div>
    </div>
</template>

<script setup>
    const { signIn, status } = useAuth();
    signIn('admin@email.com', 'admin');
    console.log(status());
</script>

<style lang="scss">

</style>