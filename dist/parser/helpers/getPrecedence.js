export default function getPrecedence(expresion) {
    const multDivRegexp = /(?<operator>[*/])/;
    const addSubRegexp = /(?<operator>[-+])/;
    if (multDivRegexp.test(expresion)) {
        /*
      Slice method was used into the expresion to ignore
      potencial operators placed on the first term that
      defines the number as a negative one, such as -5+3: in
      this way defined above, the match character will be
      '+' instead of '-'.
    */
        return expresion.slice(1).match(multDivRegexp).groups
            .operator;
    }
    else {
        return expresion.slice(1).match(addSubRegexp).groups
            .operator;
    }
}
