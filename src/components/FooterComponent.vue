<template>
  <div>
	 <!-- Footer -->
<!-- Footer -->
<footer class="page-footer font-small elegant-color-dark pt-4">

    <!-- Footer Links -->
    <div class="container text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        <div class="col-md-4 mx-auto">

          <!-- Content -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Lille Est Basket</h5>
          <p>Lille Est Basket est une association sportive à but non lucatrif, spécialisée dans la pratique du basket ball</p>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-2 mx-auto">

          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Liens Utiles</h5>

          <ul class="list-unstyled">
            <li>
              <a href="/planning">Entrainements</a>
            </li>
            <li>
              <a href="/partenaires">Partenaires</a>
            </li>
            <li>
              <a href="/boutique">Boutique</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none">

        <!-- Grid column -->
        <div class="col-md-2 mx-auto">

          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>

          <ul class="list-unstyled">
            <li>
              <a class="btn-floating btn-fb mx-1" href="https://www.facebook.com/LilleEstBasket/">
               <i class="fab fa-facebook-square fa-4x"></i>
              </a>
            </li>
          </ul>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row -->

    </div>
    <!-- Footer Links -->

    <hr>

    <!-- Call to action -->
    <ul class="list-unstyled list-inline text-center py-2">
      <li class="list-inline-item">
        <a href="/inscription" class="btn btn-danger-dark">Rejoins nous</a>
      </li>
    </ul>
    <!-- Call to action -->

    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2018 Copyright:
      <a href="/"> LilleEstBasket.com</a>
    </div>
    <!-- Copyright -->

</footer>
<!-- Footer -->
  </div>
</template>
<script>
import { mdbIcon} from 'mdbvue';

export default {
  name: 'footerComponent',
  components: {
    mdbIcon
  }
};
</script>
<style scoped>
/*.page-footer {
   background-color: #E75B5B!important;
}*/
 .btn-danger-dark {
  background-color:#cc0000;
}
</style>
