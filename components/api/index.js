import axios from "axios";

export const getPlacesData = async() => {

    try{
const {data : {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary`,
{
    params: {
        bl_latitude: '8.933891970667837',
    bl_longitude: '7.367762071602218',
    tr_longitude: '7.531974002384778',
    tr_latitude: '9.11461997376543',
    limit: '30',
    currency: 'USD',
    subcategory: 'hotel,bb,specialty',
    adults: '1'
    },
    headers: {
        'X-RapidAPI-Key': '65695014f3msh9e52f9b2521123ep1eef70jsnc77aa3b0dc1b',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
}
)
return data;
    }catch(err){
        return null;
    }
}