import TaskGroup from './taskGroup'
class MainView {

    constructor() {
        this.tasklist1 = ['zadanie1', 'zadanie2', 'zadanie3', 'zadanie4'];
        this.tasklist2 = ['zadanie1', 'zadanie2', 'zadanie3', 'zadanie4', 'zadanie.5'];
        this.tasklist3 = ['zadanie1', 'zadanie2', 'zadanie3'];
        console.log('MainView Loaded...');
        this.work = new TaskGroup(`work`, 'Praca', `Some quick example text to build on the card title and make up the bulk of the card's
        content.`, 'list', 'pink', this.tasklist1.length);
        this.shop = new TaskGroup(`shop`, 'Lista zakupów', ``, 'list', 'orange', this.tasklist2.length);
        this.visit = new TaskGroup(`visits`, 'Do Odwiedzenia', ``, 'list', 'green', this.tasklist3.length);
        this.add = new TaskGroup('', 'Dodaj', '', 'add', 'blue', 0);
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
