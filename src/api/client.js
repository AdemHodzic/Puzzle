// This file is part of Puzzle.

// Puzzle is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// Puzzle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public
// License along with Puzzle. If not, see <https://www.gnu.org/licenses/>.

import axios from 'axios'

const URI = '/puzzle/api'

const apiDelete = (uri, id) => {
  return axios
    .delete(`${uri}/${id}`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

const get = (uri, id = null, query = {}) => {
  if (id) {
    return axios
      .get(`${uri}/${id}/`, { params: query })
      .then(response => {
        return response.data
      })
      .catch(error => {
        return Promise.reject(error)
      })
  }
  return axios
    .get(`${uri}/`, { params: query })
    .then(response => {
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

const post = (uri, data) => {
  return axios
    .post(uri, data)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

const put = (uri, id, data) => {
  return axios
    .put(`${uri}/${id}/`, data)
    .then(response => {
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export default {
  blocks: {
    delete: id => apiDelete(`${URI}/blocks`, id),
    get: (id = null, query = {}) => get(`${URI}/blocks`, id, query),
    post: data => post(`${URI}/blocks`, data),
    put: (id, data) => put(`${URI}/blocks`, id, data),
  },

  entries: {
    delete: id => apiDelete(`${URI}/entries`, id),
    get: (id = null, query = {}) => get(`${URI}/entries`, id, query),
    post: data => post(`${URI}/entries`, data),
    put: (id, data) => put(`${URI}/entries`, id, data),
  },

  models: {
    delete: id => apiDelete(`${URI}/models`, id),
    get: (id = null, query = {}) => get(`${URI}/models`, id, query),
    post: data => post(`${URI}/models`, data),
    put: (id, data) => put(`${URI}/models`, id, data),
  },

  pages: {
    delete: id => apiDelete(`${URI}/pages`, id),
    get: (id = null, query = {}) => get(`${URI}/pages`, id, query),
    post: data => post(`${URI}/pages`, data),
    put: (id, data) => put(`${URI}/pages`, id, data),
  },

  users: {
    get: (id = null, query = {}) => get(`${URI}/users`, id, query),
    put: (id, data) => put(`${URI}/users`, id, data),
  },
}
