const initMap = () => {
    // REPLACE WITH YOUR ACCESS TOKEN
    mapboxgl.accessToken = "pk.eyXXXX_REPLACE_WITH_YOUR_ACCESS_TOKEN_HERE";
  
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [4.900293, 52.379174],
      zoom: 12.5,
    });
  
    const popup = new mapboxgl.Popup().setHTML(
      `<h2>Learn Javascript Online Office</h2><p>This is where Jad works on this 
      awesome platform for  learning to code JavaScript.</p>`
    );
  
    const marker = new mapboxgl.Marker()
      .setLngLat([4.900293, 52.379174])
      .setPopup(popup)
      .addTo(map);
  };
  
  initMap();