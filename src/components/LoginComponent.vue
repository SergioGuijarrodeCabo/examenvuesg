<template><div>
    <div v-if="logeo">
        <h1 style="color: green">USUARIO LOGUEADO</h1>
    </div>
    <div v-else>
        <h1 style="color: red">USUARIO NO LOGUEADO</h1>
    </div>

    <form method="post" v-on:submit.prevent="login()"> 
        <label>Introduzca su usuario</label>
        <input type="text" class="form-control"
                    v-model="email"/><br/>
        <label>Introduzca su contraseña</label>
        <input type="text" class="form-control"
                    v-model="password"/><br/>

        <button type="submit" class="btn btn-primary">Login</button>
    </form>


    </div>
</template>

<script>
import CuboService from '@/services/CuboService';

const service = new CuboService();

export default {
        name: "LoginComponent",
        methods: {
            login() {
            service.validarUsuario(this.email, this.password).then(response => {
                this.token = response;
                localStorage.setItem('token', response.response);
                this.logeo = true;
            
                console.log("YA SE ESTÁ LOGUEADO");

            });
        }
        },
        data() {
            return {
                //email: "user1@mail.com",
                //password: "12345",
                email: "",
                password: "",
                token: "",
                logeo: false, 
                status: false
            
            }
        },

        mounted() {
          
            service.getToken().then(response => {
                this.token = response;
              
                this.logeo = true;
            
                console.log("YA SE ESTÁ LOGUEADO");

            });

        },
        
      

    

       
}
</script>
