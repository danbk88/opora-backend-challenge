define({ "api": [
  {
    "type": "get",
    "url": "/drivers/top",
    "title": "Get All seasons top drivers",
    "name": "Get_All_seasons_top_drivers",
    "group": "Drivers",
    "description": "<p>Get All seasons top drivers  </br></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": {\n        \"drivers\": {\n            \"seasonsTopDrivers\": {\n                \"1950\": {\n                    \"topDrivers\": [\n                        {\n                            \"driverId\": 642,\n                            \"driverRef\": \"farina\",\n                            \"nationality\": \"1906-10-30\",\n                            \"number\": \"\\\\N\",\n                            \"forename\": \"Nino\",\n                            \"surname\": \"Farina\",\n                            \"points\": 119,\n                            \"wins\": 12,\n                            \"url\": \"http://en.wikipedia.org/wiki/Nino_Farina\",\n                            \"code\": \"\\\\N\",\n                            \"dob\": \"Italian\",\n                            \"rank_in_season\": 1\n                        },\n                        {\n                            \"driverId\": 579,\n                            \"driverRef\": \"fangio\",\n                            \"nationality\": \"1911-06-24\",\n                            \"number\": \"\\\\N\",\n                            \"forename\": \"Juan\",\n                            \"surname\": \"Fangio\",\n                            \"points\": 97,\n                            \"wins\": 11,\n                            \"url\": \"http://en.wikipedia.org/wiki/Juan_Manuel_Fangio\",\n                            \"code\": \"\\\\N\",\n                            \"dob\": \"Argentine\",\n                            \"rank_in_season\": 2\n                        },\n                        {\n                            \"driverId\": 593,\n                            \"driverRef\": \"parsons\",\n                            \"nationality\": \"1918-07-04\",\n                            \"number\": \"\\\\N\",\n                            \"forename\": \"Johnnie\",\n                            \"surname\": \"Parsons\",\n                            \"points\": 45,\n                            \"wins\": 5,\n                            \"url\": \"http://en.wikipedia.org/wiki/Johnnie_Parsons\",\n                            \"code\": \"\\\\N\",\n                            \"dob\": \"American\",\n                            \"rank_in_season\": 3\n                        }\n                    ]\n                },\n\n                \"2014\": {\n                    \"topDrivers\": [\n                        {\n                            \"driverId\": 1,\n                            \"driverRef\": \"hamilton\",\n                            \"nationality\": \"1985-01-07\",\n                            \"number\": \"44\",\n                            \"forename\": \"Lewis\",\n                            \"surname\": \"Hamilton\",\n                            \"points\": 3389,\n                            \"wins\": 103,\n                            \"url\": \"http://en.wikipedia.org/wiki/Lewis_Hamilton\",\n                            \"code\": \"HAM\",\n                            \"dob\": \"British\",\n                            \"rank_in_season\": 1\n                        },\n                        {\n                            \"driverId\": 3,\n                            \"driverRef\": \"rosberg\",\n                            \"nationality\": \"1985-06-27\",\n                            \"number\": \"6\",\n                            \"forename\": \"Nico\",\n                            \"surname\": \"Rosberg\",\n                            \"points\": 3441,\n                            \"wins\": 57,\n                            \"url\": \"http://en.wikipedia.org/wiki/Nico_Rosberg\",\n                            \"code\": \"ROS\",\n                            \"dob\": \"German\",\n                            \"rank_in_season\": 2\n                        },\n                        {\n                            \"driverId\": 817,\n                            \"driverRef\": \"ricciardo\",\n                            \"nationality\": \"1989-07-01\",\n                            \"number\": \"3\",\n                            \"forename\": \"Daniel\",\n                            \"surname\": \"Ricciardo\",\n                            \"points\": 2187,\n                            \"wins\": 30,\n                            \"url\": \"http://en.wikipedia.org/wiki/Daniel_Ricciardo\",\n                            \"code\": \"RIC\",\n                            \"dob\": \"Australian\",\n                            \"rank_in_season\": 3\n                        }\n                    ]\n                },\n                \"2015\": {\n                    \"topDrivers\": [\n                        {\n                            \"driverId\": 1,\n                            \"driverRef\": \"hamilton\",\n                            \"nationality\": \"1985-01-07\",\n                            \"number\": \"44\",\n                            \"forename\": \"Lewis\",\n                            \"surname\": \"Hamilton\",\n                            \"points\": 3908,\n                            \"wins\": 108,\n                            \"url\": \"http://en.wikipedia.org/wiki/Lewis_Hamilton\",\n                            \"code\": \"HAM\",\n                            \"dob\": \"British\",\n                            \"rank_in_season\": 1\n                        },\n                        {\n                            \"driverId\": 3,\n                            \"driverRef\": \"rosberg\",\n                            \"nationality\": \"1985-06-27\",\n                            \"number\": \"6\",\n                            \"forename\": \"Nico\",\n                            \"surname\": \"Rosberg\",\n                            \"points\": 3231,\n                            \"wins\": 47,\n                            \"url\": \"http://en.wikipedia.org/wiki/Nico_Rosberg\",\n                            \"code\": \"ROS\",\n                            \"dob\": \"German\",\n                            \"rank_in_season\": 2\n                        },\n                        {\n                            \"driverId\": 20,\n                            \"driverRef\": \"vettel\",\n                            \"nationality\": \"1987-07-03\",\n                            \"number\": \"5\",\n                            \"forename\": \"Sebastian\",\n                            \"surname\": \"Vettel\",\n                            \"points\": 2917,\n                            \"wins\": 35,\n                            \"url\": \"http://en.wikipedia.org/wiki/Sebastian_Vettel\",\n                            \"code\": \"VET\",\n                            \"dob\": \"German\",\n                            \"rank_in_season\": 3\n                        }\n                    ]\n                },\n                \"2021\": {\n                    \"topDrivers\": [\n                        {\n                            \"driverId\": 1,\n                            \"driverRef\": \"hamilton\",\n                            \"nationality\": \"1985-01-07\",\n                            \"number\": \"44\",\n                            \"forename\": \"Lewis\",\n                            \"surname\": \"Hamilton\",\n                            \"points\": 841,\n                            \"wins\": 22,\n                            \"url\": \"http://en.wikipedia.org/wiki/Lewis_Hamilton\",\n                            \"code\": \"HAM\",\n                            \"dob\": \"British\",\n                            \"rank_in_season\": 1\n                        },\n                        {\n                            \"driverId\": 830,\n                            \"driverRef\": \"max_verstappen\",\n                            \"nationality\": \"1997-09-30\",\n                            \"number\": \"33\",\n                            \"forename\": \"Max\",\n                            \"surname\": \"Verstappen\",\n                            \"points\": 881,\n                            \"wins\": 19,\n                            \"url\": \"http://en.wikipedia.org/wiki/Max_Verstappen\",\n                            \"code\": \"VER\",\n                            \"dob\": \"Dutch\",\n                            \"rank_in_season\": 2\n                        },\n                        {\n                            \"driverId\": 815,\n                            \"driverRef\": \"perez\",\n                            \"nationality\": \"1990-01-26\",\n                            \"number\": \"11\",\n                            \"forename\": \"Sergio\",\n                            \"surname\": \"Pérez\",\n                            \"points\": 471,\n                            \"wins\": 4,\n                            \"url\": \"http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez\",\n                            \"code\": \"PER\",\n                            \"dob\": \"Mexican\",\n                            \"rank_in_season\": 3\n                        }\n                    ]\n                }\n            }\n        }\n    }\n}",
          "type": "form-data"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/drivers.js",
    "groupTitle": "Drivers"
  },
  {
    "type": "get",
    "url": "/drivers/:id",
    "title": "Get Driver profile",
    "name": "Get_Driver_profile",
    "group": "Drivers",
    "description": "<p>Get Driver profile  </br></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>Driver ID - URL param (Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": {\n        \"profile\": {\n            \"races\": [\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 842,\n                    \"circuitName\": \"Sepang International Circuit\",\n                    \"position\": 7,\n                    \"points\": 15,\n                    \"avgPitStop\": 23241,\n                    \"minPitStop\": 22602,\n                    \"maxPitStop\": 23900,\n                    \"pitStopsCount\": 3,\n                    \"avgLap\": 105087.625,\n                    \"minLap\": 101547,\n                    \"maxLap\": 126584\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 843,\n                    \"circuitName\": \"Shanghai International Circuit\",\n                    \"position\": 8,\n                    \"points\": 15,\n                    \"avgPitStop\": 22018.5,\n                    \"minPitStop\": 21821,\n                    \"maxPitStop\": 22216,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 105195.8036,\n                    \"minLap\": 102406,\n                    \"maxLap\": 121598\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 844,\n                    \"circuitName\": \"Istanbul Park\",\n                    \"position\": 7,\n                    \"points\": 21,\n                    \"avgPitStop\": 21743.75,\n                    \"minPitStop\": 20872,\n                    \"maxPitStop\": 22300,\n                    \"pitStopsCount\": 4,\n                    \"avgLap\": 94455.431,\n                    \"minLap\": 90158,\n                    \"maxLap\": 113721\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 845,\n                    \"circuitName\": \"Circuit de Barcelona-Catalunya\",\n                    \"position\": 7,\n                    \"points\": 25,\n                    \"avgPitStop\": 21357,\n                    \"minPitStop\": 20796,\n                    \"maxPitStop\": 21953,\n                    \"pitStopsCount\": 3,\n                    \"avgLap\": 91892.5385,\n                    \"minLap\": 86958,\n                    \"maxLap\": 108332\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 846,\n                    \"circuitName\": \"Circuit de Monaco\",\n                    \"position\": 6,\n                    \"points\": 29,\n                    \"avgPitStop\": 26066,\n                    \"minPitStop\": 25851,\n                    \"maxPitStop\": 26281,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 101281.8052,\n                    \"minLap\": 77857,\n                    \"maxLap\": 1312633\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 847,\n                    \"circuitName\": \"Circuit Gilles Villeneuve\",\n                    \"position\": 8,\n                    \"points\": 29,\n                    \"avgPitStop\": 23238.5,\n                    \"minPitStop\": 23113,\n                    \"maxPitStop\": 23364,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 243031.6182,\n                    \"minLap\": 85135,\n                    \"maxLap\": 7507547\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 848,\n                    \"circuitName\": \"Valencia Street Circuit\",\n                    \"position\": 9,\n                    \"points\": 30,\n                    \"avgPitStop\": 21957,\n                    \"minPitStop\": 21472,\n                    \"maxPitStop\": 22285,\n                    \"pitStopsCount\": 3,\n                    \"avgLap\": 107004.9464,\n                    \"minLap\": 103901,\n                    \"maxLap\": 123283\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 849,\n                    \"circuitName\": \"Silverstone Circuit\",\n                    \"position\": 8,\n                    \"points\": 34,\n                    \"avgPitStop\": 24575,\n                    \"minPitStop\": 24434,\n                    \"maxPitStop\": 24716,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 103783.4231,\n                    \"minLap\": 96523,\n                    \"maxLap\": 132140\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 851,\n                    \"circuitName\": \"Hungaroring\",\n                    \"position\": 8,\n                    \"points\": 34,\n                    \"avgPitStop\": 23402.5,\n                    \"minPitStop\": 21371,\n                    \"maxPitStop\": 25434,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 101949.7826,\n                    \"minLap\": 90826,\n                    \"maxLap\": 126843\n                },\n                {\n                    \"driverId\": 2,\n                    \"raceId\": 841,\n                    \"circuitName\": \"Albert Park Grand Prix Circuit\",\n                    \"position\": 12,\n                    \"points\": 0,\n                    \"avgPitStop\": 24046,\n                    \"minPitStop\": 22994,\n                    \"maxPitStop\": 25098,\n                    \"pitStopsCount\": 2,\n                    \"avgLap\": 95507.0351,\n                    \"minLap\": 92377,\n                    \"maxLap\": 114826\n                }\n            ]\n        }\n    }\n}",
          "type": "form-data"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/drivers.js",
    "groupTitle": "Drivers"
  },
  {
    "type": "get",
    "url": "/drivers/season/:season",
    "title": "Get Drivers by season",
    "name": "Get_Drivers_by_season",
    "group": "Drivers",
    "description": "<p>Get Drivers by season  </br></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>user access token.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "season",
            "description": "<p>season year - URL param (Required)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": {\n        \"drivers\": {\n            \"drivers\": [\n                {\n                    \"driverId\": 17,\n                    \"driverRef\": \"webber\",\n                    \"nationality\": \"1976-08-27\",\n                    \"number\": \"\\\\N\",\n                    \"forename\": \"Mark\",\n                    \"surname\": \"Webber\",\n                    \"points\": 2405,\n                    \"wins\": 47,\n                    \"url\": \"http://en.wikipedia.org/wiki/Mark_Webber\",\n                    \"code\": \"WEB\",\n                    \"dob\": \"Australian\",\n                    \"rank_in_season\": null\n                },\n                {\n                    \"driverId\": 32,\n                    \"driverRef\": \"klien\",\n                    \"nationality\": \"1983-02-07\",\n                    \"number\": \"\\\\N\",\n                    \"forename\": \"Christian\",\n                    \"surname\": \"Klien\",\n                    \"points\": 0,\n                    \"wins\": 0,\n                    \"url\": \"http://en.wikipedia.org/wiki/Christian_Klien\",\n                    \"code\": \"KLI\",\n                    \"dob\": \"Austrian\",\n                    \"rank_in_season\": null\n                }\n            ]\n        }\n    }\n}",
          "type": "form-data"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/drivers.js",
    "groupTitle": "Drivers"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Health check",
    "name": "Health_check",
    "group": "Drivers",
    "description": "<p>Health check  </br></p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"ok\": true,\n    \"message\": \"Healthy\"\n}",
          "type": "form-data"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "apidoc/drivers.js",
    "groupTitle": "Drivers"
  }
] });
