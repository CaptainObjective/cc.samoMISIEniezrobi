class Query {
    constructor() {
        //raczej nic nie bedzie trzeba tu pisać
    }
    static getTask() {
        //Zapytanie typu get

        //return tasks
    }
    static addTask() {
        //Zapytanie typu post
        console.log('fetchin');
        fetch('/addme', {
            method: 'POST',
            body: JSON.stringify({ title: 'new task' })
            // body: { title: 'new task' }
        }).then((res) => res.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))
    }
    static deleteTask() {
        //Zapytanie typu delete
    }
    static updateTask() {
        //Zapytanie typu update jak sie uda
    }

    //to poniżej na deser
    static getTaskGroup() {
        //Zapytanie typu get
    }
    static addTaskGroup() {
        //Zapytanie typu post
    }
    static deleteTaskGroup() {
        //Zapytanie typu delete
    }
}

export default Query;