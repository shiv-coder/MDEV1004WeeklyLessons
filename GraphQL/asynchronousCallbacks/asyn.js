function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched!");
        callback("Here is the data");
    }, 2000); // Simulating async operation like fetching data from a server
}

function processData(data) {
    console.log("Processing data: ", data);
}

fetchData(processData);
