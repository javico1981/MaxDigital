<template>
    <div class="home">
    
<main>
   <Header></Header>
     
      <div class="brand-area section-padding5">
        <div class="container">
          <div class="brand-active brand-border pt-8 pb-10">
            <div class="single-brand">
              <img alt="" src="../assets/BannerWebTarjetas.jpg"/>
            </div>
          </div>
        </div>
      </div>

       <section class="about-area section-paddingt20">
    <div class="container">

      <div class="container2">

      <h3 class="title">Protege tu Identidad Digital en Internet</h3>

      <div class="box-container">

        <div class="box">
          <span class="number">01</span>
          <i class="fas fa-code"></i>
          <h3>Utiliza contraseñas seguras</h3>
          <p>
            Las contraseñas seguras deben tener como mínimo 16 caracteres, 
            combinar mayúsculas, minúsculas y caracteres alfanuméricos.
          </p>
        </div>

        <div class="box">
          <span class="number">02</span>
          <i class="fas fa-bullhorn"></i>
          <h3>Repasa los permisos y las políticas de privacidad</h3>
          <p>
            Repasa esas políticas de privacidad y revisa los permisos que concedes a cada red social.
          </p>
        </div>

        <div class="box">
          <span class="number">03</span>
          <i class="fas fa-code"></i>
          <h3>Verificar la seguridad de aplicaciones antes de instalarlas</h3>
          <p>
            Antes de instalar una aplicación, cerciórate de que el proveedor es seguro y verifica los permisos que requiere. 
          </p>
        </div>

        <div class="box">
          <span class="number">04</span>
          <i class="icon-exclamation-triangle"></i>
          <h3>Ten cuidado cuando te soliciten información en la red</h3>
          <p>
            Verifica la identidad de quien te solicita y requiere información para descartar que se trate de un fraude.
          </p>
        </div>

        <div class="box">
          <span class="number">05</span>
          <i class="fas fa-code"></i>
          <h3>Sé cuidadoso con la información que compartes en línea</h3>
          <p>Procede a verificar que tu informacion personal sea utilizada para propósitos legítimos.</p>
        </div>

        <div class="box">
          <span class="number">06</span>
          <i class="fas fa-code"></i>
          <h3>Haz uso de herramientas de analítica web</h3>
          <p>Los ciudadados pueden comprobar quienes son en un entorno en linea, registrarse en nuevos servicios,
            de manera segura y llevar a cabo controles de identidad en tiempo real.
          </p>
        </div>




      </div>

      </div>

      
    
      
    </div>

    </section>


       <div class="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-7">
              <div class="contact-caption mb-80">
                <h3>Identidad Digital en Redes Sociales</h3>
                <p>
                 Proporciona tus datos sólo a personas conocidas y confiables.
                </p>
                <router-link to="/MediosDigitales" class="submit-btn2 text-center pt-10" type="submit">Comenzar</router-link>
              </div>
            </div>
            <div class="col-xl-5 col-lg-2 pt-7">
              <img src="../assets/facebook-image2.png" alt="" width="500" class="img" />
            </div>
          </div>
        </div>
      </div>
    </main>
     <Footer></Footer>
    </div>
</template>


<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default {
    name:"Ini2",

    components:{
        Header,
        Footer,
       

    },
};
</script>


<style >
  .single-brand img{
    width:94.9rem;
    height: 35vw;
  }
.container .img{
  top:6px;
 
}
  </style>