<template>
  <div id="first-contents">
    <h1>-走る喜びとはなにか-</h1>
    <p>2019年末: "TREK FX2 DISC 2020" を通学用に購入</p>
    <p>2020年: コロナ襲来 一時はクロスバイクに跨ることはなくなった</p>
    <p>2022年春: 就職 友人がロードバイクを始め,一緒に走る</p>
    <p>2022年6月: "RIDLEY FENIX SL DISC 2020" を購入 沼に落ちる</p>
    <section>
      <p>僕はStravaを使ってタイムが縮むのを見てニヤニヤしてます</p>
      <p>しかし,人によっては景色を見たりグルメを堪能したり...</p>
      <p>人によって違う楽しみ方を与えてくれる 自転車の虜になってます</p>
    </section>
  </div>
  <div id="second-contents" class="clear-fix">
    <section>
      <h1>-RIDLEY FENIX SL DISC 2020-</h1>
      <img src="https://placehold.jp/1000x500.png" />
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
    </section>
    <section>
      <h1>TREK FX2 DISC 2020</h1>
      <img src="https://placehold.jp/1000x500.png" />
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
      <p>インプレできる程乗れてない初心者なので、イイとこだけ</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "RBContents",
};
</script>

<style scoped>
img {
  margin-top: 0.5em;
  width: 90%;
}

#first-contents {
  background-image: url("https://placehold.jp/1200x350.png");
  background-size: cover;
  height: 350px;
  margin-top: 0.5em;
}

#first-contents h1 {
  margin-top: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-align: center;
  color: white;
}

#first-contents p {
  font-size: 15px;
  color: white;
  margin-left: 3em;
  line-height: 0.5em;
  text-align: left;
}

#first-contents section {
  margin-top: 3em;
}

#first-contents section p {
  margin-left: 0;
  text-align: center;
  font-weight: bold;
  line-height: 0.8em;
  font-size: 16px;
}

#second-contents section {
  float: left;
  width: 49%;
  margin: 5px;
  margin-top: 1em;
  border: 1px solid #ccc;
}

#second-contents p {
  color: #aaa;
  margin-left: 1.8em;
  font-size: 14px;
  line-height: 0.5em;
}
</style>
