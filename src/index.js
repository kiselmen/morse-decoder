const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // let symbols = expr.length / 10;
    resulSentence = '';
    for (i = 0; i < expr.length; i = i + 10){
        let symbol = expr.slice(i, i+10);
        // console.log(' ', symbol);
        if (symbol === '**********') {
            resulSentence = resulSentence + ' ';
        } else {
            translate = ''
            for (j = 0; j < symbol.length; j = j +2){
                let elem = symbol.slice(j, j + 2);
                if (elem === '10') {
                    translate = translate + '.'
                } else if (elem === '11') {
                    translate = translate + '-'
                }
            }
            resulSentence = resulSentence + MORSE_TABLE[translate];
        }
    }
    return resulSentence;
}

module.exports = {
    decode
}