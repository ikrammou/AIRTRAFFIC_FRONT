  /*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Flights Control
  const map = document.getElementById('map-advanced');
  const legend = document.getElementById('map-advanced-legend');
  const displayBtns = document.getElementsByClassName('map-advanced-display');
  const btns = document.getElementsByClassName('btn-map-advanced');

  let SHOW_BULLETS = false;
  let COLOR_MAP = null;
  let MARKERS = null;

  let ACTIVE_KEY = 'sales';
  let ACTIVE_COLOR = 'green';

  const DATA = [
      {
          country: 'GB',
          sales: 45002,
          employees: 122,
          salesIncrease: 12,
          annualProfit: 10,
          units: [
              {
                  x: 474,
                  y: 294,
                  label: 'GB-01',
              },
          ],
      },
      {
          country: 'PL',
          sales: 1200,
          employees: 34,
          salesIncrease: 60,
          annualProfit: 49,
          units: [
              {
                  x: 533,
                  y: 290,
                  label: 'PL-01',
              },
          ],
      },
      {
          country: 'US',
          sales: 120000,
          employees: 1241,
          salesIncrease: 6,
          annualProfit: 3,
          units: [
              {
                  x: 267,
                  y: 337,
                  label: 'US-01',
              },
              {
                  x: 180,
                  y: 320,
                  label: 'US-02',
              },
              {
                  x: 160,
                  y: 340,
                  label: 'US-03',
              },
          ],
      },
      {
          country: 'CN',
          sales: 30000,
          employees: 400,
          salesIncrease: 40,
          annualProfit: 32,
          units: [
              {
                  x: 800,
                  y: 338,
                  label: 'CN-01',
              },
              {
                  x: 700,
                  y: 350,
                  label: 'CN-02',
              },
          ],
      },
      {
          country: 'NO',
          sales: 5000,
          employees: 23,
          salesIncrease: 10,
          annualProfit: 8,
          units: [
              {
                  x: 505,
                  y: 252,
                  label: 'NO-01',
              },
          ],
      },
      {
          country: 'SE',
          sales: 16000,
          employees: 120,
          salesIncrease: 13,
          annualProfit: 9,
          units: [
              {
                  x: 515,
                  y: 242,
                  label: 'SE-01',
              },
          ],
      },
      {
          country: 'FI',
          sales: 6500,
          employees: 40,
          salesIncrease: 5,
          annualProfit: 2,
          units: [
              {
                  x: 545,
                  y: 242,
                  label: 'FI-01',
              },
          ],
      },
      {
          country: 'FR',
          sales: 64500,
          employees: 230,
          salesIncrease: 4,
          annualProfit: 2,
          units: [
              {
                  x: 481,
                  y: 308,
                  label: 'FR-01',
              },
          ],
      },
      {
          country: 'DE',
          sales: 34500,
          employees: 100,
          salesIncrease: 12,
          annualProfit: 9,
          units: [
              {
                  x: 510,
                  y: 308,
                  label: 'DE-01',
              },
              {
                  x: 510,
                  y: 290,
                  label: 'DE-02',
              },
          ],
      },
      {
          country: 'BE',
          sales: 4000,
          employees: 24,
          salesIncrease: 80,
          annualProfit: 67,
          units: [
              {
                  x: 490,
                  y: 298,
                  label: 'BE-01',
              },
          ],
      },
      {
          country: 'IT',
          sales: 14500,
          employees: 140,
          salesIncrease: 0.4,
          annualProfit: 0.2,
          units: [
              {
                  x: 510,
                  y: 320,
                  label: 'IT-01',
              },
          ],
      },
      {
          country: 'CA',
          sales: 94500,
          employees: 1300,
          salesIncrease: 24,
          annualProfit: 19,
          units: [
              {
                  x: 267,
                  y: 307,
                  label: 'CA-01',
              },
              {
                  x: 180,
                  y: 260,
                  label: 'CA-02',
              },
          ],
      },
  ];

  const COLORS = {
      green: [
          '#C8E6C9',
          '#A5D6A7',
          '#81C784',
          '#66BB6A',
          '#4CAF50',
          '#43A047',
          '#388E3C',
          '#2E7D32',
          '#1B5E20',
      ],
      pink: [
          '#F8BBD0',
          '#F48FB1',
          '#F06292',
          '#EC407A',
          '#E91E63',
          '#D81B60',
          '#C2185B',
          '#AD1457',
          '#880E4F',
      ],
      blue: [
          '#BBDEFB',
          '#90CAF9',
          '#64B5F6',
          '#42A5F5',
          '#2196F3',
          '#1E88E5',
          '#1976D2',
          '#1565C0',
          '#0D47A1',
      ],
      purple: [
          '#E1BEE7',
          '#CE93D8',
          '#BA68C8',
          '#AB47BC',
          '#9C27B0',
          '#8E24AA',
          '#7B1FA2',
          '#6A1B9A',
          '#4A148C',
      ],
  };

  const updateLegend = (min, max) => {
      const colorLegend = COLORS[ACTIVE_COLOR].map(
          (color) => `
<div style="height: 30px; width: 30px; background-color: \$\{color\}"></div>
`
      ).join('');

      legend.innerHTML = `<small class="mt-5">${min}</small>${colorLegend}<small class="mt-5">${max}</small>`;
  };

  const getColorMap = () => {
      const values = DATA.map((entry) => entry[ACTIVE_KEY]);
      const max = Math.max(...values);
      const min = Math.min(...values);

      let maxLabel = max;
      let minLabel = min;

      if (ACTIVE_KEY === 'salesIncrease' || ACTIVE_KEY === 'annualProfit') {
          minLabel = `${min}%`;
          maxLabel = `${max}%`;
      }

      updateLegend(minLabel, maxLabel);

      const step = Math.floor((max - min) / (COLORS[ACTIVE_COLOR].length - 1));

      const colorMap = COLORS[ACTIVE_COLOR].map((color, i) => {
          return {
              fill: color,
              regions: [],
          };
      });

      values.forEach((value, i) => {
          let valueLabel =
              ACTIVE_KEY === 'salesIncrease' || ACTIVE_KEY === 'annualProfit' ? `${value}%` : value;

          const color = Math.floor((value - min) / step);
          colorMap[color].regions.push({ id: DATA[i].country, tooltip: valueLabel, ...DATA[i] });
      });

      return colorMap;
  };

  COLOR_MAP = getColorMap();

  const mapInstance = new VectorMap(map, {
      stroke: '#37474F',
      fill: '#263238',
      readonly: true,
      hover: false,
      btnClass: 'btn-light',
      colorMap: COLOR_MAP,
  });

  const getMarkers = () => {
      const markers = [];

      COLOR_MAP.forEach((color) => {
          color.regions.forEach((region) => {
              const units = region.units.map((point) => ({
                  ...point,
                  fill: color.fill,
                  type: 'bullet',
              }));

              markers.push(...units);
          });
      });

      return markers;
  };

  const updateMap = () => {
      COLOR_MAP = getColorMap();
      MARKERS = getMarkers();

      if (SHOW_BULLETS) {
          mapInstance.update({
              markers: getMarkers(),
              colorMap: [],
          });
      } else {
          mapInstance.update({
              markers: [],
              colorMap: COLOR_MAP,
          });
      }
  };

  const setActiveBtn = (active, btns) => {
      btns.forEach((btn) => {
          if (btn === active) {
              btn.classList.remove('btn-outline-light');
              btn.classList.add('btn-light');
          } else {
              btn.classList.add('btn-outline-light');
              btn.classList.remove('btn-light');
          }
      });
  };

  btns.forEach((btn) => {
      btn.addEventListener('click', () => {
          ACTIVE_KEY = btn.getAttribute('data-mdb-key');
          ACTIVE_COLOR = btn.getAttribute('data-mdb-color');

          updateMap();

          setActiveBtn(btn, btns);
      });
  });

  displayBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
          SHOW_BULLETS = btn.getAttribute('data-mdb-bullets') === 'true';

          updateMap();

          setActiveBtn(btn, displayBtns);
      });
  });

  const map = document.getElementById('my-map');

  new VectorMap(map, {
      readonly: true,
      stroke: '#fff',
      colorMap: [
          {
              fill: '#E0E0E0',
              regions: ['GB', 'PL']
          }
      ]
  })



  // initialize the map on the "map" div with a given center and zoom
  var map = new L.Map('map', {
      zoom: 6,
      minZoom: 3,
  });

  // create a new tile layer
  var tileUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      layer = new L.TileLayer(tileUrl,
          {
              attribution: 'Maps © <a href=\"www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',
              maxZoom: 18
          });

  // add the layer to the map
  map.addLayer(layer);

  var parisKievLL = [[48.8567, 2.3508], [50.45, 30.523333]];
  var londonParisRomeBerlinBucarest = [[51.507222, -0.1275], [48.8567, 2.3508],
      [41.9, 12.5], [52.516667, 13.383333], [44.4166,26.1]];
  var londonBrusselFrankfurtAmsterdamLondon = [[51.507222, -0.1275], [50.85, 4.35],
      [50.116667, 8.683333], [52.366667, 4.9], [51.507222, -0.1275]];
  var barcelonePerpignanPauBordeauxMarseilleMonaco = [
      [41.385064, 2.173403],
      [42.698611, 2.895556],
      [43.3017, -0.3686],
      [44.837912, -0.579541],
      [43.296346, 5.369889],
      [43.738418, 7.424616]
  ];


  map.fitBounds(londonParisRomeBerlinBucarest);

  //========================================================================
  var marker1 = L.Marker.movingMarker(parisKievLL, [10000]).addTo(map);
  L.polyline(parisKievLL).addTo(map);
  marker1.once('click', function () {
      marker1.start();
      marker1.closePopup();
      marker1.unbindPopup();
      marker1.on('click', function() {
          if (marker1.isRunning()) {
              marker1.pause();
          } else {
              marker1.start();
          }
      });
      setTimeout(function() {
          marker1.bindPopup('<b>Click me to pause !</b>').openPopup();
      }, 2000);
  });

  marker1.bindPopup('<b>Click me to start !</b>', {closeOnClick: false});
  marker1.openPopup();

  //========================================================================

  var marker2 = L.Marker.movingMarker(londonParisRomeBerlinBucarest,
      [3000, 9000, 9000, 4000], {autostart: true}).addTo(map);
  L.polyline(londonParisRomeBerlinBucarest, {color: 'red'}).addTo(map);


  marker2.on('end', function() {
      marker2.bindPopup('<b>Welcome to Bucarest !</b>', {closeOnClick: false})
          .openPopup();
  });

  //=========================================================================

  var marker3 = L.Marker.movingMarker(londonBrusselFrankfurtAmsterdamLondon,
      [2000, 2000, 2000, 2000], {autostart: true, loop: true}).addTo(map);

  marker3.loops = 0;
  marker3.bindPopup('', {closeOnClick: false});

  //=========================================================================

  var marker4 = L.Marker.movingMarker([[45.816667, 15.983333]], []).addTo(map);

  marker3.on('loop', function(e) {
      marker3.loops++;
      if (e.elapsedTime < 50) {
          marker3.getPopup().setContent("<b>Loop: " + marker3.loops + "</b>")
          marker3.openPopup();
          setTimeout(function() {
              marker3.closePopup();

              if (! marker1.isEnded()) {
                  marker1.openPopup();
              } else {
                  if (marker4.getLatLng().equals([45.816667, 15.983333])) {
                      marker4.bindPopup('Click on the map to move me !');
                      marker4.openPopup();
                  }

              }

          }, 2000);
      }
  });

  map.on("click", function(e) {
      marker4.moveTo(e.latlng, 2000);
  });

  //=========================================================================

  var marker5 = L.Marker.movingMarker(
      barcelonePerpignanPauBordeauxMarseilleMonaco,
      10000, {autostart: true}).addTo(map);

  marker5.addStation(1, 2000);
  marker5.addStation(2, 2000);
  marker5.addStation(3, 2000);
  marker5.addStation(4, 2000);

  L.polyline(barcelonePerpignanPauBordeauxMarseilleMonaco,
      {color: 'green'}).addTo(map);
