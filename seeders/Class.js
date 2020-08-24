// 'use strict';
// // import faker from 'faker';

// const faker = require('faker');
// module.exports = {
//     up: (queryInterface, Sequelize) =>{
//         let data = [];
//         let amount = 10;

//         while(amount--){    
//             let date = new Date();
//             data.push({
//                 name: faker.internet.userName(),
//                 schoolId: faker.random.number({'min': 1, 'max':10}),
//                 totalStudent: faker.random.number({'min': 20,'max': 30}),
//                 createAt: date,
//                 updateAt: date
//             })
//         }
//         return queryInterface.bulkInsert(('Classes', data, {}));
//     },
//     down: (queryInterface, Sequelize) =>{
//         return queryInterface.bulkDelete('Classes', null, {})
//     }
// }