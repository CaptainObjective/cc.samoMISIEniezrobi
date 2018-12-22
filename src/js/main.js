import 'bootstrap';
import './../scss/app.scss';
import Query from './query';
import MainView from './mainView';


const onload = () => {
    console.log('Loading...');

    // Query.addTask('lalala');
    // Query.updateTask("5c1d2d577ae5ca32b446bf31","Ostatni task");
    // Query.getTask();
    // Query.deleteTask('5c163360eb7cd600160d8914');

    Query.getTask().then(tasks => {
        const mainView = new MainView(tasks);
        mainView.render();
    })

}

window.addEventListener('load', onload);




