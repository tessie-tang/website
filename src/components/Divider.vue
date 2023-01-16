<template>
    <Container>
        <div class="divider"></div>
    </Container>
</template>

<script>
import Container from './Container.vue'

export default {
  name: 'Divider',
  data () {
    return {}
  },
  components: { Container }
}
</script>

<style scoped>
    .divider {
      border-top: 2px solid #eeedee;
      width: 100%;
      height: 5px;
      margin: 0px;
    }
</style>
