import './../scss/app.scss';
import MainView from './mainView';
import Query from './query'

class Login {
    constructor() {
        this.element = document.createElement("div");
        this.element.className = 'login';
        this.element.onclick = this.click;
        this.login = null;
    }

    click = (e) => {
        e.preventDefault();
        if (e.target.className === 'logBtn') {
            let login = document.getElementById('login').value;
            Query.getTask().then(tasks => {
                this.login = login;
                window.location.hash = login;
                const mainView = new MainView(tasks, login);
                mainView.render();
            })
        };
    }

    render() {
        document.getElementById('root').innerHTML = "";
        this.element.innerHTML = `<h2>Podaj swoją nazwę użytkownika</h2>
                                  <form>
                                    <input id="login" type="text"/>
                                    <button class = "logBtn" type="submit">Zaloguj</button>
                                  </form>`
        document.getElementById('root').appendChild(this.element);
    }
}

export default Login;