
import { useDispatch } from 'react-redux';
import styles from  './Equal.module.css';

const Equal = ()=>{
    const dispatch = useDispatch();
    
  return(
    <>
        <div className={styles.equal} onClick={()=>dispatch({type:'EQUAL'})}>=</div>
    </>
  )
}

export default Equal;