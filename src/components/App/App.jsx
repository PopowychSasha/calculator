
import styles from  './App.module.css';
import Output from '../Output/Output';
import C from '../C/C';
import PlusMinus from '../PlusMinus/PlusMinus';
import Percent from '../Percent/Percent';
import Operation from '../Operation/Operation';
import Number from '../Number/Number';
import Zero from '../Zero/Zero';
import Dot from '../Dot/Dot';
import Equal from '../Equal/Equal';
import HorizontalLine from '../HorizontalLine/HorizontalLine';
import VerticalLine from '../VerticalLine/VerticalLine';
const App = ()=>{
  const numbers_7_8_9 = [7,8,9];
  const numbers_4_5_6 = [4,5,6];
  const numbers_1_2_3 = [1,2,3];

  return(
    <>
        <div className={styles.app}>
            <Output/>
            <div style={{display:'flex'}}>
                <C/>
                <VerticalLine/>
                <PlusMinus/>
                <VerticalLine/>
                <Percent/>
                <VerticalLine/>
                <Operation type='/'/>
            </div>
            <HorizontalLine/>
            <div style={{display:'flex'}}>
                {
                    
                    numbers_7_8_9.map(number=>{
                        return (<><Number number={number}/><VerticalLine/></>)
                    })
                }
                <Operation type='*'/>
            </div>
            <HorizontalLine/>
            <div style={{display:'flex'}}>
                {
                    
                    numbers_4_5_6.map(number=>{ 
                        return (<><Number number={number}/><VerticalLine/></>)
                    })
                }
                <Operation type='-'/>
            </div>
            <HorizontalLine/>
            <div style={{display:'flex'}}>
                {
                    
                    numbers_1_2_3.map(number=>{
                        return (<><Number number={number}/><VerticalLine/></>)
                    })
                }
                <Operation type='+'/>
            </div>
            <HorizontalLine/>
            <div style={{display:'flex'}}>
                <Zero/>
                <VerticalLine/>
                <Dot/>
                <VerticalLine/>
                <Equal/>
            </div>
        </div>
    </>
  )
}

export default App;