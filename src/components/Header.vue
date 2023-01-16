<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <!-- LOGO -->
      <a class="navbar-item" href="/">
        <p class="header-logo">🌸 Xinyi Tang</p>
      </a>

      <!-- HAMBURGER -->
      <a role="button" class="navbar-burger" @click="toggleMenu()" aria-label="menu" aria-expanded="false" data-target="header-menu" :class="isMenuActive ? 'is-active' : '' ">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- LINKS -->
    <div class="navbar-menu" :class="isMenuActive ? 'is-active' : ''">
      <div class="navbar-end">
        <a :href="menu.url" v-for="menu in header.menus" :key="`menu_${menu.title}`" :style="{ '--color-hover': color ? color : '#DC601A' }" class="navbar-item header-link">
          {{ menu.title }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '../store'

export default {
  name: 'Header',
  data () {
    return {
      isMenuActive: false
    }
  },
  computed: {
    header () {
      return store.state.header
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  },
  props: {
    color: String
  }
}
</script>

<style scoped>
  a:hover {
    color: var(--color-hover)
  }

  @media all and (max-width: 800px) {
    nav {
      width: 100%;
      height: auto;
      background-color: white;
      padding: 1rem;
    }

    .header-logo {
      color: #000000;
      font-weight: 600;
      font-size: 1.5rem;
      font-family: 'Syne', cursive;
    }
  }

  @media all and (min-width: 801px) {
    nav {
      width: 100%;
      height: auto;
      background-color: white;
      padding: 3rem;
    }

    .header-logo {
      color: #000000;
      font-weight: 600;
      font-size: 2rem;
      font-family: 'Syne', cursive;
    }
  }

  .header-link {
    font-weight: 500;
    font-size: 1.2rem;
    color: #000000;
  }
</style>
