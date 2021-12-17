<template>
    <div class="col-12">
        <div class="multisteps-form mb-5">
            <div class="row">
                <div class="col-12 col-lg-8 mx-auto my-5">
                    <div class="multisteps-form__progress">
                        Soporte FYCLS
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-8 m-auto">
                    <form @submit.prevent="createUser" class="multisteps-form__form mb-8" style="height: 410px;">
                        <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active" data-animation="FadeIn">
                            <h5 class="font-weight-bolder mb-0">Crear usuario</h5>
                            <p class="mb-0 text-sm">Ingresa la información</p>
                            <div class="multisteps-form__content">
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Empresa</label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="user.workplace_id" required >
                                            <option v-for="workplace in workplaces" :value="workplace.id">{{workplace.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Nombre</label>
                                        <input class="multisteps-form__input form-control" type="text" v-model="user.name" required>
                                    </div>
                                    <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                        <label>Correo</label>
                                        <input class="multisteps-form__input form-control" type="email" v-model="user.email" required>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Telefono</label>
                                        <input class="multisteps-form__input form-control" type="number" v-model="user.phone">
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <label>Area </label>
                                        <input class="multisteps-form__input form-control" type="text" v-model="user.area">
                                    </div>
                                </div>
                                <div v-if="moment" id="fountainG">
                                    <div id="fountainG_1" class="fountainG"></div>
                                    <div id="fountainG_2" class="fountainG"></div>
                                    <div id="fountainG_3" class="fountainG"></div>
                                    <div id="fountainG_4" class="fountainG"></div>
                                    <div id="fountainG_5" class="fountainG"></div>
                                    <div id="fountainG_6" class="fountainG"></div>
                                    <div id="fountainG_7" class="fountainG"></div>
                                    <div id="fountainG_8" class="fountainG"></div>
                                </div>
                                <br>
                                <div v-if="error" class="alert alert-danger" role="alert" style="color: #ffffff ">
                                    Todos los campos deben estar llenos
                                </div>
                                <div class="button-row d-flex mt-4">
                                    <button class="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="submit" title="Next">Crear</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Users",
    data() {
        return {
            user: {},
            workplaces: {},
            moment: false,
            error: false,
        }
    },
    mounted() {
        this.getWorkplace();
    },
    methods: {
        createUser() {
            this.moment = true;
            axios.post('/user', this.user).then(() => { this.moment = false; this.user = {} })
        },
        getWorkplace() {
            axios.get('/workplaces').then(response => this.workplaces = response.data)
        }
    }
}
</script>

<style scoped>

</style>
