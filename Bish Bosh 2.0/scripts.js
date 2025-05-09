
document.getElementById('bishBoshForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting.
    event.preventDefault();

    // Get the values from the form.
    const max = parseInt(document.getElementById('maxNumber').value, 10);
    const bish = parseInt(document.getElementById('bishDivisor').value, 10);
    const bosh = parseInt(document.getElementById('boshDivisor').value, 10);
    // Output target.
    const error = document.getElementById('error');
    const output = document.getElementById('output');
    //Results 
    let number = ``;
    let errorMessage= ``;
//validation


    for (let i = 1; i <= max; i++) {
        if (i % bish === 0 && i % bosh === 0) {
            number += `Bish-Bosh, `;
        } else if (i % bish === 0) {
            number += `Bish, `;
        } else if (i % bosh === 0) {
            number += `Bosh, `;
        } else {
            number += `${i}, `
        }
        if (i % 13 === 0) {
            number += `\n`;
        }

    }

    output.textContent = number;
});