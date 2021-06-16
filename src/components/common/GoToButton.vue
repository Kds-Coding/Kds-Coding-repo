<template>
  <div class="help">
    <div class="circleNumber">{une partie du cours}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.help {
  display: flex;
  flex-direction: row;
  background: #c4c4c4;
  border-radius: 50px;
}
</style>