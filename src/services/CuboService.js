
import axios from 'axios';

export default class CuboService {


    getMarcas() {
        return new Promise(function(resolve) {
            var request = "api/cubos/marcas";
            var urlCubos = "https://apitiendacubos2022.azurewebsites.net/"
            var url = urlCubos + request;
         
            axios.get(url).then(function(response) {
                resolve(response.data);
            });    
        });
    }   


    getCubosMarca(marca) {
        return new Promise(function(resolve) {
        var request = "api/cubos/cubosmarca/"+marca;
        var urlCubos = "https://apitiendacubos2022.azurewebsites.net/"
        var url = urlCubos + request;
        console.log(url);
        axios.get(url).then(function(response) {
            resolve(response.data);
        }); 

        });
    }

    getCubo(id) {
        return new Promise(function(resolve) {
            var request= "api/cubos/"+id;
            var urlCubos = "https://apitiendacubos2022.azurewebsites.net/"
            var url = urlCubos + request;
            axios.get(url).then(function(response) {
                resolve(response.data);
            });
        });
    }

    getComentarios(id) {
        return new Promise(function(resolve) {
            var urlCubos = "https://apitiendacubos2022.azurewebsites.net/"
            var request = "api/comentarioscubo/getcomentarioscubo/"+id;
            var url = urlCubos + request;
            axios.get(url).then(function(response) {
                resolve(response.data);
            });

        });

    }

    validarUsuario(email, password) {
        var json = {
            "email": email,
            "password": password
        }
        var header = {
            "Content-Type": "application/json",
            "responseType": "json"
        }
        return new Promise(function(resolve){
            var request = "api/manage/login";
            var urlCubos = "https://apitiendacubos2022.azurewebsites.net/"
            var url = urlCubos+request;
            console.log(url);
            axios.post(url, json, {headers : header}).then(response=>{
                console.log(response.data);
                localStorage.setItem("token", response.data);
                resolve(response.data)
            })
        })
    }

    getToken() {
        return localStorage.getItem("token");
    }


    


}