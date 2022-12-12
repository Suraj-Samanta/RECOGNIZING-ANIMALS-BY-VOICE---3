
function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Qu_R6X2zk/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
var dog= 0;
var cat= 0;
function gotreResults(error, results){
    if (error){
        console.error(error);
    } else{
        console.log(results);
        r = Math.floor(Math.random()*255)+ 1
        g = Math.floor(Math.random()*255)+ 1
        b = Math.floor(Math.random()*255)+ 1

        document.getElementById("name").innerHTML = 'I van hear -'+
        results[0].label;
        document.getElementById("name").style.color = "rgb("+r+","+g+","+b+")";
    
        document.getElementById("number").innerHTML="Detected dog-"+dog+ "detected cat-"+cat;

        img=document.getElementById("animal");
         
        if(results[0].label == "dog")
        {
            img.src= "dog.jpg";
            dog= dog+1;
        }
        else if(results[0].label == "cat"){
            img.src = "cat.png";
            cat= cat+1;
        }
        else{
            img.src = "ear.png";
        }
    }
}