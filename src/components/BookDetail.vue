<template>
  <el-row class="book-detail-wrapper">
    <el-col :span="14">
      <div class="book-detail-input">
        <span>價格 </span>
        <el-input-number v-model="bookPrice" :size="size"></el-input-number>
      </div>
      <div class="book-detail-input">
        <span>數量 </span>
        <el-input-number v-model="bookAmount" :size="size"></el-input-number>
      </div>
    </el-col>
    <el-col :span="10">
      <el-button type="primary" @click="submit">確認修改</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { isSmallScreen } from '@/utils/screen-size-checker'
import { InputNumberSize } from 'element-ui/types/input-number'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class BookDetail extends Vue {
  private size: InputNumberSize = 'large'
  private bookAmount: number = 0
  private bookPrice: number = 0

  public mounted() {
    if (isSmallScreen()) {
      this.size = 'small'
    }
  }

  private submit() {}
}
</script>

<style scoped>
.book-detail-wrapper {
  height: 200px;
  display: flex;
  align-items: center;
  border: 1px solid rgb(220, 220, 220);
  border-radius: 4px;
}

.book-detail-input {
  margin: 10px;
}
</style>
