import {Schema, model} from 'mongoose';

const covidStatsSchema = new Schema({
    cases:{
        oneM_pop: String,
        avtive: Number,
        critical: Number,
        new: String,
        recovered: Number,
        total: Number
    },
    continent:String,
    country:String,
    day:String,
    deaths:{
        oneM_pop: String,
        new:String,
        total: Number
    },
    population:String,
    tests:{
        oneM_pop: String,
        total: Number
    }
},{
    timestamps:true,
    versionKey:false
});

export default model('covidStats', covidStatsSchema);