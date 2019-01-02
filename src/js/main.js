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

window.onhashchange = (e) => {
    (e.newURL.slice(-1) == "/") && onload();
}

if (window.performance) {
    // console.info("window.performance works fine on this browser");

    if (performance.navigation.type == 1) {
        window.location.href = ''
    } else {
    }
}
