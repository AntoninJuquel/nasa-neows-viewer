# Nasa Neo Viewer

This project is a demonstration of using **React**, **Redux**, **Highcharts**, **AG Grid**, and **Playwright** to build a dynamic, interactive application for browsing Near-Earth Objects (NEOs) using NASA's NEOWS (Near Earth Object Web Service) API.

[Live Demo](https://antoninjuquel.github.io/nasa-neows-viewer/)

## Project Overview

The Nasa Neo Viewer app is built to showcase the integration of multiple libraries and frameworks to create an interactive, data-driven React application. It consists of three main pages, with each one designed for a specific purpose and utilizing NASA's neo dataset.

### Features

- **React** for building the UI components
- **Redux** for state management across components, especially for sharing filter data across multiple views
- **AG Grid** for handling large datasets with server-side pagination
- **Highcharts** for visualizing neo speed and miss distance data over time
- **Playwright** for end-to-end testing and validating user flows and component interactions
- **React Router DOM** for managing page navigation

### NASA NEOWS API

This project uses the [NASA Near Earth Object Web Service (NEOWS) API](https://api.nasa.gov/) to fetch data about near-earth objects.

## Pages

### 1. landing

The `landing` page serves as an introduction to the project, describing its purpose and providing an overview of the features and technologies used.

### 2. browse

The `browse` page allows users to browse a list of Near-Earth Objects (NEOs). This page includes:

- A grid view using **AG Grid** to display neo data with server-side pagination.
- Data fetched from the NASA NEOWS API (`GET https://api.nasa.gov/neo/rest/v1/neo/browse/`).
- Clickable rows to navigate to individual neo details on the `lookup` page.

### 3. lookup

The `lookup` page provides detailed information on a specific NEO. This page is accessed by clicking on an neo in the `BrowsePage`, which triggers an API call to the NEOWS Lookup endpoint to retrieve additional details.

- **Highcharts** displays the neo's speed and miss distance over time.
- Users can filter the `orbiting_body` data via **Redux**-managed state, which updates the charts accordingly.
- Additional neo details are displayed using **AG Grid** for structured organization.

## Getting Started

### Prerequisites

- **Node.js** (>= 14.x)
- A **NASA API Key** (register at [NASA API](https://api.nasa.gov/))

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/AntoninJuquel/nasa-neows-viewer.git
   cd nasa-neows-viewer
   ```

2. Install dependencies:
   ```bash
   yarn
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your NASA API key and the NASA API base url:
   ```plaintext
   VITE_APP_NASA_API_KEY=YOUR_NASA_API_KEY
   VITE_APP_NASA_API_URL=NASA_API_BASE_URL
   ```

4. Start the development server:
   ```bash
   yarn dev
   ```

### Running Tests

The project uses **Playwright** for end-to-end testing. To run tests, execute:
```bash
yarn test
```

## License

This project is licensed under the MIT License.
