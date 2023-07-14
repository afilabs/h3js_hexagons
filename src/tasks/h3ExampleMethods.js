const { cellToLatLng, latLngToCell, cellToBoundary } = require('h3-js');

function cellToLatLngExample() {
    const cell = '876520d95ffffff';
    return cellToLatLng(cell);
}

function latLngToCellExample() {
    // Newton Hawker Center
    const lat = 1.3119888;
    const lng = 103.8369993;
    const res = 7;

    return latLngToCell(lat, lng, res);
}

function cellToBoundaryExample() {
    const cell = '876520d95ffffff';

    return cellToBoundary(cell);
}

// exporting is crucial
module.exports = { cellToLatLngExample, latLngToCellExample, cellToBoundaryExample }