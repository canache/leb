<template>
  <div>
      <!-- Page Content -->
    <header class="py-3 mb-3">  
        <figure class="fixedratio"></figure>
                  
    </header>
  
  <b-container>

    <b-row>
      <div class="col-md-8 mb-5">
        <h2>Lille Est Basket</h2>
        <hr>
        <p>L’association a pour but l’enseignement et le développement de la pratique du basket dans les quartiers Saint-Maurice Pellevoisin et Fives à Lille. </p>
        <p>A travers notamment le basket et les valeurs qu’il véhicule, l’association entend contribuer à la lutte contre l’exclusion, au développement de la mixité sociale et au renforcement de la citoyenneté au sein même de ces quartiers. </p>
          <p>Elle veut aussi valoriser ce sport comme un outil au service de la santé, du bien-être et de la qualité de vie de toute personne et particulièrement des personnes en situation de handicap. Elle souhaite par le basket participer à toute action visant l’inclusion sociale.</p>
        <a class="btn btn-danger-dark btn-lg" href="/inscription">Rejoins nous </a>
      </div>
      <div class="col-md-4 mb-5">
        <div class="fb-page" data-href="https://www.facebook.com/LilleEstBasket/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/LilleEstBasket/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/LilleEstBasket/">Lille Est Basket / LEB - Public</a></blockquote></div>
      </div>
    </b-row>
    <!-- /.row -->

    
     <div class="row">        
      <div class="col-md-12 mb-">
        <hr>
     
      <mdb-carousel :interval="8000" showControls>
        <mdb-carousel-item img src="/static/assets/teams/3.jpg" alt="First slide" />
        <mdb-carousel-item img src="/static/assets/teams/4.jpg" alt="Second slide" />
        <mdb-carousel-item img src="/static/assets/teams/2.jpg" alt="Third slide" />
        <mdb-carousel-item img src="/static/assets/teams/1.jpg" alt="First slide" />
        <mdb-carousel-item img src="/static/assets/teams/5.jpg" alt="First slide" />
      </mdb-carousel>
       </div>
    </div> 
    <div class="row"><hr></div>



  </b-container>
  </div>
</template>

<script>
import { mdbCarousel, mdbCarouselItem } from 'mdbvue';
export default {
  name: 'home',
  components: {
      mdbCarousel,
      mdbCarouselItem
  },
  mounted() {
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = `https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v3.3&appId=784034381617146&autoLogAppEvents=1`;
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }
};
</script>
<style scoped>
.btn-danger-dark {
  background-color:#cc0000;
  color: #fff;
}

.bg {
  /* The image used */
  background-image: url("/static/assets/couverture.jpg");

  /* Center and scale the image nicely */
  height: 100vh;
  min-height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height:200px;
}

 div.column {
                /* The background image must be 800px wide */
                max-width: 800px;
              }
              
              figure.fixedratio {
                padding-top: 30%;  /* 450px/800px = 0.5625 */
              
                background-image: url("/static/assets/couverture.jpg");
                background-size: cover;
                -moz-background-size: cover;  /* Firefox 3.6 */
                background-position: center;  /* Internet Explorer 7/8 */
              }
</style>
