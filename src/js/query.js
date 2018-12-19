class Query {
    constructor() {
        //raczej nic nie bedzie trzeba tu pisać
    }

    static test() {
        //Zapytanie typu post
        console.log('fetchin');
        fetch('test', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "title": "new task" })
        }).then((res) => res.json()).then(data => console.log(data)).catch(error => console.error(error));

    }

    static getTask() {
        //Zapytanie typu get

        //return tasks
    }
    static addTask() {
        //Zapytanie typu post
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