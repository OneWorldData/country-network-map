/**
 * This file is included in the production build as a "getting started" script.
 */
require( ['jquery', 'backbone',

    // Components
    'REM/controllers/VisualsDatasetManager', 'REM/controllers/VisualsManager',

    // Models
    'REM/recline-extensions/backend/backend.raw',

    // Visual prototypes
    'DATAATLAS/views/visual_types/bewegingskaart'
  ],
  function( $, Backbone,
            VisualsDatasetManager, VisualsManager,
            BackendRaw,
            Bewegingskaart ) {

    window.dataAtlas = window.dataAtlas || {};
    window.dataAtlas.configurationOverrides = {

// set behavior here

      //"centerPoint": {
      //  "lng": 6,
      //  "lat": 52.1,
      //  "zoom": 2
      //},

      "disablePanZoom": false,
      "domainMin": null,
      "domainMax": 10,

      "keyField": "Country Code",

      // Name of property in geographic file
      //"keyProperty": "GM_CODE",

      "manualDomain": true,
      "outlierMaxColor": "#800000",
      //"outlierMinColor": "#fff",
      //"scale": 4150,
      "scheme": "sequentialorange_5",
      "shapefile": "data/geojson/world-m.topojson",
      //"shapefileFeature": "gemeenten_2014_simplified",
      "popupOpacity": 0.9,
      "showOutliersInLegend": false,
      "units": "zaken",
      "zoomMin": 1,
      "zoomMax": 32,
      "zoomWithMouse": true

    };

    var dataSources = {
      "movement": {
        "label": "Sample movement",
        "url": "./data/movement.csv",
        "backend": "csv",
        "id": "model_movement",
        "fieldsType": [
          {
            "id": "from_isoa3",
            "type": "country_from"
          },
          {
            "id": "to_isoa3",
            "type": "country_to"
          },
          {
            "id": "value",
            "type": "integer"
          }
        ]
      }
    };



    var datasetManager = new VisualsDatasetManager( {
      library: dataSources
    } );

    var visualsManager = new VisualsManager( {
      datasetManager: datasetManager
    } );
    visualsManager.register( 'bewegingskaart', Bewegingskaart );

    var $placeholders = visualsManager.getPlaceholders( $( 'body' ) );
    visualsManager.render( $placeholders );


  } );
