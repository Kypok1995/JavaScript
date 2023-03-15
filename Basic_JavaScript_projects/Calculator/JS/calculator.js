const Calculator ={ // variable to keep track of numbers
    Display_Value: '0', //this will show 0 on calculator screen
    First_Operand: 'null',//hold a first operand for null
    Wait_Second_Operand: false,//check if user inputted second operand
    operator: null, // to hold an operator
};

function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand} = Calculator;
    if (Wait_Second_Operand === true){
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else{
        Calculator.Display_Value = Display_Value === '0' ? digit: Display_Value + digit; // to override display value if it is 0
    }
    }

    function Input_Decimal(dot){
        if(Calculator.Wait_Second_Operand === true) return;// to debug accidental clicking on dot
        if(!Calculator.Display_Value.includes(dot)){
            Calculator.Display_Value += dot; // to add a dot
        }
    }

function Handle_Operator(Next_Operator){
    const{First_Operand, Display_Value, operator} = Calculator;
    const Value_Of_Input = perseFloat(Display_Value); // to convert display value into number
    if(operator && Calculator.Wait_Second_Operand){//if operator exist and second opearand is true exit function
        Calculator.operator = Next_Operator;
        return;
    }
    if(First_Operand==null){
        Calculator.First_Operand = Value_Of_Input; // to input first value
    } else if(operator){
        const Value_Now = First_Operand||0; //if  operator exist - perform function
        let result = Perform_Calculation[operator](Value_Now, Value_Of_Input);
        result = Number(result).toFixed(9); //allows 9 decimal numbers
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,};

function Calculator_Reset(){
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display(){ // use a queryselector method to find a calculator-screen class
    const display = document.querySelector('.calculator-screen');
    display.value  = Calculator.Display_Value;
}

Update_Display();
// to monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const {target} = event; // target represent that element have been clicked
    if(!target.matches('button')){
        return; //if element clicked is not a button - exit function
    }
    if(target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return
    }

    if(target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return
    }

    if(target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return
    }
    Input_Digit(target.value);
    Update_Display();
})


