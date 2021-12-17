<template>
    <div class="row">
        <div class="col-12">
            <div class="card mb-4">
                <div class="card-header pb-0">
                    <h6>Entidades</h6>
                </div>
                <div class="card-body px-0 pt-0 pb-2">
                    <div class="table-responsive p-0">
                        <table class="table align-items-center justify-content-center mb-0">
                            <thead>
                            <tr>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Ver</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="workplace in workplaces" :key="workplace.id" >
                                <td>
                                    <div class="d-flex px-2">
                                        <div>
                                            <img :src="'/img/logos/'+workplace.domain+'.png'" class="avatar avatar-sm rounded-circle me-2">
                                        </div>
                                        <div class="my-auto">
                                            <router-link :to="{ name: 'Entity', params: { id: workplace.id } }">
                                                <h6 class="mb-0 text-sm">{{ workplace.domain }}</h6>
                                            </router-link>
                                        </div>
                                    </div>
                                </td>
                                <td class="align-middle">
                                    <router-link :to="{ name: 'Entity', params: { id: workplace.id } }" class="btn btn-link text-secondary mb-0">
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
    name: "Workplace",
    data() {
        return {
            workplaces: {}
        }
    },
    mounted() {
        this.getWorkplaces();
    },
    methods: {
        async getWorkplaces(){
            await axios.get('/workplaces').then(response => { this.workplaces = response.data })
        }
    }
}
</script>

<style scoped>

</style>
