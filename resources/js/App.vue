<template>
    <Sidebar/>
    <main class="main-content mt-1 border-radius-lg">
        <Navbar/>
        <div class="container-fluid py-4">
            <router-view/>
            <Footer/>
        </div>
    </main>
    <FixedPlugin/>
</template>

<script>
import Sidebar from "./components/Layouts/Sidebar";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";
import FixedPlugin from "./components/Layouts/FixedPlugin";
export default {
    components: {FixedPlugin, Footer, Navbar, Sidebar}
}
</script>
