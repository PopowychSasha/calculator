const initialState = {
    output:0,
    currentNumber:'0',
    typingNewNumber:true,
    isAnyClick:false,
}

export const reducer = (state = initialState,action)=>{
    
    switch(action.type){
        case 'TYPING_NUMBER':{
            if(state.currentNumber==='0'){
                console.log(`currentNumber=${state.currentNumber}`);
                if(action.payload==0)
                {
                    return{
                        ...state
                    }
                }
                else
                {
                    return{
                        ...state,currentNumber:action.payload,typingNewNumber:true
                    }
                }   
            }
            else{
                console.log(`currentNumber=${state.currentNumber}`);
                return{
                    ...state,currentNumber:state.currentNumber+action.payload.toString(),typingNewNumber:true
                }
            }
        }
        case 'ADD_NUMBER':{
            return{
                ...state,output:(Number(state.output) + Number(action.payload)),currentNumber:'0',typingNewNumber:false,isAnyClick:true
            }
        }
        case 'MINUS_NUMBER':{
            if(state.isAnyClick)
            {
                return{
                    ...state,output:(Number(state.output) - Number(action.payload)),currentNumber:'0',typingNewNumber:false,isAnyClick:true
                }
            }
            return{
                ...state,isAnyClick:true
            }
        }
        case "REMOVE_LAST_CHAR":{
            if(state.currentNumber.toString().length===1){
                return{
                    ...state,currentNumber:'0'
                }
            }
            else{
                const chars = state.currentNumber.split('');
                let newCurrentNumber = '';
                for(let i = 0; i< chars.length-1; i++)
                {
                    newCurrentNumber+=chars[i];
                }

                return{
                    ...state,currentNumber:newCurrentNumber
                }
            }
        }
        case 'SET_INITIAL_DATA':{
            return{
                output:0,
                currentNumber:'0',
                typingNewNumber:true,
                isAnyClick:false
            }
        }
        case '+':
        {
            return state;
        }
        default:
        {
            return state;
        }
    }
}