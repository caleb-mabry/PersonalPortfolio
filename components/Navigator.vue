<template>
    <nav>
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/project">Projects</nuxt-link>
        <nuxt-link to="/blog" class="disabled">Blog</nuxt-link>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
nav {
    justify-content: space-between;
    font-weight: bold;
    padding: 1%;
    width: 100%;
    height: auto;
    font-size: 2rem;
    background-color: #009e72;
    box-shadow: 0px 5px 5px -5px black;
}
a {
    padding: 1%;
    text-decoration: none;
    color: whitesmoke;
    transition: .3s all;
}
a:hover {
    color: #2f495e;
}
.nuxt-link-exact-active {
    text-decoration: underline;
}
.disabled {
    opacity: .6;
    pointer-events: none;
}
</style>