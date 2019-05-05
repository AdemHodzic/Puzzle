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

import { User } from 'models/user'
import Joi from 'joi'
import { concatRoutes } from 'utils'

export default concatRoutes('/api', [
  {
    method: 'GET',
    path: '/',
    handler: () => 'API',
  },
  {
    method: ['GET', 'POST'],
    path: '/entries',
    handler: () => 'entries',
  },
  {
    method: ['DELETE', 'GET', 'PUT'],
    path: '/entries/{id}',
    handler: () => 'entry detail',
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/models',
    handler: () => 'models',
  },
  {
    method: ['DELETE', 'GET', 'PUT'],
    path: '/models/{id}',
    handler: () => 'model detail',
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/pages',
    handler: () => 'pages',
  },
  {
    method: ['DELETE', 'GET', 'PUT'],
    path: '/pages/{id}',
    handler: () => 'page detail',
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/sites',
    handler: () => 'sites',
  },
  {
    method: ['DELETE', 'GET', 'PUT'],
    path: '/sites/{id}',
    handler: () => 'site detail',
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
  {
    method: ['GET', 'POST'],
    path: '/users',
    handler: async () => {
      const users = await User.query()
      return users.map(u => {
        const { password_hash, ...user } = u
        return user
      })
    },
  },
  {
    method: ['DELETE', 'GET', 'PUT'],
    path: '/users/{id}',
    handler: () => 'user detail',
    options: {
      validate: {
        params: {
          id: Joi.number(),
        },
      },
    },
  },
])
