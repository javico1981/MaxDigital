<template>
    <div id="home">
        
    <main>

         <Header></Header>
 
      <div class="slider-area ">
        <div class="slider-height2 d-flex align-items-center">
          <div class="container">
            <div class="row">
              <div class="col-xl-12">
                <div class="hero-cap">
                  <h2>Medios Digitales</h2>
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
       
       <section class="about-area section-paddingt30">
    <div class="container">
          
        <div class="card">
            <div class="bg-image">
                 <img alt="" src="../assets/cardFacebook.jpg"/>
            </div>
            <div class="info">
                <h3>Identidad Digital</h3>
                <span><i class="fas fa-code"></i>Para Facebook</span>
                <div class="der">
                    <router-link to="/Facebook" class="boton1">Más Información</router-link>
                </div>
                <div class="icons">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
       
        <div class="card">
            <div class="bg-image">
                <img alt="" src="../assets/cardTwitter.jpg"/>
            </div>
            <div class="info">
                <h3>Identidad Digital</h3>
                <span><i class="fas fa-code"></i>Para Twitter</span>
                <div class="der">
                    <router-link to="/Twitter" class="boton1">Más Información</router-link>
                </div>
                <div class="icons">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
         
        <div class="card">
            <div class="bg-image">
                <img alt="" src="../assets/cardInstagram.jpg"/>
            </div>
            <div class="info">
                <h3>Identidad Digital</h3>
                <span><i class="fas fa-code"></i>Para Instagram</span>
                <div class="der">
                    <router-link to="/Instagram" class="boton1">Más Información</router-link>
                </div>
                <div class="icons">
                    <a href="#" class="fab fa-facebook-f"></a>
                    <a href="#" class="fab fa-twitter"></a>
                    <a href="#" class="fab fa-instagram"></a>
                </div>
            </div>
        </div>
      
    </div>

    </section>

    </main>

 <Footer></Footer>

    </div>
</template>


<script>
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
export default {
    name:"MediosDigitales",

      components:{
          Header,
          Footer,
          
       
        

    },
}
</script>