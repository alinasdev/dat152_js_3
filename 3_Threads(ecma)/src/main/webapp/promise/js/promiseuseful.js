{
    const myPromise = new Promise(
        (resolve, reject) => {
            document.addEventListener('DOMContentLoaded', () => {
                const result = 123;
                const OK = true;
                if (OK) {
                    resolve(result);
                } else {
                    reject(error);
                }
            });
        }
    )

    myPromise.then(
        (result) => { console.log(result) }
    ).catch(
        (error) => { console.log(error) }
    );
}