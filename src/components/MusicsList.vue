<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Musiques présentes dans la base de données</h1>

      <table class="table table-hover">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Artiste</th>
            <th scope="col">Genre</th>
            <th scope="col">Titre</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="music in musics" :key="music.key">
            <td>{{ music.artist }}</td>
            <td>{{ music.genre }}</td>
            <td>{{ music.title }}</td>
            <td>
              <button
                @click.prevent="deleteMusic(music.key)"
                class="btn btn-danger"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";

export default {
  data() {
    return {
      musics: [],
    };
  },
  created() {
    db.collection("musics").onSnapshot((snapshotChange) => {
      this.musics = [];
      snapshotChange.forEach((doc) => {
        this.musics.push({
          key: doc.id,
          artist: doc.data().artist,
          genre: doc.data().genre,
          title: doc.data().title,
        });
      });
    });
  },
  methods: {
    deleteMusic(id) {
      if (window.confirm("Voulez vous vraiment supprimer cette musique ? ")) {
        db.collection("musics")
          .doc(id)
          .delete()
          .then(() => {
            console.log("musique supprimé!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
.btn-primary {
  margin: 12px;
  border-radius: 60px;
}
</style>