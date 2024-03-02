import { useState } from "react";
import './App.css';
import axios from 'axios';



function App() {

  const [amount, setAmount] = useState(1000)
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [cardNumber, setCardNumber] = useState("");
const [cvv,setCVV] = useState("");
const [expiryMonth, setExpiryMonth] = useState("");
const [expiryYear, setExpiryYear] = useState("");


  const makePayment = (e) => {
    e.preventDefault();
    axios.post('https://amandanwadukwe.a2hosted.com/make-payment/', {
      "card_number": cardNumber,
      "cvv": cvv,
      "expiry_month": expiryMonth,
      "expiry_year": expiryYear,
      "currency": "NGN",
      "amount": amount,
      // "redirect_url": "https://www.google.com",
      "fullname": name,
      "email": email,
      "phone_number": phoneNumber,
      "enckey": "FLWSECK_TESTe31dc2f52af1",
      "tx_ref": "example02"
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.error(err));
  }

  const unUsedVariables =()=>{
    setAmount(2000)
  }
  return (
    <div className="App">
        {/*<a href="https://flutterwave.com/pay/da9mgena5nls">Get tickets</a>*/}
        <p><b>Total:</b> {amount}</p>
        <form>
        <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="text" value={name} placeholder="Name"  onChange={(e)=>setName(e.target.value)} />
        <input type="text" value={phoneNumber} placeholder="Phone number"  onChange={(e)=>setPhoneNumber(e.target.value)} />
      
          <input type="text" value={cardNumber} placeholder="Card Number" onChange={(e) => setCardNumber(e.target.value)}/>
          <input type="text" value={cvv} placeholder="cvv" onChange={(e) => setCVV(e.target.value)}/>
          <input type="number" value={expiryMonth} max={99} placeholder="00" onChange={(e) => setExpiryMonth(e.target.value)}/>
          <input type="number" value={expiryYear} max={99} placeholder="00" onChange={(e) => setExpiryYear(e.target.value)}/>
          <input type="submit" onClick={makePayment} value="Get Tickets"/>
        </form>

        <button type="button" onClick={unUsedVariables}>Set amount to 2000</button>
    </div>
  );
}

export default App;
