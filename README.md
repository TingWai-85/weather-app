# 🌤️ Weather App

The Weather App is a responsive, dynamic React web application that allows users to search any city and view detailed current weather conditions. It integrates with the external API and visually enhances the user experience with background and icon updates that reflect real-time weather.

---

## 🌟 Features

- 🔍 Search by City Name
    - Instantly look up weather conditions by typing a city name.
- 🌡️ Current Weather Data
    - Display:
        - Temperature (°C)
        - Feels like temperature (°C)
        - Maximum temperature (°C)
        - Minimum temperature (°C)
        - Weather description
        - Weather icon
- 📈 Forecast Weather Up to 5 Following Days
- 🌬️ Extra Weather Details
    - Includes:
        - UV Index
        - Wind speed & direction
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
| Frontend   | React.js, JSX, CSS (Flex/Grid)     |
| API    | [OpenWeather API](https://openweathermap.org/api), [OpenUV API](https://www.openuv.io/)               |
| Data Fetch   | Axios                     |
| Version Control | Git, GitHub               |
| State Mgmt | React useState & useEffect              |
| Env Config | Vite + .env file (VITE_)            |

---

## 🚀 Getting Started

Before you begin, make sure the following are installed in your development environment:

- **[Node.js](https://nodejs.org/en/download)**

> ⚠️ Also need to register for the API key by using the link at the API section above.

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
> ⚠️ Note: You must prefix the variable name with VITE_ for Vite to recognize it.

### 4. Run the App
```bash
npm run dev
```
After running this command, you will get the link to access the web application in your local environment. Copy and paste it in your browser. For example: http://localhost:5173

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
 - [Background Image](https://www.pexels.com/)
 - [Icon](https://www.flaticon.com/)

 ## 👨‍💻 Author
©2025 TingWai-85

This project was built as part of a self-learning journey into React + APIs.