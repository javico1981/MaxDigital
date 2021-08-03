<template>
  <div id="app">
  
    <main>
        <Header></Header>
      <div class="slider-area ">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap">
                  <h2>Instagram</h2>
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
   
      <section class="services-area  services-padding">
        <div class="container">

        <div class="project-heading mb-35">
            <div class="row align-items-end">
              <div class="col-lg-6">   
                <div class="section-tittle">
                  <h2>Gestiona tu red social a partir de un audio juego</h2>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="properties__button">
                  
                  <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                     
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
                 
                </div>
              </div>
            </div>
          </div>

           <div class="row">
            <div class="col-12">
           
              <div class="tab-content active" id="nav-tabContent">

                <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div class="services-caption">
                    <div class="row">

                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div class="services-caption">
                    <div class="row">


      
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
                  Por medio del audio juego los ciudadanos podran conocer lo que realmente abarca una identidad digital para la red social de Instagram.
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

            
                <div
                  class="tab-pane fade"
                  id="nav-last"
                  role="tabpanel"
                  aria-labelledby="nav-last-tab">
                  <div class="services-caption">
                    <div class="row">



      <section class="wantToWork-area w-padding2">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-xl-6 col-lg-8 col-md-8">
              <div class="wantToWork-caption wantToWork-caption2">
                <h2>Participa de un audio juego para mejorar tu identidad digital</h2>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-3">
              <a href="Juego3.html" class="btn btn-black f-right">Ir al Audio Juego</a>
            </div>
          </div>
        </div>
      </section>



                    </div>
                  </div>
                </div>


              



              </div>
              
            </div>
          </div>


        </div>
      </section>
     
    </main>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
export default {
  name: "Instagram",

    components:{
      Header,
     
    },


};
</script>

<style></style>
