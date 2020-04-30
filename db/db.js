const db = require('../models');

async function create(url){
    await db.neutrophil.create({
        link: url
    });
}

module.exports = {
    create:create
}