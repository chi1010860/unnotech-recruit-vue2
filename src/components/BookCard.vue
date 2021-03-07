<template>
  <div class="book-card" @click="showBook(book.id)">
    <div class="book-card-title">
      {{ book.name }}
    </div>
    <img :src="book.image" />
  </div>
</template>

<script lang="ts">
import { IBook } from '@/services/unnotech.dto'
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class BookCard extends Vue {
  @Prop({ default: {} })
  private book!: IBook

  private showBook(id: number) {
    this.$router.push(`/books/${id}`).catch(() => null) // Handle NavigationDuplicated
  }
}
</script>

<style scoped lang="scss">
@import '../assets/theme.scss';

.book-card {
  width: 300px;
  height: 300px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px;

  &:hover {
    background: rgb(250, 250, 250);
    cursor: pointer;
  }

  img {
    max-height: 200px;
  }

  .book-card-title {
    margin: 15px auto 10px auto;
    font-weight: bolder;
  }
}
</style>
