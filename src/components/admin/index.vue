<!-- This file is part of Puzzle. -->

<!-- Puzzle is free software: you can redistribute it and/or modify -->
<!-- it under the terms of the GNU Affero General Public License as -->
<!-- published by the Free Software Foundation, either version 3 of -->
<!-- the License, or (at your option) any later version. -->

<!-- Puzzle is distributed in the hope that it will be useful, but -->
<!-- WITHOUT ANY WARRANTY; without even the implied warranty of -->
<!-- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the -->
<!-- GNU Affero General Public License for more details. -->

<!-- You should have received a copy of the GNU Affero General Public -->
<!-- License along with Puzzle. If not, see <https://www.gnu.org/licenses/>. -->

<template>
  <div class="admin" id="admin">
    <!-- <Sidebar /> -->
    <h1 @click="onClick">Put admin here</h1>

    <!-- <router-view class="content" /> -->
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "./sidebar";

export default {
  components: { Sidebar },

  methods: {
    goBack() {
      // window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    },

    onClick() {
      console.log("click");
    }
  },

  created() {
    // this.$store.commit("fetchBlueprints");
    // this.$store.commit("fetchUser");
  },

  mounted() {
    console.log("hola");
  }
};
</script>
