class RandomnumberWorker {

    constructor() {
        self.addEventListener('message', this.#randomnumber.bind(this));
    }

    #randomnumber(event) {
        let parameters_ok = true;
        if (typeof event.data.low !== 'number') {
            self.postMessage({ "success": false, "message": "Missing value 'low'" });
            parameters_ok = false;
        }
        if (typeof event.data.high !== 'number') {
            self.postMessage({ "success": false, "message": "Missing value 'high'" });
            parameters_ok = false;
        }

        if (parameters_ok) {
            const low = event.data.low;
            const high = event.data.high;

            if (low > high) {
                self.postMessage({ "success": false, "message": "Value 'low' is bigger than 'high'" });
            } else {
                const randomNumber = Math.floor(low + Math.random() * (high - low));
                self.postMessage({ "success": true, "value": randomNumber });
            }
        }
    }
}

new RandomnumberWorker();
