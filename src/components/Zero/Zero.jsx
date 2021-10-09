
import { useDispatch } from 'react-redux';
import styles from  './Zero.module.css';

const Zero = ()=>{
  const dispatch = useDispatch();

  return(
    <>
        <div onClick={()=>dispatch({type:'TYPING_NUMBER',payload:0})} className={styles.zero}>0</div>
    </>
  )
}

export default Zero;