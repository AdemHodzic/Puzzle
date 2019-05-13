export default {
    id: 1,
    email: 'admin@puzzle.com',
    password_hash: 'hashedpasswordhere',
    permissions: [],
    username: 'admin',
    bio: 'This is my bio',
    firstName: 'Admin',
    lastName: 'Admin',
    photo: '',
    entries: [
        {
            id: 1,
            data: {},
            image: '',
            modifiedAt: new Date(),
            model: {
                id: 1,
                data: '',
                name: '',
                block: {
                    id: 1,
                    data: {},
                    name: '',
                },
                history: [
                    {
                        id: 1,
                        data: {},
                        name: '',
                        timestamp: new Date(),
                    }
                ]
            }
        }
    ],
    pages: [
        {
            id: 1,
            data: {},
            description: '',
            image: '',
            history: [
                {
                    id: 1,
                    description: '',
                    data: {},
                    image: '',
                    route: '',
                    timestamp: new Date(),
                    title: ''
                }
            ],
            route: '',
            title: ''
        }
    ]
}