
// submit button onclick handler

const submit = () => {
    const inputBox1 = document.getElementById('input-1');
    const inputBox2 = document.getElementById('input-2');
    const output = document.getElementById('output');
    const input1Value = inputBox1.value;
    const input2Value = inputBox2.value;

    // empty input field error handle
    if ((input1Value || input2Value) === '') {
        alert('Please enter a word');
        return;
    }


    if (input1Value.includes(input2Value)) {
        const startingIndex = input1Value.indexOf(input2Value);
        const rest = input1Value.slice((startingIndex + 1),);
        output.value = rest;
    }

    else {
        output.value = 'The letter does not exist in the sentence';
    }

} 