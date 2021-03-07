<template>
  <el-row class="book-detail-wrapper">
    <el-col :span="14">
      <div class="book-detail-input">
        <span class="label">價格</span>
        <el-input-number
          v-model="bookProfile.price"
          :size="size"
        ></el-input-number>
      </div>
      <div class="book-detail-input">
        <span class="label">數量</span>
        <el-input-number
          v-model="bookProfile.count"
          :size="size"
        ></el-input-number>
      </div>
    </el-col>
    <el-col :span="10">
      <el-button type="primary" @click="submit">確認修改</el-button>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { IBookProfile } from '@/services/unnotech.dto'
import { unnotechService } from '@/services/unnotech.service'
import { isSmallScreen } from '@/utils/screen-size-checker'
import { InputNumberSize } from 'element-ui/types/input-number'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Message } from 'element-ui'

@Component
export default class BookDetail extends Vue {
  private size: InputNumberSize = 'large'
  private bookProfile: IBookProfile = {
    id: 0,
    price: 0,
    count: 0,
  }

  public mounted() {
    if (isSmallScreen()) {
      this.size = 'small'
    }
  }

  @Watch('$route')
  public async updateBook() {
    let id = parseInt(this.$route.params.id)
    this.bookProfile = await unnotechService.getBookProfile(id)
  }

  private async submit() {
    if (this.bookProfile.id == 0) return // id 0 is default value

    const success = await unnotechService.updateBookProfile(
      this.bookProfile.id,
      this.bookProfile,
    )

    if (success) {
      Message.success({
        message: '修改成功！',
        customClass: 'custom-el-message',
      })
    } else {
      Message.error({
        message: '修改失敗！',
        customClass: 'custom-el-message',
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/theme.scss';

.book-detail-wrapper {
  height: 200px;
  align-items: center;
  justify-content: center;
  border: 1px solid $color-neutral;
  border-radius: 4px;
  display: flex;
}

.book-detail-input {
  margin: 10px 0;

  .label {
    margin-right: 20px;
  }
}

@media (max-width: 480px) {
  .book-detail-wrapper {
    height: 30vh;
    flex-direction: column;
  }
}
</style>
