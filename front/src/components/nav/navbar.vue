<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link to="/" class="navbar-item" href="/">
            <!--<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
                <span>Contacts Test</span>
            </router-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">

                <router-link to="/contacts" class="navbar-item">
                    Contactos
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar-item span{
        font-size: 22px; 
        font-family: 'Lora', serif;
    }
</style>
