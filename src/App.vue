<template>
  <div class="min-h-screen background-container">
    <div class="min-h-screen flex items-center justify-center safe-padding py-8" style="align-items: center;">
      <!-- 主要卡片容器 -->
      <main id="voucher-card" class="simple-card ticket-border simple-holes simple-perforated p-4 md:p-6 mobile-spacing w-full max-w-none relative" 
            style="width: clamp(340px, 85vw, 600px); min-height: fit-content; overflow: visible;">
        
        <!-- 印章 -->
        <div class="simple-stamp">
          LIMITED
        </div>
        
        <!-- 標題區域 -->
        <header class="text-center mb-4 relative">
          <h1 class="main-title title-responsive">
            沙發兌換券
          </h1>
          <!-- 裝飾分隔線與圖示 -->
          <div class="title-decoration">
            <div class="heart-divider">
              <span class="heart-icon">♡</span>
            </div>
          </div>
          <p class="subtitle-responsive indie-text-light">
            Our Special Sofa Voucher
          </p>
        </header>

        <!-- 主要內容區域 -->
        <section class="space-y-3">
          <!-- 主文 -->
          <div class="main-content-section">
            <p class="content-responsive indie-text text-center">
              憑此券可兌換一張「我們的專屬沙發」。
            </p>
            <div class="content-spacer"></div>
            <p class="content-responsive indie-text text-center">
              我們會一起挑選、一起試坐，<br>
              它承載我們往後無數的慵懶午後、追劇時光與笑聲。
            </p>
          </div>

          <hr class="simple-divider">

          <!-- 兌換資訊 -->
          <div class="exchange-info-container">
            <div class="info-cards">
              <div class="info-card time-card">
                <div class="info-icon">🕐</div>
                <div class="info-label">兌換時間</div>
                <div class="info-value">搬入新家後隨時</div>
              </div>
              <div class="info-card location-card">
                <div class="info-icon">🏠</div>
                <div class="info-label">兌換地點</div>
                <div class="info-value">你最想窩的地方</div>
              </div>
            </div>
          </div>


          <!-- 使用須知 -->
          <div class="usage-notes-section tear-line-before">
            <h4 class="notes-title">
              使用須知
            </h4>
            <div class="notes-container">
              <div class="note-item">
                <span class="note-icon">✅</span>
                <p class="note-text">
                  本券無使用期限壓力，但建議搬家後 30 天內兌換，以免沙發缺貨
                </p>
              </div>
              <div class="note-item">
                <span class="note-icon">⚠️</span>
                <p class="note-text">
                  顏色款式以兩人「同時點頭」為準；不合意就繼續逛！
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- 底部簽名區 -->
        <footer class="signature-section-tight">
          <!-- 簽名框含沙發圖案 -->
          <div class="signature-box">
            <div class="sofa-corner">
              🛋️
            </div>
            <div class="signature-content">
              <div class="signature-label">簽收人：</div>
              <div class="signature-name">ETing with Love ♡</div>
            </div>
          </div>
          
          <!-- 序號 -->
          <div class="voucher-number">
            No. 2025-0827
          </div>
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
