exports.up = function(knex, Promise) {
    return knex.schema.createTable('pins', table => {
        table.increments('id')
        table.string('name')
        table.decimal('lat')
        table.decimal('lng')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('pins')
};