<script setup>
</script>
<template>
  <footer class="border-t border-white/10 bg-neutral-900">
    <div class="container-main pt-16 pb-12">
      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <!-- 左侧：制作者信息和版权信息 -->
        <div class="flex flex-col gap-6 flex-1">
          <!-- 上半部分：制作者信息 -->
          <div class="flex items-center gap-5">
            <img
                src="/img/my-avatar.jpg"
                alt="Aurora"
                class="h-16 w-16 rounded-full object-cover border-2 border-white/20 shadow-lg"
            />
            <div>
              <h3 class="font-semibold text-white mb-2">王钰清 | WANG YUQING</h3>
              <p class="text-sm text-slate-400">联系方式：153-5103-6149 | 187-1717-1024<br>
                电子邮箱：<a href="mailto:<Email>" class="text-cyan-400">charleswyq@foxmail.com</a>
              </p>
            </div>
          </div>

          <!-- 分割线 -->
          <div class="border-t border-white/5"></div>

          <!-- 下半部分：版权信息 -->
          <div class="text-sm text-slate-500">
            © 2026 WANG YUQING. All rights reserved.
          </div>
        </div>

        <!-- 右侧：二维码 -->
        <div class="flex-shrink-0 flex gap-4">
          <img
              src="/img/my-QR-code.png"
              alt="二维码"
              class="h-40 w-40 object-contain rounded-xl border border-white/10 bg-white/5 p-2"
          />
        </div>
      </div>
    </div>
  </footer>

</template>