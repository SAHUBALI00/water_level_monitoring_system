WATER TANK MONITORING SYSTEM

DATE : 5 MAY,2025  ; TIME:08:06 PM
UPDATED BY : TUSHAR

Overview
This document outlines the development process and architecture of a web-based Water Level Monitoring System. The system is designed to display real-time water level information from tanks equipped with IoT devices (like ESP boards). Currently, the system supports a single tank with plans for multi-tank support in future iterations.
 
Objective
To monitor the water level in a tank remotely using a web application and an ESP-based device that transmits water level data. The data is stored in a backend server and rendered on a user-friendly frontend interface.
 
Technologies Used
 
### Frontend
·        - **HTML/CSS**: For the basic structure and styling of the UI.
·        - **JavaScript**: To handle user interactions and dynamic data updates.
·        - **Responsive Design**: CSS Flexbox is used to ensure the UI is mobile-friendly and adaptive.
 
### Backend
·        - **Node.js with Express.js**: To create RESTful APIs for data communication.
·        - **MongoDB**: To store water level and timestamp data sent by the IoT devices.
 
### IoT Device
·        - **ESP Board** (e.g., ESP8266 or ESP32): Used to read sensor data and send it to the backend using HTTP POST requests.
 
System Architecture
 
1. The ESP board collects water level data using a sensor.
2. It sends this data to the backend server through an API call.
3. The backend processes the request and stores the data in MongoDB.
4. The frontend fetches this data periodically and updates the user interface accordingly.
 
Current Features
 
·        - Accepts user input to set tank capacity.
·        - Displays water level visually using 10 colored bars.
·        - Shows the last update time and current water level status.
·        - Ability to update tank capacity dynamically.
·        - Fully functional single-tank setup.
 
Future Scope
 
·        - Add support for multiple tanks.
·        - Implement user authentication and dashboards.
·        - Introduce data analytics and alert systems.
·        - Improve mobile experience and UI enhancements.
 
How It Works (Example)
 
·        - A user sets the total tank capacity (in kiloliters) using the web UI.
·        - ESP (or any uP) board reads water level and sends either raw sensor data or calculated percentage via POST request with timestamp.
·        Backend stores the data and, if raw data is sent, calculates the percentage of the water level.
·        UI displays the water level by coloring the corresponding number of bars (out of 10) based on the percentage.
Summary
 
This system demonstrates the integration of embedded hardware, a RESTful backend, and a responsive frontend to monitor water levels in real time. The project currently supports one tank but is modular and scalable for future enhancements.

