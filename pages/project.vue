<template>
  <div class="card__container">
    <div class="card">
      <div class="card__img-container">
        <img src="@/static/tnc.png" class="card__img" />
      </div>
      <div class="card__title">
        <h1>The Next Chapter</h1>
      </div>
      <div class="card__text">
        <p>The Next Chapter is an online Ace Attorney site. This site provides the latest content that is being developed for the client and accepts both bug reports and content submissions. All of the staff and rules for the server can be found here.</p>
      </div>
      <div class="card__button">
        <a href="http://thenextchapter.pw">Learn More</a>
      </div>
    </div>
    <div class="card">
      <div class="card__img-container">
        <img src="@/static/AutoBot.png" class="card__img" />
      </div>
      <div class="card__title">
        <h1>Autonomous Animal</h1>
      </div>
      <div class="card__text">
        <p>The Autonomous Animal is a Discord Bot that lets hundreds of users keep track of the price of turnips in Animal Crossing New Horizons. It is fully scalable and a bot that can be applied to any Discord server. Every day, it generates a graph to let the community know who has the highest price.</p>
      </div>
      <div class="card__button">
        <a href="/AA">Learn More</a>
      </div>
    </div>
        <div class="card">
      <div class="card__img-container">
        <img src="@/static/AutoBot.png" class="card__img" />
      </div>
      <div class="card__title">
        <h1>Autonomous Animal Web Application</h1>
      </div>
      <div class="card__text">
        <p>The Autonomous Animal Web Application is incredibly similar to the Discord Bot expect that it is accessible to anyone who has a web browser. It is currently under development so any feedback would be greatly appreciated!</p>
      </div>
      <div class="card__button">
        <a href="/AAW">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.card__container {
background: -moz-linear-gradient(90deg, rgba(52,73,94,1) 0%, rgba(16,135,117,1) 30%, rgba(16,135,117,1) 70%, rgba(52,73,94,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(52,73,94,1) 0%, rgba(16,135,117,1) 30%, rgba(16,135,117,1) 70%, rgba(52,73,94,1) 100%);
background: linear-gradient(90deg, rgba(52,73,94,1) 0%, rgba(16,135,117,1) 30%, rgba(16,135,117,1) 70%, rgba(52,73,94,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#34495e",endColorstr="#34495e",GradientType=1);   display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 3%;
  min-height: 100%;
}
.card {
  padding: 10px;
  margin-top: 20px;
  background-color: #009e72;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 700px;
  transition: 0.3s;
}
.card:hover {
  box-shadow: 0 8px 80px 0 rgba(0, 0, 0, 0.2);
}
.card__text {
  width: 100%;
  height: 200px;
  font-size: 1.06em;
}
.card__img-container {
  width: 100%;
  height: 350px;
  display: flex;
}
.card__img {
  max-width: 100%;
  height: auto;
  display: block;
  align-self: center;

}
a {
    background-color: transparent;
    border: 1px solid black;
    width: 200px;
    border-radius: 50px;
    font-size: 1.5em;
    color: #2f495e;
    transition: .3s;
    padding: 5px;
    cursor: pointer;
    text-decoration: none;
}
a:hover {
    background-color: #2f495e;
    color: whitesmoke;
}
</style>