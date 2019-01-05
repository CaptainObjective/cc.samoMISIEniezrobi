import TaskView from './taskView';

class taskGroup {

    constructor(taskGroupID, taskGroupName, taskGroupStyle, bgcolor, taskList) {
        console.log('taskGroup Loaded...');
        this.taskGroupID = taskGroupID;
        this.taskGroupName = taskGroupName;
        this.taskGroupStyle = taskGroupStyle;// customowe style do napisana w SCSS tu tylko przekazać nazwe klasy, ewentualnie mozna to wywalić i ostylować ID
        this.taskList = taskList;
        this.taskGroupList = [];
        this.bgcolor = bgcolor; //kolor tła z bootstrapa
        this.element = document.createElement("div");
        this.element.id = this.taskGroupID;
        this.element.className = `${this.taskGroupStyle} ${this.bgcolor}`
        this.element.onclick = this.click;
    }
    click = () => {
        new TaskView(this.taskGroupID, this.taskGroupName, this.bgcolor, this.taskList);
        // taskView.render();
    }

    countDone = () => {
        let counter = 0;
        for(let i = 0; i < this.taskGroupList.length; i++){
            if(this.taskGroupList[i].isDone === true) counter++;
        }
        return counter;
    }

    render() {
        const tasksDone = this.countDone();
        const progress = Math.round((tasksDone/ this.taskList.length) * 100); 
        this.taskGroupList = [];
        for (let task of this.taskList) {
            if (task.groupType == this.taskGroupID) {
                this.taskGroupList.push(task);
            }
        }

        console.log(this.taskGroupList)


        // Oczywiscie caly ten HTML można zmienić ja to zakodowalem tylko by pokazać koncepcje
        if (this.taskGroupStyle == 'list') {
            this.element.innerHTML = `<i class="fas fa-clipboard-list"></i>
                                        <h2>${this.taskGroupName}</h2>
                                        <div class="line"></div>
                                        <div class = "progressBar">
                                            <div class = "progressBarBorder"></div>
                                            <div class = "progressBarProgress barBG${this.bgcolor}" style = "width: ${progress}%"></div>
                                        </div>
                                        <h4>${tasksDone}/${this.taskGroupList.length}</h4>`
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