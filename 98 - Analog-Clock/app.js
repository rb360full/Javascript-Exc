class Clock {
    constructor() {
        this.test = {id:1,time:60};
        this.time = this.test.time + 100;
    }

    start() {
        console.log(this.time);
    }
}


const clock = new Clock

clock.start()
