import cStats from '../models/covidStats';

export const getStats = async (req, res) =>{
    const getStats = await cStats.find();
    res.json(getStats);
}

export const getStatByCountry = async (req, res) =>{
    const stat = await cStats.find({country: req.params.country});
    res.status(200).json(stat);
}

export const getCountriesByContinent = async (req, res) =>{
    const countries = await cStats.find({continent: req.params.continent});
    res.status(200).json(countries);
}

