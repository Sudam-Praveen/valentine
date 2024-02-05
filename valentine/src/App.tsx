import { useState } from 'react'

import './App.css'

const phrases=[
  "No",
  "Are You Sure ?",
  "Really Sure?",
  "Pookie please",
  "Are you sure ?",
  "Just Think about it",
  "Don't do this to me",
  "Just kidding please say Yes",
  "Im gonna cry.... :(",
  "You're Breacking my heart ;(",
];


function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed]= useState(false);
  const yesButtonSize = noCount * 20 +16;

  function handleNoClick(){
    setNoCount(noCount + 1);
  }
  function getNoButtonText(){
    return phrases[noCount % phrases.length];
  }


  return (
    <div className="valentine-container">
      { yesPressed ? (
        <>
        <img className="h-200px" src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="bear kissing" />
        
        <div className="text fw-bold">Yayy!!!!</div>
        </>
      ) :(
        <>
        <img src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" alt="bear with hearts" />
        <div className='fw-bold' style={{ marginTop: '5px',marginBottom: '5px' }}>Will you be my valentine?</div>
        <div>
          <button className='yesButton btn btn-success'
          style={{fontSize:yesButtonSize , marginRight: '10px'}}
          onClick={()=>setYesPressed(true)}
          >
           Yes 
          </button>
          <button onClick={handleNoClick} className='noButton btn btn-danger'>{getNoButtonText()}</button>
        </div>
        </>
      )
    }
    </div>
  
  )
}

export default App
