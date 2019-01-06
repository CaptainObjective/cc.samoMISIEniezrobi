class Query {
    constructor() {
        //raczej nic nie bedzie trzeba tu pisać
    }

    static test() {
        //Zapytanie typu post
        console.log('fetchin');
        fetch('test', { // to jest tylko testowy endpoint w normalnym trzeba będzie zmienić
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
        //Samo getTask musi byc promisem a nie zwykla funkcja zeby wszystko dzialalo jak nalezy
        return new Promise((resolve, reject) => {
            fetch('tasks').then((res) => res.json()).then(data => resolve(data)).catch(error => reject(error));
        })
        //return tasks
    }

    static addTask(taskName, groupType = "job", importance = 2, isDone = false) {
        //Zapytanie typu post
        return new Promise((resolve, reject) => {
            fetch('/addme', { // to jest tylko testowy endpoint w normalnym trzeba będzie zmienić
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "groupType": `${groupType}`,
                    "importance": `${importance}`,
                    "isDone": `${isDone}`,
                    "title": `${taskName}`
                })
            }).then((res) => resolve(res))
        })
    }
    //jak przyjdzie status 200 

    static deleteTask(taskID) {
        //Zapytanie typu delete
        return new Promise((resolve, reject) => {
            fetch(`/deleteme/${taskID}`, {
                method: 'delete'
            }).then(resp => {
                resolve(resp.status);
            }).catch(err => console.error(err));
        })
    }

    static updateTask(taskID, taskName, isDone=false) {
        //Zapytanie typu update jak sie uda
        return new Promise((resolve, reject) => {
            fetch(`/editme/${taskID}`, { // to jest tylko testowy endpoint w normalnym trzeba będzie zmienić
                method: 'put',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "title": `${taskName}`, "isDone": `${isDone}` })
            }).then((res) => resolve(res))
        })
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