<script setup>

const router = useRouter()
const donate = () => {
  router.push({ path: '/donate' })
}
</script>
<template>
  <div class="bg-white py-4 dark:bg-slate-800 space-y-1">
    <p class="text-center text-sm">© 2024 KSJU.XYZ 快搜剧 - 你的一站式追剧神器</p>
    <p class="text-center text-sm">
      声明：本站内容皆来自网络公开资源。本站不储存、复制、传播任何文件，不做任何盈利，仅作个人公益学习，请勿非法&商业传播，如有侵权，请及时
      <a class="text-blue-500 underline" href="mailto:954zeng@gmail.com" title="点击留言"> 留言 </a> 告知删除。
    </p>
  </div>
</template>
<style scoped></style>
