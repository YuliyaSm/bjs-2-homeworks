class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time,callback, id){
        if (id === undefined){
            throw new Error('clock id is null');
        }
        if ( this.alarmCollection.find((alarm, index) => {return alarm.id === id;})){
            console.error("timer with id", id, "already exist");
        }else{
            this.alarmCollection.push({
                id: id,
                time: time,
                callback: callback,
            });
        }

    }

    removeClock(id){
        this.alarmCollection.find((timer, index) => {
            if (timer.id === id) {
                this.alarmCollection.splice(index,1);
                return true;
            }
        });
        return false;
    }

    getCurrentFormattedTime(){
        let date = new Date();
        let hours = ("0"+date.getHours()).slice(-2);
        let minutes = ("0"+date.getMinutes()).slice(-2);
        return hours + ":" + minutes;
    }

    start(){
        const checkClock = (timer) => {
            let now = this.getCurrentFormattedTime();
            if (now === timer.time){
                timer.callback();
            }
        }
        if (this.timerId === null){
            this.timerId = setInterval(() =>{
                for (let alarm of this.alarmCollection){
                    checkClock(alarm);
                }
            },1000);
        }
    }

    stop(){
        if (this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach((alarm, index) => console.log(alarm.id, alarm.time));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}

function testCase(){
    let alarmClock = new AlarmClock();

    const getTime = (hourCorrection, minutesCorrection) => {
        let now = new Date();
        let hour = now.getHours() + hourCorrection;
        let minutes = now.getMinutes() + minutesCorrection;
        if (hour < 10) hour = "0"+hour;
        if (minutes < 10) minutes = "0"+minutes;
        return hour + ":" + minutes;
    }

    alarmClock.addClock(getTime(0,0),() => {
        let counter = 3
            console.log("ALARM!");
    },0);

    alarmClock.addClock(getTime(0,1),() => {
        console.log("ALARM-1!");
        alarmClock.removeClock(1);
    },1);

    alarmClock.addClock(getTime(0,2), () => {
        console.log("ALARM-2!");
        alarmClock.stop();
    },2);

    alarmClock.printAlarms();
    alarmClock.start();
}

testCase();