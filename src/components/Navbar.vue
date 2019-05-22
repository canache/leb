<template>
<!-- <div style="border-bottom: 3px solid #CC0000;"> --> <!-- danger-color-dark -->
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark danger-color-dark fixed-top">

     <!-- <b-navbar-brand href="/">
      <b-img src="../static/assets/logo.png" width="10" height="10" fluid alt="Responsive image" /> 
       LilleEstBasket
    </b-navbar-brand>-->
    <b-navbar-brand href="#">LilleEstBasket</b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse" >
        <b-navbar-nav>
        <!-- Navbar dropdowns -->
          <b-nav-item href="/">Actus</b-nav-item>
          <b-nav-item-dropdown text="Club" right>
            <b-dropdown-item :to="{path:'/club/historique'}">Historique</b-dropdown-item>
            <b-dropdown-item :to="{path:'/club/organigramme'}">Organigramme</b-dropdown-item>
            <b-dropdown-item :to="{path:'/club/chartre'}">Chartre</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Ecole de Basket" right>
            <b-dropdown-item :to="{path:'/school/projet'}">Projet</b-dropdown-item>
            <b-dropdown-item :to="{path:'/school/chartre'}">Chartre</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Equipes" right>
            <b-dropdown-item v-for="team in teams" :key="team.shortName" :to="{ path:'/team/' + team.id, params: {id:team.id}}">{{ team.shortName }}</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="/planning">Entrainements</b-nav-item>

          <b-nav-item href="/partenaires">Partenaires</b-nav-item>
          <b-nav-item href="/boutique">Boutique</b-nav-item>
          <b-nav-item href="/administratif">Administratif</b-nav-item>
          <b-nav-item href="/contact">Contact</b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </nav>
</div>
</template>
<script>
import axios from 'axios'

const config = {
    headers: { 
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
    }
};

export default {
  name: 'navbar',
  data () {
    return {
      teams: [
        {shortName: 'Senior F1', id: '5c753e152b68c923ac823afe'},
        {shortName: 'Senior F2', id: '5c854d9fb468432134eae48c'},
        {shortName: 'Senior F3', id: '5c854dab88cc082fd1c23fb2'},
        {shortName: 'Senior M1', id: '5c854d1c1755c90a0631e1c8'},
        {shortName: 'Senior M2', id: '5c854d4decb4592c2d11d6c7'},
        {shortName: 'Senior M3', id: '5c854d741755c90a0d2b3f72'},
        {shortName: 'U17 M1', id: '5c854e241755c90a0631e1f8'},
        {shortName: 'U15 M1', id: '5c854e191755c90a0d2b3f8c'},
        {shortName: 'U13 M1', id: '5c8551e6a37d5309933cfe34'},
        {shortName: 'U13 F1', id: '5c854e5105376c2c9b85590a'},
        {shortName: 'U13 F2', id: '5c854e6e05376c2e4682c90d'}
      ]
    }
  }
};
</script>
<style scoped>
 .navbar {
    border-bottom: 3px solid #fff;
    font-weight: 400;

  }

</style>