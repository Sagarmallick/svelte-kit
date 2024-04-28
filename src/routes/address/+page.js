export const load = async (loadEvent)=>{
    const {fetch}=loadEvent
const response=await fetch('api/postcodes')
const postcodes=await response.json()
const addressList =postcodes.map((postcode)=>{
    return `${postcode.buildingName},${postcode.line1},${postcode.line2}`
})
return{addressList}
}