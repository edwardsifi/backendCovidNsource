import cStats from '../models/covidStats';
var axios = require("axios").default;


export const createSync = async (req, res) => {

    var newstats = new Array();
    let oneM = '1M_pop';

    let axiosConfig = {
        headers: {
            'x-rapidapi-key': 'e58406ea8fmsh9bcd0ce69d69df8p1476f8jsn563b6322c42c',
            'x-rapidapi-host': 'covid-193.p.rapidapi.com'

        }
    };

    const getstats = await axios.get('https://covid-193.p.rapidapi.com/statistics', axiosConfig)
    const datastats = getstats.data.response;

    for (let i = 0; i < datastats.length; i++) {

        newstats.push({
            continent: datastats[i].continent,
            country: datastats[i].country,
            population: datastats[i].population,
            cases: {
                new: datastats[i].cases.new,
                active: datastats[i].cases.active,
                critical: datastats[i].cases.critical,
                recovered: datastats[i].cases.recovered,
                oneM_pop: datastats[i].cases[oneM],
                total: datastats[i].cases.total
            },
            deaths: {
                new: datastats[i].deaths.new,
                one1M_pop: datastats[i].deaths[oneM],
                total: datastats[i].deaths.total,
            },
            tests: {
                oneM_pop: datastats[i].tests[oneM],
                total: datastats[i].tests.total,
            },
            day: datastats[i].day,
        })

    }


    cStats.find({}, function (err, docs) {
        if (docs.length > 0) {

            cStats.remove({}, function(err, docs){


               if(err){
                   console.log(err);
               }

               cStats.insertMany(newstats, function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs.length, " datos actualizados")
                res.status(200).json(docs);
                })



            });
            console.log(docs.length, "cantidad de documentos actuales")

        } else {
            console.log("no hay estadisticas se insertaran")
            cStats.insertMany(newstats, function (err, docs) {
                if (err) {
                    console.log(err)
                }
                console.log(docs.length, " datos insertados")
                res.status(200).json(docs);
            })
        }
    });

}

