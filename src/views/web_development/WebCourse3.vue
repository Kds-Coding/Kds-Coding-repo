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
      <Exercice1 :answers="items" :rightAnswers="goodItems">
        <template v-slot:TextContainer>
          <div class="CodeStructure container codeContainer" id="textFill">
            <span>&#60;html &#62;</span>
            <Board style="margin-left: 30px" id="board-1" class="answer">
            </Board>
            <div style="margin-left: 60px" class="lineStructure">
              <Board id="board-2" class="answer"> </Board>
              Mon site web
              <Board id="board-3" class="answer"> </Board>
            </div>
            <Board style="margin-left: 30px" id="board-4" class="answer">
            </Board>

            <span style="margin-left: 30px"> &#60;body &#62;</span>
            <Board id="board-5" class="answer" style="margin-left: 55px">
            </Board>

            <div style="margin-left: 60px" class="lineStructure">
              <Board id="board-6" class="answer"> </Board>
              La page de mon super site
              <Board id="board-7" class="answer"> </Board>
            </div>
            <Board style="margin-left: 55px" id="board-8" class="answer">
            </Board>

            <span style="margin-left: 55px"> &#60;footer &#62;</span>
            <span style="margin-left: 60px" class="lineStructure">
              <Board id="board-9" class="answer"> </Board>
              Mon pied de page incroyable
              <Board id="board-10" class="answer"> </Board>
            </span>

            <span style="margin-left: 60px"> &#60;/footer &#62;</span>

            <span style="margin-left: 30px">&#60;/body &#62;</span>

            <span> &#60;/html &#62;</span>
          </div>

          <!-- Lorem ipsum <Board id="board-2 " class="answer"> </Board>dolor sit
          amet, consectetur
          <Board id="board-3" class="answer"> </Board>
          elit, sed do eiusmod tempor
          <Board id="board-4" class="answer"> </Board>
          incididunt ut labore et dolore
          <Board id="board-5" class="answer"> </Board>
          magna aliqua. Ut enim ad minim
          <Board id="board-6" class="answer"> </Board>
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
          <Board id="board-7" class="answer"> </Board> -->
        </template>
      </Exercice1>
    </div>
  </div>
</template>

<script>
import WebHeader from "@/components/common/WebHeader.vue";
import Exercice1 from "@/components/exercices/dropTheBlank.vue";

/*import Arrow from "@/assets/svg/icons/buttons/arrow.vue";
;
import Avatar1 from "@/assets/svg/icons/Avatar/Avatar1";*/
import Board from "@/components/exercices/Board.vue";

export default {
  components: {
    WebHeader,
    Exercice1,
    Board,
    /*Avatar1,
    Arrow,
    Modal,*/
  },
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Item-0",
          value: "<title>",
          list: 1,
        },
        {
          id: 1,
          title: "Item-1",
          value: "</title>",
          list: 1,
        },
        {
          id: 2,
          title: "Item-2",
          value: "<head>",
          list: 1,
        },
        {
          id: 3,
          title: "Item-3",
          value: "</head>",
          list: 1,
        },
        {
          id: 4,
          title: "Item-4",
          value: "</h1>",
          list: 1,
        },
        {
          id: 5,
          title: "Item-5",
          value: "Dovahkiin",
          list: 1,
        },
        {
          id: 6,
          title: "Item-6",
          value: "<h1>",
          list: 1,
        },

        {
          id: 8,
          title: "Item-8",
          value: "<p>",
          list: 1,
        },
        {
          id: 9,
          title: "Item-9",
          value: "</p>",
          list: 1,
        },

        {
          id: 10,
          title: "Item-10",
          value: "<main>",
          list: 1,
        },
        {
          id: 11,
          title: "Item-11",
          value: "</main>",
          list: 1,
        },
      ],
      goodItems: [
        "<head>",
        "<title>",
        "</title>",
        "</head>",
        "<main>",
        "<h1>",
        "</h1>",
        "</main>",
        "<p>",
        "</p>",
      ],
    };
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