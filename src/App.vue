<template>
  <div id="app">
    <meta name="robots" content="noindex,nofollow" />
    <router-view/>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  created () {
    AOS.init()
  }
}
</script>

<style lang="scss">
  @import "~bulma/sass/utilities/_all";

  // Colors
  $primary: #DC601A;
  $primary-light: findLightColor($primary);
  $primary-dark: findDarkColor($primary);
  $primary-invert: findColorInvert($primary);
  $twitter: #4099FF;
  $twitter-invert: findColorInvert($twitter);

  // Lists and maps
  $custom-colors: null !default;
  $custom-shades: null !default;

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: mergeColorMaps(
      (
          "white": (
              $white,
              $black,
          ),
          "black": (
              $black,
              $white,
          ),
          "light": (
              $light,
              $light-invert,
          ),
          "dark": (
              $dark,
              $dark-invert,
          ),
          "primary": (
              $primary,
              $primary-invert,
              $primary-light,
              $primary-dark,
          ),
          "link": (
              $link,
              $link-invert,
              $link-light,
              $link-dark,
          ),
          "info": (
              $info,
              $info-invert,
              $info-light,
              $info-dark,
          ),
          "success": (
              $success,
              $success-invert,
              $success-light,
              $success-dark,
          ),
          "warning": (
              $warning,
              $warning-invert,
              $warning-light,
              $warning-dark,
          ),
          "danger": (
              $danger,
              $danger-invert,
              $danger-light,
              $danger-dark,
          ),
      ),
      $custom-colors
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Syne:wght@500;600&display=swap');

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    overflow-x: hidden;
    overflow-y : hidden;
  }

  .orange {
    color: #DC601A
  }

  .blue {
    color: #1A73DC
  }

  .purple {
    color: #5e35b1
  }

  .gray {
    color: #A59D9D
  }

  a {
    color: #A59D9D;
    transition: 0.2s;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
  }

  a:hover {
    color: #DC601A
  }
</style>
