<template>
  <div id="header">
    <nav id="navMenu">
      <span>About</span>
      <ul>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Riding Bycycle</a>
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
  data() {
    return {};
  },
};
</script>

<style scoped>
#navMenu {
  position: relative;
  border-bottom: 1px solid #ccc;
}

/* navigationMenu */
#navMenu span {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 1.5em;
  font-size: 30px;
  color: #aaa;
}

#navMenu ul {
  display: table;
  margin: 0 0 0 auto;
  padding: 0;
  width: 70%;
  text-align: center;
}
#navMenu ul li {
  display: table-cell;
  min-width: 50px;
  padding-left: 5px;
  padding-right: 7px;
  border-right: 1px solid #ccc;
  padding-bottom: 5px;
}
#navMenu ul li:first-child {
  border-left: 1px solid #ccc;
}
#navMenu ul li a {
  display: block;
  width: 100%;
  padding: 7px 0;
  text-decoration: none;
  color: #aaa;
}
#navMenu ul li a:hover {
  padding-bottom: 5px;
}
</style>
