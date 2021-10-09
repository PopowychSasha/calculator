import { useDispatch } from 'react-redux';
import styles from  './Number.module.css';

const Number = (props)=>{
  
  const {number} = props;
  const dispatch = useDispatch();

  return(
    <>
        <div onClick={()=>dispatch({type:'TYPING_NUMBER',payload:number})} className={styles.number}>{number}</div>
    </>
  )
}

export default Number;