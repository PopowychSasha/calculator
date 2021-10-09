
import { useDispatch } from 'react-redux';
import styles from  './PlusMinus.module.css';

const PlusMinus = ()=>{
  
  const dispatch = useDispatch();

  return(
    <>
        <div className={styles.plusMinus} onClick={()=>dispatch({type:'PLUS_MINUS_SWAP'})}>+/-</div>
    </>
  )
}

export default PlusMinus;