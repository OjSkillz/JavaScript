
const getGeoPoliticalZoneFor = (state)=> {
    const geoPoliticalZones = [
        ["North Central", "Benue", "FCT", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau"],
        ["North East", "Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
        ["North West", "Kaduna", "Katsina", "Kano", "Kebbi", "Sokoto", "Jigawa", "Zamfara"],
        ["South East", "Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
        ["South South","Akwa-Ibom", "Bayelsa", "Cross-River", "Delta", "Edo", "Rivers"],
        ["South West", "Ekiti", "Lagos", "Osun", "Ondo", "Ogun", "Oyo"]   
    ]
    for (const geoPoliticalZone of geoPoliticalZones) { 
        if (geoPoliticalZone.includes(state))
            return geoPoliticalZone[0]
        throw new Error("Input not a valid Nigerian state!");
    }
    
    
}

module.exports = getGeoPoliticalZoneFor;