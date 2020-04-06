<template>
  <div>
    <div class="pipe__main">
      <div class="pipe__image">
        <img src="@/static/caleb.png" id="caleb-image" />
      </div>
    </div>
    <main>
      <div class="info__main">
        <h1>Caleb Mabry</h1><h3>"A Full Stack Dev who wants a Full Stack of Pancakes"</h3>
      </div>
      <div class="about__main">
        <div class="about__info">
          <h1>Full Stack Developer</h1>
        </div>
      </div>
      <div class="typing__command">
        <h3 class="typing__header">[x][o][-]CalebMabry@CalebMabry</h3>
        <p>{{words}}</p>
      </div>
    </main>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      words: "",
      totalTime: 1
    }
  },
  mounted () {
    this.hello()
  },
  methods: {
    hello() {
      let textLine1 = `$ Hello, my name is Caleb Mabry and I am a full stack developer!`
      // let textLine2 = `$ Well this isn't any fun!`
      for (let i= 0; i < textLine1.length; i++) {
        this.delayText(i, textLine1)
      }
      
    },
    delayText(i, text) {
      setTimeout(() => {
        this.words += text[i]
        this.totalTime = 100 * i
      }, 100 * i)
    }
  },

}
</script>

<style>
html,
body {
  margin: 0;
  background-color: #34495e;

}
.layout-enter-active, .layout-leave-active {
  transition: opacity .5s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
#caleb-image {
  max-width: 100%;
  height: 100;
  display: block;
}
.pipe__image {
  width: 70%;
  margin: auto;
  z-index: 0;
}
.pipe__main::after {
  content: '';
  background-color: #2f495e;
  width: 600px;
  height: 1000px;
  position: absolute;
  box-shadow: 0px 500px 500px 500px rgba(0, 0, 0, 0.2);
  transform: rotateZ(-45deg) translate(550px);
  right: 0;
  top: 0;
  z-index: -1;

}
.pipe__main::before {
  content: '';
  background-color: #00c58e;
  width: 600px;
  height: 1000px;
  position: absolute;
  box-shadow: 500px 500px 500px 500px rgba(0, 0, 0, 0.2);
  transform: rotateZ(45deg) translateY(-80px);
  right: 0;
  top: 0;
  z-index: -1;

}
.pipe__main {
  position: relative;
  overflow: hidden;
  background-color: #108775;
  z-index: 1;
box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.2);
}
.info__main {
  width: 100%;
  padding: 2%;
  background: #77E6C7;
  background: -webkit-linear-gradient(bottom, #77E6C7, #7BF6E4);
  background: -moz-linear-gradient(bottom, #77E6C7, #7BF6E4);
  background: linear-gradient(to top, #77E6C7, #7BF6E4);
}

.about__main {
  width: 100%;
  padding: 1%;
  height: auto;
  display: flex;
  box-shadow: 0px 30px 30px 30px rgba(0, 0, 0, 0.2);

  overflow: hidden;
  background: -webkit-linear-gradient(right, #00C68F, #108776);
  background: -moz-linear-gradient(right, #00C68F, #108776);
  background: linear-gradient(to left, #00C68F, #108776);
}
.about__info {
  height: 400px;
  width: 30%;
  font-size: 1.5em;
  display: flex;
  align-items: center;

}
.typing__command {
  width: 100%;
  color: #74e7d2;
  /* display: flex;
  flex-wrap: wrap; */
}
.typing__header {
  width: 100%;
  color: #74e7d2;
  background-color: black;
  padding: 5px;
}
@media screen and (max-width: 800px){
  .about__main {
    flex-direction: column;
  }
  .about__info {
    height: auto;
    width: 100%;
    text-align: center;
    padding-bottom: 10px;
  }
  .about__bubble {
  box-shadow: 30px 30px 30px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 200px;
  border-radius: 50%;
  height: 200px;
  background-color: whitesmoke;
}
.about__bubble::after {
  content: "";
  position: absolute;
  height: 200px;
  top: 0;
  left: 100px;
  width: 2000px;
  z-index: 0;
  background-color: whitesmoke;
}
.technology__list {
  justify-content: space-evenly;
  position: absolute;
  top: 50%;
  left:0;
  width: 100vw;
  transform: translate(0,-50%);
}
.about__technology {
  height: 200px;
  width: 100vw;
  position: relative;
  justify-content: center;
}

}
</style>
