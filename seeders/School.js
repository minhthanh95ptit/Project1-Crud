// // // import faker from 'faker';
// // 'use strict';
// // const faker = require('faker');


// // module.exports = {
// //     up: (queryInterface, Sequelize) =>{
// //         let data = [];
// //         let amount = 10;

// //         while(amount--){
// //             let date =  new Date();
// //             data.push({
// //                 name:faker.internet.userName(),
// //                 address:faker.address.streetAddress(),
// //                 phone: faker.phone.phoneNumber(),
// //                 createAt: date,
// //                 updateAt: date
// //             })
// //         }
// //         return queryInterface.bulkInsert(('Schools', data, {}));
    
// //     },
// //     down: (queryInterface, Sequelize) =>{
// //         return queryInterface.bulkInsert('Schools', null, {})
// //     }

// // }

// 'use strict';

// const faker = require('faker');

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//       let data = [];
//       let amount = 100;

//       while(amount--){

//         let date = new Date();
//         data.push({
//           name:faker.internet.userName(),
//           address:faker.address.streetAddress(),
//           phone: faker.phone.phoneNumber(),
//           createAt: date,
//           updateAt: date
//         });
//       }

//       return queryInterface.bulkInsert('Schools', data, {});
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Schools', null, {})
//   }
// };
