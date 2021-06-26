<template>

        <div class="wrapper fadeInDown">
        <div id="formContent">
            <!-- Tabs Titles -->

            <!-- Icon -->
            <div class="iconUser">
            <Avatar1></Avatar1>
            </div>

            <!-- Login Form -->
            <form>
            <input type="text" id="login" name="login" placeholder="Mon pseudo">
            <input type="text" id="password" name="login" placeholder="Mon code">
            <input type="submit" value="Connexion">
            </form>

        </div>
        </div>
  
</template>


<script>

import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";


export default {
  components: {
    Avatar1,

  },
};
</script>

<style lang="scss" scoped>

/* STRUCTURE */

.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
}

#formContent {
  -webkit-border-radius: 10px 10px 10px 10px;
  border-radius: 10px 10px 10px 10px;
  background: #fff;
  padding: 30px;
  width: 90%;
  max-width: 450px;
  position: relative;
  padding: 0px;
  box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);
  text-align: center;
}


/* TYPOGRAPHY*/

input[type=submit] {
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

input[type=submit]:hover  {
  background-color: #FFC54B;
}

input[type=text] {
  background-color: #f6f6f6;
  border: none;
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
   outline-color: #FFC54B;
}
*:focus {
    outline-color: #FFC54B;
}
/* ANIMATIONS */

.underlineHover:hover {
  color: #0d0d0d;
}

</style>