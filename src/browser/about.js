import React from 'react'
import Logo from '../images/logo.jpeg'
import Cert from '../images/cert.PNG'
import './abouts.css'
const About = ()=>
{


 

  return(
    <div class="container jo">

        <div class="jumbotron j1">
        <h1 className="d-flex justify-content-center text-white abouthead">About Me</h1>
        <hr class="accessory"/>
        
        {/* <br></br> */}


        <div class="row">
        {/* <br></br> */}
      		<div className="col-md-16 logosh">
          <br></br>
          <h2 className="text-white heading2"><u>Meaning of Name</u></h2>
          <br></br>
                    <img src={Logo}  class="logoimg" alt="Logo"></img><br />
                    <br></br>
                      <h4 class="text-white">Danny's Türk tutkusu</h4>  
                      <p class="text-white">(Name of a person) (Turkish) (Passion)</p>    
          
          </div>
          <hr class="verticalhr"/>
        	<div class="col-md-16">
          <br></br>
          <div class="flex-container  ">
          <h2 className="text-white heading2"><u>Certificate</u></h2>
          <br></br>
                <img src={Cert}  class="certimg" alt="Logo"></img><br />
            </div>
        	</div>
      	</div>



        
            <br></br>

            
            <br></br>
            <br></br>
            
            <hr class="accessory"/>
            <br></br>
            <h2 className="text-white heading2"><u>Introduction</u></h2>
            <br></br>
            <br></br>
            <br></br>

<div className="container">

<div class="row">
  <div class="col"><h2><b><u>English:</u></b></h2>
        <p><b>Salam. My name is Daniyal Zahir. I am from Pakistan. This website is made for people who want to learn Urdu to Turkish, English to Turkish  and vice versa </b></p>
        </div>
  <div class="col"><h2><b><u>:اردو</u></b></h2>
            <p><b>سلام۔ میرا نام دانیال ظہیر ہے۔ میں پاکستان سے ہوں. یہ ویب سائٹ میرے بھائیوں اور بہنوں کے لئے بنائی گئی ہے جو ترکی زبان سیکھنے کے خواہشمند ہیں ویب سائٹ ان لوگوں کے لئے بنائی گئی ہے جو اردو سے ترکی ، انگریزی سے ترکی اور اس کے برعکس سیکھنا چاہتے ہیں</b>
            </p></div>
  <div class="col"><h2><b><u>Türkçe:</u></b></h2>
        <b>Selam. Benim adım Daniyal Zahir. Pakistanlıyım. Bu web sitesi Urduca'dan Türkçe'ye, İngilizce'den Türkçe'ye ve tersini öğrenmek isteyenler için yapılmıştır.</b>
    </div>
</div>
<br></br>
</div>
        </div>


    </div>
  )
}

export default About