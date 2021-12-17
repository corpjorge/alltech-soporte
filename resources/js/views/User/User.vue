<template>
    <div class="card card-body blur shadow-blur mt-4">
        <div class="card-header pb-0 p-3">
            <div class="row">
                <div class="col-md-6 d-flex align-items-center">
                    <h6 class="mb-0">{{ user.name }}</h6>
                </div>
                <div class="col-md-6 text-right">
                    <button @click="showFormEdit" type="button" class="btn bg-gradient-dark mb-0" data-bs-toggle="modal" data-bs-target="#editUserModal"><i class="fas fa-pen"></i>&nbsp;&nbsp;Editar</button>
                </div>

                <form v-if="show" @submit.prevent="updateUser" class="row g-3">
                    <div v-if="success" style="color: white;" class="alert alert-success alert-dismissible fade show" role="alert">
                        Datos actualizados
                        <button @click="hidden" type="button" class="btn-close"></button>
                    </div>

                    <div class="col-md-4">
                        <label for="name" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="name" v-model="user.name" >
                        <small style="color: red">{{ errors.name ? errors.name[0] : ''}}</small>
                    </div>

                    <div class="col-md-4">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model="user.email" >
                        <small style="color: red">{{ errors.email ? errors.email[0] : ''}}</small>
                    </div>

                    <div class="col-md-4">
                        <label for="phone" class="form-label">Celular</label>
                        <input type="number" class="form-control" id="phone" v-model="user.phone" >
                        <small style="color: red">{{ errors.phone ? errors.phone[0] : ''}}</small>
                    </div>

                    <div class="col-md-4">
                        <label for="zone" class="form-label">Zona</label>
                        <input type="text" class="form-control" id="zone" v-model="user.zone" placeholder="Zona norte" >
                        <small style="color: red">{{ errors.zone ? errors.zone[0] : ''}}</small>
                    </div>

                    <div class="col-md-4">
                        <label for="area" class="form-label">Area</label>
                        <input type="text" class="form-control" id="area" v-model="user.area" placeholder="Contabilidad" >
                        <small style="color: red">{{ errors.area ? errors.area[0] : ''}}</small>
                    </div>

                    <div class="col-md-4">
                        <label for="role_id" class="form-label">Rol</label>
                        <select class="form-select" id="role_id" v-model="user.role_id">
                            <option value="1">Administrador</option>
                            <option value="2">Técnico</option>
                            <option value="3">Coordinador</option>
                            <option value="4">Usuario</option>
                        </select>
                        <small style="color: red">{{ errors.area ? errors.area[0] : ''}}</small>
                    </div>

                    <div class="col-12">
                        <button class="btn btn-primary" type="submit">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Device/>
    <Service/>
</template>

<script>
import axios from "axios";
import Device from "./Device";
import Service from "./Service";

export default {
    name: "User",
    components: {Service, Device},
    data(){
        return {
            user: {},
            service: null,
            show: null,
            errors: {},
            success: null
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
        async getUser() {
            await axios.get('/user/'+this.$route.params.id).then(response => { this.user = response.data })
        },
        showFormEdit() {
            if (!this.show){
                return this.show = true
            }
            this.show = null
        },
        async updateUser() {
            this.success = null;
            await axios.put('/user/'+this.$route.params.id, this.user).then(() => this.success = true ).catch(error => { this.errors = error.response.data.errors; })
        },
        hidden() {
            this.success = null;
        }
    }
}
</script>

<style scoped>

</style>
