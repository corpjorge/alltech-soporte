<template>
    <div class="fixed-plugin" :class="{ show: isShow}">
        <a class="fixed-plugin-button text-dark position-fixed px-3 py-2" @click="navbarFixed">
            <i class="fas fa-comment-alt py-2"></i>
        </a>
        <div class="card shadow-lg">
            <div class="card-header pb-0 pt-3">
                <div class="float-start">
                    <h5 class="mt-3 mb-0">Chat Asesor</h5>
                    <p>Conectando con un asesor.</p>
                </div>
                <div class="float-end mt-4">
                    <button @click="navbarFixed" class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                        <i class="fa fa-close"></i>
                    </button>
                </div>
                <!-- End Toggle Button -->
            </div>
            <hr class="horizontal dark my-1">
            <div class="card-body pt-sm-3 pt-0">

                <hr class="horizontal dark my-sm-4">
                <a class="btn bg-gradient-dark w-100" href="https://www.creative-tim.com/product/soft-ui-dashboard">Chatear</a>
                <a class="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard">Preguntas frecuentes</a>
                <div class="w-100 text-center">
                    <a class="github-button" href="https://github.com/creativetimofficial/soft-ui-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub">Star</a>
                    <h6 class="mt-3">Gracias por contar con nosotros!</h6>
                    <a href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                        <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                        <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FixedPlugin",
    data(){
        return{
            isShow: null
        }
    },
    methods: {
        navbarFixed() {
            if (this.isShow){
                this.isShow = null
            } else {
                this.isShow = 'show'
            }
        }
    }
}
</script>

<style scoped>

</style>
