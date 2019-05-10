import mongoose from 'mongoose'
const Schema = mongoose.Schema
const GeoSchema = new Schema({
    province:{
        type:String,
        unique:true,
        require:true
    },
    city:{
        type:Array,
        require:true
    }
})

export default mongoose.model('Geo',GeoSchema)