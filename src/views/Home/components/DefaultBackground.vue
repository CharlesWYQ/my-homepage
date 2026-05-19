<template>
  <div class="absolute inset-0 w-full h-full">
    <!-- 默认渐变背景 -->
    <div
      class="w-full h-full"
      style="background: linear-gradient(180deg, #0b1020 0%, #0f172a 45%, #090d18 100%)"
    ></div>

    <!-- 渐变遮罩层 -->
    <div class="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/50"></div>

    <!-- 科技感网格 overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
</template>
