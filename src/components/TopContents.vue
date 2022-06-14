<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
    rel="stylesheet"
  />
  <img id="top-img" src="https://placehold.jp/1200x300.png" />
  <div id="top-contents">
    <div class="clear-fix">
      <section id="profile" style="text-align: center">
        <h2>-About-</h2>
        <img src="https://placehold.jp/100x100.png" />
        <h3>My Name(名前)</h3>
        <span>sisneco(しすねこ)</span>
        <h3>Profession(職業)</h3>
        <span>プログラム書いてます.</span>
        <h3>出身地</h3>
        <span>奈良県🦌<span style="font-size: 12px"> イイとこです.</span></span>
      </section>
      <section id="why-site" style="text-align: center">
        <h2>-Why Create This Site?-</h2>
        <ul>
          <li>高校でC++に触れたモノの,よく分からず挫折</li>
          <li>大学時代は組み込みの学科で,PythonやC言語を弄る日々</li>
          <li>
            たまにUnityを触ってゲーム会社行くぞ～と思ってたが,気づいたらSESに
          </li>
          <li>
            会社の研修で好き放題学習した結果,`JavaScript`と`Vue.js`に出会う
          </li>
          <li>
            せっかく学習したんだし,自己紹介サイトでも作ろう<span
              style="font-size: 12px"
              >←イマココ</span
            >
          </li>
        </ul>
      </section>
      <section id="sns" style="text-align: right">
        <ul>
          <li id="twitter">
            <a href="https://twitter.com/?lang=ja" target="brank">
              Twitter <FontFa :icon="{ prefix: 'fab', iconName: 'twitter' }" />
            </a>
          </li>
          <li id="strava">
            <a href="https://www.strava.com/login" target="brank">
              Strava <FontFa :icon="{ prefix: 'fab', iconName: 'strava' }" />
            </a>
          </li>
          <li id="instagram">
            <a href="https://www.instagram.com/" target="brank">
              Instagram
              <FontFa :icon="{ prefix: 'fab', iconName: 'instagram' }" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopContents",
  data() {
    return {
      isFadeOut: false,
    };
  },
};
</script>

<style scoped>
#top-img {
  margin-top: 0.5em;
  width: 100%;
}

#top-contents {
  margin-top: 1em;
}

#top-contents h2 {
  margin: 0.5em 0;
}

#top-contents img {
  margin: 0;
  border-radius: 100vh;
}

#top-contents section {
  text-align: left;
}

#top-contents section h3 {
  font-size: 16px;
  margin-top: 3px;
  margin-bottom: 1px;
}

#top-contents section span {
  font-size: 14px;
  color: #404040;
}

#profile {
  float: left;
  width: 20%;
}

#why-site {
  float: left;
  width: 80%;
  border: 1px solid #ccc;
}

#why-site ul {
  margin-left: 1em;
}

#why-site li {
  text-align: left;
  list-style: none;
  line-height: 1.6em;
  color: #404040;

  display: flex;
  align-items: center; /* 垂直中心 */
}

/* before左 after右 */
#why-site li::before {
  border-top: 1px solid;
  content: "";
  width: 1em; /* 線の長さ */
  margin-right: 1em;
}

#why-site li:last-child {
  margin-bottom: 20px;
}

#sns {
  float: left;
  width: 80%;
  margin-top: 2.5em;
}

#sns li {
  display: inline-block;
  line-height: 2em;
  color: #aaa;
  list-style: none;
  font-size: 1.5em;
  margin-right: 1em;
  border-radius: 1vh;
}

#sns li a {
  font-family: "Courgette", cursive;
  padding: 0 1em;
  display: block;
  text-decoration: none;
  color: #fff;
}

#sns li:last-child {
  margin-right: 0.2em;
}

li#instagram {
  background: #fd1d1d;
}

li#twitter {
  background: #1da1f2;
}

li#strava {
  background: #fc4c02;
}

#sns .clear-fix::after {
  content: "";
  display: block;
  clear: both;
}
</style>
