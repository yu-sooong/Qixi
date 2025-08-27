<template>
  <div class="min-h-screen simple-background">
    <div class="min-h-screen flex items-center justify-center safe-padding">
      <!-- 主要卡片容器 -->
      <main id="voucher-card" class="simple-card ticket-border simple-holes simple-perforated p-8 md:p-12 mobile-spacing w-full max-w-none relative" 
            style="width: clamp(320px, 90vw, 500px);">
        
        <!-- 印章 -->
        <div class="simple-stamp">
          LIMITED
        </div>
        
        <!-- 標題區域 -->
        <header class="text-center mb-8 relative">
          <h1 class="simple-title title-responsive">
            沙發兌換券
          </h1>
          <p class="subtitle-responsive indie-text">
            Our Special Sofa Voucher
          </p>
        </header>

        <!-- 主要內容區域 -->
        <section class="space-y-4">
          <!-- 主文 -->
          <div class="simple-section">
            <p class="content-responsive indie-text text-center">
              憑此券可兌換一張「我們的專屬沙發」。
              <br><br>
              我們會一起挑選、一起試坐，<br>
              它承載我們往後無數的慵懶午後、追劇時光與笑聲。
            </p>
          </div>

          <hr class="simple-divider">

          <!-- 兌換資訊 -->
          <div class="simple-section">
            <p class="info-responsive indie-text">
              兌換時間：搬入新家後隨時
            </p>
            <p class="info-responsive indie-text mt-2">
              兌換地點：你最想窩的地方
            </p>
          </div>


          <!-- 使用須知 -->
          <div class="simple-section tear-line-before">
            <h4 class="info-responsive indie-text font-bold mb-3">
              使用須知
            </h4>
            <div class="text-left space-y-2 max-w-md mx-auto">
              <p class="note-responsive indie-text">
                • 本券無使用期限壓力，但建議搬家後 30 天內兌換，以免沙發缺貨
              </p>
              <p class="note-responsive indie-text">
                • 顏色款式以兩人「同時點頭」為準；不合意就繼續逛！
              </p>
            </div>
          </div>
        </section>

        <!-- 底部 -->
        <footer class="mt-8 text-center">
          <div class="mb-4">
            <p class="note-responsive indie-text">
              簽收人：ETing
            </p>
          </div>
          <p class="note-responsive indie-text italic">
            With Love ♡
          </p>
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
// Vue 3 Composition API setup
</script>

<style scoped>
/* 組件特定樣式可以在這裡添加 */
</style>
