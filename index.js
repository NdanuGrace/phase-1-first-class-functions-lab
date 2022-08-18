const drivers = ['John','Jane', 'Atieno', 'Joy'];

const returnFirstTwoDrivers= function(drivers){
  return drivers.slice(0,2);
}

const returnLastTwoDrivers= function (drivers){
    return drivers.slice(-2);
}

// selecting drivers
const selectingDrivers=[returnFirstTwoDrivers , returnLastTwoDrivers];


function createFareMultiplier(fare){
    return function(value){
        return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (drivers, arg) {
  return arg(drivers);
} 