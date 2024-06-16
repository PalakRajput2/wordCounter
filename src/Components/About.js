import React,{useState} from 'react'
import { Link } from 'react-router-dom'
export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // }) 
    let myStyle = {
        color: props.mode ==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
    }
    
    return (
        <div className="container">
           <h1 className="my-3" style={{ color: props.mode ==='dark'?'white':'dark',}}>About Us</h1>
          <div class="card my-3" >
  <div class="card-body" style={{textAlign:"justify"}}>
    <p class="card-text" style={{fontSize: '18px'}}> Welcome to Text Twister, your all-in-one text manipulation tool! Text Twister is designed to make handling text easy and efficient. Whether you're looking to convert text to uppercase or lowercase, count the number of words and sentences, or perform various other text transformations, Text Twister has got you covered.
<br></br>
Our app provides a simple and intuitive interface for all your text processing needs. With just a few clicks, you can:
<br></br>
<strong>Convert Text Case: </strong> Switch between uppercase and lowercase to suit your requirements.<br></br><strong>Copied Text to Clipboard</strong>:With the help of this you can also copy your text to clipboard and use it later in just one click<br></br>
<strong>Word and Sentence Count:</strong>Quickly get the count of words and sentences to keep track of your content length.<br></br>
<strong>Additional Features:</strong> Explore a range of other text transformations that can help streamline your writing process.<br></br>
Text Twister is perfect for students, writers, coders, and anyone who regularly works with text.<br>
</br> <b><i>Our goal</i></b> is to save you time and effort by providing a reliable tool that handles all basic text operations in one place.
<br></br>
<strong><i>Thank you</i></strong> for choosing Text Twister. We hope our app enhances your productivity and makes text manipulation a breeze. <br></br>
 Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.
 <br></br></p> <p style={{textAlign:"center",fontSize:'20px'}}><b ><i>Happy twisting!</i></b>
 </p>
  </div>
</div>
           
           
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text </strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    Text Twister gives you a way to analyze your text quickly and efficiently. Be it word count, character count or 

                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use </strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

                    </div>
                    </div>
                </div>

            </div>
           
        </div>
    )
}