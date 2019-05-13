import { User } from 'models/user'

import {
    getUsers,
    getUser,
    getPages,
    getPage,
    getModels,
    getModel,
    getEntry,
    getEntries,
    getBlock,
    getBlocks
} from './mockApiResponses';

export default class Api {
    constructor() {
        this.useMock = true;
    }

    // User-related API methods
    async getUsers() {
        if (this.useMock) {
            return JSON.stringify(getUsers);
        }
        const users = await User.query()
        return users.map(u => {
            const { password_hash, ...user } = u
            return user
        })
    }

    getUser(id) {
        if (this.useMock) {
            let userToReturn;

            getUsers.forEach(user => {
                if (user.id === id) {
                    userToReturn = user;
                }
            });

            return JSON.stringify(userToReturn || this.objectNotFound());
        }
        return this.notImplemented();

    }

    createUser() {
        if (this.useMock) {
            return JSON.stringify(getUser);
        }
        return this.notImplemented();

    }

    updateUser(user) {
        if (this.useMock) {
            return JSON.stringify(user);
        }
        return this.notImplemented();

    }

    deleteUser(id) {
        if (this.useMock) {
            return `User by ID ${id} has been deleted`;
        }
        return this.notImplemented();

    }

    // Page-related API methods
    getPages() {
        if (this.useMock) {
            return JSON.stringify(getPages);
        }

        return this.notImplemented();
    }

    getPage(id) {
        if (this.useMock) {
            let pageToReturn;

            getPages.forEach(page => {
                if (page.id === id) {
                    pageToReturn = page;
                }
            });

            return JSON.stringify(pageToReturn || this.objectNotFound());
        }
        return this.notImplemented();

    }

    createPage() {
        if (this.useMock) {
            return JSON.stringify(getPage)
        }
        return this.notImplemented();

    }

    updatePage(page) {
        if (this.useMock) {
            return JSON.stringify(page)
        }
        return this.notImplemented();

    }

    deletePage(id) {
        if (this.useMock) {
            return `Page by ID ${id} has been deleted`;
        }
        return this.notImplemented();

    }

    // Model-related API methods
    getModels() {
        if (this.useMock) {
            return JSON.stringify(getModels);
        }
        return this.notImplemented();

    }

    getModel(id) {
        if (this.useMock) {
            let modelToReturn;

            getModels.forEach(model => {
                if (model.id === id) {
                    modelToReturn = model;
                }
            });

            return JSON.stringify(modelToReturn || this.objectNotFound());
        }
        return this.notImplemented();

    }

    createModel() {
        if (this.useMock) {
            return JSON.stringify(getModel)
        }
        return this.notImplemented();

    }

    updateModel(model) {
        if (this.useMock) {
            return JSON.stringify(model)
        }
        return this.notImplemented();

    }

    deleteModel(id) {
        if (this.useMock) {
            return `Model by ID ${id} has been deleted`;
        }
        return this.notImplemented();

    }

    // Entry-related API methods
    getEntries() {
        if (this.useMock) {
            return JSON.stringify(getEntries);
        }
        return this.notImplemented();

    }

    getEntry(id) {
        if (this.useMock) {
            let entryToReturn;

            getEntries.forEach(entry => {
                if (entry.id === id) {
                    entryToReturn = entry;
                }
            });

            return JSON.stringify(entryToReturn || this.objectNotFound());
        }
        return this.notImplemented();

    }

    createEntry() {
        if (this.useMock) {
            return JSON.stringify(getEntry)
        }
        return this.notImplemented();

    }

    updateEntry(entry) {
        if (this.useMock) {
            return JSON.stringify(entry)
        }
        return this.notImplemented();

    }

    deleteEntry(id) {
        if (this.useMock) {
            return `Entry by ID ${id} has been deleted`;
        }
        return this.notImplemented();

    }

    // Block-related API methods
    getBlocks() {
        if (this.useMock) {
            return JSON.stringify(getBlocks);
        }
        return this.notImplemented();

    }

    getBlock(id) {
        if (this.useMock) {
            let blockToReturn;

            getBlocks.forEach(block => {
                if (block.id === id) {
                    blockToReturn = block;
                }
            });

            return JSON.stringify(blockToReturn || this.objectNotFound());
        }
        return this.notImplemented();

    }

    createBlock() {
        if (this.useMock) {
            return JSON.stringify(getBlock)
        }
        return this.notImplemented();

    }

    updateBlock(block) {
        if (this.useMock) {
            return JSON.stringify(block)
        }
        return this.notImplemented();

    }

    deleteBlock(id) {
        if (this.useMock) {
            return `Block by ID ${id} has been deleted`;
        }
        return this.notImplemented();

    }

    static methodNotAllowed() {
        const error = {
            errorCode: 405,
            error: 'Method not allowed'
        }

        return JSON.stringify(error);
    }

    static objectNotFound() {
        const error = {
            errorCode: 404,
            error: 'Object not found'
        }

        return JSON.stringify(error);
    }

    static notImplemented() {
        const error = {
            errorCode: 501,
            error: 'Not implemented'
        }

        return JSON.stringify(error);
    }
}