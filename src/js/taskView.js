import Task from './task';

class TaskView {

    constructor(name, bgcolor) {
        //query.getTasks(name)// jak bedzie query to zastapi tablice
        this.tasklist = ['zadanie1', 'zadanie2', 'zadanie3']; // to kiedyś zamienimy na dane z backend
        //^^ tu bedzie tablica obiektów nie samych nazw zadan
        this.taskObjectsList = []; //pusta tablica przechowuje obiekty utworzene w refresh tasks
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.refresh();
        console.log('TaskView Loaded...');
    }
    refresh() {
        //query.getTasks(name)// jak bedzie query to zastapi tablice
        this.taskObjectsList = []
        this.tasklist.forEach((element, i) => {
            this.taskObjectsList.push(new Task(element, this.bgcolor))
            console.log(element, i)
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