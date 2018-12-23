import 'bootstrap';
import './../scss/app.scss';
import Query from './query';
import MainView from './mainView';


const onload = () => {
    console.log('Loading...');


    Query.getTask().then(tasks => {
        const mainView = new MainView(tasks);
        mainView.render();
    })

}

window.addEventListener('load', onload);




