const Todo = require('../models/Todo');
const getIndex = (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) console.log(err);
        console.log(todos);
        res.render('index.html', {
            todos: todos
        })
    })

};
const getIndexTest = (req, res) => {
    console.log(req);
    res.redirect('/');// trzeba rozkminic dlaczego dziala tylko dla zapytan bez body
}
const postIndex = (req, res) => {
    const newTodo = new Todo({
        title: req.body.title
    });
    newTodo.save((err) => {
        if (err) console.log(err);

    })
    res.redirect('/');
    res.send('added');
}

const deleteIndex = (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndDelete(id, (err) => {
        if (err) console.log(err);
        res.redirect('/');
    });

}
module.exports = {
    getIndex: getIndex,
    getIndexTest: getIndexTest,
    postIndex: postIndex,
    deleteIndex: deleteIndex
}