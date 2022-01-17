const write = (msg) => {
    console.log(msg);
    document.getElementById('log').innerHTML += `<div>${msg}</div>`;
}

const work = (seconds) => {
    let e = new Date().getTime() + (seconds * 1000);
    while (new Date().getTime() <= e) { }
}

//Aviad: Simulate Asynchronous.
const workWithPromise = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve('Success'); }, seconds * 1000);
    });
}