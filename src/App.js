import React , { useState } from ' react ' ; 
import ReactDO from 'reactdom';
import Tesseract from 

' tesseract.js ' ; 

import QRCode from 

' qrcode.react ' ; 




import { saveAs } from 

' file - saver ' ; 

function App ( ) { 

const [ imageUrl , setImageUrl ] = useState ( " " ) ; 

const [ transcription , setTranscription ] = useState ( " " ) ;

 const [ qrValue , setQrValue ] = useState ( " " ) ; 

 const handleFileSelect = (e)=> { const file = e.target.files [ 0 ] ; const reader = new FileReader()

 reader.readAsDataURL ( file ); reader.onload = ( ) => { setImageUrl ( reader.result ) ; 

 } ; 

 } ; 

 const { handleTranscribe } = async ( ) => { 

 { data : { text } } await Tesseract.recognize ( imageUrl, 
 'eng' ) ; 
 
 const setTranscription = { text }; 

 setQrValue ( text ) ; 
 
 // set Qrcode value to the transcribed text 

 } ; 

 const handleDownload = ( ) => { const canvas = document.getE 

 lementById ( ' qrcode ' ) ; const dataURL = 

 canvas.toDataURL ( ' image \ / png ' ) ; saveAs ( dataURL , ' qrcode.png ' ) ;

 //download Qrcode as a PNG 

 file } ; 

 return (
   
   < div > 

 < h1 > Transcribe Image Text</h1>

 < label htmlFor = " image - file " > Select an image file to 
 transcribe : 
 </label >

 < input type = " file " 

 id = " image - file " accept = " image.* " onChange = { handleFileSelect } /> 


 { imageUrl && <img src={imageUrl} alt=" Selected image " />} 
 
 
 <button
onClick={handleChange && transcription} >Transcribe </button>
<div> 

 < h2 > Transcription : </h2> 

 < p > { transcription } </ p > 
 
 < QRCode id = " qrcode " 

 value = { qrValue } /> 
 < button 

 onClick = { handleDownload } 

 > Download QR Code </ button > 

 

 </ div > 
</div>
 );
 
 }
 export default App(); 