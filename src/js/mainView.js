import TaskGroup from './taskGroup';

class MainView {

    constructor(taskList) {
        this.tasklist1 = ['zadanie1', 'zadanie2', 'zadanie3', 'zadanie4'];
        this.tasklist2 = ['zadanie1', 'zadanie2', 'zadanie3', 'zadanie4', 'zadanie.5'];
        this.tasklist3 = ['zadanie1', 'zadanie2', 'zadanie3'];
        console.log('MainView Loaded...');
        console.log(taskList);// mainView otrzymuje całą liste tasków; Pamietać by przekazać ją dalej

        this.work = new TaskGroup(`work`, 'Praca', 'list', 'pink', this.tasklist1.length, taskList);
        this.shop = new TaskGroup(`shop`, 'Lista zakupów', 'list', 'orange', this.tasklist2.length, taskList);
        this.visit = new TaskGroup(`visits`, 'Do Odwiedzenia', 'list', 'green', this.tasklist3.length, taskList);
        this.add = new TaskGroup('', 'Dodaj', 'add', 'blue', 0);
    }

    render() {
        document.getElementById('root').innerHTML = "";
        this.work.render();
        this.shop.render();
        this.visit.render();
        this.add.render();
        //To Do: kolejna/e karta z zadaniami wg schematu
        //Może by kiedyś dodać zawsze na ostatnim miejscu karte z plusikiem która pozwoli robić nowe grupy tasków (zobaczymy na co backend pozwoli)
    }

}

export default MainView;
