<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
       
        <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
            </li>
          
            <li class="nav-item">
                <router-link to="/login" class="nav-link active">Login</router-link>
            </li>
          
             
            <li class="nav-item dropdown" v-if="marcas">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas
            </a>
            <ul class="dropdown-menu">
                <li v-for="marca in marcas" :key="marca">
                    <router-link :to="'/cubosmarca/' + marca" >
                        {{marca}}
                    </router-link>
                    
                   </li>
                
            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import CuboService from '../services/CuboService.js';
const service = new CuboService();

    export default {
        name: "MenuComponent",


        data() {
            return {
                marcas: [],
            }
        },

        mounted() {
            service.getMarcas().then(data => {
                this.marcas = data;
            });
        }
    }


</script>