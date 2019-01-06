import 'bootstrap';
import './../scss/app.scss';
import Login from './login';
import MainView from './mainView';
import Query from './query';

let login = null;
const onload = () => {
    console.log('Loading...');

    login = new Login();
    login.render();
}

const router = () => {
    console.log(window.location.hash);
    login != null && console.log(('#' + login.login));
    switch (window.location.hash) {
        case '':
            onload();
            break;
        case ('#' + login.login):
            Query.getTask().then(tasks => {
                const mainView = new MainView(tasks, login);
                mainView.render();
            })
            break;
    }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router);
// window.onhashchange = (e) => {
//     console.log(e);
//     (e.newURL.slice(-1) == "/") && onload;

// }

if (window.performance) {
    // console.info("window.performance works fine on this browser");
    if (performance.navigation.type == 1) {
        window.location.href = ''
    } else {
    }
}
