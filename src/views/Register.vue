<template>
  <RegisterComponent>
    <!-- Icon -->
    <template v-slot:header>
      <h1>On va t'inscrire</h1>
    </template>

    <template v-slot:body>
      <div class="iconUser">
        <Avatar1></Avatar1>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="userRegistration">
        <label for="">Ton pseudo</label>

        <input
          type="text"
          id="register"
          name="register"
          placeholder="Mon pseudo"
          v-model="user.userName"
        />
        <label for="">Ton email</label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Mon email"
          v-model="user.email"
        />
        <label for="">Ton mot de passe</label>
        <input
          type="password"
          id="password"
          name="register"
          placeholder="1234"
          maxlength="7"
          required
          v-model="user.password"
        />

        <input type="submit" value="Suivant" />
      </form>
    </template>
    <template v-slot:footer>
      <div id="formFooter">
        <a class="underlineHover" href="#">Déjà inscrit?</a>
      </div></template
    >
    <!-- Remind Passowrd -->
  </RegisterComponent>
</template>

<script>
import RegisterComponent from "@/components/common/LoginComponent.vue";
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";
import { auth, db } from "../firebaseDb";
export default {
  components: {
    RegisterComponent,
    Avatar1,
  },
  data() {
    return {
      user: {
        userName: "",
        email: "",
        password: "",
        score: 0,
      },
    };
  },
  methods: {
    userRegistration() {
      auth

        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then((res) => {
          db.collection("users")
            .add(this.user)
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
          res.user
            .updateProfile({
              displayName: this.user.userName,
            })
            .then(() => {
              this.$router.push("/login");
            });
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style>
/* TYPOGRAPHY*/

.auth-body input[type="submit"] {
  background-color: #ffd67e;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
}

.auth-body input[type="submit"]:hover {
  background-color: #ffc54b;
}

.auth-body input[type="text"],
input[type="password"] {
  background-color: #f6f6f6;
  color: #0d0d0d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 5px;
  width: 85%;
  border: 2px solid #f6f6f6;
  border-radius: 5px 5px 5px 5px;
  outline-color: #ffc54b;
}

*:focus {
  outline-color: #ffc54b;
}

/* ANIMATIONS */

.underlineHover:hover {
  color: #0d0d0d;
}
</style>