<template>
    <div class="col-12">
        <div class="multisteps-form mb-5">
            <div class="row">
                <div class="col-12 col-lg-8 mx-auto my-3">
                    <div class="multisteps-form__progress">
                        Soporte FYCLS
                    </div>
                </div>
            </div>
            <template v-if="$route.query.token === service.token">
                <div v-if="!service.qualify" class="col-12 col-lg-8 m-auto">
                    <h4>Calificar</h4>
                    <div class="rating">
                        <span class="rating__result"></span>
                        <i class="rating__star far fa-star" id="star1" @click="qualify(1)"></i>
                        <i class="rating__star far fa-star" id="star2" @click="qualify(2)"></i>
                        <i class="rating__star far fa-star" id="star3" @click="qualify(3)"></i>
                        <i class="rating__star far fa-star" id="star4" @click="qualify(4)"></i>
                        <i class="rating__star far fa-star" id="star5" @click="qualify(5)"></i>
                    </div>
                </div>
                <div  v-if="show" class="col-12 col-lg-8 m-auto my-2">
                    <a href="http://fyclsingenieria.com/" class="btn btn-sm bg-gradient-info ms-auto mb-0 js-btn-next">Guardar</a>
                </div>

            </template>
            <template v-if="empty">
                <div class="col-12 col-lg-8 m-auto">
                    <div class="multisteps-form__form" style="height: 327px;">
                        <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
                             data-animation="FadeIn">
                            <div class="multisteps-form__content">
                                <h5>
                                    Error al obtener datos del servicio:
                                    <b style="color: #ff4f4f;"> {{$route.params.id}}</b>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="row">
                    <div class="col-12 col-lg-8 m-auto my-3">
                        <div class="multisteps-form__form">
                            <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
                                 data-animation="FadeIn">
                                <h5 class="font-weight-bolder mb-0">Servicio numero: {{ service.id }}</h5>
                                <p class="mb-0 text-sm">Consulte la información</p>
                                <div class="multisteps-form__content">
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Cliente: </label>
                                            <label style="font-weight: 400;">
                                                <template v-for="workplace in workplaces">
                                                    <template v-if="workplace.id === service.user.workplace_id">
                                                        {{ workplace.name }}
                                                    </template>
                                                </template>
                                            </label>
                                        </div>
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>Usuario</label>
                                            <label style="font-weight: 400;"> {{ service.user.name }} </label>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Solicitud</label>
                                            <label style="font-weight: 400;"> {{ service.reason }} </label>
                                        </div>
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>Tipo de Atención</label>
                                            <label style="font-weight: 400;"> {{ service.type_attention }} </label>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Tipo de Servicio</label>
                                            <label style="font-weight: 400;"> {{ service.type_service }} </label>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <label>Fecha Solicitud</label>
                                            <label style="font-weight: 400;"> {{ service.created_date }} </label>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Ingeniero</label>
                                            <label style="font-weight: 400;"> {{ service.agent.name }} </label>
                                        </div>
                                        <div class="col-12 col-sm-6">
                                            <label>Prioridad</label>
                                            <label style="font-weight: 400;"> {{ service.priority }} </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="service.closing_date || close" class="col-12 col-lg-8 m-auto my-3">
                        <div class="multisteps-form__form">
                            <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
                                 data-animation="FadeIn">
                                <h5 class="font-weight-bolder mb-0">Servicio cerrado</h5>
                                <p class="mb-0 text-sm">Información</p>
                                <div class="multisteps-form__content">
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Fecha Atención: </label>
                                            <label style="font-weight: 400;"> {{ service.attention_date }} </label>
                                        </div>
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>Solución</label>
                                            <label style="font-weight: 400;"> {{ service.solution }} </label>
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Observaciones</label>
                                            <label style="font-weight: 400;"> {{ service.observations }} </label>
                                        </div>
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>Fecha cierre</label>
                                            <label style="font-weight: 400;"> {{ service.closing_date }} </label>
                                        </div>
                                    </div>
                                    <div v-if="service.qualify" class="row mt-3">
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>calificación</label>
                                            <div class="icon icon-sm bg-gradient-info shadow text-center border-radius-md d-flex align-items-center justify-content-center" style="color: white;">
                                               {{ service.qualify }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-else class="col-12 col-lg-8 m-auto my-3  ">
                        <form @submit.prevent="updateService" class="multisteps-form__form mb-8">
                            <div class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
                                 data-animation="FadeIn">
                                <h5 class="font-weight-bolder mb-0">Cerrar servicio</h5>
                                <p class="mb-0 text-sm">Ingresa la información</p>
                                <div class="multisteps-form__content">
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Fecha Atención</label>
                                            <input class="form-control" type="datetime-local" id="meeting-time"
                                                   v-model="service.attention_date">
                                        </div>
                                        <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                                            <label>Solución</label>
                                            <input class="multisteps-form__input form-control" type="text"
                                                   v-model="service.solution">
                                        </div>
                                    </div>
                                    <div class="row mt-3">
                                        <div class="col-12 col-sm-6">
                                            <label>Observaciones</label>
                                            <input class="multisteps-form__input form-control" type="text"
                                                   v-model="service.observations">
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
                                    <div v-if="error" class="alert alert-danger" role="alert" style="color: #ffffff ">
                                        Todos los campos deben estar llenos
                                    </div>
                                    <div class="button-row d-flex mt-4">
                                        <button class="btn bg-gradient-dark ms-auto mb-0 js-btn-next" type="submit"
                                                title="Next">Cerrar servicio
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ServiceShow",
    data() {
        return {
            service: {user: {}, agent: {}},
            workplaces: null,
            close: false,
            empty: null,
            show: false,
            moment: false,
            error: false,
        }
    },
    mounted() {
        this.getService()
        this.getWorkplaces();
    },
    methods: {
        getService() {
            axios.get('/service/' + this.$route.params.id + '/edit').then(response => {
                this.service = response.data
            }).catch(error => this.empty = error)
        },
        getWorkplaces() {
            axios.get('/workplaces').then(response => {
                this.workplaces = response.data
            })
        },
        updateService() {
            this.moment = true;

            if (!this.service.attention_date){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.solution){
                this.error = true;
                return this.moment = false;
            }
            if (!this.service.observations){
                this.error = true;
                return this.moment = false;
            }

            this.error = false;

            axios.put('/service/' + this.$route.params.id, this.service).then(() => {
                this.close = true;
                this.getService()
            } );
        },
        qualify(num) {

            const star1 = document.getElementById("star1");
            const star2 = document.getElementById("star2");
            const star3 = document.getElementById("star3");
            const star4 = document.getElementById("star4");
            const star5 = document.getElementById("star5");

            if (num === 1) {
                star1.classList.add("fas");

                star2.classList.remove("fas");
                star3.classList.remove("fas");
                star4.classList.remove("fas");
                star5.classList.remove("fas");
            }

            if (num === 2) {
                star1.classList.add("fas");
                star2.classList.add("fas");

                star3.classList.remove("fas");
                star4.classList.remove("fas");
                star5.classList.remove("fas");
            }

            if (num === 3) {
                star1.classList.add("fas");
                star2.classList.add("fas");
                star3.classList.add("fas");

                star4.classList.remove("fas");
                star5.classList.remove("fas");
            }

            if (num === 4) {
                star1.classList.add("fas");
                star2.classList.add("fas");
                star3.classList.add("fas");
                star4.classList.add("fas");

                star5.classList.remove("fas");
            }

            if (num === 5) {
                star1.classList.add("fas");
                star2.classList.add("fas");
                star3.classList.add("fas");
                star4.classList.add("fas");
                star5.classList.add("fas");
            }

            this.show = true;

            axios.put('/service/qualify/' + this.$route.params.id, {qualify: num})
        }
    }
}
</script>

<style scoped>
.rating {
    position: relative;
    width: 180px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .3em;
    padding: 5px;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 0 2px #b3acac;
}

.rating__result {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(-10px) translateX(-5px);
    z-index: -9;
    font: 3em Arial, Helvetica, sans-serif;
    color: #ebebeb8e;
    pointer-events: none;
}

.rating__star {
    font-size: 1.3em;
    cursor: pointer;
    color: #dabd18b2;
    transition: filter linear .3s;
}

.rating__star:hover {
    filter: drop-shadow(1px 1px 4px gold);
}

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
