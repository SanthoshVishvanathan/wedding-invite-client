// ---------------------------------------------------------------
// Venue location: Lena Alamelu Mahal
// ---------------------------------------------------------------
const VENUE = {
  lat: 9.921538648604315,
  lng: 78.60753050514693,
  name: "Lena Alamelu Mahal"
};

function initVenueMap() {
  const mapEl = document.getElementById("venue-map");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map("venue-map", {
    zoomControl: true,
    scrollWheelZoom: false
  }).setView([VENUE.lat, VENUE.lng], 16);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Custom gopuram/temple-style marker icon (defined in the SVG sprite as #mahal-marker)
  const mahalIcon = L.divIcon({
    className: "mahal-marker-icon",
    html: `
      <svg viewBox="0 0 48 48" width="46" height="46" style="filter:drop-shadow(0 4px 6px rgba(0,0,0,.4))">
        <use href="#mahal-marker"></use>
      </svg>`,
    iconSize: [46, 46],
    iconAnchor: [23, 44],
    popupAnchor: [0, -40]
  });

  const marker = L.marker([VENUE.lat, VENUE.lng], {
    icon: mahalIcon,
    title: "Tap to open in Google Maps"
  }).addTo(map);

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${VENUE.lat},${VENUE.lng}`;

  marker.bindPopup(
    `<div class="map-popup"><strong>${VENUE.name}</strong><br/>
     <a href="${mapsUrl}" target="_blank" rel="noopener">Open exact location →</a></div>`
  );

  // Clicking the temple icon takes the viewer straight to the exact
  // pinned location on Google Maps in a new tab.
  marker.on("click", () => {
    window.open(mapsUrl, "_blank", "noopener");
  });

  // Re-check map sizing once it's actually visible/laid out.
  setTimeout(() => map.invalidateSize(), 300);
}

document.addEventListener("DOMContentLoaded", initVenueMap);
