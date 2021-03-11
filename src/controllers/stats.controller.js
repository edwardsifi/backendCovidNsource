import cStats from '../models/covidStats';

export const getStats = async (req, res) =>{
    const getStats = await cStats.find();
    res.json(getStats);
}

export const getStatByCountry = async (req, res) =>{
const letter = req.params.country;    
const stat = await cStats.find({country: {$regex: letter, $options: 'i'}  } );
    res.status(200).json(stat);
}

export const getStatById = async (req, res) =>{
    const stat = await cStats.findById(req.params.id);
    res.status(200).json(stat);
}

export const getCountriesByContinent = async (req, res) =>{
    const countries = await cStats.find({continent: req.params.continent});
    res.status(200).json(countries);
}


export const updateById = async (req, res) => {
    const updated = await cStats.findByIdAndUpdate(req.params.id, req.body,{
        new: true
    });
    res.status(200).json(updated)
}