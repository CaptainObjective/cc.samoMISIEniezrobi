import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupStyle, bgcolor, taskList) {
        console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupStyle = taskGroupStyle;// customowe style do napisana w SCSS tu tylko przekazać nazwe klasy, ewentualnie mozna to wywalić i ostylować ID
        this.taskList = taskList;
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.element = document.createElement("div");
        this.element.id = this.taskGroupID;
        this.element.className = `${this.taskGroupStyle} ${this.bgcolor}`
        this.element.onclick = this.click;
    }
    click = () => {
        const taskView = new TaskView(this.taskGroupName, this.bgcolor, this.taskList);
        taskView.render();
    }
    render() {
        const progress = Math.round((4 / this.taskList.length) * 100); //zamiast tej '4' będize trzeba dodać zmienną z ilościa wykonanych tasków
        console.log(progress);
        // Oczywiscie caly ten HTML można zmienić ja to zakodowalem tylko by pokazać koncepcje
        if (this.taskGroupStyle == 'list') {
            this.element.innerHTML = `<i class="fas fa-clipboard-list"></i>
                                        <h2>${this.taskGroupName}</h2>
                                        <div class="line"></div>
                                        <div class = "progressBar">
                                            <div class = "progressBarBorder"></div>
                                            <div class = "progressBarProgress barBG${this.bgcolor}" style = "width: ${progress}%"></div>
                                        </div>
                                        <h4>4/${this.taskList.length}</h4>`
            document.getElementById('root').appendChild(this.element);
        }
        else {
            this.element.innerHTML = `<i class="fas fa-plus"></i>
                                    <h2>${this.taskGroupName}</h2>`
            document.getElementById('root').appendChild(this.element);
        }
    }

}

export default taskGroup;