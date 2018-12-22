import Task from './task';

class TaskView {

    constructor(name, bgcolor, taskList) {
        this.taskObjectsList = []; //pusta tablica przechowuje obiekty utworzene w refresh tasks
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.taskList = taskList; //Lista wszystkich taskow
        this.refresh();
        console.log('TaskView Loaded...');
    }
    refresh() {
        //query.getTasks(name)// jak bedzie query to zastapi tablice
        this.taskObjectsList = []
        this.taskList.forEach((element, i) => {
            this.taskObjectsList.push(new Task(element.title, this.bgcolor, element._id, this.refresh))
        });
        this.taskObjectsList.push(new Task("Nowe zadanko",this.bgcolor, "add new"));
    }
    render() {
        document.getElementById('root').innerHTML = "";
        this.taskObjectsList.forEach(element => {
            element.render();
        })
    }

}

export default TaskView;