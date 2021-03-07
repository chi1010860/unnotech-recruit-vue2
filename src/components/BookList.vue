<template>
  <el-row class="book-list-wrapper" :type="rowType">
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
import { isSmallScreen } from '@/utils/screen-size-checker'
import { unnotechService } from '@/services/unnotech.service'
import { IBook } from '@/services/unnotech.dto'

type RowType = 'grid' | 'flex'

@Component({
  components: { BookCard },
})
export default class BookList extends Vue {
  private rowType: RowType = 'flex'
  private bookList: IBook[] = []

  public async mounted() {
    if (isSmallScreen()) {
      this.rowType = 'grid'
    }
    this.bookList = (await unnotechService.get('/books')).data
  }
}
</script>

<style scoped>
.book-list-wrapper {
  height: 350px;
  overflow-x: scroll;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
  padding: 10px;
}

.book-list-content {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
