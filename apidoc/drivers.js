// Health check
/**
 * @api {get} /health
 * Health check
 *
 * @apiName Health check
 * @apiGroup Drivers
 * @apiDescription Health check  </br>
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "ok": true,
    "message": "Healthy"
}
*
*/

// Get Drivers by season
/**
 * @api {get} /drivers/season/:season
 * Get Drivers by season
 *
 * @apiName Get Drivers by season
 * @apiGroup Drivers
 * @apiDescription Get Drivers by season  </br>
 * 
 * @apiHeader {String} Authorization user access token.
 * @apiParam  {string} season season year - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "result": {
        "drivers": {
            "drivers": [
                {
                    "driverId": 17,
                    "driverRef": "webber",
                    "nationality": "1976-08-27",
                    "number": "\\N",
                    "forename": "Mark",
                    "surname": "Webber",
                    "points": 2405,
                    "wins": 47,
                    "url": "http://en.wikipedia.org/wiki/Mark_Webber",
                    "code": "WEB",
                    "dob": "Australian",
                    "rank_in_season": null
                },
                {
                    "driverId": 32,
                    "driverRef": "klien",
                    "nationality": "1983-02-07",
                    "number": "\\N",
                    "forename": "Christian",
                    "surname": "Klien",
                    "points": 0,
                    "wins": 0,
                    "url": "http://en.wikipedia.org/wiki/Christian_Klien",
                    "code": "KLI",
                    "dob": "Austrian",
                    "rank_in_season": null
                }
            ]
        }
    }
}
*
*/

