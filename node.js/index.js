function simulateAPICall(callback) {
    const randomDelay = Math.floor(Math.random() * 5000) + 1000; // Random delay between 1 to 5 seconds (in milliseconds)
  
    setTimeout(() => {
      const data = {
        message: "Simulated API response",
        delay: randomDelay + "ms",
      };
      callback(null, data);
    }, randomDelay);
  }
  
  // Example of using the simulateAPICall function with different callbacks
  function callback1(err, data) {
    if (err) {
      console.error("Error in callback1:", err);
    } else {
      console.log("Callback 1 Result:", data);
    }
  }
  
  function callback2(err, data) {
    if (err) {
      console.error("Error in callback2:", err);
    } else {
      console.log("Callback 2 Result:", data);
    }
  }
  
  function callback3(err, data) {
    if (err) {
      console.error("Error in callback3:", err);
    } else {
      console.log("Callback 3 Result:", data);
    }
  }
  
  // Perform multiple asynchronous calls with different callbacks
  simulateAPICall(callback1);
  simulateAPICall(callback2);
  simulateAPICall(callback3);
  
  console.log("API calls initiated.");
  