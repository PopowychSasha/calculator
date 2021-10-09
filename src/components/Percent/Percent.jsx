
import { useDispatch } from 'react-redux';
import styles from  './Percent.module.css';

const Percent = ()=>{
  const dispatch = useDispatch();

  return(
    <>
        <div onClick={()=>dispatch({type:'REMOVE_LAST_CHAR'})} className={styles.percent}>⟶</div>
    </>
  )
}

export default Percent;