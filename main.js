var SpeechRecognition = window.webkitSpeechRecognition;
var recog = new SpeechRecognition();

function start(){
    document.getElementById('textbox').innerHTML="";
    recog.start();
}
recog.onresult=function(event){
    console.log(event);
    content= event.results[0][0].transcript;
document.getElementById("textbox").innerHTML= content;
if(content=='take my selfie'){
    console.log("taking selfie ")
    speak();
}

}
function speak(){
    synth= window.speechSynthesis;
    speak_data= 'taking selfie in 5 seconds'
    utterthis= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach("#camera");
}

camera= document.getElementById("camera");
Webcam.set({
    width: 350 ,height: 350, image_format:"png", png_quality: 90
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML="<img id='cap_pic' src="+ data_uri +">"
    })
}
 setTimeout(5000,function() {

    takesnapshot();
    save ();
})
function save(){
    img = document.getElementById('cap_pic');
    document.getElementById('link').href=img;
    document.getElementById('link').click()
}