"use script";

async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const dataContainer = document.getElementById("api-data");

  try {
    const response = await fetch(`${apiUrl}`);
    const users = await response.json();

    const userList = document.createElement("ul");
    dataContainer.innerHTML = "";

    users.forEach((user) => {
      const userEl = document.createElement("li");
      userEl.textContent = user.name;
      userList.appendChild(userEl);
    });

    dataContainer.appendChild(userList);
  } catch (error) {
    dataContainer.innerHTML = "Failed to load user data.";
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData);
