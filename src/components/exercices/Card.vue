<template>
  <div
    :id="id"
    class="drag-el"
    :draggable="draggable"
    @dragstart="dragStart"
    @dragover.stop
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id", "draggable"],
  methods: {
    dragStart: (e) => {
      const target = e.target;
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("idCard", target.id);
    },
  },
};
</script>

<style>
.drag-el {
  color: #fff;
  margin: 10px;
  padding: 5px;
  background: #4691bd;
  border-radius: 50px;
  width: 125px;
  text-align: center;
  height: 45px;
  cursor: pointer;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3em;
}
</style>