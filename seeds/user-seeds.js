const { User } = require('../models');

const userData = [
    {
        username: "richard_l",
        twitter: "richardl",
        github: "richardl",
        email: "richardl@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "sample_2",
        twitter: "sample_2",
        github: "sample_2",
        email: "sample_2@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "sample_3",
        twitter: "sample_3",
        github: "sample_3",
        email: "sample_3@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "sample_4",
        twitter: "sample_4",
        github: "sample_4",
        email: "sample_4@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "sample_5",
        twitter: "sample_5",
        github: "sample_5",
        email: "sample_5@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "sample_6",
        twitter: "sample_6",
        github: "sample_6",
        email: "sample_6@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;