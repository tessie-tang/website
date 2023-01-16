<template>
  <div>
    <b-image responsive :src="src" :ratio="ratio" class="frame" :lazy="false" />
    <p class="frame_description" v-if="description">{{description}}</p>
  </div>
</template>

<script>
export default {
  name: 'ImageFrame',
  data () {
    return {}
  },
  props: {
    description: String,
    src: String,
    ratio: String
  }
}
</script>

<style scoped>
.frame {
    width: 100%;
    height: auto;
    margin: 0px;
}

.frame_description {
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.2rem;
  color: #A59D9D;
  width: 100%;
  text-align: center;
}
</style>
