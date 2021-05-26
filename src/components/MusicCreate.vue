<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <form @submit.prevent="onFormSubmit">
        <div class="form-group">
          <label>Titre</label>
          <input
            type="text"
            class="form-control"
            v-model="music.title"
            required
          />
        </div>

        <div class="form-group">
          <label>Genre</label>
          <input
            type="text"
            class="form-control"
            v-model="music.genre"
            required
          />
        </div>

        <div class="form-group">
          <label>Artiste</label>
          <input
            type="text"
            class="form-control"
            v-model="music.artist"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-primary btn-block">Ajouter une musique</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      music: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.collection("musics")
        .add(this.music)
        .then(() => {
          alert("musique ajoutée!");
          this.music.title = "";
          this.music.genre = "";
          this.music.artist = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>