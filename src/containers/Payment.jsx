import React,{useContext} from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

const Payment = ({history}) => {

    const {state, addNewOrder}= useContext(AppContext);
    const {cart, buyer} = state;

    const paypalOptions= {
        clientId:'ASCNJ7F_GZHR_ZNFrLU59cjiO8XzQMXEaf-gd1Y1RgMoDpH1oSQb3_PlIsn7Ij0_Yyw5B2FbYOd8YDts',
        intent:'capture',
        currency:'USD'
    }

    const buttonStyles = {
        layout:'vertical',
        shape:'rect'
    }

    const handlePaymentSuccess =(data)=>{
        console.log(data);
        if(data.status === 'COMPLETED') {
            const newOrder ={
                buyer,
                product: cart,
                payment:data 
            }
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    }

    const handleSumTotal = () =>{
        const reducer =(accumulator, currentValue) => accumulator+currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return(
    <div className="Payment">
    <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map(item=>(
            <div className="PaymentItem" key={item.title}>
                <div className="Payment-element">
                    <h4>{item.title}</h4>
                    <span>${item.price}</span>
                </div>
            </div>
        ))}
        <div className="Payment-button">
            <PayPalButton 
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onPaymentStart={()=>console.log('start Payment')}
            onSuccess={data=>handlePaymentSuccess(data)}
            onError={error=>console.log(error)}
            onCancel={data=>console.log(data)}
            />
        </div>
    </div>
    <div />        
</div>
    )    
}
    
    

export default Payment;