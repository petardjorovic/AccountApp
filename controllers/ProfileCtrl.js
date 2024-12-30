const fs = require('fs');

const index = (req,res)=>{
    let id = req.params.account_id;
    fs.readFile('./data.json','utf-8', (err,file)=>{
        let arrContent = JSON.parse(file);
        let currentAccount = arrContent.find(user => user.id == id);
        res.render('profile', {currentAccount, accounts : arrContent})
    })
}

const deleteProfile = (req,res)=>{
    let id = req.params.id;
    fs.readFile('./data.json', 'utf-8', (err,file)=>{
        let arrContent = JSON.parse(file);
        let newArr = arrContent.filter(user => user.id != id);
        fs.writeFile('./data.json', JSON.stringify(newArr), err =>{
            res.redirect('/');
        })
    })
};

module.exports = { index, deleteProfile };