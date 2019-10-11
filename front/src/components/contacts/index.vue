<template>
    <div class="column is-10 is-offset-1">
        <nav class="panel">
            <div class="panel-heading has-background-primary has-text-white">
                <div class="columns">
                    <div class="column">
                        Lista de contactos 
                    </div>
                    <div class="column new-contact">
                        <button type="button" class="button is-info" @click="create()">
                            Nuevo contacto
                        </button>
                    </div> 

                    <create-contact :value="modal" @close="closeModal" @index="index" />

                </div> 
            </div>
            <div class="panel-block">
                <table class="table is-stripe is-hoverable is-fullwidth">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Número de telefono</th>
                            <th>Localidad</th>
                            <th colspan="2">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="contact in contacts" :key="contact._id">
                            <td>{{ contact.name }}</td>
                            <td>{{ contact.phone }}</td>
                            <td>{{ contact.location }}</td>
                            <td>
                                <button class="button is-warning" @click.prevent="edit(contact._id)">Modificar</button>
                                <button class="button is-danger" @click="destroy(contact._id)">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import config from '../config/config.js';
import createContact from './create';

export default {
    components: {
        createContact
    },

    data() {
        return {
            contacts: [],
            modal: false,
        }
    },

    mounted() {
        this.index();
    },

    methods: {
        index() {
            axios.get(config.URLAPI + 'contacts').then( (response) => {
                this.contacts = response.data;
            });
        },

        create() {
            this.modal = true;
        },

        closeModal(val) {
            this.modal = val;
        },

        edit(id) {
            this.$router.push('/contact/edit/' + id);
        },

        destroy(id) {

            if(confirm('¿Estas seguro de eliminar este contacto?')) {
                axios.delete(config.URLAPI + 'contacts/' + id).then( (response) => {
                    alert(response.data.message);
                    this.index();
                });
            } else {
                return false;
            }
        }
    }
}

</script>

<style scoped>
    .new-contact {
        text-align: right;
    }
</style>
