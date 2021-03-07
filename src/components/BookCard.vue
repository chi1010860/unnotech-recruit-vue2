<template>
  <div class="book-card"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BookCard extends Vue {}
</script>

<style scoped lang="scss">
.book-card {
  width: 200px;
  height: 200px;
  border-radius: 4px;
  min-height: 36px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgb(250, 250, 250);
    cursor: pointer;
  }
}
</style>
