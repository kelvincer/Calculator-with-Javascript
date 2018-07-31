/*
 * Implement all your JavaScript in this file!
 */


$('#display').val('');
var currentOperation = ''
var operatingOne
var operatingTwo
var result
var lastOperation
var lastInputValue


$("#button1").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '1')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('1');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('1')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '1')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button2").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '2')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('2');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('2')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '2')
            operatingTwo = $('#display').val();
        }
    }

});

$("#button3").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '3')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('3');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('3')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '3')
            operatingTwo = $('#display').val();
        }
    }

});

$("#button4").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '4')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('4');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('4')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '4')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button5").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '5')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('5');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('5')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '5')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button6").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '6')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('6');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('6')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '6')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button7").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '7')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('7');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('7')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '7')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button8").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '8')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('8');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('8')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '8')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button9").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '9')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('9');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('9')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '9')
            operatingTwo = $('#display').val();
        }
    }
});

$("#button0").click(function (e) {

    if (currentOperation.length == 0) {
        if (typeof result == 'undefined') {
            $('#display').val($('#display').val() + '0')
            operatingOne = $('#display').val();
        } else {
            $('#display').val('0');
            result = undefined
            operatingOne = $('#display').val();
        }
    } else {
        if (operatingTwo === undefined) {
            $('#display').val('0')
            operatingTwo = $('#display').val();
        } else {
            $('#display').val($('#display').val() + '0')
            operatingTwo = $('#display').val();
        }
    }
});

$("#addButton").click(function (e) {
    calculateResult()
    currentOperation = '+'
    lastOperation = undefined
    lastInputValue = undefined
});

$("#subtractButton").click(function (e) {

    calculateResult()
    currentOperation = '-'
    lastOperation = undefined
    lastInputValue = undefined
});

$("#multiplyButton").click(function (e) {

    calculateResult()
    currentOperation = '*'
    lastOperation = undefined
    lastInputValue = undefined
});

$("#divideButton").click(function (e) {

    calculateResult()
    currentOperation = '/'
    lastOperation = undefined
    lastInputValue = undefined
});

$('#equalsButton').click(function (e) {

    if (lastInputValue !== undefined) {
        currentOperation = lastOperation
        operatingTwo = lastInputValue
        calculateResult()
    } else {
        calculateResult()
    }
});

$('#clearButton').click(function (e) {
    $('#display').val('');
    currentOperation = ''
    operatingOne = undefined
    operatingTwo = undefined
    result = undefined
});

function calculateResult() {
    if (typeof operatingOne !== 'undefined' && typeof operatingTwo !== 'undefined') {
        const op1 = Number(operatingOne)
        const op2 = Number(operatingTwo)
        lastInputValue = operatingTwo
        switch (currentOperation) {
            case '+':
                result = op1 + op2
                lastOperation = '+'
                break
            case '-':
                result = op1 - op2
                lastOperation = '-'
                break
            case '*':
                result = op1 * op2
                lastOperation = '*'
                break
            case '/':
                result = op1 / op2
                lastOperation = '/'
                break

        }
        currentOperation = ''
        operatingOne = result
        operatingTwo = undefined
        $('#display').val(result)
    }
}