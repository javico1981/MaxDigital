<template>
  <div class="home">
     
    <main>
     <Header></Header>
     
      <div class="slider-area ">
        <div class="slider-active">
          <!-- Single Slider -->
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
                      
                      </P>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
      <section class="categories-area section-padding3">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              
              <div class="section-tittle mb-50 justify-text">
                <h2>
                  Identidad digital en la red social.
                </h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-cat text-center mb-50">
                <div class="cat-icon">
                  <span class="flaticon-pen"></span>
                </div>
                <div class="cat-cap">
                  <h5><a href="#">Blogs</a></h5>
                  <p>
                    Espacio en Internet que puedes usar para expresar tus ideas, intereses,
                    experiencias y opiniones.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-cat text-center mb-50">
                <div class="cat-icon">
                  <span class="flaticon-speaker"></span>
                </div>
                <div class="cat-cap">
                  <h5><a href="#">Videos</a></h5>
                  <p>
                  Cuida el contenido visual que envias y el que recibes.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="single-cat text-center mb-50">
                <div class="cat-icon">
                  <span class="flaticon-portfolio"></span>
                </div>
                <div class="cat-cap">
                  <h5><a href="#">Redes Sociales</a></h5>
                  <p>
                    Te permite conocer a miles de personas que se conectan a partir de intereses o valores
                    comunes por medio de Internet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 <Footer></Footer>
    
    </main>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default {
  name: "Home",

  components:{
    Header,
    Footer,
        
    },

};
</script>
