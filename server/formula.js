const demandLine =  [{x:0, y:5}, {x:100, y:0}]
const supplyLine = [{x:0, y:0}, {x:100, y:5}]



//Stage 1
// initial Demand and Supply line
const DxInitial = (x) =>{
    return ( -1 / 20 ) * x + 5
}
const SxInitial = (x) =>{
    return ( 1 / 20 ) * x
}


//Stage 2
// Begining of pandemic when Demand increases and becomes more elastic
//Supply equation stays the same - SxInitial()
const DxIncrease = (x) =>{
    return ( -1 / 5 ) * x + 25
}

//Stage 3
// More suppliers enter the market and supply curve moves
//Demand  equation stays the same - DxIncrease()
const SxIncrease = (x) =>{
    return ( 1 / 20 ) * x - 2.5
}

//Stage 4
//end of pandemic, Demand goes back to normal - DxInitial()
//supply is too much so there will be surplus - SxIncrease()

//Stage 5
//demand is stable - DxInitial()
//suppliers drop out - SxInitial()

module.exports = {demandLine, supplyLine}
