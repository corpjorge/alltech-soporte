<template>
    <form  @submit.prevent="createPublication" class="row g-3">
        <div v-if="success" style="color: white;" class="alert alert-success alert-dismissible fade show" role="alert">
            Publicación creada
            <button @click="hidden" type="button" class="btn-close"></button>
        </div>

        <div class="col-md-4">
            <label for="type" class="form-label">Tipo de solicitud </label>
            <select name="type" class="form-select" id="type" v-model="publication.type">
                <option value="Tipó 1"> Tipó 1</option>
                <option value="Tipó 2"> Tipó 2</option>
                <option value="Tipó 3"> Tipó 3</option>
            </select>
            <small style="color: red">{{ errors.type ? errors.type[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="achievement" class="form-label">¿Que se desea lograr?</label>
            <input type="text" class="form-control" id="achievement" v-model="publication.achievement">
            <small style="color: red">{{ errors.achievement ? errors.achievement[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="message" class="form-label">¿Qué mensaje quiere comunicar?</label>
            <textarea class="form-control" id="message" rows="3" v-model="publication.message"></textarea>
            <small style="color: red">{{ errors.message ? errors.message[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="information" class="form-label">¿Datos de contacto a incluir?</label>
            <textarea class="form-control" id="information" rows="3" v-model="publication.information"></textarea>
            <small style="color: red">{{ errors.information ? errors.information[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="description" class="form-label">Descripción </label>
            <textarea class="form-control" id="description" rows="3" v-model="publication.description"></textarea>
            <small style="color: red">{{ errors.description ? errors.description[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label class="form-label">Medios de publicación </label><br>



            <div class="row">
                <div class="col-6">
                    <input class="form-check-input check" type="checkbox" value="Mensaje de texto" id="Mensaje de texto" v-model="publication.media" >
                    <label class="custom-control-label" for="Mensaje de texto">Mensaje de texto</label>
                    <br>
                    <input class="form-check-input check" type="checkbox" value="Correo masivo" id="Correo masivo" v-model="publication.media" >
                    <label class="custom-control-label" for="Correo masivo">Correo masivo</label>
                    <br>
                    <input class="form-check-input check" type="checkbox" value="Redes sociales" id="Redes sociales" v-model="publication.media">
                    <label class="custom-control-label" for="Redes sociales">Redes sociales</label>
                </div>
                <div class="col-6">
                    <input class="form-check-input check" type="checkbox" value="Pagina web" id="Pagina web" v-model="publication.media" >
                    <label class="custom-control-label" for="Pagina web">Pagina web</label>
                    <br>
                    <input class="form-check-input check" type="checkbox" value="Televisor" id="Televisor" v-model="publication.media" >
                    <label class="custom-control-label" for="Televisor">Televisor</label>
                    <br>
                    <input class="form-check-input check" type="checkbox" value="Impresion" id="Impresion" v-model="publication.media">
                    <label class="custom-control-label" for="Impresion">Impresion</label>
                </div>
            </div>


            <small style="color: red">{{ errors.media ? errors.media[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="public" class="form-label">¿A qué publico va dirigido?</label>
            <input type="text" class="form-control" id="public" v-model="publication.public">
            <small style="color: red">{{ errors.public ? errors.public[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="date" class="form-label">Fecha de publicación  </label>
            <input class="form-control" id="date" type="datetime-local" v-model="publication.date"  >
            <small style="color: red">{{ errors.date ? errors.date[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="file" class="form-label">Cargar documento  </label>
            <input @change="file" class="form-control" id="file" type="file"  >
            <small style="color: red">{{ errors.public ? errors.public[0] : ''}}</small>
        </div>

        <div class="col-12">
            <button class="btn bg-gradient-info btn-lg w-100" type="submit">Solicitar publicación</button>
        </div>
    </form>
</template>

<script>
import axios from "axios";

export default {
    name: "CreatePublication",
    data() {
        return {
            publication: {
                media: []
            },
            errors: {},
            success: null
        }
    },
    methods: {
        file(event) {
            this.publication.file = event.target.files[0];
        },
        createPublication() {

            const data = new FormData();

            data.append('type',    this.publication.type ? this.publication.type : '')
            data.append('achievement',    this.publication.achievement ? this.publication.achievement : '')
            data.append('message',    this.publication.message ? this.publication.message : '')
            data.append('information',    this.publication.information ? this.publication.information : '')
            data.append('description',    this.publication.description ? this.publication.description : '')
            data.append('media',    this.publication.media ? this.publication.media : '')
            data.append('public',    this.publication.public ? this.publication.public : '')
            data.append('date',    this.publication.date ? this.publication.date : '')
            data.append('file',    this.publication.file ? this.publication.file : '')

            axios.post('publications/create', data )
                .then(() => {
                    this.success = true;
                    this.publication =  { media: [] }
                    this.errors = {}
                }).catch(error => { console.log(error) })

        }
    }
}
</script>

<style scoped>

.check {
    border-style: solid;
    border-color: #1a1717;
    border-radius: 1rem;
}

</style>
