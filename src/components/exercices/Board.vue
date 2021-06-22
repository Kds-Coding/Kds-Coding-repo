<template>
  <div
    :id="id"
    class="board bar"
    @dragover.prevent="allow"
    @drop.prevent="drop"
    @dragleave="unallow"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    allow() {
      const board = document.getElementById(this.$props.id);
      board.classList.add("active");
    },
    unallow() {
      const board = document.getElementById(this.$props.id);
      board.classList.remove("active");
    },
    drop(e) {
      const ff = this.$props.id;
      console.log(ff);
      const board = document.getElementById(ff);
      if (board.childElementCount == 0) {
        const card_id = e.dataTransfer.getData("idCard");

        const card = document.getElementById(card_id);
        card.style.display = "block";
        e.target.appendChild(card);
      } else {
        alert("tu peux pas");
      }
    },
  },
};
</script>
<style>
.board {
  display: flex;
  flex-direction: column;
  width: 10%;
  height: 65px;
  margin: 0em 1.8em 0em 1em;
}
.bar {
  border-bottom: 5px dashed;
}
.bar:after {
  border-bottom: 5px dashed;
  position: absolute;
  bottom: 0;
}
</style>