'use strict';
// import faker from 'faker';

const faker = require('faker');


module.exports = {
    up: (queryInterface, Sequelize) =>{
        let data = [];
        let amount = 10;

        while(amount--){
            let date =  new Date();
            data.push({
                name:faker.internet.userName(),
                address:faker.address.streetAddress(),
                phone: faker.phone.phoneNumber(),
                classId: faker.random.number({'min': 1, 'max':10}),
                createdAt: date,
                updatedAt: date
            })
        }
        return queryInterface.bulkInsert('Schools', data, {});
    
    },
    down: (queryInterface, Sequelize) =>{
        return queryInterface.bulkInsert('Schools', null, {})
    }

}
