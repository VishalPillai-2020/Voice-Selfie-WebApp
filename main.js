var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function run(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;

    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak()
    }

}
function speak() {
    synth = window.speechSynthesis;

    speech = "Taking your selfie in 5 seconds";

    utterThis = new SpeechSynthesisUtterance(speech);
    synth.speak(utterThis);
    Webcam.attach(camera);

 setTimeout(function () {
TakeSnapshot ()
 },5000);

 }
 



camera = document.getElementById("camera")
Webcam.set({
    width: 320,
    heigth: 240,
    image_format: 'png',
    png_quality: 90
});

function TakeSnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id ='image' src =" + data_uri + ">";
    });
    Save();

}
function Save() {
    link = document.getElementById("link");
    image = document.getElementById("image").src;
    link.href = image;
    link.click();
}
