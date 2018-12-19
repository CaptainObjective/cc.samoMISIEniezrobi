import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupStyle, bgcolor, taskLength, taskList) {
        console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupStyle = taskGroupStyle;// customowe style do napisana w SCSS tu tylko przekazać nazwe klasy, ewentualnie mozna to wywalić i ostylować ID
        this.taskLength = taskLength;
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
        // Oczywiscie caly ten HTML można zmienić ja to zakodowalem tylko by pokazać koncepcje
        if (this.taskGroupStyle == 'list') {
            this.element.innerHTML = `<i class="fas fa-clipboard-list"></i>
                                        <h2>${this.taskGroupName}</h2>
                                        <div class="line"></div>
                                        <div class = "progressBarBorder"></div>
                                        <h4>0/${this.taskLength}</h4>`
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