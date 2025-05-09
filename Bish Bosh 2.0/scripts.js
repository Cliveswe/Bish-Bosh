
document.getElementById('bishBoshForm').addEventListener('submit', function (event) {
    // Prevent the form from submitting.
    event.preventDefault();
    // Get the values from the form.
    const maxNumber = document.getElementById('maxNumber').value;
    const bishNumber = document.getElementById('bishNumber').value;
    const boshNumber = document.getElementById('boshNumbier').value;

    const output = document.getElementById('output');
    let number = ``;

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 4 === 0) {
            number += `Bish-Bosh, `;
        } else if (i % 3 === 0) {
            number += `Bish, `;
        } else if (i % 4 === 0) {
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