<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="collapse"
  >
    <el-menu-item index="1">
      <el-icon-menu />
      <span>导航1</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon-menu />
      <span>导航2</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>导航3</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-icon-menu />
        <span>导航4</span>
      </template>
      <el-menu-item-group title="分组1">
        <el-menu-item index="4-1">4-1</el-menu-item>
        <el-menu-item index="4-2">4-2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="4-3">4-3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="4-4">
        <template #title>4-4</template>
        <el-menu-item index="4-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script lang='ts' setup>
let props = defineProps<{
  collapse: boolean
}>()
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>