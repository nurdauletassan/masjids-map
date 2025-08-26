# Namazkhana Map

A mobile-first React component that displays an interactive map of prayer places (namazkhana) using Google Maps API.

## Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layout
- **Interactive Google Maps**: Built with Google Maps API and React Google Maps
- **Custom Markers**: Photo thumbnails as circular markers
- **Rich Info Windows**: Detailed information with photos, addresses, and descriptions
- **Smooth Animations**: Subtle animations for markers and info windows
- **Tailwind CSS**: Modern styling with utility classes

## Setup

### 1. Get Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API
4. Create credentials (API Key)
5. Copy your API key

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
REACT_APP_MAP_CENTER_LAT=43.2367
REACT_APP_MAP_CENTER_LNG=76.9091
REACT_APP_MAP_ZOOM=12
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Features Breakdown

### 1. Prayer Place Data
Each prayer place includes:
- Name
- Coordinates (latitude, longitude)
- Address
- Description
- Photo

### 2. Map Functionality
- **Interactive Google Maps**: Full Google Maps integration
- **Custom Markers**: Photo thumbnails as markers
- **Info Windows**: Rich popups with detailed information
- **Responsive Design**: Works perfectly on mobile and desktop

### 3. Mobile Optimization
- Full viewport height map
- Responsive info window design
- Touch-friendly interactions
- Optimized for small screens

### 4. Visual Design
- Custom marker icons using photos
- Professional info window styling
- Smooth hover and click animations
- Modern UI with Tailwind CSS

## Mock Data

The component includes 5 sample prayer places in Almaty:
1. Namazkhana at Mega Center
2. Mosque on Dostyk Ave
3. Business Center Namazkhana
4. Airport Prayer Room
5. University Campus Mosque

## Technologies Used

- **React 18**: Modern React with hooks
- **Google Maps API**: Interactive maps
- **React Google Maps**: React wrapper for Google Maps
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS**: CSS processing

## Customization

To add more prayer places, modify the `mockPlaces` array in `src/components/GoogleMapsMap.jsx`:

```javascript
const mockPlaces = [
  {
    id: 6,
    name: "New Prayer Place",
    lat: 43.2500,
    lng: 76.9000,
    address: "New Address",
    description: "Description here",
    photo: "path/to/photo.jpg"
  }
  // ... more places
];
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

MIT License
