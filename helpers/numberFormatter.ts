function numberFormatter(value: number, round: number = 0, separator: string = ',') {
    let valueRounded = value

    if (round) {
        valueRounded = Math.round((value + Number.EPSILON) * (10 ** round)) / (10 ** round)
    } else {
        valueRounded = Math.round(value)
    }

    let [integer, decimal = ''] = valueRounded.toString().split('.')
    const precisionDifference = Math.abs(decimal.length - round)

    if (precisionDifference) {
        decimal += new Array(precisionDifference).fill('0').join('')
    }

    return {
        integer: integerSeparator(integer, separator),
        decimal: `.${decimal}`,
    }
}

function integerSeparator(integer: string, separator: string) {
    const negative = integer.slice(0,1) === '-'
    const value = negative ? integer.slice(1) : integer
    const { length } = value
    if (length < 4) {
        return negative ? `-${value}` : value
    }
    if (length < 7) {
        return `${negative ? '-' : ''}${value.slice(0, length - 3)}${separator}${value.slice(length - 3)}`
    }
    return `${negative ? '-' : ''}${value.slice(0, length - 6)}${separator}${value.slice(length - 6, length - 3)}${separator}${value.slice(
        length - 3
    )}`
}

export default numberFormatter