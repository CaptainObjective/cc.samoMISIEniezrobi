const Todo = require ('../models/Todo');
const getEdit = (req,res) =>{
    const {id} = req.params;
    Todo.findById (id, (err, todo)=>{
       if (err) console.log(err);
       res.render ('edit', {
           todo:todo
       });
        console.log (todo);
    })
    
}
const putEdit = (req, res) =>{
const {id} = req.params;
const {title} = req.body;
const {isDone} = req.body;
Todo.findByIdAndUpdate(id, {title:title, isDone:isDone}, (err)=>{
    if (err) console.log(err);
    res.redirect ('/');
    
});
}
module.exports = {
    getEdit:getEdit,
    putEdit:putEdit
}