# Charts Dashboard

A responsive charts dashboard built using Next.js (frontend) and Django (backend API), featuring multiple chart types: Line Chart, Bar Chart, Pie Chart, and Candlestick Chart. The dashboard integrates with hardcoded data from a Django API and is fully customizable with a dark mode toggle.

## Features

- Line Chart, Bar Chart, Pie Chart (via Chart.js)
- Candlestick Chart (via ApexCharts)
- Dark mode toggle
- Tooltips and hover effects on all charts
- Responsive design

## Libraries and Tools Used

### Frontend:
- **Next.js** (14.2.10)
- **React**
- **Chart.js**
- **ApexCharts**
- **Tailwind CSS**

### Backend:
- **Django**
- **Django REST Framework**

# Setup Instructions

## 1. Clone the Repositories
You will need to clone both the frontend and backend repositories separately.

Clone the Frontend (Next.js):
```bash
git clone https://github.com/yourusername/charts-dashboard.git
cd charts-dashboard
```
Clone the Backend (Django):
```bash
git clone https://github.com/yourusername/blockhouse.git
cd blockhouse
```

## 2. Install Dependencies
Frontend (Next.js)
Navigate to the frontend directory (charts-dashboard) and install the necessary dependencies:

```bash
cd charts-dashboard
npm install
```

Backend (Django)
Navigate to the backend directory (blockhouse) and install the necessary Python dependencies:

```bash
cd blockhouse
pip install -r requirements.txt
```

## 3. Running the Application
Backend (Django)
Start the Django server to serve the API data:

```bash
cd blockhouse
python manage.py runserver
```
The API will be available at http://127.0.0.1:8000/.

### Frontend (Next.js)
Start the Next.js development server:

```bash
cd charts-dashboard
npm run dev
```
The frontend will be available at http://localhost:3000/.

### Folder Structure
Since the repositories are separate, the structure will be as follows:

```bash
charts-dashboard/        # GitHub repository for the frontend (Next.js)
├── package.json
├── pages/
└── ...

blockhouse/              # GitHub repository for the backend (Django)
├── manage.py
├── blockhouse/
└── ...
```
## 4. Dark Mode Toggle
The dark mode toggle button is located in the top-right corner of the dashboard. It switches between light and dark mode, adjusting background colors and text styles accordingly. The user's preference is saved in localStorage.

## 5. Accessing the Dashboard
Once both the frontend and backend servers are running, navigate to http://localhost:3000/ in your browser to view the charts dashboard.

## Thought Process and Approach

1. Frontend Design with Next.js and Tailwind CSS
Tailwind CSS was used to rapidly build the layout with responsive utilities and dark mode support.
Next.js API routes were used to fetch data from the Django backend.
Chart.js was chosen for Line, Bar, and Pie charts due to its simplicity and flexibility.
ApexCharts was chosen for the Candlestick chart as it's one of the best libraries for financial data visualization.
2. Dark Mode Implementation
The dark mode toggle is implemented using useState and useEffect in React, and the mode preference is saved to localStorage to persist between page reloads.
The dark mode class (dark) is applied globally using Tailwind CSS and adjusts the chart background and tooltip styling accordingly.
3. Backend API with Django
A simple Django API was created using Django REST Framework to provide hardcoded JSON data for each chart type.
The backend is fully decoupled from the frontend and simply serves as a data provider for the charts.
4. Hover Effects and Tooltips
Chart.js and ApexCharts were configured to provide responsive tooltips and hover effects on each chart.
These hover effects are customized for dark mode by setting tooltip themes, background colors, and text styles.

