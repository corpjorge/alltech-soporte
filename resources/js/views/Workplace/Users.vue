<template>
    <div class="row">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header pb-0 p-3">
                    <div class="row">
                        <div class="col-md-3 d-flex align-items-center">
                            <h6 class="mb-0">Usuarios</h6>
                        </div>
                        <div class="col-md-3 d-flex align-items-center">

                        </div>
                        <div class="col-md-3 text-right ms-md-auto pe-md-3 d-flex align-items-end">
                            <div class="input-group">
                                <span class="input-group-text text-body"><i class="fas fa-search" aria-hidden="true"></i></span>
                                <input type="text" class="form-control" placeholder="Buscar...">
                            </div>
                        </div>
                        <div class="col-md-3 text-right">
                            <button class="btn bg-gradient-dark mb-0" href="javascript:;"><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Añadir usuario</button>
                        </div>
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center justify-content-center mb-0">
                            <thead>
                            <tr>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ver</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="user in users" :key="user.id" >
                                <td>
                                    <div class="d-flex px-2">
                                        <div class="my-auto">
                                            <router-link :to="{ name: 'User', params: { id: user.id } }">
                                                <h6 class="mb-0 text-sm">{{ user.name }}</h6>
                                            </router-link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex px-2">
                                        <div class="my-auto">
                                            <h6 class="mb-0 text-sm">{{ user.email }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <router-link :to="{ name: 'User', params: { id: user.id } }" class="btn btn-link text-secondary mb-0">
                                        <i class="fas fa-angle-right text-xl"></i>
                                    </router-link>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Users",
    data(){
        return{
            users: null
        }
    },
    mounted() {
        this.getUsers();
    },
    methods: {
        async getUsers() {
            await axios.get('workplace/'+this.$route.params.id+'/users').then(response => { this.users = response.data })
        }
    }
}
</script>

<style scoped>

</style>
