class Controller {
    constructor() {
        console.clear();

        if (window.Worker) {
            const workerRandomNumber = new Worker("./js/workers/primenumber/randomnumber.js");
            workerRandomNumber.addEventListener('message', this.#messageRandomnumber.bind(this));
            workerRandomNumber.postMessage({ "low": 1463, "high": 3452567 });
        } else {
            console.log('Your browser does not support web workers.');
        }

    }

    #messageRandomnumber(event) {
        const data = event.data;
        if (data.success) {
            const primenumberWorker = new Worker("./js/workers/primenumber/primenumber.js");
            primenumberWorker.addEventListener('message', this.#messagePrimenumber.bind(this));
            primenumberWorker.postMessage({ "number": data.value });
        } else {
            console.log(data.message);
        }
    }

    #messagePrimenumber(event) {
        const data = event.data;
        if (data.success) {
            console.log(`First prime number bigger or equal to ${data.input} is ${data.value}`);
        } else {
            console.log(data.message);
        }
    }
}

document.querySelector("button").addEventListener('click', () => { new Controller() });
