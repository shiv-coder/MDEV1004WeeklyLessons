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

async function processData() {
    try {
        const data = await fetchData(); // Wait for the promise to resolve
        console.log(data); // This line runs after the promise is resolved
    } catch (error) {
        console.log(error); // Handle any errors
    }
}

processData();
