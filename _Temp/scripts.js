
class Users {
    constructor(firstName, lastName, age, job) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.job = job
    }

    startDev = () => {
        console.log(`${this.firstName} start Developping...`);
    }
    getAge(){
        return this.age
    }
}

let rezaUser = new Users('reza', 'bazdaran', 40, 'web developer');

rezaUser.startDev()





class Teachers extends Users {

    constructor(firstName, lastName, age, job, lessonTeaching) {
        super(firstName, lastName, age, job)
        this.lessonTeaching = lessonTeaching
    }

    startDev(){
        console.log('ok');
        console.log(`${this.firstName} teacher start teaching...`);
    }
}


let myTeacher = new Teachers('mohammad', 'rezaei', 50, 'web developer', 'html,css,js')

console.log(myTeacher);

myTeacher.startDev()

console.log(myTeacher.getAge());

class TodoTask {
    constructor(id,taskName,taskDateStart,taskDateEnd) {
        this.id = id
        this.taskName = taskName
        this.taskDateStart = taskDateStart
        this.taskDateEnd = taskDateEnd
    }
    
    addTask(){
        console.log('ok');
        console.log(`${this.taskName} task added...`);

    }
}



let newTask = new TodoTask(1,'reading book','2021-01-01','2021-01-10')

newTask.addTask()

console.log(newTask);