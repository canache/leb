<template>
  <div>
  	
  	<header class="article-header" style="background-image: url('/static/assets/background.png'); background-color: #cc0000; background-position: center center !important;">

  		<h1> Planning des entrainements</h1>
  		<div class="overlay"></div>
  	</header>
  	<div class="image-caption"></div>

  	<div>
	 <!--Table-->
	 <b-container class="pt-5">
	 	<b-row>
	 		<b-col cols="12">
	 			<table id="tablePreview" class="table table-bordered table-sm">
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
				      <td>13h30-14h30 - FCB</td>
				    </tr>
				    <tr>
				      <th scope="row">Ecole de basket 5-7 ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>10h00-11h00 - Herbaux</td>
				    </tr>
					<tr>
				      <th scope="row">Mini poussin(e) 7-9 ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>09h00-10h00 - Herbaux</td>
				    </tr>
				    <tr>
				      <th scope="row">Poussin/Poussine 10-11ans</th>
				      <td></td>
				      <td></td>
				      <td>14h-15h30 - Herbaux</td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Benjamin 12-13 ans </th>
				      <td></td>
				      <td></td>
				      <td>17h00-18h30 - Herbaux</td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Benjamine 12-13 ans</th>
				      <td></td>
				      <td></td>
				      <td>15h30-17h00 - Herbaux</td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Minimes Filles/Garçons 14-15ans</th>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>17h30-19h00 - Herbaux</td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Cadets</th>
				      <td>18h00-19h30 - FCB</td>
				      <td></td>
				      <td></td>
				      <td>19h00-20h30 - Herbaux</td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM3 - U20</th>
				      <td></td>
				      <td>21h00-22h30 - FCB</td>
				      <td></td>
				      <td>19h00-20h30 - Herbaux</td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF3</th>
				      <td>19h30-21h00 - FCB</td>
				      <td></td>
				      <td></td>
				      <td></td>
				      <td>18h30-20h00 - Herbaux</td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM2</th>
				      <td>21h00-22h30 - FCB</td>
				      <td></td>
				      <td>20h30-22h - Herbaux</td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF2</th>
				      <td>19h30-21h00 - FCB</td>
				      <td></td>
				      <td>20h30-22h - Herbaux</td>
				      <td></td>
				      <td></td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SM1</th>
				      <td></td>
				      <td></td>
				      <td>19h00-20h30 - Herbaux</td>
				      <td></td>
				      <td>21h-22h30 - FCB</td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">SF1</th>
				      <td></td>
				      <td>19h30-21h00 - FCB</td>
				      <td></td>
				      <td>20h30-22h00 - Herbaux</td>
				      <td>19h30-21h00 - FCB</td>
				      <td></td>
				    </tr>
				    <tr>
				      <th scope="row">Créneau perfectionnement</th>
				      <td></td>
				      <td>18h-19h30 - FCB</td>
				      <td></td>
				      <td></td>
				      <td>17h30-18h30 - Herbaux</td>
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

export default {
  name: 'planning',


};
</script>
<style scoped>
.article-header {
    background-position: 50%;
    height: 300px;
    position: relative;
}


.article-header h1 {
    display: block;
    width: 100%;
    border: none;
    text-align: center;
    color: #fff;
    position: absolute;
    z-index: 2;
    bottom: 0;
    line-height: 1;
    margin-bottom: 2rem;
    text-transform: uppercase!important;
    font-weight: 700!important;
}

.article-header .overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(3,31,64,.25);
}

.image-caption, .wp-caption-text {
    background: rgba(3,31,64,.15);
    color: #54556f;
    text-align: right;
    padding: .25rem .5rem;
    font-size: .75rem;
    margin-top: 0!important;
    margin-bottom: 1rem;

}
</style>
