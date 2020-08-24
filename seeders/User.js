// import faker from 'faker';

const faker = require('faker');
module.exports = {
    up: (queryInterface, Sequelize) =>{
        let data = [];
        let amount = 10;

        while(amount--){
            let date = new Date();
            data.push({
                name: faker.internet.userName(),
                classId: faker.random.number({'min':1, 'max':10}),
                schoolId: faker.random.number({'min':1, 'max':10}),
                age: faker.random.number({'min':15, 'max':24}),
                phone: faker.phone.phoneNumber(),
                createAt: date,
                updateAt: date
            })
        }
        return queryInterface.bulkInsert(('Users', data, {}));
    },
    down: (queryInterface, Sequelize) =>{
        return queryInterface.bulkDelete('Users', null, {})
    }
}