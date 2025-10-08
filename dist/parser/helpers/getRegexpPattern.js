export default function getRegexpPattern(operator) {
    switch (operator) {
        case "+":
            return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[+])(?<right>\d+(\.\d+)?)/;
        case "-":
            return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[-])(?<right>\d+(\.\d+)?)/;
        case "*":
            return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[*])(?<right>\d+(\.\d+)?)/;
        case "/":
            return /(?<left>[-+]?\d+(\.\d+)?)(?<operator>[/])(?<right>\d+(\.\d+)?)/;
    }
}
