class Holiday{
    constructor(destination, days){
        this.destination = destination 
        this.days = days
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

const trip = new Holiday("India",30)
trip.info()

class expenditure extends Holiday{
    constructor(destination,days,gear){
        super(destination,days);
        this.gear = gear
    }

    info(){
        super.info()
        console.log("And Bring your gear: "+this.gear)
    }
}

const trip_2 = new expenditure("Srilanka",30,"Bag")
trip_2.info()