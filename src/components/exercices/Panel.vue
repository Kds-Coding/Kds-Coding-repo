<template>
  <div :id="id" class="panel" @dragover.prevent @drop.prevent="drop">
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    drop: (e) => {
      const card_id = e.dataTransfer.getData("idCard");

      const card = document.getElementById(card_id);
      card.style.display = "block";
      e.target.appendChild(card);
    },
  },
};
</script>

<style>
.panel {
  background-color: rgb(175, 139, 139);
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  margin: 10px;
  border-radius: 50px;
}
</style>