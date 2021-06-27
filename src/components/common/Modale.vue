<template>
  <div class="bloc-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>

    <div class="modale card">
      <div v-on:click="toggleModale" class="btn-modale btn btn-danger">X</div>
      <div class="modaleSuccess">
          <GoldMedal width="125.232143" height="125.232143"></GoldMedal>
             <h2>tu viens de gagner un succès <br> : Tu es le roi des Quiz</h2>            
      </div>
<!--       <div class="ModaleEchec">
            <h2>Bien tenté, essaie encore <br/>pour améliorer ton résultat.</h2>
      </div> -->

    </div>
  </div>
</template>


<script>
import GoldMedal from "@/assets/svg/icons/medal/gold-medal";

export default {
    components: {
    GoldMedal,

  },
  name: "Modale",
  props: ["revele", "toggleModale"]

};
</script>


<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #f1f1f1;
  color: #333;
  padding: 50px;
  position: fixed;
  top: 30%;
}

.btn-modale {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>