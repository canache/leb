<template>
  <div>
  	
	<Header title="Planning des entrainements"/>

  	<div>
	 <!--Table-->
	 <b-container class="pt-5 pb-5">
	 	<b-row>
	 		<b-col cols="4"></b-col>
	 		<b-col cols="4"></b-col>
	 		<b-col cols="4"></b-col>
	 		<hr>
	 	</b-row>
	 	<b-row>
	 		<b-col cols="12">
	 			<table id="tablePreview" class="table-responsive table-bordered table-sm table-hover">
				<!--Table head-->
				  <thead>
				    <tr>
				      <th></th>
				      <th>Lundi</th>
				      <th>Mardi</th>
				      <th>Mercredi</th>
				      <th>Jeudi</th>
				      <th>Vendredi</th>
				      <th>Samedi</th>
				    </tr>
				  </thead>
				  <!--Table head-->
				  <!--Table body-->
				  <tbody>
				    <tr>
				      <th scope="row">Baby 3-5ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>13h30-14h30 - <b>FCB</b></td>
				    </tr>
				    <tr>
				      <th scope="row">Ecole de basket 5-7 ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>10h00-11h00 - <b>Herbaux</b></td>
				    </tr>
					<tr>
				      <th scope="row">Mini poussin(e) 7-9 ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>09h00-10h00 - <b>Herbaux</b></td>
				    </tr>
				    <tr>
				      <th scope="row">Poussin/Poussine 10-11ans</th>
				      <td></td>
				      <td></td>
				      <td>14h-15h30 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Benjamin 12-13 ans </th>
				      <td></td>
				      <td></td>
				      <td>17h00-18h30 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Benjamine 12-13 ans</th>
				      <td></td>
				      <td></td>
				      <td>15h30-17h00 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Minimes Filles/Garçons 14-15ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>17h30-19h00 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Cadets</th>
				      <td>18h00-19h30 - <b>FCB</b></td>
				      <td></td>
				      <td></td>
				      <td>19h00-20h30 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM3 - U20</th>
				      <td></td>
				      <td>21h00-22h30 - <b>FCB</b></td>
				      <td></td>
				      <td>19h00-20h30 - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF3</th>
				      <td>19h30-21h00 - <b>FCB</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>18h30-20h00 - <b>Herbaux</b></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM2</th>
				      <td>21h00-22h30 - <b>FCB</b></td>
				      <td></td>
				      <td>20h30-22h - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF2</th>
				      <td>19h30-21h00 - <b>FCB</b></td>
				      <td></td>
				      <td>20h30-22h - <b>Herbaux</b></td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM1</th>
				      <td></td>
				      <td></td>
				      <td>19h00-20h30 - <b>Herbaux</b></td>
				      <td></td>
				      <td>21h-22h30 - <b>FCB</b></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF1</th>
				      <td></td>
				      <td>19h30-21h00 - <b>FCB</b></td>
				      <td></td>
				      <td>20h30-22h00 - <b>Herbaux</b></td>
				      <td>19h30-21h00 - <b>FCB</b></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Créneau perfectionnement</th>
				      <td></td>
				      <td>18h-19h30 - <b>FCB</b></td>
				      <td></td>
				      <td></td>
				      <td>17h30-18h30 - <b>Herbaux</b></td>
				      <td></td>
				    </tr>
				  </tbody>
				  <!--Table body-->
				</table>
				<!--Table-->
	 		</b-col>
	 	</b-row>
	 </b-container>
	
  	</div>
  </div>
</template>

<script>

import Header from './Header.vue'

export default {
  name: 'planning',
  components: {
    Header
  }


};
</script>

<style>
.card.card-cascade.narrower {
    margin-top: 1.25rem;
}

.card.card-cascade .view.view-cascade {
    box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);
    border-radius: .25rem;
}

</style>
