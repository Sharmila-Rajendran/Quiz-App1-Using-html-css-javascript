let questionNo = 1;

function Incorrect(element) {
    const question = document.querySelector(`#question${questionNo}`);
    const buttons = question.querySelectorAll('.opt, .ans');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });

    element.style.backgroundColor = 'red';
    element.style.color = 'white';
}

function Correct(element) {
    const question = document.querySelector(`#question${questionNo}`);
    const buttons = question.querySelectorAll('.opt, .ans');
    buttons.forEach(btn => {
        btn.style.backgroundColor = '';
        btn.style.color = '';
    });
    element.style.backgroundColor = 'green';
    element.style.color = 'white';
}

function reset() {
    const question = document.querySelector(`#question${questionNo}`);
    const buttons = question.querySelectorAll('.opt, .ans');
    buttons.forEach(button => {
        button.style.backgroundColor = '';
        button.style.color = '';
    });
}

function isOptionSelected() {
    const question = document.querySelector(`#question${questionNo}`);
    const options = question.querySelectorAll('.opt, .ans');
    for (let i = 0; i < options.length; i++) {
        if (options[i].style.backgroundColor === 'red' || options[i].style.backgroundColor === 'green') {
            return true;
        }
    }
    return false;
}

function submit() {
    if (isOptionSelected()) {
        alert("Congrats! You have completed the quiz!");
    } else {
        alert("Please select an option before submitting.");
    }
}

function next() {
    if (isOptionSelected()) {
        if (questionNo < document.querySelectorAll(".question").length) {
            document.querySelector(`#question${questionNo}`).classList.remove('active');
            questionNo++;
            document.querySelector(`#question${questionNo}`).classList.add('active');
            reset();
        } else {
            alert("No more questions!!!");
        }
    } else {
        alert("Please select an option before proceeding to the next question.");
    }
}
