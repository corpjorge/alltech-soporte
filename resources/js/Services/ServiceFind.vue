<template>
    <div class="container my-12">
        <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div class="col-xl-4 col-lg-5 col-md-7 mx-auto">
                <div class="card z-index-0">
                    <div class="card-header text-center pt-4">
                        <h5>Buscar</h5>
                    </div>
                    <div class="card-body">
                        <form role="form" class="text-start">
                            <div class="mb-3">
                                <input type="number" class="form-control" placeholder="Servicio" aria-label="Servicio" v-model="servicio">
                            </div>
                            <div class="text-center">
                                <button @click="findService" type="button" class="btn bg-gradient-info w-100 my-4 mb-2">Buscar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name: "ServiceEdit",
    data() {
        return {
            servicio: null
        }
    },
    methods: {
        findService() {
            this.$router.push({ name: 'Service-show', params: { id: this.servicio } })
        }
    }

}
</script>

<style scoped>

</style>
