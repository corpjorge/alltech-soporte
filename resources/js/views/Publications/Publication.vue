<template>
    <div class="card mt-4">
        <span v-if="publication.state === 0" class="badge badge-sm bg-gradient-warning">Pendiente</span>
        <span v-if="publication.state === 1" class="badge badge-sm bg-gradient-info">En proceso</span>
        <span v-if="publication.state === 2" class="badge badge-sm bg-gradient-primary">Terminado</span>
        <span v-if="publication.state === 3" class="badge badge-sm bg-gradient-success">Publicado</span>
        <span v-if="publication.state === 4" class="badge badge-sm bg-gradient-secondary">Cerrado</span>
        <br>
        <div class="card-body p-3">
            <p class="mb-0"><b>Tipo de solicitud:</b> {{ publication.type }} </p>
            <p class="mb-0"><b>¿Que se desea lograr?:</b> {{ publication.achievement }} </p>
            <p class="mb-0"><b>¿Qué mensaje quiere comunicar?:</b> {{ publication.message }} </p>
            <p class="mb-0"><b>¿Datos de contacto a incluir?:</b> {{ publication.information }} </p>
            <p class="mb-0"><b>Descripción:</b> {{ publication.description }} </p>
            <p class="mb-0"><b>¿A qué publico va dirigido?:</b> {{ publication.public }} </p>
            <p class="mb-0"><b>Fecha de publicación:</b> {{ publication.date }} </p>
            <p class="mb-0"><b>Medios de publicación:</b> {{ publication.media }} </p>

            <hr class="horizontal dark">
            <div class="d-flex">
                <button @click="updatePublication(0)" type="button" class="mt-2 me-2 btn bg-gradient-warning">Pendiente</button>
                <button @click="updatePublication(1)" type="button" class="mt-2 me-2 btn bg-gradient-info">En proceso</button>
                <button @click="updatePublication(2)" type="button" class="mt-2 me-2 btn bg-gradient-primary">Terminado</button>
                <button @click="updatePublication(3)" type="button" class="mt-2 me-2 btn bg-gradient-success">Publicado</button>
                <button @click="updatePublication(4)" type="button" class="mt-2 me-2 btn bg-gradient-secondary">Cerrado</button>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    name: "Publication",
    data(){
        return {
            publication: {},
        }
    },
    mounted() {
        this.getPublication()
    },
    methods: {
        getPublication(){
            axios.get('publication/'+this.$route.params.id).then(response => {  this.publication = response.data })
        },
        updatePublication(state){
            axios.post('publication/'+this.$route.params.id, { state: state }).then(() => { this.getPublication() });
        }
    }
}
</script>

<style scoped>

</style>
