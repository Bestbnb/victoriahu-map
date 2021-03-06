
// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };


var faker = require('faker');

let createRecord = (knex, id) => {
//   var arr = [];
//   arr.push(faker.geo.latitude().split("."));
//   var latChanged = arr[0] + arr[1].slice(0,4);
// console.log(faker.internet.userName());
// console.log(faker.geo.longitude());
  return knex('map').insert({
    id,
    name: faker.internet.userName(),
    lat: faker.random.number({
      'min': 41.85003,
      'max': 41.97293, 
      'precision': 0.0001
    }),
    lng: faker.random.number({
      'min': 12.11133,
      'max': 12.71353, 
      'precision': 0.0001
    })
    // lat: faker.address.latitude(),
    // lng: faker.address.longitude()
  })
}

exports.seed = (knex, Promise) => {
  return knex('map').del()
    .then(() => {
      let records = [];

      for (let i = 1; i < 101; i++) {
        records.push(createRecord(knex, i))
      }

      return Promise.all(records);
    });
};