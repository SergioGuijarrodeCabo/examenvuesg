<template>
    <div class="container-fluid">
    <h1 class="text-primary">Cubos por marca</h1>
    <table class="table table-bordered table-dark" v-if="marca">
        <thead>
            <tr>
                
                <th>Nombre</th>
                <th>Imagen</th>
                <th>Precio</th>
               
                <th>Detalles</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="cubo in cubos" :key="cubo.idCubo">
                <td>{{cubo.nombre}}</td>
                <td class="text-center">
                    <img src="cubo.imagen" width="100" class="img-thumbnail"/>
                </td>
                <td>{{cubo.precio}}€</td>
                <td>

                    <router-link :to="'/cubosdetalle/' + cubo.idCubo"  class="btn btn-warning">DETALLES</router-link>
                </td>
                
            </tr>
        </tbody>
    </table>
</div>
</template>


<script>
import CuboService from '../services/CuboService.js';
const service = new CuboService();

export default {
        name: "CubosMarca",
        data() {
            return {
                marca: null,
                cubos: []
            }
        },

        mounted() {

            this.marca = this.$route.params.marca;
           
           service.getCubosMarca(this.marca).then((response) => {
                this.cubos = response;
                console.log(this.cubos);
            });
     
        },

        updated() {
            this.marca = this.$route.params.marca;
            //this.cargarCubos();
            console.log(this.marca);
        },




}

</script>
