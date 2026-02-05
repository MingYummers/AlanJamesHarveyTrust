  const map = L.map('map').setView([-41, 175], 5);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap'
  }).addTo(map);

const blocks = [
  // Chathams (2 blocks)
  {
    name: "Kekerione No 1 Section 24B 2B",
    shares: "0.90909",
    region: "chathams",
    lat: -43.766,
    lng: -176.533,
    geojson: "geojson/kekerione-24b2b.geojson",
    linzRef: "451488",
    owner: "Alan James Harvey"
  },
  {
    name: "Kekerione No 77 or Maipito South",
    shares: "0.12302",
    region: "chathams",
    lat: -43.85,
    lng: -176.55,
    geojson: "geojson/kekerione-77-maipito-south.geojson",
    linzRef: "WN26B/558",
    owner: "Alan James Harvey"
  },

  // North Island – Taranaki area (4 blocks)
  {
    name: "Araukuku B",
    shares: "0.0015",
    region: "north",
    lat: -39.05,
    lng: 174.45,
    geojson: "geojson/Araukuku-B.geojson",
    linzRef: "279126",
    owner: "Alan James Harvey"
  },
  {
    name: "Lot 1A of part Sub. 3 of Section 24 Block IV Waitara S.D. (Tautaratuhi Urupa)",
    shares: "0.0227",
    region: "north",
    lat: -39.10,
    lng: 174.48,
    geojson: "geojson/Lot-1A-of-part-Sub.3-of-Section-24-Block-IV-W-S.D.(TU).geojson",
    linzRef: "494480",
    owner: "Alan James Harvey"
  },
  {
    name: "Sub 2B of Section 25 Block IV Waitara Survey District",
    shares: "0.0182",
    region: "north",
    lat: -39.10,
    lng: 174.48,
    geojson: "geojson/Sub-2B-of-Section-25-Block-IV-W.geojson",
    linzRef: "472660",
    owner: "Alan James Harvey"
  },
  {
    name: "Urenui Pa",
    shares: "0.0091",
    region: "north",
    lat: -39.00,
    lng: 174.40,
    geojson: "geojson/Urenui-Pa.geojson",
    linzRef: "627625",
    owner: "Alan James Harvey"
  },

  // South Island – Marlborough / Banks Peninsula (5 blocks)
  {
    name: "Rapaki 1A No 2B",
    shares: "13.599",
    region: "south",
    lat: -43.62,
    lng: 172.70,
    geojson: "geojson/rapaki-1a-no2b.geojson",
    linzRef: "CB544/102",
    owner: "Alan James Harvey"
  },
  {
    name: "Section 5 Block II Arapawa Survey District",
    shares: "0.0625",
    region: "south",
    lat: -41.20,
    lng: 174.30,
    geojson: "geojson/Section-5-Block-II-ASD.geojson",
    linzRef: "494973",
    owner: "Alan James Harvey"
  },
  {
    name: "The Wairau Block XII Drain Reserve",
    shares: "0.01964",
    region: "south",
    lat: -41.50,
    lng: 173.90,
    geojson: "geojson/The-Wairau-Block-XII-DR.geojson",
    linzRef: "513461",
    owner: "Alan James Harvey"
  },
  {
    name: "Wairau Blk XII A2",
    shares: "0.01082",
    region: "south",
    lat: -41.50,
    lng: 173.90,
    geojson: "geojson/Wairau-Blk-XII-A2.geojson",
    linzRef: "482482",
    owner: "Alan James Harvey"
  },
  {
    name: "Wairau Block XII Section E",
    shares: "0.04236",
    region: "south",
    lat: -41.50,
    lng: 173.90,
    geojson: "geojson/Wairau-Block-XII-Section-E.geojson",
    linzRef: "480817",
    owner: "Alan James Harvey"
  },
  {
    name: "Wairau Block XII Section G",
    shares: "0.0041",
    region: "south",
    lat: -41.50,
    lng: 173.90,
    geojson: "geojson/Wairau-Block-XII-Section-G.geojson",
    linzRef: "480969",
    owner: "Alan James Harvey"
  },

  // South Island – Southland / South Otago / Catlins (7 blocks)
  {
    name: "Section 14 Block IV Rowallan Survey District",
    shares: "0.38016",
    region: "south",
    lat: -45.90,
    lng: 168.80,
    geojson: "geojson/Section-14-Block-IV-RSD.geojson",
    linzRef: "SL82/274",
    owner: "Alan James Harvey"
  },
  {
    name: "Section 2 Block XIV Tautuku Survey District",
    shares: "0.22383",
    region: "south",
    lat: -46.55,
    lng: 169.60,
    geojson: "geojson/Section-2-Block-XIV-TSD.geojson",
    linzRef: "OT168/249",
    owner: "Alan James Harvey"
  },
  {
    name: "Section 63 Block VI Waimumu Hundred",
    shares: "0.00166",
    region: "south",
    lat: -46.10,
    lng: 168.90,
    geojson: "geojson/Section 63-Block-VI-WH.geojson",
    linzRef: "SL103/83",
    owner: "Alan James Harvey"
  },
  {
    name: "Section 8 Block IV Alton Survey District",
    shares: "0.625",
    region: "south",
    lat: -46.25,
    lng: 168.85,
    geojson: "geojson/Section-8-Block-IV-ASD.geojson",
    linzRef: "SL82/234",
    owner: "Alan James Harvey"
  },
  {
    name: "Section 15 Block IX Lords River Survey District",
    shares: "0.11906",
    region: "south",
    lat: -46.35,
    lng: 168.00,
    geojson: "geojson/Section-15-Block-IX-LRS.geojson",
    linzRef: "SL88/155",
    owner: "Christine & Shelly Harvey"
  },
  {
    name: "Subdivision No 3 of Section No 5 of Block XVI Paterson District",
    shares: "0.05565",
    region: "south",
    lat: -46.25,
    lng: 169.70,
    geojson: "geojson/S-No-3-of-Section-No-5-of-Block-XVI-PD.geojson",
    linzRef: "SL7B/3",
    owner: "Christine & Shelly Harvey"
  }
];

