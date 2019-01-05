import './../scss/app.scss';
import MainView from './mainView';
import Query from './query'

class Login{
    constructor(){
        this.element = document.createElement("div");
        this.element.className = 'login';
        this.element.onclick = this.click;
        //this.status = status;
    }

    click = (e) =>{
        e.preventDefault();
        if(e.target.className === 'logBtn') {
            Query.getTask().then(tasks => {
                const mainView = new MainView(tasks);
                mainView.render();
            })
        };
    }

    render(){
        this.element.innerHTML = `<h2>Podaj swoją nazwę użytkownika</h2>
                                  <form>
                                    <input type='text'/>
                                    <button class = 'logBtn'>Zaloguj</button>
                                  </form>`
        document.getElementById('root').appendChild(this.element);
    }
}

export default Login;