// Get All seasons top drivers
/**
 * @api {get} /drivers/top
 * Get All seasons top drivers
 *
 * @apiName Get All seasons top drivers
 * @apiGroup Drivers
 * @apiDescription Get All seasons top drivers  </br>
*  @apiHeader {String} Authorization user access token.
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "result": {
        "drivers": {
            "seasonsTopDrivers": {
                "1950": {
                    "topDrivers": [
                        {
                            "driverId": 642,
                            "driverRef": "farina",
                            "nationality": "1906-10-30",
                            "number": "\\N",
                            "forename": "Nino",
                            "surname": "Farina",
                            "points": 119,
                            "wins": 12,
                            "url": "http://en.wikipedia.org/wiki/Nino_Farina",
                            "code": "\\N",
                            "dob": "Italian",
                            "rank_in_season": 1
                        },
                        {
                            "driverId": 579,
                            "driverRef": "fangio",
                            "nationality": "1911-06-24",
                            "number": "\\N",
                            "forename": "Juan",
                            "surname": "Fangio",
                            "points": 97,
                            "wins": 11,
                            "url": "http://en.wikipedia.org/wiki/Juan_Manuel_Fangio",
                            "code": "\\N",
                            "dob": "Argentine",
                            "rank_in_season": 2
                        },
                        {
                            "driverId": 593,
                            "driverRef": "parsons",
                            "nationality": "1918-07-04",
                            "number": "\\N",
                            "forename": "Johnnie",
                            "surname": "Parsons",
                            "points": 45,
                            "wins": 5,
                            "url": "http://en.wikipedia.org/wiki/Johnnie_Parsons",
                            "code": "\\N",
                            "dob": "American",
                            "rank_in_season": 3
                        }
                    ]
                },

                "2014": {
                    "topDrivers": [
                        {
                            "driverId": 1,
                            "driverRef": "hamilton",
                            "nationality": "1985-01-07",
                            "number": "44",
                            "forename": "Lewis",
                            "surname": "Hamilton",
                            "points": 3389,
                            "wins": 103,
                            "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                            "code": "HAM",
                            "dob": "British",
                            "rank_in_season": 1
                        },
                        {
                            "driverId": 3,
                            "driverRef": "rosberg",
                            "nationality": "1985-06-27",
                            "number": "6",
                            "forename": "Nico",
                            "surname": "Rosberg",
                            "points": 3441,
                            "wins": 57,
                            "url": "http://en.wikipedia.org/wiki/Nico_Rosberg",
                            "code": "ROS",
                            "dob": "German",
                            "rank_in_season": 2
                        },
                        {
                            "driverId": 817,
                            "driverRef": "ricciardo",
                            "nationality": "1989-07-01",
                            "number": "3",
                            "forename": "Daniel",
                            "surname": "Ricciardo",
                            "points": 2187,
                            "wins": 30,
                            "url": "http://en.wikipedia.org/wiki/Daniel_Ricciardo",
                            "code": "RIC",
                            "dob": "Australian",
                            "rank_in_season": 3
                        }
                    ]
                },
                "2015": {
                    "topDrivers": [
                        {
                            "driverId": 1,
                            "driverRef": "hamilton",
                            "nationality": "1985-01-07",
                            "number": "44",
                            "forename": "Lewis",
                            "surname": "Hamilton",
                            "points": 3908,
                            "wins": 108,
                            "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                            "code": "HAM",
                            "dob": "British",
                            "rank_in_season": 1
                        },
                        {
                            "driverId": 3,
                            "driverRef": "rosberg",
                            "nationality": "1985-06-27",
                            "number": "6",
                            "forename": "Nico",
                            "surname": "Rosberg",
                            "points": 3231,
                            "wins": 47,
                            "url": "http://en.wikipedia.org/wiki/Nico_Rosberg",
                            "code": "ROS",
                            "dob": "German",
                            "rank_in_season": 2
                        },
                        {
                            "driverId": 20,
                            "driverRef": "vettel",
                            "nationality": "1987-07-03",
                            "number": "5",
                            "forename": "Sebastian",
                            "surname": "Vettel",
                            "points": 2917,
                            "wins": 35,
                            "url": "http://en.wikipedia.org/wiki/Sebastian_Vettel",
                            "code": "VET",
                            "dob": "German",
                            "rank_in_season": 3
                        }
                    ]
                },
                "2021": {
                    "topDrivers": [
                        {
                            "driverId": 1,
                            "driverRef": "hamilton",
                            "nationality": "1985-01-07",
                            "number": "44",
                            "forename": "Lewis",
                            "surname": "Hamilton",
                            "points": 841,
                            "wins": 22,
                            "url": "http://en.wikipedia.org/wiki/Lewis_Hamilton",
                            "code": "HAM",
                            "dob": "British",
                            "rank_in_season": 1
                        },
                        {
                            "driverId": 830,
                            "driverRef": "max_verstappen",
                            "nationality": "1997-09-30",
                            "number": "33",
                            "forename": "Max",
                            "surname": "Verstappen",
                            "points": 881,
                            "wins": 19,
                            "url": "http://en.wikipedia.org/wiki/Max_Verstappen",
                            "code": "VER",
                            "dob": "Dutch",
                            "rank_in_season": 2
                        },
                        {
                            "driverId": 815,
                            "driverRef": "perez",
                            "nationality": "1990-01-26",
                            "number": "11",
                            "forename": "Sergio",
                            "surname": "Pérez",
                            "points": 471,
                            "wins": 4,
                            "url": "http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez",
                            "code": "PER",
                            "dob": "Mexican",
                            "rank_in_season": 3
                        }
                    ]
                }
            }
        }
    }
}
*
*/

