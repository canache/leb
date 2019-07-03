<template>
	<div>
    <header class="article-header" style="background-image: url('/static/assets/background2.png'); background-color: #212121; background-position: center center !important;">
  		<h1 v-if="title"> {{ title }}</h1>
  		<div class="overlay"></div>
  	</header>
  	<div class="image-caption"></div>
  </div>
</template>

<script>

export default {
  name: 'header',
  props: {
    title: String
  }
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