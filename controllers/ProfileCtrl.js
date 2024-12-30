const fs = require('fs').promises; 

const index = async(req,res)=>{
    let id = req.params.account_id;
    try {
        let currentArr = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
        let currentAccount = currentArr.find(account => account.id == id);
        res.render('profile', { accounts : currentArr, user : currentAccount });
    } catch(err) {
        console.error(err);
        res.send(err)
    }
}

const deleteAccount = async(req,res)=>{
    let id = req.params.id;
    try {
        let currentArr = JSON.parse(await fs.readFile('./data.json', 'utf-8'));
        let filtered = currentArr.filter(account => account.id != id);
        await fs.writeFile('./data.json', JSON.stringify(filtered));
        res.redirect('/');
    } catch(err) {
        console.error(err);
        res.send(err)
    }
    
}

module.exports = { index, deleteAccount };