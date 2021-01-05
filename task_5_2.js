class Car {

    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume = 0;
    #isStarted = false;
    #mileage = 0;

    constructor(brand, model, yearOfManufacturing, maxSpeed, maxFuelVolume, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.yearOfManufacturing = yearOfManufacturing;
        this.maxSpeed = maxSpeed;
        this.maxFuelVolume = maxFuelVolume;
        this.fuelConsumption = fuelConsumption;
    }

    set brand(value) {
        if (value.length < 1 || value.length > 50 || typeof (value) !== 'string') {
            throw new Error('Incorrect brand');
        } else {
            this.#brand = value;
        }
    }

    get brand() {
        return this.#brand;
    }

    set model(value) {
        if (value.length < 1 || value.length > 50 || typeof (value) !== 'string') {
            throw new Error('Incorrect model');
        } else {
            this.#model = value;
        }
    }

    get model() {
        return this.#model;
    }

    set yearOfManufacturing(value) {
        let date = new Date();
        if (!Number.isInteger(value) || value < 1900 || value > date.getFullYear()) {
            throw new Error('Incorrect year of manufacturing');
        } else {
            this.#yearOfManufacturing = value;
        }
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(value) {
        if (!Number.isInteger(value) || value < 100 || value > 300) {
            throw new Error('Incorrect max speed');
        } else {
            this.#maxSpeed = value;
        }
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }

    set maxFuelVolume(value) {
        if (!Number.isInteger(value) || value < 10 || value > 50) {
            throw new Error('Incorrect max fuel volume');
        } else {
            this.#maxFuelVolume = value;
        }
    }

    get maxFuelVolume() {
        return this.#maxFuelVolume;
    }

    set fuelConsumption(value) {
        if (typeof (value) !== 'number') {
            throw new Error('Incorrect fuel consumption');
        } else {
            this.#fuelConsumption = value;
        }
    }

    get fuelConsumption() {
        return this.#fuelConsumption;
    }

    get currentFuelVolume() {
        return this.#currentFuelVolume;
    }

    get isStarted() {
        return this.#isStarted;
    }

    get mileage() {
        return this.#mileage;
    }

    start() {
        if (this.isStarted) {
            throw new Error('Машина уже заведена');
        } else {
            this.#isStarted = true;
        }
    }

    shutDownEngine() {
        if (this.isStarted) {
            this.#isStarted = false;
        } else {
            throw new Error('Машина еще не заведена');
        }
    }

    fillUpGasTank(volume) {
        if (typeof (volume) != 'number' || volume <= 0) {
            throw new Error('Неверное количество топлива для заправки');
        }
        if ((this.currentFuelVolume + volume) > this.maxFuelVolume) {
            throw new Error('Топливный бак переполнен!');
        }
        this.#currentFuelVolume += volume;
    }

    drive(speed, time) {
        if (typeof (speed) != 'number' || speed <= 0) {
            throw new Error('Неверная скорость');
        }
        if (speed > this.maxSpeed) {
            throw new Error('Машине не может ехать так быстро');
        }
        if (typeof (time) != 'number' || time <= 0) {
            throw new Error('Неверное количество часов')
        }
        if (!this.isStarted) {
            throw new Error('Машина должна быть заведена, чтобы ехать');
        }
        const neadFuel = (speed * time) / 100 * this.fuelConsumption;
        if (neadFuel > this.currentFuelVolume) {
            throw new Error('Недостаточно топлива');
        }
        this.#currentFuelVolume -= neadFuel;
        this.#mileage += speed * time;
    }
}
