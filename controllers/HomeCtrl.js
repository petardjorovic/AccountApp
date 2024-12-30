const fs = require('fs').promises;

const index = async(req,res)=>{

    try {
        let content = await fs.readFile('./data.json','utf-8');
        res.render('index', { accounts : JSON.parse(content) });
    } catch(err) {
        console.error(err);
        res.send(err)
    }
};

module.exports = { index };