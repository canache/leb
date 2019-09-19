<template>
  <div>
  <Cover title="Contact"/>
  <mdb-container>
    <section class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Le Bureau</h2>
      <mdb-row>
        <mdb-col lg="4" md="6"  class="mb-lg-0 mb-5">
          <h5 class="font-weight-bold mt-4 mb-3">Aline Gaudichet</h5>
          <p class="text-uppercase red-text">Trésorier</p>
           <p>
          <i class="fas fa-envelope mr-3"></i> tresorier@lilleestbasket.com</p>
 
        </mdb-col>
        <mdb-col lg="4" md="6"  class="mb-lg-0 mb-5">
          <h5 class="font-weight-bold mt-4 mb-3">Jonathan Jarrige</h5>
          <p class="text-uppercase red-text">Président</p>
           <p>
          <i class="fas fa-envelope mr-3"></i> president@lilleestbasket.com</p>

 
        </mdb-col>
        <mdb-col lg="4" md="6"  class="mb-lg-0 mb-5">
          <h5 class="font-weight-bold mt-4 mb-3">Laetitia Librouac Prouveur</h5>
          <p class="text-uppercase red-text">Secretaire général</p>
           <p>
          <i class="fas fa-envelope mr-3"></i> secretaire@gmail.com</p>
 
        </mdb-col>
      </mdb-row>
    </section>
    <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Salle Fives Cail</h2>
      <mdb-row>
        <mdb-col lg="12">
          <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.8828053602806!2d3.0925591514177233!3d50.62929387939978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d5fcd9cb44dd%3A0xefb023f82771358d!2sSalle+Fives+Cail!5e0!3m2!1sen!2sfr!4v1562058556787!5m2!1sen!2sfr" width="100%" height="100%" frameBorder="0" style="border: 0"></iframe>
          </div>
          <br/>
          <mdb-row class="text-center">
            <mdb-col md="4">
            </mdb-col>
            <mdb-col md="4">
              <i class="fas fa-map-marker-alt"></i>
              <p>Salle Fives Cail</p>
              <p class="mb-md-0">23 rue Vaucanson 59260</p>
              <p class="mb-md-0">Lille</p>
            </mdb-col>
            <mdb-col md="4">
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>

<section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Salle Herbaux</h2>
      <mdb-row>
        <mdb-col lg="12">
          <div id="map-container" class="rounded z-depth-1-half map-container" style="height: 400px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d752.2769246536348!2d3.085805910114196!3d50.639230123746714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32a0861e0dfa5%3A0xd321e8ba6dabf1df!2sSalle+Raymond+Herbaux!5e0!3m2!1sen!2sfr!4v1562058865264!5m2!1sen!2sfr" width="100%" height="100%" frameBorder="0" style="border: 0"></iframe>
          </div>
          <br/>
          <mdb-row class="text-center">
            <mdb-col md="4">  
            </mdb-col>
            <mdb-col md="4">
              <i class="fas fa-map-marker-alt"></i>
              <p>Salle Raymond Herbaux</p>
              <p class="mb-md-0">49 rue Saint Gabriel 59000</p>
              <p class="mb-md-0">Lille</p>
            </mdb-col>
            <mdb-col md="4">
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
  </div>
</template>

<script>

import Cover from './Cover.vue'
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbIcon, mdbInput, mdbTextarea, mdbCard, mdbCardBody } from 'mdbvue';

export default {
  name: 'contact',
  components: {
    Cover,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbInput,
    mdbIcon,
    mdbTextarea,
    mdbCard,
    mdbCardBody
  }

};
</script>
<style scoped>
.btn-danger-dark {
  background-color:#cc0000;
  color: #fff;
}

</style>


