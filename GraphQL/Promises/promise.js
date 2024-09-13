function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // Simulate a success/failure scenario
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // This runs if the promise is resolved
    })
    .catch(error => {
        console.log(error); // This runs if the promise is rejected
    });
