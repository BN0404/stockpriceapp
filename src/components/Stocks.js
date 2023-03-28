import data from './data';
import { useParams } from 'react-router-dom';


function Stocks(props) {
    console.log(params);
    const params = useParams();
    if (params.symbol === 'AAPL') {
        return 
        <div> 
            <h1> Hi </h1>
        </div>
       
               
            
            
    }
    // switch (props) {
    //     case 'APPL': 
    //     return
    // }
    return (
        <div> 

        </div>
        
        )
}

export default Stocks;