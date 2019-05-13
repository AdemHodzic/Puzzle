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

import Joi from 'joi'
import { concatRoutes } from 'utils'
// import { fromEventPattern } from 'rxjs';
import Api from './server'

import { getUser, getBlock, getEntry, getPage, getModel } from './mockApiResponses';

const api = new Api();

export default concatRoutes('/api', [
  {
    method: 'GET',
    path: '/',
    handler: () => '',
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/entries',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getEntries();
        case 'post':
          return api.createEntry();
        case 'put':
          return api.updateEntry(getEntry);
        default:
          return api.methodNotAllowed();
      }
    },
  },
  {
    method: ['DELETE', 'GET'],
    path: '/entries/{id}',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getEntry(request.params.id);
        case 'delete':
          return api.deleteEntry(request.params.id);
        default:
          return api.methodNotAllowed();
      }
    },
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/models',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getModels();
        case 'post':
          return api.createModel();
        case 'put':
          return api.updateModel(getModel);
        default:
          return api.methodNotAllowed();
      }
    },
  },
  {
    method: ['DELETE', 'GET'],
    path: '/models/{id}',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getModel(request.params.id);
        case 'delete':
          return api.deleteModel(request.params.id);
        default:
          return api.methodNotAllowed();
      }
    },
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/pages',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getPages();
        case 'post':
          return api.createPage();
        case 'put':
          return api.updatePage(getPage);
        default:
          return api.methodNotAllowed();
      }
    },
  },
  {
    method: ['DELETE', 'GET'],
    path: '/pages/{id}',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getPage(request.params.id);
        case 'delete':
          return api.deletePage(Request.params.id);
        default:
          return api.methodNotAllowed();
      }
    },
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/users',
    handler: async request => {
      switch (request.route.method) {
        case 'get':
          return api.getUsers();
        case 'post':
          return api.createUser();
        case 'put':
          return api.updateUser(getUser);
        default:
          return api.methodNotAllowed();
      }
    },
  },
  {
    method: ['DELETE', 'GET'],
    path: '/users/{id}',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getUser(request.params.id);
        case 'delete':
          return api.deleteUser(request.params.id);
        default:
          return api.methodNotAllowed();
      }
    },
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST', 'PUT'],
    path: '/blocks',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getBlocks();
        case 'post':
          return api.createBlock();
        case 'put':
          return api.updateBlock(getBlock);
        default:
          return api.methodNotAllowed();
      }
    },
  },
  {
    method: ['DELETE', 'GET'],
    path: '/blocks/{id}',
    handler: request => {
      switch (request.route.method) {
        case 'get':
          return api.getBlock(request.params.id);
        case 'delete':
          return api.deleteBlock(Request.params.id);
        default:
          return api.methodNotAllowed();
      }
    },
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
])