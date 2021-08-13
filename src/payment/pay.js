

import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './payment.css';

function Card() {




    const [number,setNumber]=useState('');
    const [name,setName]=useState('');
    const [expiry,setExpiry]=useState('');
    const [cvc,setCvc]=useState('');
    const [focus,setFocus]=useState('');

const data =async(e)=>{ 
  e.preventDefault();
  const res=await fetch("/payments",
  {
      
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      number,
      name,
      expiry,
      cvc
    })
  });

  if(res.status===400)
  {
    alert("NO");
  }
}



  return (
    <>
    
    <header className="App-header">
    <div className="d-flex justify-content-center">
    <div className="jumbotron cards">

          <Cards
          cvc={cvc}
          expiry={expiry}
          focus={focus}
          name={name}
          number={number}
        />

    <br></br>    
      
      <form method="POST">
  <div class="form-group">
    <input type="email" name="number"  id="number" placeholder="Enter Number" value={number} onChange={(e)=>setNumber(e.target.value)} minLength="16" maxLength="16" required />
  </div>
  <div class="form-group">
    <input type="tel" name="password"  id="password" placeholder="Password" value={name} onChange={(e)=>setName(e.target.value)} minLength="3" required />
  </div>
  <div class="form-group">
    <input type="tel" name="password"  id="password" placeholder="Expiry" value={expiry} onChange={(e)=>setExpiry(e.target.value)} minLength="4" maxLength="4" required />
  </div>
  <div class="form-group">
    <input type="tel" name="password"  id="password" placeholder="CVC" value={cvc} onChange={(e)=>setCvc(e.target.value)} minLength="3" maxLength="3" required />
  </div>
  <button type="tel" class="btn btn-primary" onClick={data}>Submit</button>
</form>
</div>
    </div>
    </header>
    </>
  );
}

export default Card;
