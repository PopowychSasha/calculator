import { useDispatch, useSelector } from 'react-redux';
import styles from './Operation.module.css';

const Operation = (props)=>{
  const {type} = props; 

  const dispatch = useDispatch();
  const currentNumber = useSelector(state=>state.currentNumber);

  if(type==='/')
    return <div className={styles.Operation}>/</div>
  else if(type==='*')
    return <div className={styles.Operation}>*</div>
  else if(type==='+')
    return <div onClick={()=>{dispatch({type:'ADD_NUMBER', payload:Number(currentNumber)})}} className={styles.Operation}>+</div>
  else if(type==='-')
    return <div onClick={()=>{dispatch({type:'MINUS_NUMBER', payload:Number(currentNumber)})}} className={styles.Operation}>-</div>
}

export default Operation;