<template>
  <div class="container">
    <BookList></BookList>
    <div class="sub-container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BookList from '@/components/BookList.vue'

@Component({
  components: { BookList },
})
export default class Books extends Vue {}
</script>

<style scoped>
.container {
  width: 70vw;
  margin: auto;
}

@media (max-width: 480px) {
  .container {
    width: 90vw;
  }
}

.sub-container {
  margin: auto;
  margin-top: 20px;
}
</style>
