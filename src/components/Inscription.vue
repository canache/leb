<template>
  <div>
  <Header title="Rejoins nous !"/>
  <mdb-container>
    <section>
      <h2 class="h1-responsive font-weight-bold my-5">Dossier de license :</h2>
      <p> Les dossiers doivent être envoyés à info@gmail.com <b> Seuls les dossiers complets seront acceptés. </b></p>
      <mdb-row>
        <mdb-col lg="6" md="6"  class="mb-lg-0 mb-5">
          <h5 class="font-weight-bold mt-4 mb-3">Pièces à fournir :</h5>
          <ul>
          	<li>Fiche FFBB </li>
          	<li>Sur classement</li>
          	<li>Cotisation</li>
          	<li>Caution </li>
          	<li>Photo</li>
          	<li>2 enveloppes timbrées</li>
          	<li>Copie CI</li>
            <li>Certificat Medical</li>
          </ul>
 
        </mdb-col>
        <mdb-col lg="6" md="6"  class="mb-lg-0 mb-5">
          <h5 class="font-weight-bold mt-4 mb-3">Formulaires à télécharger :</h5>
          <p><a href="/static/assets/formulaire_club.pdf">
          <i class="far fa-file"></i></i> Formulaire Club</a></p>
           <p>
         <a href="/static/assets/formulaire_ffbb.pdf"> <i class="far fa-file"></i> Formulaire FFBB</a></p>
         
 
        </mdb-col>
      </mdb-row>
    </section>
    <section class="text-center">
      <h2 class="h1-responsive font-weight-bold my-5">Barèmes des cotisations 2019/2020</h2>
      <mdb-row>
        <mdb-col lg="12" md="6"  class="mb-lg-0 mb-5">
          <div class="table-responsive">
	 			<table class="table table-bordered table-hover">
				<!--Table head-->
				  <thead>
				    <tr>
				      <th>CHAMPIONNAT FFBB</th>
				      <th>ANNEE DE NAISSANCE</th>
				      <th>COTISATION - Avant 8 juillet</th>
				      <th>COTISATION - Après 8 juillet</th>
				    </tr>
				  </thead>
				  <!--Table head-->
				  <!--Table body-->
				  <tbody>
					<tr>
					  <th scope="row">SENIORS</th>
				      <td>1999 et avant</td>
				      <td>120€</td>
				      <td>160€</td>
				    </tr>
					<tr>
					  <th scope="row">U20</th>
				      <td>2000- 2001- 2002</td>
				      <td>115€</td>
				      <td>155€</td>
				    </tr>
				     <tr>
					  <th scope="row">U17 (cadet(te)s)</th>
				      <td>2003- 2004</td>
				      <td>110€</td>
				      <td>150€</td>
				    </tr>
					<tr>
					  <th scope="row">U15 (minimes)</th>
				      <td>2005- 2006</td>
				      <td>90€</td>
				      <td>130€</td>
				    </tr>
				     <tr>
					  <th scope="row">U13 (benjamin( e)s)</th>
				      <td>2007- 2008</td>
				      <td>80€</td>
				      <td>120€</td>
				    </tr>
					<tr>
					  <th scope="row">U11 (poussin (e )s)</th>
				      <td>2009- 2010</td>
				      <td>80€</td>
				      <td>120€</td>
				    </tr>
				     <tr>
					  <th scope="row">U9 ( mini poussin ( e)s)</th>
				      <td>2011- 2012</td>
				      <td>80€</td>
				      <td>120€</td>
				    </tr>
					<tr>
					  <th scope="row">U7 (baby basket)</th>
				      <td>2013 et après</td>
				      <td>80€</td>
				      <td>120€</td>
				    </tr>
				    <tr>
					  <th scope="row">Loisirs</th>
				      <td>1999 et avant</td>
				      <td>120€</td>
				      <td>160€</td>
				    </tr>
				    <tr>
					  <th scope="row">Encadrant parent</th>
				      <td>1999 et avant</td>
				      <td>80€</td>
				      <td>120€</td>
				    </tr>
				   
				  </tbody>
				  <!--Table body-->
				</table>
			</div>
 
        </mdb-col>
      </mdb-row>
      <mdb-row><hr></mdb-row>
    </section>
  </mdb-container>
  </div>
</template>

<script>

import Header from './Header.vue'
import { mdbContainer, mdbRow, mdbCol } from 'mdbvue';


export default {
  name: 'inscription',
  components: {
    Header,
    mdbContainer,
    mdbRow,
    mdbCol,
  }

};
</script>
<style scoped>
.btn-danger-dark {
  background-color:#cc0000;
  color: #fff;
}

</style>


