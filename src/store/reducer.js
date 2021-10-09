const initialState = {
    output: 0,
    currentNumber: '0',
    typingNewNumber: true,
    lastOperation: '',
    result: 0
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'TYPING_NUMBER': {
            if (state.currentNumber === '0') {
                console.log(`currentNumber=${state.currentNumber}`);
                if (action.payload == 0) {
                    return {
                        ...state
                    }
                } else {
                    return {
                        ...state,
                        currentNumber: action.payload,
                        typingNewNumber: true
                    }
                }
            } else {
                console.log(`currentNumber=${state.currentNumber}`);
                return {
                    ...state,
                    currentNumber: state.currentNumber + action.payload.toString(),
                    typingNewNumber: true
                }
            }
        }
        case 'ADD_NUMBER': {
            if (state.lastOperation == '-') {
                console.log('MIIINUUS');

                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(action.payload) - Number(state.output)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        lastOperation: '+'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) - Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '+'
                }
            } else if (state.lastOperation == '*') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (1 * Number(state.currentNumber)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '+'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) * Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '+'
                }
            } else if (state.lastOperation == '/') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(state.currentNumber) / 1),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '+'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) / Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '+'
                }
            }
            return {
                ...state,
                output: (Number(state.output) + Number(action.payload)),
                currentNumber: '0',
                typingNewNumber: false,
                lastOperation: '+'
            }
        }
        case 'MINUS_NUMBER': {
            if (state.lastOperation == '+') {
                return {
                    ...state,
                    output: (Number(state.output) + Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '-'
                }

            } else if (state.lastOperation == '*') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (1 * Number(state.currentNumber)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '-'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) * Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '-'
                }
            } else if (state.lastOperation == '/') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(state.currentNumber) / 1),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '-'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) / Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '-'
                }
            }
            if (Number(state.output) === 0) {
                return {
                    ...state,
                    output: (Number(action.payload) - Number(state.output)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '-'
                }
            }
            return {
                ...state,
                output: (Number(state.output) - Number(action.payload)),
                currentNumber: '0',
                typingNewNumber: false,
                lastOperation: '-'
            }

        }
        case "REMOVE_LAST_CHAR": {
            if (state.currentNumber.toString().length === 1) {
                return {
                    ...state,
                    currentNumber: '0'
                }
            } else {
                const chars = state.currentNumber.split('');
                let newCurrentNumber = '';
                for (let i = 0; i < chars.length - 1; i++) {
                    newCurrentNumber += chars[i];
                }

                return {
                    ...state,
                    currentNumber: newCurrentNumber
                }
            }
        }
        case 'SET_INITIAL_DATA': {
            console.log('SET_INITIAL_DATA');

            return {
                output: 0,
                currentNumber: '0',
                typingNewNumber: true,
                isAnyClick: false,
                result: 0
            }
        }
        case 'PLUS_MINUS_SWAP': {
            return {
                ...state,
                currentNumber: state.currentNumber * (-1)
            }
        }
        case 'ADD_DOT_TO_NUMBER': {
            return {
                ...state,
                currentNumber: state.currentNumber + '.'
            }
        }
        case 'DIVIDE_NUMBER': {
            if (state.lastOperation == '+') {
                return {
                    ...state,
                    output: (Number(state.output) + Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '/'
                }

            } else if (state.lastOperation == '*') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (1 * Number(state.currentNumber)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '*'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) * Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '*'
                }
            } else if (state.lastOperation == '-') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(action.payload) - Number(state.output)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        lastOperation: '/'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) - Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '/'
                }
            }
            if (Number(state.output) === 0) {
                return {
                    ...state,
                    output: (Number(state.currentNumber) / 1),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '/'
                }
            }
            return {
                ...state,
                output: (Number(state.output) / Number(state.currentNumber)),
                currentNumber: '0',
                typingNewNumber: false,
                isAnyClick: true,
                lastOperation: '/'
            }
        }
        case 'MULTIPL_NUMBER': {
            if (state.lastOperation == '+') {
                return {
                    ...state,
                    output: (Number(state.output) + Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '*'
                }

            } else if (state.lastOperation == '/') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(state.currentNumber) / 1),
                        currentNumber: '0',
                        typingNewNumber: false,
                        isAnyClick: true,
                        lastOperation: '*'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) / Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '*'
                }
            } else if (state.lastOperation == '-') {
                if (Number(state.output) === 0) {
                    return {
                        ...state,
                        output: (Number(action.payload) - Number(state.output)),
                        currentNumber: '0',
                        typingNewNumber: false,
                        lastOperation: '*'
                    }
                }
                return {
                    ...state,
                    output: (Number(state.output) - Number(action.payload)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    lastOperation: '*'
                }
            }

            if (Number(state.output) === 0) {
                return {
                    ...state,
                    output: (1 * Number(state.currentNumber)),
                    currentNumber: '0',
                    typingNewNumber: false,
                    isAnyClick: true,
                    lastOperation: '*'
                }
            }
            return {
                ...state,
                output: (Number(state.output) * Number(state.currentNumber)),
                currentNumber: '0',
                typingNewNumber: false,
                isAnyClick: true,
                lastOperation: '*'
            }
        }
        case 'EQUAL': {
            if (state.lastOperation === '+') {
                return {
                    ...state,
                    result: Number(state.output) + Number(state.currentNumber),
                    output: 0,
                    currentNumber: '0',
                    typingNewNumber: true,
                    lastOperation: '',
                }
            } else if (state.lastOperation === '-') {
                return {
                    ...state,
                    result: Number(state.output) - Number(state.currentNumber),
                    output: 0,
                    currentNumber: '0',
                    typingNewNumber: true,
                    lastOperation: '',
                }
            } else if (state.lastOperation === '*') {
                return {
                    ...state,
                    result: Number(state.output) * Number(state.currentNumber),
                    output: 0,
                    currentNumber: '0',
                    typingNewNumber: true,
                    lastOperation: '',
                }
            } else if (state.lastOperation === '/') {
                return {
                    ...state,
                    result: Number(state.output) / Number(state.currentNumber),
                    output: 0,
                    currentNumber: '0',
                    typingNewNumber: true,
                    lastOperation: '',
                }
            }
            return {
                ...state
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}