function showBlocks(region = 'all') {
  const list = document.getElementById('block-list');
  list.innerHTML = '';

  const filtered = region === 'all' 
    ? blocks 
    : blocks.filter(b => b.region === region);

  filtered.forEach(block => {
    const div = document.createElement('div');
    div.textContent = block.name;

    div.onclick = () => {
      map.flyTo([block.lat, block.lng], 14, {
        animate: true,
        duration: 1.2
      });

      if (block.geojson) {
        fetch(block.geojson)
          .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${block.name}`);
            return res.json();
          })
          .then(data => {
            const tempLayer = L.geoJSON(data);
            map.fitBounds(tempLayer.getBounds(), {
              padding: [60, 60],          
              animate: true,
              duration: 1.5
            });
          })
          .catch(err => {
            console.log("Fit error for " + block.name + ":", err);
            map.setZoom(15); 
          });
      } else {
        map.setZoom(15);
      }



      document.getElementById('info-content').innerHTML = `
  <p><strong>Block:</strong> ${block.name}</p>
  <p><strong>LINZ Ref:</strong> ${block.linzRef || 'N/A'}</p>
  <p><strong>Owner(s):</strong> ${block.owner || 'Alan James Harvey'}</p>
  <p><strong>Shares:</strong> ${block.shares}</p>
`;

    };

    list.appendChild(div);
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const region = btn.dataset.region;
    showBlocks(region);
  });
});

showBlocks('all');

const boundaryGroup = L.layerGroup().addTo(map);

blocks.forEach(block => {
  if (!block.geojson) return;

  fetch(block.geojson)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load boundary for ${block.name}`);
      return res.json();
    })
    .then(data => {
      L.geoJSON(data, {
        style: { 
          color: "#ff0000", 
          weight: 3, 
          fillOpacity: 0.2 
        }
      }).addTo(boundaryGroup);
    })
    .catch(err => console.log("Boundary load error for " + block.name + ":", err));
});
