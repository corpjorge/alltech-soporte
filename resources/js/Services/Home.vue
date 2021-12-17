<template>
    <div class="col-12">
        <div class="multisteps-form mb-5">
            <div class="row">
                <div class="col-12 col-lg-8 mx-auto my-5">
                    <div class="multisteps-form__progress">
                        Soporte
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-lg-8 m-auto">
                    <form @submit.prevent="createService" class="multisteps-form__form mb-8" style="height: 410px;">
                        <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active" data-animation="FadeIn">
                            <h5 class="font-weight-bolder mb-0">Crear servicio</h5>
                            <p class="mb-0 text-sm">Ingresa la información</p>
                            <div class="multisteps-form__content">
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Cliente</label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="workplace_id" @change="getUsers">
                                            <option v-for="workplace in workplaces" :value="workplace.id">{{workplace.name}}</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                        <label>Usuario</label>
                                        <select class="form-control" id="users"  v-model="service.user_id">
                                            <option v-for="user in users" :value="user.id" >{{user.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Solicitud</label>
                                        <input class="multisteps-form__input form-control" type="text" v-model="service.reason">
                                    </div>
                                    <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                        <label>Tipo de Atención</label>
                                        <select v class="form-control" id="exampleFormControlSelect1"  v-model="service.type_attention">
                                            <option>Remoto</option>
                                            <option>En sitio</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Tipo de Servicio</label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="service.type_service">
                                            <option value="PC">PC</option>
                                            <option value="Portátil">Portátil</option>
                                            <option value="Correo">Correo</option>
                                            <option value="Office">Office</option>
                                            <option value="Impresión">Impresión</option>
                                            <option value="Telefonía">Telefonía</option>
                                            <option value="VPN">VPN</option>
                                            <option value="Publica">Publica</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <label>Ingeniero </label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="service.agent_id">
                                            <option v-for="agent in agents" :value="agent.id" >{{agent.name}}</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="col-12 col-sm-6">
                                        <label>Prioridad</label>
                                        <select class="form-control" id="exampleFormControlSelect1" v-model="service.priority">
                                            <option value="Bajo">Bajo</option>
                                            <option value="Medio">Medio</option>
                                            <option value="Alto">Alto</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
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

    <div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="myModalLabel">Numero de caso</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <h3 style="#bb3123">{{ caso }}</h3>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            workplaces: null,
            workplace_id: null,
            users: null,
            caso: null,
            service: {},
            caso_create: {},
            agents: {},
            moment: false,
            error: false,
        }
    },
    mounted() {
        this.getWorkplaces();
        this.getAgents();
    },
    methods: {
        getWorkplaces() {
            axios.get('/workplaces').then(response => { this.workplaces = response.data })
        },
        getUsers(){
            axios.get('/workplace/'+this.workplace_id+'/users').then( response => { this.users = response.data })
        },
        getAgents(){
            axios.get('/agents').then( response => { this.agents = response.data })
        },
        createService(){
            this.moment = true;
            if (!this.workplace_id){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.user_id){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.reason){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.type_attention){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.type_service){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.agent_id){
                this.error = true;
                return this.moment = false;
            }

            this.error = false;

            axios.post('/service', this.service ).then(response => {
                this.caso_create = this.service
                this.caso = response.data;
                this.service = {}
                var myModal = new bootstrap.Modal(document.getElementById('myModal'), options)
                myModal.show();
                this.moment = false;
            })
        }
    }

}
</script>

<style scoped>
#fountainG{
    position:relative;
    width:234px;
    height:28px;
    margin:auto;
}

