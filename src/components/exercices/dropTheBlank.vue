


<template>
  <div class="exerciceContainer">
    <div
      class="drag-zone"
      @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        class="drag-el"
        v-for="item in listOne"
        :key="item.title"
        draggable="true"
        @dragstart="startDrag($event, item)"
        :style="elStyle"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="dropContainer">
      Lorem ipsum

      <div
        class="drop-zone"
        @drop="onDrop($event, 2)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          class="drag-el"
          v-for="item in listTwo"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          {{ item.title }}
        </div>
      </div>
      dolor sit amet, consectetur
      <div
        class="drop-zone"
        @drop="onDrop($event, 3)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          class="drag-el"
          v-for="item in listThree"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
          :style="elStyle"
        >
          {{ item.title }}
        </div>
      </div>
      elit, sed do
      <div
        class="drop-zone"
        @drop="onDrop($event, 4)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div
          class="drag-el"
          v-for="item in listFour"
          :key="item.title"
          draggable="true"
          @dragstart="startDrag($event, item)"
          :style="elStyle"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item A",
          list: 1,
        },
        {
          id: 1,
          title: "Item B",
          list: 1,
        },
        {
          id: 2,
          title: "Item C",
          list: 1,
        },
        {
          id: 3,
          title: "Item D",
          list: 1,
        },
        {
          id: 4,
          title: "Item E",
          list: 1,
        },
      ],
      elStyle: {
        backgroundColor: "#16a085",
      },
    };
  },
  computed: {
    listOne() {
      return this.items.filter((item) => item.list === 1);
    },
    listTwo() {
      return this.items.filter((item) => item.list === 2);
    },
    listThree() {
      return this.items.filter((item) => item.list === 3);
    },
    listFour() {
      return this.items.filter((item) => item.list === 4);
    },
  },
  methods: {
    startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = "move";
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("itemID", item.id);
    },
    onDrop(evt, list) {
      const itemID = evt.dataTransfer.getData("itemID");
      const item = this.items.find((item) => item.id == itemID);
      item.list = list;
      console.log(list);
    },
  },
};
</script>

<style>
.exerciceContainer {
  display: flex;
  flex-direction: column;
  position: relative;
}
.dropContainer {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.drag-zone {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 10px;
}
.drop-zone {
  width: 10%;
  border-bottom: 5px dashed;
  margin-left: 30px;
  margin-right: 30px;
}
.drag-el {
  color: #fff;
  margin: 10px;
  padding: 5px;
  background: #d35e5e;
  border-radius: 50px;
  width: 100%;
  text-align: center;
  height: 70%;
  cursor: pointer;
}
</style>
