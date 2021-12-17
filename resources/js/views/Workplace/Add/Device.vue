<template>
    <form  @submit.prevent="createDevice" class="row g-3">
        <div v-if="success" style="color: white;" class="alert alert-success alert-dismissible fade show" role="alert">
            Datos actualizados
            <button @click="hidden" type="button" class="btn-close"></button>
        </div>

        <div class="col-md-4">
            <label for="type" class="form-label">Nombre</label>
            <select name="type" class="form-select" id="type" v-model="device.type">
                <option value=""></option>

            </select>
            <small style="color: red">{{ errors.type ? errors.type[0] : ''}}</small>
        </div>

        <div class="col-md-4">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="device.name" >
            <small style="color: red">{{ errors.name ? errors.name[0] : ''}}</small>
        </div>

        <div class="col-12">
            <button class="btn btn-primary" type="submit">Añadir</button>
        </div>
    </form>
</template>

<script>
export default {
    name: "Device",
    data() {
        return {
            device: {},
            errors: {}
        }
    }
}
</script>

<style scoped>

</style>
