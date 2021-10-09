
import { useDispatch } from 'react-redux';
import styles from  './Dot.module.css';

const Dot = ()=>{
  const dispatch = useDispatch();

  return(
    <>
        <div className={styles.dot} onClick={()=>dispatch({type:'ADD_DOT_TO_NUMBER'})}>.</div>
    </>
  )
}

export default Dot;