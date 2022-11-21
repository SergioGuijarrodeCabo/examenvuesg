<template>

<div>
    <h1>{{cubo.nombre}}</h1>
    <img src="cubo.imagen" style="width: 150px; height: 100px">
    <h2>Modelo: {{cubo.modelo}}</h2>
    <h2>Marca: {{cubo.marca}}</h2>
    <h2>Color: {{cubo.color}}</h2>
    <h2>Precio: {{cubo.precio}}</h2>
    <h2>Valoracion: {{cubo.valoracion}}/5 estrellas</h2>

<br><br><br><br>
    <h2>COMENTARIOS</h2>

    <table  v-if="comentarios" class="table table-bordered table-dark">
        <thead>

        </thead>

        <tbody>
            <tr v-for="comentario in comentarios" :key="comentario.idComentario">
                <td>{{comentario.idUsuario}}</td>
                <td>{{comentario.comentario}}</td>
                <td>{{comentario.fecha}}</td>
            </tr>
        </tbody>    
    </table>

</div>



    
</template>

<script>
import CuboService from '../services/CuboService.js';
const service = new CuboService();

export default {

    
        name: "CubosDetalle",
        data() {
            return {
                marca: "",
                cubo: [],
                id: 0,
                comentarios: []
            }
        },
        
        mounted() {
            this.id = this.$route.params.id;

            service.getCubo(this.id).then((response) => {
                this.cubo = response;
                console.log(this.cubo);
            });

            service.getComentarios(this.id).then((response) => {
                this.comentarios = response;
                console.log(this.comentarios);
            });
            
        }
       
         

}
</script>
