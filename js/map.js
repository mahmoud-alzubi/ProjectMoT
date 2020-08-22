
  // initialize the map
  var map = L.map('map').setView([31.95367,35.9065832], 15);

  // load a tile layer
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=VTNkxFMqFJSUdp8R1gjy',
    {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
      maxZoom: 17,
      minZoom: 9
    }).addTo(map);
    

    L.marker([31.9532688,35.9075844]).bindTooltip("وزارة السياحة والآثار", {
      permanent: true
  }).addTo(map);
    