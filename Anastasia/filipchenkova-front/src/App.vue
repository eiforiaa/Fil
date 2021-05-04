<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :sports="sportsList"
      @change-sport="handleChangeSport"
    />
    <RightBoard slot="rightBoard" :sport="activeSport" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeSportId: null,
      sportsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/sports")
      .then(response => (this.sportsList = response.data.sports));
  },
  computed: {
    activeSport() {
      const fallback = {};
      if (!this.activeSportId) {
        return fallback;
      }

      return (
        this.sportsList.find(({ id }) => id === this.activeSportId) || fallback
      );
    }
  },
  methods: {
    handleChangeSport({ id }) {
      this.activeSportId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Train One", cursive, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #a8d0e6;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #24305e; /*#0b0c10; */
  --dark_80: #1f2833;
  --gray: #05386b;
  --ultramarine_100: #66fcf1;
  --ultramarine_80: #f76c6c;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>
