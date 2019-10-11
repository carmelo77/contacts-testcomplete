<template>
<div class="column is-10 is-offset-1">

    <h3 class="title">Actualizar contacto {{ this.form.name }}</h3>

    <form @submit.prevent="update()">
        <div class="field">
            <label class="label">Nombre</label>
            <div class="control">
                <input class="input" type="text" v-model="form.name" placeholder="Nombre">
            </div>
        </div>
        <div class="field">
            <label class="label">Número de telefono</label>
            <div class="control">
                <input class="input" type="text" v-model="form.phone" placeholder="+000000">
            </div>
        </div>
        <div class="field">
            <label class="label">Localidad</label>
            <div class="control">
                <input class="input" type="text" v-model="form.location" placeholder="Localidad">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <button class="button is-info">Actualizar</button>
                <router-link to="/contacts/" class="button is-info is-pulled-right">Atrás</router-link>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
import config from '../config/config.js';

export default {
    props: {
        value: Boolean
    },

    data() {
        return {
            form: {
                name: '',
                phone: '',
                location: ''
            },
            id: this.$route.params.id,
        }
    },

    mounted() {
        this.edit();
    },

    methods: {

        edit() {
            axios.get(config.URLAPI + 'contacts/' + this.id).then( (response) => {
                this.form.name = response.data.name;
                this.form.phone = response.data.phone;
                this.form.location = response.data.location;
            });
        },
        
        update() {
            axios.put(config.URLAPI + 'contacts/' + this.id, this.form)
            .then( (response) => {
                alert(response.data.message);
                this.$router.push('/contacts');
            });
        },
    }
}
</script>

<style scoped>
.title {
    font-size: 22px;
    font-family: 'Lora', serif;
}
</style>