.fountainG{
    position:absolute;
    top:0;
    background-color:rgb(212,23,212);
    width:28px;
    height:28px;
    animation-name:bounce_fountainG;
    -o-animation-name:bounce_fountainG;
    -ms-animation-name:bounce_fountainG;
    -webkit-animation-name:bounce_fountainG;
    -moz-animation-name:bounce_fountainG;
    animation-duration:1.5s;
    -o-animation-duration:1.5s;
    -ms-animation-duration:1.5s;
    -webkit-animation-duration:1.5s;
    -moz-animation-duration:1.5s;
    animation-iteration-count:infinite;
    -o-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
    animation-direction:normal;
    -o-animation-direction:normal;
    -ms-animation-direction:normal;
    -webkit-animation-direction:normal;
    -moz-animation-direction:normal;
    transform:scale(.3);
    -o-transform:scale(.3);
    -ms-transform:scale(.3);
    -webkit-transform:scale(.3);
    -moz-transform:scale(.3);
    border-radius:19px;
    -o-border-radius:19px;
    -ms-border-radius:19px;
    -webkit-border-radius:19px;
    -moz-border-radius:19px;
}

#fountainG_1{
    left:0;
    animation-delay:0.6s;
    -o-animation-delay:0.6s;
    -ms-animation-delay:0.6s;
    -webkit-animation-delay:0.6s;
    -moz-animation-delay:0.6s;
}

#fountainG_2{
    left:29px;
    animation-delay:0.75s;
    -o-animation-delay:0.75s;
    -ms-animation-delay:0.75s;
    -webkit-animation-delay:0.75s;
    -moz-animation-delay:0.75s;
}

#fountainG_3{
    left:58px;
    animation-delay:0.9s;
    -o-animation-delay:0.9s;
    -ms-animation-delay:0.9s;
    -webkit-animation-delay:0.9s;
    -moz-animation-delay:0.9s;
}

#fountainG_4{
    left:88px;
    animation-delay:1.05s;
    -o-animation-delay:1.05s;
    -ms-animation-delay:1.05s;
    -webkit-animation-delay:1.05s;
    -moz-animation-delay:1.05s;
}

#fountainG_5{
    left:117px;
    animation-delay:1.2s;
    -o-animation-delay:1.2s;
    -ms-animation-delay:1.2s;
    -webkit-animation-delay:1.2s;
    -moz-animation-delay:1.2s;
}

#fountainG_6{
    left:146px;
    animation-delay:1.35s;
    -o-animation-delay:1.35s;
    -ms-animation-delay:1.35s;
    -webkit-animation-delay:1.35s;
    -moz-animation-delay:1.35s;
}

#fountainG_7{
    left:175px;
    animation-delay:1.5s;
    -o-animation-delay:1.5s;
    -ms-animation-delay:1.5s;
    -webkit-animation-delay:1.5s;
    -moz-animation-delay:1.5s;
}

#fountainG_8{
    left:205px;
    animation-delay:1.64s;
    -o-animation-delay:1.64s;
    -ms-animation-delay:1.64s;
    -webkit-animation-delay:1.64s;
    -moz-animation-delay:1.64s;
}



@keyframes bounce_fountainG{
    0%{
        transform:scale(1);
        background-color:rgb(65,69,148);
    }

    100%{
        transform:scale(.3);
        background-color:rgb(255,255,255);
    }
}

@-o-keyframes bounce_fountainG{
    0%{
        -o-transform:scale(1);
        background-color:rgb(65,69,148);
    }

    100%{
        -o-transform:scale(.3);
        background-color:rgb(255,255,255);
    }
}

@-ms-keyframes bounce_fountainG{
    0%{
        -ms-transform:scale(1);
        background-color:rgb(65,69,148);
    }

    100%{
        -ms-transform:scale(.3);
        background-color:rgb(255,255,255);
    }
}

@-webkit-keyframes bounce_fountainG{
    0%{
        -webkit-transform:scale(1);
        background-color:rgb(65,69,148);
    }

    100%{
        -webkit-transform:scale(.3);
        background-color:rgb(255,255,255);
    }
}

@-moz-keyframes bounce_fountainG{
    0%{
        -moz-transform:scale(1);
        background-color:rgb(65,69,148);
    }

    100%{
        -moz-transform:scale(.3);
        background-color:rgb(255,255,255);
    }
}

</style>
