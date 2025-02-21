const getGeoPoliticalZoneFor = require("./GeoPoliticalZoneTracker");

test("Get Geo-Political Zone from Nigerian State", ()=> {

    let state = "benue";

    let result = getGeoPoliticalZoneFor(state);

    let answer = "North Central";

    expect(result).toBe(answer);
})

test ("Throw error message if input provided is not a valid state", ()=> {

    let state = "Yaba";

    expect(()=> getGeoPoliticalZoneFor(state)).toThrowError("Input not a valid Nigerian state!");
})