import 'bootstrap';
import './../scss/app.scss';
import Login from './login';

const onload = () => {
    console.log('Loading...');

        const login = new Login();
        login.render();
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
