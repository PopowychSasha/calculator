
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styles from  './C.module.css';

const C = ()=>{
    const output = useSelector(state=>state.output);
    const currentNumber = useSelector(state=>state.currentNumber);
    const dispatch = useDispatch();

    return(
        <>
            {(output==0 && currentNumber=='0') ? <div className={styles.C}>AC</div> : <div onClick={()=>dispatch({type:'SET_INITIAL_DATA'})} className={styles.C}>C</div>}
        </>
    )
}

export default C;