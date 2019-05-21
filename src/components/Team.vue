<template>
	<div>
  	
	  	<header class="article-header" style="background-image: url('/static/assets/team2.jpg'); background-position: center center !important;">
	  		<h1 v-if="team" class="display-4 text-white mt-5 mb-2"> {{team.data.teams[0].shortName}}</h1>
	  		<div class="overlay"></div>
	  	</header>
	  	<div class="image-caption"></div>
		
		<b-container>
				<b-row>
					<div class="loading align-center" v-if="loading">
					  <b-spinner label="Spinning" variant="danger"/>
				    </div>
				</b-row>
		</b-container> 			


		<div v-if="error" class="error">
		      {{ error }}
		</div>

		<div v-if="team" class="content">

		      <b-container>
				  <b-row class="p-5">
				    <b-col cols="12">
				    	
				    	<!-- Card group -->
						<div class="card-group text-center"	>

						  <!-- Card -->
						  <div class="card mb-4" v-for="calendar in calendars.slice(0,3)">

						  	<div class="card-header danger-color text-white ">{{calendar.date | formatDate}}</div>
						    <!-- Card content -->
						    <div class="card-body">

						      <!-- Text -->
						      <p class="card-text">{{ calendar.teams[0].name }}</p>
						   	  <p class="card-text-vs"> vs </p>
						      <p class="card-text">{{ calendar.teams[1].name }}</p>

						    </div>
						    <!-- Card content -->

						  </div>
						  <!-- Card -->

						</div>
					</b-card>
				    </b-col>
				  </b-row>
				  <b-row>
				  	<b-col cols="4">
				  		<b-card
						        header="Classement"
						        header-bg-variant="light"
						        header-text-variant="dark"
						        align="center"
						        body-border-variant="white">
				    			<b-table responsive striped hover :items="ranking" :fields="ranking_fields">
	      	   					</b-table>	
	      	   				</b-card>
	      	   		</b-col>
				  </b-row>
				</b-container>
		       
		      <p></p>
		  </div>
		  
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

const config = {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
};

export default {
  data () {
    return {
      loading: false,
      team: null,
      ranking: null,
      ranking_fields:[
	      {key: 'name',label: 'Equipes'},
	      {key: 'pts',label: 'pts'},
	      {key: 'jo', label: 'jo'},
	      {key: 'g', label:'g'},
	      {key:'p', label:'p'}
      ],
      calendars: null,
      error: null,
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.team = null
      this.loading = true
      // replace `getPost` with your data fetching util / API wrapper
       axios
      .get('https://scorenco.com/backend/v1/widgets/' + this.$route.params.id + '/data/', config)
      .then(response => (
      	this.team = response.data, 
      	this.ranking=formatRankingTable(response.data.data.ranking.teams), 
      	this.calendars=response.data.data.calendar, this.loading = false))
      .catch(err => {
	    this.error = err.toString()
	  });
    }
  },
  filters: {
  	formatDate: function(value) {
		if (value) {
			return moment(String(value)).format('MM/DD/YYYY');
		}
    }
  }
}

function formatRankingTable(rankings){
	var ranks = new Array();

	for (var i = 0, l = rankings.length; i < l; i++) {
		ranks.push({
			name: rankings[i].name,
			pts: rankings[i].data[0].pts,
			jo: rankings[i].data[1].jo,
			g: rankings[i].data[2].g,
			p: rankings[i].data[4].p,
			bp: rankings[i].data[6].bp,
			bc: rankings[i].data[7].bc, 
			diff: rankings[i].data[8].diff,
			coeff: rankings[i].data[9].coeff
		});
	}
	return ranks;
};
</script>

<style scoped>
.card .card-body .card-text {
    color: #3e4551;
    font-size: 1.1rem;
    font-weight: 400;
}

.card .card-body .card-text-vs {
    color: #747373;
    font-size: 1.1rem;
    font-weight: 500;
}
.card .card-header {
    font-size: 1.1rem;
    font-weight: 500;
}

.article-header {
    background-size: cover;
    background-position: 50%;
    height: 350px;
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
