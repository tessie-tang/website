<template>
    <div class="note-container" :style="{ 'border-left': '5px solid ' + (color ? color : '#000') }">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return {}
  },
  props: {
    color: String
  }
}
</script>

<style scoped>
.note-container {
    padding-left: 20px;
    margin-bottom: 1.5rem;
}
</style>
