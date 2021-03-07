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
      <router-link :to="`/books/${book.id}`">
        <BookCard></BookCard>
      </router-link>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BookCard from './BookCard.vue'
import { isSmallScreen } from '@/utils/screen-size-checker'
import { unnotechService } from '@/services/unnotech.service'

type RowType = 'grid' | 'flex'
interface IBook {
  id: number
  name: string
  image: string
}

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
    this.bookList = await unnotechService.get('/books').then(r => r.data)
  }
}
</script>

<style scoped>
.book-list-wrapper {
  width: 100%;
  overflow-x: scroll;
  min-height: 260px;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
}

.book-list-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>
