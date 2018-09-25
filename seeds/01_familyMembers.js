
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('familyMembers').del()
    .then(function () {
      // Inserts seed entries
      return knex('familyMembers').insert([
        {
          name: 'Danny'
        },
        {
          name: 'Julie'
        },
        {
          name: 'Andrea'
        },
        {
          name: 'Rene'
        },
        {
          name: 'Bob'
        },
        {
          name: 'Anna'
        },
        {
          name: 'Dan'
        },
        {
          name: 'Jerry'
        }
      ]);
    });
};
