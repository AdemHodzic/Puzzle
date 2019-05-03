// This file is part of Puzzle.

// Puzzle is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// Puzzle is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public
// License along with Puzzle. If not, see <https://www.gnu.org/licenses/>.

import AdminComponent from 'components/admin'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
// import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
Vue.use(Vuex)

// sync(store, router)

export default () => {
  const admin = new Vue({
    render: h => h(AdminComponent),
  })
  return admin
}
