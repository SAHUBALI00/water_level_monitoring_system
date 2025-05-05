//******capacity data by provided by user */
function updateCapacity() {
  const input = document.getElementById("capacity-input");
  const value = parseFloat(input.value);
    const capacity = document.querySelector(".capacity-input");
  
    if (!isNaN(value) && value > 0) {
      // Replace input and set button with capacity display and update button
      capacity.innerHTML = `
        <span class="final-capacity">Tank Capacity: ${value} kL</span>
        <button onclick="enableCapacityEdit()">Update capacity</button>
      `;
    } else {
      alert("Please enter a valid capacity in kilolitres (kL).");
    }
  }
  
  function enableCapacityEdit() {
    const container = document.querySelector(".capacity-input");
  
    // Replace with input and Set button again
    container.innerHTML = `
      <input type="number" id="capacity-input" placeholder="Enter capacity (kL)" min="0.1" step="0.1" />
      <button onclick="updateCapacity()">Set</button>
    `;
  }
// ********* fetching and displaying through api********

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById("capacity-input");
  const value = parseFloat(input.value);
  const btn = document.getElementById('update-status-btn');

  btn.addEventListener('click', async () => {
      try {
          const data = await fetchData();
          displayData(data);
          // console.log(data);
      }
      catch (error) {
          showError(error);
      }

  })
})

  async function fetchData() {
    const response = await fetch("http://localhost:7000/api/latest"); // adjust port if needed
    const data = await response.json();
    if (!response.ok) {
      throw new Error('respone not found');
  }
    // console.log(data);
    //level: 95 tankId: "T3" timestamp: "2025-05-04T05:09:08.603Z"
    return data
  }
  // const data= fetchData();
  function displayData(data) {
    const { level, timestamp } = data;
    const status_level = document.getElementById("status-tank1");
    const timeStamp_level = document.getElementById("timestamp-tank1");

    // Extracting date and time from the timestamp
    const date = new Date(timestamp);
    const formattedDate = date.toLocaleDateString(); // Format as 'MM/DD/YYYY'
    const formattedTime = date.toLocaleTimeString(); // Format as 'HH:MM:SS AM/PM'

    // Displaying the level and formatted timestamp
    status_level.innerText = `${level}%`;
    timeStamp_level.innerText = `${formattedDate} ${formattedTime}`;

    // Determine the number of filled bars based on the level (rounding the level down)
    const filledBars = Math.round(level / 10); // level divided by 10 gives us the number of filled bars (rounded)

    // Update the bars based on the calculated filled level
    for (let i = 1; i <= 10; i++) {
        const bar = document.getElementById(`bar-${i}`);

        if (i <= filledBars) {
            bar.style.backgroundColor ="#3498db"; // Blue for filled
        } else {
            bar.style.backgroundColor = 'white'; // White for empty
        }
    }
}


  
  
  
  
  