// Get Driver profile
/**
 * @api {get} /drivers/:id
 * Get Driver profile
 *
 * @apiName Get Driver profile
 * @apiGroup Drivers
 * @apiDescription Get Driver profile  </br>
*  @apiHeader {String} Authorization user access token.
 * @apiParam  {number} id Driver ID - URL param (Required)
 *
 * @apiSuccessExample {form-data} Success-Response:
 *     HTTP/1.1 200 OK
{
    "result": {
        "profile": {
            "races": [
                {
                    "driverId": 2,
                    "raceId": 842,
                    "circuitName": "Sepang International Circuit",
                    "position": 7,
                    "points": 15,
                    "avgPitStop": 23241,
                    "minPitStop": 22602,
                    "maxPitStop": 23900,
                    "pitStopsCount": 3,
                    "avgLap": 105087.625,
                    "minLap": 101547,
                    "maxLap": 126584
                },
                {
                    "driverId": 2,
                    "raceId": 843,
                    "circuitName": "Shanghai International Circuit",
                    "position": 8,
                    "points": 15,
                    "avgPitStop": 22018.5,
                    "minPitStop": 21821,
                    "maxPitStop": 22216,
                    "pitStopsCount": 2,
                    "avgLap": 105195.8036,
                    "minLap": 102406,
                    "maxLap": 121598
                },
                {
                    "driverId": 2,
                    "raceId": 844,
                    "circuitName": "Istanbul Park",
                    "position": 7,
                    "points": 21,
                    "avgPitStop": 21743.75,
                    "minPitStop": 20872,
                    "maxPitStop": 22300,
                    "pitStopsCount": 4,
                    "avgLap": 94455.431,
                    "minLap": 90158,
                    "maxLap": 113721
                },
                {
                    "driverId": 2,
                    "raceId": 845,
                    "circuitName": "Circuit de Barcelona-Catalunya",
                    "position": 7,
                    "points": 25,
                    "avgPitStop": 21357,
                    "minPitStop": 20796,
                    "maxPitStop": 21953,
                    "pitStopsCount": 3,
                    "avgLap": 91892.5385,
                    "minLap": 86958,
                    "maxLap": 108332
                },
                {
                    "driverId": 2,
                    "raceId": 846,
                    "circuitName": "Circuit de Monaco",
                    "position": 6,
                    "points": 29,
                    "avgPitStop": 26066,
                    "minPitStop": 25851,
                    "maxPitStop": 26281,
                    "pitStopsCount": 2,
                    "avgLap": 101281.8052,
                    "minLap": 77857,
                    "maxLap": 1312633
                },
                {
                    "driverId": 2,
                    "raceId": 847,
                    "circuitName": "Circuit Gilles Villeneuve",
                    "position": 8,
                    "points": 29,
                    "avgPitStop": 23238.5,
                    "minPitStop": 23113,
                    "maxPitStop": 23364,
                    "pitStopsCount": 2,
                    "avgLap": 243031.6182,
                    "minLap": 85135,
                    "maxLap": 7507547
                },
                {
                    "driverId": 2,
                    "raceId": 848,
                    "circuitName": "Valencia Street Circuit",
                    "position": 9,
                    "points": 30,
                    "avgPitStop": 21957,
                    "minPitStop": 21472,
                    "maxPitStop": 22285,
                    "pitStopsCount": 3,
                    "avgLap": 107004.9464,
                    "minLap": 103901,
                    "maxLap": 123283
                },
                {
                    "driverId": 2,
                    "raceId": 849,
                    "circuitName": "Silverstone Circuit",
                    "position": 8,
                    "points": 34,
                    "avgPitStop": 24575,
                    "minPitStop": 24434,
                    "maxPitStop": 24716,
                    "pitStopsCount": 2,
                    "avgLap": 103783.4231,
                    "minLap": 96523,
                    "maxLap": 132140
                },
                {
                    "driverId": 2,
                    "raceId": 851,
                    "circuitName": "Hungaroring",
                    "position": 8,
                    "points": 34,
                    "avgPitStop": 23402.5,
                    "minPitStop": 21371,
                    "maxPitStop": 25434,
                    "pitStopsCount": 2,
                    "avgLap": 101949.7826,
                    "minLap": 90826,
                    "maxLap": 126843
                },
                {
                    "driverId": 2,
                    "raceId": 841,
                    "circuitName": "Albert Park Grand Prix Circuit",
                    "position": 12,
                    "points": 0,
                    "avgPitStop": 24046,
                    "minPitStop": 22994,
                    "maxPitStop": 25098,
                    "pitStopsCount": 2,
                    "avgLap": 95507.0351,
                    "minLap": 92377,
                    "maxLap": 114826
                }
            ]
        }
    }
}
*
*/
