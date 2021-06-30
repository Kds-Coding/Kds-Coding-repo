<template>
  <WebHeader>
    <h2 id="HeaderSubTitle">CHAPITRE 3 - La toile comme disent les jeunes !</h2>
    <p class="HeaderTitleText text-center">
      <bold>Comprendre la structure d'une page web.</bold>
      Nous apprendrons comment écrire la structure de notre site avec HTML.
      Cette structure va nous permettre d'accueillir le contenu du site.
    </p>
  </WebHeader>
  <div id="BouttonContainer"></div>
  <div id="WebConteneur" class="CourseContainer">
    <br />
    <div class="container CoursePage">
      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>1. La balise HTML</h1>
      </div>

      <p>
        La dernière fois nous avons vu ce qu'était le HTML: Considérez les
        balises HTML comme le pain dans un sandwich de page Web. Chaque page Web
        commence et se termine par une balise HTML. Ces balises indiquent au
        navigateur comment lire le reste du document et quand arrêter la
        lecture.
      </p>

      <div class="codeContainer">
        <span>&#60;html &#62;</span>
        <span>&#60;/html &#62;</span>
      </div>
      <p />

      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>2. La balise HEAD (en-tête)</h1>
      </div>
      <p>
        On arrive ensuite à la balise HEAD. La balise head est la zone où les
        éléments importants sont traités en premier, comme le CSS et le
        Javascript. Des balises individuelles sont ajoutées à l'intérieur de la
        balise head,ce qui permet au navigateur de connaître certaines
        spécificités,telles que le titre de la page,l'auteur de la page et
        d'autres informations de ce type. Tu peux voir ça comme une étiquette où
        l’on peut lire les spécificités. Rien dans cette balise head ne sera
        affiché sur la page Web. Cependant, certaines informations sont
        affichées dans l'application de navigateur elle-même, comme le titre de
        l'onglet. Il est facile d'être confus par l'endroit où les informations
        de la balise HEAD sont réellement affichées. Cette balise est le premier
        élément, ou balise, à l'intérieur de la balise HTML.
      </p>
      <div class="codeContainer">
        <span>&#60;html &#62;</span>
        <span style="margin-left: 30px">&#60;head &#62;</span>
        <span style="margin-left: 30px">&#60;/head &#62;</span>
        <span>&#60;/html &#62;</span>
      </div>
      <p>
        Les balises qui fournissent des informations sur le titre et la balise
        méta sont parmi les rares qui se trouvent à l'intérieur des balises
        head. Voici quelques uns des balise qui se trouve dans la balise HEAD :

        <span>&#60;titre &#62;</span>
        , il contient le titre de la page HTML qui apparaît dans un onglet du
        navigateur.
      </p>

      <div class="codeContainer">
        <span>&#60;titre &#62; Mon titre&#60;/titre &#62;</span>
      </div>
      <p>
        Aussi, plus tard, lorsque nous créerons un nouveau fichier pour ajouter
        des styles à celui-ci (qui est vu dans le chaptire précédent), nous
        connecterons ces deux documents ensemble via un lien ajouté dans le
        HEAD. Pour cela, nous utilisons la balise &#60;link &#62; Remarque : Un
        site Web n'est qu'un ensemble de fichiers. Ces fichiers doivent tous
        être dans le même dossier pour que le navigateur les récupère. Le site
        Web simple aura un fichier HTML (enregistré avec une extension de
        fichier .html à la fin), un fichier CSS (enregistré avec une extension
        de fichier .css à la fin) et il peut y avoir des images qui seront
        enregistrées dans un dossier nommé " images". Petit rappel : extension
        de fichier Une extension de fichier est le groupe de lettres qui
        viennent après le point dans un nom de fichier, nous indiquant de quel
        type de fichier il s'agit.
      </p>
      <div class="codeContainer">
        <span>&#60;link href="style.css" rel="stylesheet" &#62; </span>
      </div>

      <div class="col-lg-12 subTitle">
        <div class="icon"><Avatar1></Avatar1></div>
        <h1>3. La balise BODY</h1>
      </div>
      <p>
        La balise <b>BODY</b> représente le contenu d'un document HTML. Cette
        balise permet au navigateur de savoir ce qu'il doit afficher sur la
        page. À l'intérieur de la balise body se trouve l'endroit où nous
        placerons tout notre contenu, comme les balises et le texte. Tout ce qui
        est placé à l'intérieur de la balise body s'affiche sur la page Web. La
        balise body est placée après la balise head à l'intérieur de la balise
        html. il n'y a qu'une balise body par page.
      </p>

      <div class="codeContainer">
        <span>&#60;html &#62;</span>
        <span style="margin-left: 30px">&#60;head &#62;</span>
        <span style="margin-left: 60px"
          >&#60;title&#62;Mon titre&#60;/title&#62;
        </span>

        <span style="margin-left: 30px">&#60;/head &#62;</span>
        <span style="margin-left: 30px">&#60;body &#62;</span>

        <span style="margin-left: 30px"> &#60;/body &#62;</span>

        <span>&#60;/html &#62;</span>
      </div>
      <p>
        Dans le balise BODY de notre fichier html nous aurons 3 éléments
        principaux : Le header (en-tête) vit à l'intérieur du body et contient
        généralement tout ce qui se trouve tout en haut d'un site.
      </p>

      <div class="codeContainer">
        <span>&#60;header &#62; </span>
        <span>&#60;/header &#62; </span>
      </div>
      <p>
        Le main (une partie principale)du site contient l'information la plus
        importante
      </p>

      <div class="codeContainer">
        <span>&#60;main &#62; </span>
        <span>&#60;/main &#62; </span>
      </div>

      <p>
        Le footer (un pied de page) est la partie qui vient tout à la fin d'un
        site.
      </p>
      <div class="codeContainer">
        <span>&#60;footer &#62; </span>
        <span>&#60;/footer &#62; </span>
      </div>

      <img
        src="..\..\assets\imgs\web\course3\html.png"
        alt=""
        class="img-fluid"
      />
      <div class="codeContainer">
        <span>&#60;html &#62; </span>
        <span style="margin-left: 30px">&#60;head &#62; </span>
        <span style="margin-left: 60px"
          >&#60;title &#62;Votre titre &#60;/title &#62;
        </span>
        <span style="margin-left: 30px">&#60;/head &#62; </span>
        <span style="margin-left: 30px">&#60;body &#62; </span>
        <span style="margin: 20px 0px 20px 60px">&#60;header &#62; </span>
        <span style="margin: 20px 0px 20px 60px">&#60;/header &#62; </span>
        <span style="margin: 20px 0px 20px 60px">&#60;main &#62; </span>
        <span style="margin-left: 60px">&#60;/main &#62; </span>
        <span style="margin: 20px 0px 20px 60px">&#60;footer &#62; </span>
        <span style="margin-left: 60px">&#60;/footer &#62; </span>

        <span style="margin-left: 30px">&#60;/body &#62; </span>
        <span>&#60;/html &#62; </span>
      </div>
      <div class="container text-center w-25">🖥️❤️⌨️</div>
      <!-- Structure d'un exercice du style texte à trous-->
    </div>
  </div>
  <Footer>
    <Banner
      rectColor="#46BB6E"
      pathColor="#178C3F"
      height="250px"
      width="100%"
      class="col-lg-12"
      viewBox="0 0 1900 250"
    >
      <div class="centerLink">
        <h1 class="footerLink">EXERCICE</h1>
        <Arrow
          arrowTransform="rotate(90)"
          @click="() => $router.push('/web/exercice3')"
        ></Arrow>
      </div>
    </Banner>
  </Footer>
</template>

<script>
import WebHeader from "@/components/common/WebHeader.vue";
import Footer from "@/components/common/Footer.vue";
import Banner from "@/assets/svg/Headers/bannerObj.vue";
import Arrow from "@/assets/svg/icons/buttons/arrow.vue";
/*";
;
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";*/

export default {
  components: {
    WebHeader,

    Footer,
    Banner,
    Arrow,
    /*Avatar1,
    
    Modal,*/
  },
};
</script>

<style>
.codeContainer {
  display: flex;
  flex-direction: column;
  background-color: #434343;
  color: #db880d;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.7em;
  line-height: 1.5em;
  margin-left: 10px;
}

.CourseContainer p {
  margin: 30px;
  font-family: Alatsi;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3em;
  line-height: 1.7em;
}
</style>