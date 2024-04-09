exports.createUser = async (userData) => {
  try {
    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    let result = await response.json();
    console.log(result);
    if (response.ok) {
      alert("Registration successful!");
    } else {
      alert(`Failed to register: ${result.message}`);
    }
  } catch (error) {
    alert("Failed to register due to a network error.");
    console.error("Network error:", error);
  }
};
