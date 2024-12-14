// Event listeners for navbar tabs
document.getElementById('weightToGsmTab').addEventListener('click', function() {
    document.getElementById('weightToGsmForm').style.display = 'block';
    document.getElementById('gsmToWeightForm').style.display = 'none';
});

document.getElementById('gsmToWeightTab').addEventListener('click', function() {
    document.getElementById('weightToGsmForm').style.display = 'none';
    document.getElementById('gsmToWeightForm').style.display = 'block';
});

// Weight to GSM Calculation
document.getElementById('weightToGsm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var width = parseFloat(document.getElementById('width').value);
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    // Validate inputs
    if (isNaN(width) || isNaN(height) || isNaN(weight) || width <= 0 || height <= 0 || weight <= 0) {
        alert('Please enter valid values for width, height, and weight.');
        return;
    }

    // Calculate GSM
    var areaInSquareMeters = (width * height) / 10000; // Convert cm^2 to m^2
    var gsm = weight / areaInSquareMeters;

    // Display result
    document.getElementById('weightToGsmResult').textContent = 'GSM: ' + gsm.toFixed(2) + ' g/m²';
});

// GSM to Weight Calculation
document.getElementById('gsmToWeight').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    var gsmInput = parseFloat(document.getElementById('gsmInput').value);
    var widthGsm = parseFloat(document.getElementById('widthGsm').value);
    var heightGsm = parseFloat(document.getElementById('heightGsm').value);

    // Validate inputs
    if (isNaN(gsmInput) || isNaN(widthGsm) || isNaN(heightGsm) || gsmInput <= 0 || widthGsm <= 0 || heightGsm <= 0) {
        alert('Please enter valid values for GSM, width, and height.');
        return;
    }

    // Calculate Weight
    var areaInSquareMeters = (widthGsm * heightGsm) / 10000; // Convert cm^2 to m^2
    var weight = gsmInput * areaInSquareMeters;

    // Display result
    document.getElementById('gsmToWeightResult').textContent = 'Weight: ' + weight.toFixed(2) + ' grams';
});
