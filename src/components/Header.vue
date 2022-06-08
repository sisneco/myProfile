<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"
    rel="stylesheet"
  />
  <div id="header">
    <nav id="navMenu">
      <span>My Profile Site</span>
      <ul>
        <li>
          <router-link to="/" :class="{ current: currentPage === 'about' }"
            >About</router-link
          >
        </li>
        <li>
          <router-link
            to="/RidingBycycle"
            :class="{ current: currentPage === 'ridingbycycle' }"
            >Riding Bycycle</router-link
          >
        </li>
        <li>
          <a href="">Plaing Music</a>
        </li>
        <li>
          <a href="">Lisning Music</a>
        </li>
        <li>
          <a href="">Taking Photo</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    currentPage: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#navMenu {
  position: relative;
  padding-bottom: px;
  border-bottom: 1px solid #ccc;
}

/* navigationMenu */
#navMenu span {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 2em;
  margin-bottom: 1em;
  font-size: 28px;
  font-family: "Fredoka One", cursive;
  color: #24140e;
}

#navMenu ul {
  display: table;
  margin: 0 0 0 auto;
  width: 70%;
  text-align: center;
}
#navMenu ul li {
  display: table-cell;
  min-width: 50px;
  padding-left: 5px;
  padding-right: 7px;
  border-right: 1px solid #ccc;
  padding-top: 5px;
  padding-bottom: 10px;
}
#navMenu ul li:first-child {
  border-left: 1px solid #ccc;
}

#navMenu ul li a {
  display: block;
  width: 100%;
  text-decoration: none;
  color: #aaa;
  position: relative;
  padding: 5px 0;
}

#navMenu li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  /*アニメーションの指定*/
  background: yellow;
  transform: scale(0, 1); /*X方向0、Y方向1*/
  transform-origin: center top; /*上部中央基点*/
}

#navMenu li a:hover {
  color: #ffff9e;
}

#navMenu .current {
  pointer-events: none;
  color: #ea5532;
  font-weight: bold;
}

#navMenu li a:hover::after {
  transition: all 0.8s;
  transform: scale(1, 0); /*X方向にスケール拡大*/
}

#navMenu ul li a:hover {
  padding-bottom: 5px;
}
</style>
