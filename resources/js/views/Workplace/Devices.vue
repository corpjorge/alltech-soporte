<template>
    <div class="row">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header pb-0 p-3">
                    <div class="row">
                        <div class="col-md-3 d-flex align-items-center">
                            <h6 class="mb-0">Equipos</h6>
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
                            <router-link :to="{ name: 'Add-Device', params: { id: $route.params.id } }" class="btn bg-gradient-dark mb-0"><i class="fas fa-plus" aria-hidden="true"></i>&nbsp;&nbsp;Añadir equipo</router-link>
                        </div>
                    </div>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center justify-content-center mb-0">
                            <thead>
                            <tr>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Tipo</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Serial</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ver</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="device in devices" :key="device.id" >
                                <td>
                                    <div class="d-flex px-2">
                                        <div class="my-auto">
                                            <router-link :to="{ name: 'User', params: { id: device.id } }">
                                                <h6 class="mb-0 text-sm">{{ device.type }}</h6>
                                            </router-link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="d-flex px-2">
                                        <div class="my-auto">
                                            <h6 class="mb-0 text-sm">{{ device.serial }}</h6>
                                        </div>
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <router-link :to="{ name: 'User', params: { id: device.id } }" class="btn btn-link text-secondary mb-0">
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
    name: "Devices",
    data() {
        return {
            device: {}
        }
    },
    mounted() {
        this.getDevices();
    },
    methods: {
        async getDevices(){
            await axios.get('workplace/'+this.$route.params.id+'/devices').then(response => { this.device = response.data })
        }
    }
}
</script>
