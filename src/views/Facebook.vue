<template>
  <div id="app">
   
    <main>
      <Header></Header>

       <!-- Header Start -->
      <div class="slider-area ">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap">
                  <h2>Facebook</h2>
                  <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb">
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Header End -->
      <!-- Services Area Start -->
      <section class="services-area  services-padding">
        <div class="container">

        <div class="project-heading mb-35">
            <div class="row align-items-end">
              <div class="col-lg-6">
                <!-- Section Tittle -->
                <div class="section-tittle">
                  <h2>Gestiona tu red social a partir de un audio juego</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="properties__button">
                  <!--Nav Button  -->
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                     
                      <!--<a
                        class="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Información</a>-->
                      <a
                        class="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        >Descripción del Audio Juego</a>
                      <a
                        class="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                        >Audio Juego
                      </a>
                      
                    </div>
                  </nav>
                  <!--End Nav Button  -->
                </div>
              </div>
            </div>
          </div>




          <!--CLASE ROW DEL APARTADO DEL MENU QUE ESTA EN LA PARTE INFERIOR-->
          <div class="row">
            <div class="col-12">
              <!-- Nav Card -->
              <div class="tab-content active" id="nav-tabContent">

                <!-- Card TWO PARTE DE LA ETIQUETA DE INFORMACION-->
                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="services-caption">
                    <div class="row">



 <!-- slider Area Start
      <div class="slider-area ">
        <div class="slider-active">
          
          <div class="single-slider slider-height d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-8">
                  <div class="hero__caption">
                    <span data-animation="fadeInUp" data-delay=".4s"
                      >UTPL</span
                    >
                    <h1 data-animation="fadeInUp" data-delay=".6s">
                      Gestiona tu Identidad Digital
                    </h1>
                    <P data-animation="fadeInUp" data-delay=".8s"
                      >
                      Engloba todas las acciones que nos identifican en Internet: 
                      fotos que publicamos o en las que nos etiquetan, comentarios, 
                      likes, retweets, posts y peticiones online que firmamos. 
                      <br>Este tipo de acciones online crean una reputación digital, 
                      una opinión que los demás se forman acerca de nosotros con lo que ven publicado.
                      
                      </P>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
             
                      


                    </div>
                  </div>
                </div>

                <!-- Card THREE PARTE DE LA ETIQUETA INDICACIONES PARA EL JUEGO-->
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div class="services-caption">
                    <div class="row">


      <!-- Brand Area End -->
      <!-- Contact Info Start -->
      <div
        class="contact-info-area w-padding2"
        data-background="assets/img/gallery/section_bg04.jpg"
      >
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-xl-5 col-lg-7">
              <div class="contact-caption mb-50">
                <h3>Descripción</h3>
                <p>
                  Por medio del audio juego los ciudadanos podran conocer lo que realmente abarca una identidad digital para la red social de Facebook.
                </p>
                
              </div>
            </div>
            <div class="col-xl-5 col-lg-5">
          
          <img src="../assets/Inicio-imagen.jpg" alt="" width="500" />

            </div>
          </div>
        </div>
      </div>




                    </div>
                  </div>
                </div>

                <!-- card FUR PARTE DE LA ETIQUETA DEL AUDIO JUEGO -->
                <div
                  class="tab-pane fade"
                  id="nav-last"
                  role="tabpanel"
                  aria-labelledby="nav-last-tab">
                  <div class="services-caption">
                    <div class="row">


  <!--SEGUNDO CONTENEDOR-->
   <!-- Want To Work Start -->
      <section class="wantToWork-area w-padding2">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-8 col-md-8">
              <div class="wantToWork-caption wantToWork-caption2">
                <h2>Participa de un audio juego para mejorar tu identidad digital</h2>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3">
              <a href="Juego.html" class="btn btn-black f-right">Ir al Audio Juego</a>
            </div>
          </div>
        </div>
      </section>



                    </div>
                  </div>
                </div>




       
       




              </div>
              <!-- End Nav Card -->
            </div>            
          </div>

        </div>
      </section>
      
      <!-- Services Area End -->
      
    </main>
 
  </div>
 
</template>

<script>

import Header from "@/components/layouts/Header";
export default {
name:"Facebook",

    components:{
      Header,
     
      
      

    },


};
</script>

<style></style>
