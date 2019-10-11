<template>
    <div :class="`modal ${value != false ? 'is-active' : ''}`">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head has-background-primary">
                <p class="modal-card-title has-text-white">Crear nuevo contacto</p>
                <button class="delete" aria-label="close" @click="close(false)"></button>
            </header>
            <section class="modal-card-body">
                <form @submit.prevent="store()">
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
                            <button class="button is-info">Guardar</button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
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
        }
    },

    methods: {
        
        store() {
            axios.post(config.URLAPI + 'contacts', this.form)
            .then( (response) => {
                this.form.name = '';
                this.form.phone = '';
                this.form.location = '';
                alert(response.data.message);
                this.close(false);
                this.index();
            });
        },

        index() {
            this.$emit('index');
        },

        close(val) {
            this.$emit('close', val);
        }
    }
}
</script>

<style scoped>
</style>

