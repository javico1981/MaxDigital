//1 - Definimos los componentes de ruta

const Inicio = {
    template:`<div class="inicio contenedor">
                <h1 class="animate__animated animate__bounce">INICIO</h1>
              </div>
             `
    };
const Portfolio = {
    template:`<div class="portfolio contenedor">
                <h1 class="animate__animated animate__backInDown">PORTFOLIO</h1>                    
              </div>
              `
    };
const Contacto = {
    template:`<div class="contacto contenedor">
                <h1 class="animate__animated animate__slideInRight">PORTFOLIO</h1>
                </div>
             `
    };

//2 - Definimos el arreglo de rutas
const routes = [
    {path:'/', component: Inicio},
    {path:'/portfolio', component: Portfolio},
    {path:'/contacto', component: Contacto}
]

//3 - Creamos una instancia de vuerouter y como parametro pasamos un objeto que contiene las rutas definidad en el punto 2
const router = new VueRouter({routes})

//4 - Creamos una instanacia de Vue y montamos la el ambito (#app)
new Vue({
    router
}).$mount('#app')