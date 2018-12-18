import 'bootstrap'
import './../scss/app.scss'
import MainView from './mainView';


const onload = () => {
    console.log('Loaded...');
    const mainView = new MainView;
    mainView.render();

}

window.addEventListener('load', onload);




