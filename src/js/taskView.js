import Task from './task';

class TaskView {

    constructor(name, bgcolor, taskList) {
        //query.getTasks(name)// jak bedzie query to zastapi tablice
        // this.tasklist = ['zadanie1', 'zadanie2', 'zadanie3']; // to kiedyś zamienimy na dane z backend
        //^^ tu bedzie tablica obiektów nie samych nazw zadan
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
            this.taskObjectsList.push(new Task(element.title, this.bgcolor))
        });
    }
    render() {
        document.getElementById('root').innerHTML = "";
        this.taskObjectsList.forEach(element => {
            element.render();
        })
    }

}

export default TaskView;