const bmi = (weight, height) => {
    if (weight / Math.pow(height, 2) * 10000 < 18.5) {
        return 'Under weight';
    }
    else if (weight / Math.pow(height, 2) * 10000 > 18.5 && weight / Math.pow(height, 2) * 10000 < 24.9) {
        return 'Normal (healthy weight)';
    }
    else if (weight / Math.pow(height, 2) * 10000 > 25 && weight / Math.pow(height, 2) * 10000 < 29.9) {
        return 'Over weight';
    }
    else {
        return 'Obesity';
    }
};
console.log(bmi(76, 179));
