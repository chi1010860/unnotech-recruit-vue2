<template>
  <el-row class="book-list-wrapper">
    <el-col
      v-for="book in bookList"
      :key="book.id"
      :xs="24"
      :sm="12"
      :md="8"
      class="book-list-content"
    >
      <BookCard :book="book"></BookCard>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BookCard from './BookCard.vue'
import { unnotechService } from '@/services/unnotech.service'
import { IBook } from '@/services/unnotech.dto'

@Component({
  components: { BookCard },
})
export default class BookList extends Vue {
  private bookList: IBook[] = []

  public async mounted() {
    this.bookList = await unnotechService.getBookList()
  }
}
</script>

<style scoped lang="scss">
@import '../assets/theme.scss';

.book-list-wrapper {
  height: 350px;
  overflow-x: scroll;
  border: 1px solid $color-neutral;
  border-radius: 4px;
  padding: 10px;
  display: flex;
}

.book-list-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 480px) {
  .book-list-wrapper {
    height: 60vh;
    display: block;
  }
}
</style>
