<template>
  <div>
  	<Header title="Partenaires"/>
  	<b-container class="pt-5 pb-5">
  	<div class="row">
		  <h2 class="display-4">Ils nous ont fait confiance!</h2>
		  <hr>
  	</div>

		<div class="row">
	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/1.jpg" data-size="1600x1067">
	          <img src="/static/assets/partenaires/1.jpg" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>

	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/7.png" data-size="1600x1067">
	          <img src="/static/assets/partenaires/7.png" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>

	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/3.jpg" data-size="1600x1067">
	          <img src="/static/assets/partenaires/3.jpg" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>
		</div>      	
    	<div class="row">
	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/4.jpg" data-size="1600x1067">
	          <img src="/static/assets/partenaires/4.jpg" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>

	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/5.png" data-size="1600x1067">
	          <img src="/static/assets/partenaires/5.png" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>

	      <figure class="col-md-4">
	        <a href="/static/assets/partenaires/6.png" data-size="1600x1067">
	          <img src="/static/assets/partenaires/6.png" alt="placeholder"
	            class="img-fluid" />
	        </a>
	      </figure>

	  </div>
	  <div class="row">

		  <div class="col-md-12 mb-5">
	        <p>Vous aussi devenez partenaires, et associer votre entreprises aux valeurs du Lille Est Basket </p>
	        <a class="btn btn-danger-dark btn-lg" href="#">Devenir partenaire</a>
	      </div>
	  			 
	  </div>

	</b-container>

  </div>
</template>

<script>

import Header from './Header.vue'

export default {
  name: 'partenaires',
  components: {
    Header
  }

};
</script>
<style scoped>
.btn-danger-dark {
  background-color:#cc0000;
}

</style>


