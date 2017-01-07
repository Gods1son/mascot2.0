//an array that stores images and the names
var faces = [{
    src:'dangote.jpg',
    title:'dangote',
    hint:'richest man in 9ja'
},{src:'donjazzy.jpg',
    title:'donjazzy',
    hint:'mavin records'},{src:'myoga.jpg',
    title:'oga at the top',
    hint:'NSCDC.thatsall'},{src:'2baba.jpg',
    title:'2baba',
    hint:'african queen'},{src:'abacha.jpg',
    title:'abacha',
    hint:'apple killed him'},{src:'adeboye.jpg',
    title:'pst adeboye',
    hint:'can somebody shout hallelujah'},{src:'adefarasin.jpg',
    title:'pst adefarasin',
    hint:'He is a Pastor'},{src:'awolowo.jpg',
    title:'awolowo',
    hint:'look at the cap'},{src:'banky.jpg',
    title:'banky w',
    hint:'capable man'},{src:'buhari.jpg',
    title:'buhari',
    hint:'the change'},{src:'chimamanda.jpg',
    title:'chimamanda',
    hint:'a writer'},{src:'deolasagoe.jpg',
    title:'deola sagoe',
    hint:'deola'},{src:'djspinall.jpg',
    title:'djspinall',
    hint:'the cap'},{src:'dokubo.jpg',
    title:'asari dokubo',
    hint:'militant'},{src:'fela.jpg',
    title:'fela',
    hint:'plenty wives + ganja'},{src:'goodluck.jpg',
    title:'goodluck',
    hint:'ex president'},{src:'herbert.jpg',
    title:'macauley',
    hint:'10 naira note'},{src:'honpatrick.jpg',
    title:'hon patrick',
    hint:'la honourable grammarly'},{src:'jagaban.jpg',
    title:'jagaban',
    hint:'lagos apc boss'},{src:'kanu.jpg',
    title:'kanu',
    hint:'olympics 98 hero'},{src:'lagbaja.jpg',
    title:'lagbaja',
    hint:'konko below'},{src:'obasanjo.jpg',
    title:'obasanjo',
    hint:'baba iyabo'},{src:'okonjo.jpg',
    title:'okonjo',
    hint:'finance'},{src:'oritsejafor.jpg',
    title:'oritsejafor',
    hint:'CAN'},{src:'psquare.jpg',
    title:'psquare',
    hint:'Senorita'},{src:'toolz.jpg',
    title:'toolz',
    hint:'NdaniTV'},{src:'wizkid.jpg',
    title:'wizkid',
    hint:'One dance ft drake'},{src:'wole.jpg',
    title:'soyinka',
    hint:'nobel laurel'}];
//used to display objects in the faces when u get the pics right
var counter = 0;
//array that throws jab when u get it wrong
var abuse = ["where are you from","can i see your passport","shaking my head","beht why",
            "just try again","u miss am o"];
//checking users entry and pics name
function myfunction(){
if(document.getElementById("trial").value.toLowerCase() === document.getElementById("images").alt){
    counter++;
    scores += 10;
    levels += 1;
    document.getElementById("score").innerHTML = scores;
    document.getElementById("level").innerHTML = levels;
    document.getElementById("trial").value = '';
    document.getElementById("trial").focus();
    document.getElementById("images").alt = faces[counter].title;
	document.getElementById('images').src=faces[counter].src;
    document.getElementById("result").innerHTML = " ";
    document.getElementById("help").innerHTML = " ";

} else if(document.getElementById("trial").value.toLowerCase() != document.getElementById("images").alt){
    var yab = Math.floor(Math.random() * 6);
    document.getElementById("result").innerHTML = abuse[yab]; }
}
//lets display the score
var scores = 0;
var levels = 1;
//getting help
function helperMan(){
    document.getElementById("help").innerHTML = faces[counter].hint;
}
function firstImage(){
    document.getElementById('images').src=faces[counter].src;
    document.getElementById("images").alt = faces[counter].title;
}
window.onload = firstImage;
