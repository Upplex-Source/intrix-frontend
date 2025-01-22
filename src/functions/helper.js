export function currencyFormat( number, decimal, displayComma = false, styling = {} ) {

    number = _toFixed( number, decimal );

    let formatter = new Intl.NumberFormat( 'en', {
        maximumFractionDigits: decimal, 
        minimumFractionDigits: decimal, 
    } );

    if ( displayComma ) {
        number = formatter.format( number );
    } else {
        number = parseFloat( number ).toFixed( decimal );
    }

    if ( displayComma == true && Object.keys( styling ).length > 0 ) {

        let classA = styling.classA;
        let classB = styling.classB;

        // 1,000
        // 1,000,000

        let numbers = number.split( ',' );

        if ( numbers.length > 0 ) {
            let first = numbers[0];
            numbers.shift();
            let firstAfter = numbers.join( ',' );

            return <>
                <span className={ classA }>{ first }{ firstAfter != '' ? ',' : '' }</span><span className={ classB }>{ firstAfter }</span>
            </>
        }
    }

    return number;
}

function _toFixed( num, fixed ) {
    
    if ( isNaN( num ) || num == '' ) {
        num = 0;
    }

    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}