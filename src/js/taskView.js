import Task from './task';
import Query from './query';

class TaskView {

    constructor(taskGroup, name, bgcolor, taskList, login) {
        this.taskObjectsList = []; //pusta tablica przechowuje obiekty utworzene w refresh tasks
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.taskList = []; //Lista wszystkich taskow
        this.taskGroup = taskGroup;
        this.login = login;
        window.location.hash = name;
        // console.log('TaskView Loaded...');
        this.refresh();
    }
    render = () => {
        document.getElementById('root').innerHTML = "";
        // console.log("render", this);
        this.taskObjectsList.forEach(element => {
            element.render();
        })
    }
    refresh = () => {
        Query.getTask(this.login).then(tasks => {
            this.taskList = [];
            for (let task of tasks) {
                // console.log(task.groupType);
                if (task.groupType == this.taskGroup) {
                    this.taskList.push(task);
                }
            }
            this.taskObjectsList = [];
            // console.log(this.refresh);
            this.taskList.forEach((element, i) => {
                this.taskObjectsList.push(new Task(element.title, this.bgcolor, element._id, this.taskGroup, element.isDone, this.login, this.refresh))
            });
            this.taskObjectsList.push(new Task("Nowe zadanko", this.bgcolor, "add new", this.taskGroup, false, this.login, this.refresh));
            this.render();
        })
    }


}

export default TaskView;