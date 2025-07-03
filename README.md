# 🌤️ Weather App

The Weather App is a responsive, dynamic React web application that allows users to search any city and view detailed current weather conditions. It integrates with the OpenWeather and OpenUV APIs, and visually enhances the user experience with background and icon updates that reflect real-time weather.

---

## 🌟 Features

- 🔍 Search by City Name
    - Instantly look up weather conditions by typing a city name.
- 🌡️ Current Weather Data
    - Includes:
        - Temperature (°C)
        - Feels like temperature (°C)
        - Maximum temperature (°C)
        - Minimum temperature (°C)
        - Weather description
        - Weather icon
- 📈 5-Day Weather Forecast
- 🌬️ Extra Weather Details
    - Includes:
        - UV Index
        - Wind speed
        - Humidity & pressure
        - Visibility
        - Cloudiness
        - Rainfall & Snowfall (last 1 hour)
- 🖼️ Auto-Updating Background & Icon
    - Visuals dynamically change based on the current weather (e.g., clear, rainy, snowy).
- 📱 Responsive UI
    - Designed to be mobile-friendly and adaptive across screen sizes.

---

## 🛠️ Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Frontend   | React.js, JSX, CSS (Flexbox / Grid)     |
| API    | [OpenWeather API](https://openweathermap.org/api), [OpenUV API](https://www.openuv.io/)               |
| Data Fetch   | Axios                     |
| State Mgmt | React ```useState``` & ```useEffect```              |
| Build Tool | Vite               |
| Env Config | Vite + ```.env``` file with ```VITE_``` prefix            |
| Version Control | Git, GitHub               |

---

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, make sure the following are installed in your development environment:

- **[Node.js](https://nodejs.org/en/download)**
- *(Optional)* **[VS Code](https://code.visualstudio.com/download)**

> ⚠️ You must also register for API keys ( [OpenWeather API](https://openweathermap.org/api) and [OpenUV API](https://www.openuv.io/) ) to use this app.

---

### 1. Clone the Repository
```bash
git clone https://github.com/TingWai-85/weather-app.git
cd weather-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a .env file in the root directory:
```bash
touch .env
```
Open the .env file and add the following variables (replace with your actual API key):
```env
VITE_OPEN_WEATHER_API=your_open_weather_api_key
VITE_OPEN_UV_API="your_open_uv_api_key
```
> ⚠️ Note: Environment variables must start with ```VITE_``` to be used in React (Vite projects).

### 4. Run the App
```bash
npm run dev
```
Open the local URL provided by Vite (e.g., http://localhost:5173) in your browser to use the app.

---

## 🔧 Future Enhancements

 - 📍 Auto-detect location & show local weather
 - 🔔 Severe weather alerts
 - 🌙 Dark mode toggle
 - 🌐 Multi-language support

 ---

 ## 📌 Acknowledgements
 - [OpenWeather API](https://openweathermap.org/api)
 - [OpenUV API](https://www.openuv.io/)
 - [React](https://react.dev/)
 - [Vite](https://vite.dev/guide/)
 - [Pexels](https://www.pexels.com/) — for background images
 - [Flaticon](https://www.flaticon.com/)  — for weather icons

 ## 👨‍💻 Author
©2025 TingWai-85

This project is part of a personal learning journey in building modern, API-driven React applications.