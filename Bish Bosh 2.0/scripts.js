const form = document.getElementById('bishBoshForm');

form.addEventListener('submit', function (event) {
    // Prevent the form from submitting.
    event.preventDefault();

    // Get the values from the form.
    const max = parseInt(document.getElementById('maxNumber').value, 10);
    const bish = parseInt(document.getElementById('bishDivisor').value, 10);
    const bosh = parseInt(document.getElementById('boshDivisor').value, 10);

    // Output target.
    const error = document.getElementById('error');
    const output = document.getElementById('output');

    // Clear previous output.
    output.textContent = ``;
    //Clear any previous error messages.
    error.textContent = ``;

    //Results 
    let number = ``;


    //validation
    if (isNaN(max) || max <= 0) {
        error.textContent = `Max number must be a positive number and granter 1.\n`;
        return;
    }

    if (isNaN(bish) || isNaN(bosh) ||
        bish <= 0 || bosh <= 0 ||
        bish >= max || bosh >= max) {
        error.textContent = `Bish and Bosh must be positive numbers and greater than 1 but less than ${max}.\n`;
        return;
    }


    if (bish == bosh) {
        error.textContent = `Bish and Bosh must be different numbers.\n`;
        return;
    }

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

   
    // Display the results of Bish Bosh 2.0.
    output.textContent = number;

    //Reset the form on success.
    form.reset();
});