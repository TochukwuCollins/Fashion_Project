        /*-------------------------------------------------------------------
               ======> Onclick Menu For Men <=======
       ---------------------------------------------------------------------*/
var men = document.getElementById('po-aim-men');
var menDropDown = document.getElementById('po-men-menu');
var aa = document.getElementById('po-change');
men.onclick = function() {
    if(menDropDown.className.indexOf("show") == -1){
        menDropDown.className += "show";
        aa.classList.replace('fa-angle-down','fa-angle-up');
    }
    else{
        menDropDown.className = menDropDown.className.replace("show",'');
        aa.classList.replace('fa-angle-up','fa-angle-down');
    }
}
 
/*-------------------------------------------------------------------
        ======> Onclick Menu For Women <=======
---------------------------------------------------------------------*/

var women = document.getElementById('po-aim-women');
var womenDropDown = document.getElementById('po-women-menu');
var b = document.getElementById('po-change-1');
women.onclick = function() {
    if(womenDropDown.className.indexOf("show") == -1){
        womenDropDown.className += "show";
        b.classList.replace('fa-angle-down','fa-angle-up');
    }
    else{
        womenDropDown.className = womenDropDown.className.replace("show",'');
         b.classList.replace('fa-angle-up','fa-angle-down');
    }
}

/*-------------------------------------------------------------------
        ======> Onclick Menu For Kid <=======
---------------------------------------------------------------------*/

var kid = document.getElementById('po-aim-kid');
var kidDropDown = document.getElementById('po-kid-menu');
var c = document.getElementById('po-change-2');
kid.onclick = function() {
    if(kidDropDown.className.indexOf("show") == -1){
        kidDropDown.className += "show";
        c.classList.replace('fa-angle-down','fa-angle-up');
    }
    else{
        kidDropDown.className = kidDropDown.className.replace("show",'');
         c.classList.replace('fa-angle-up','fa-angle-down');
    }
}

/*-------------------------------------------------------------------
        ======> Onclick Menu For Accessory <=======
---------------------------------------------------------------------*/

var Cat = document.getElementById('po-aim-cat');
var CatDropDown = document.getElementById('po-cat-menu');
var d = document.getElementById('po-change-3');
Cat.onclick = function() {
    if(CatDropDown.className.indexOf("show") == -1){
        CatDropDown.className += "show";
        d.classList.replace('fa-angle-down','fa-angle-up');
    }
    else{
        CatDropDown.className = CatDropDown.className.replace("show",'');
         d.classList.replace('fa-angle-up','fa-angle-down');
    }
}

/*-------------------------------------------------------------------
        ======> Onclick Menu For Latest <=======
---------------------------------------------------------------------*/

var Last = document.getElementById('po-aim-latest');
var LastDropDown = document.getElementById('po-latest-menu');
var e = document.getElementById('po-change-4');
Last.onclick = function() {
    if(LastDropDown.className.indexOf("show") == -1){
        LastDropDown.className += "show";
        e.classList.replace('fa-angle-down','fa-angle-up');
    }
    else{
        LastDropDown.className = LastDropDown.className.replace("show",'');
         e.classList.replace('fa-angle-up','fa-angle-down');
    }
}

/*-------------------------------------------------------------------
        ======> Onclick Menu For Bar <=======
---------------------------------------------------------------------*/

var Bar = document.getElementById('po-aim-bar');
var BarDropDown = document.getElementById('po-bar-menu');
Bar.onclick = function() {
    if(BarDropDown.className.indexOf("show") == -1){
        BarDropDown.className += "show";
    }
    else{
        BarDropDown.className = BarDropDown.className.replace("show",'');
    }
}

/*-------------------------------------------------------------------
        ======> Onclick Menu For Setting <=======
---------------------------------------------------------------------*/

var seting = document.getElementById('po-aim-setting');
var setingDropDown = document.getElementById('po-setting-menu');
seting.onclick = function() {
    if(setingDropDown.className.indexOf("show") == -1){
        setingDropDown.className += "show";
    }
    else{
        setingDropDown.className = setingDropDown.className.replace("show",'');
    }
}

/*-------------------------------------------------------------------
    ======> Onclick For Search Modal <=======
---------------------------------------------------------------------*/

var modal = document.getElementById('po-myModal');
var btn = document.getElementById('po-aim-search');
var cut = document.getElementById('po-cut');
btn.onclick = function() {
    modal.style.display = 'block';
}
cut.onclick = function() {
    modal.style.display = 'none';
}

/*-------------------------------------------------------------------
    ======> Animated Slide Show <=======
---------------------------------------------------------------------*/
let slide_index = 1;
displaySlides(slide_index);

function nextSlide(x){
    displaySlides(slide_index += 1);
}

setInterval( () => nextSlide(1), 7000)

function currentSlide(x){
    displaySlides(slide_index = x);
}

function displaySlides(x){
    let slides = document.getElementsByClassName('co-showSlide');
    if(x > slides.length){slide_index = 1}
    if(x < 1){slide_index = slide_index.length};
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = 'none';
    }
   slides[slide_index - 1].style.display = 'block';
}

/*-------------------------------------------------------------------
    =============> Bar Area <===============
---------------------------------------------------------------------*/

var gallery  = document.getElementById('po-galleryList');
var cutGallery = document.getElementById('po-bar-menu');
gallery.onclick = function() {
    if(cutGallery.className.indexOf("show") == -1){
        cutGallery.className += "show";
    }
    else{
        cutGallery.className = cutGallery.className.replace("show",'');
    }
}

var service  = document.getElementById('po-serviceList');
var cutService = document.getElementById('po-bar-menu');
service.onclick = function() {
    if(cutService.className.indexOf("show") == -1){
        cutService.className += "show";
    }
    else{
        cutService.className = cutService.className.replace("show",'');
    }
}

var testimonial  = document.getElementById('po-testList');
var cutTestimonial = document.getElementById('po-bar-menu');
testimonial.onclick = function() {
    if(cutTestimonial.className.indexOf("show") == -1){
        cutTestimonial.className += "show";
    }
    else{
        cutTestimonial.className = cutTestimonial.className.replace("show",'');
    }
}

var blog  = document.getElementById('po-blogList');
var cutBlog = document.getElementById('po-bar-menu');
blog.onclick = function() {
    if(cutBlog.className.indexOf("show") == -1){
        cutBlog.className += "show";
    }
    else{
        cutBlog.className = cutBlog.className.replace("show",'');
    }
}

var about  = document.getElementById('po-aboutList');
var cutAbout = document.getElementById('po-bar-menu');
about.onclick = function() {
    if(cutAbout.className.indexOf("show") == -1){
        cutAbout.className += "show";
    }
    else{
        cutAbout.className = cutAbout.className.replace("show",'');
    }
}

var contact  = document.getElementById('po-contactList');
var cutContact = document.getElementById('po-bar-menu');
contact.onclick = function() {
    if(cutContact.className.indexOf("show") == -1){
        cutContact.className += "show";
    }
    else{
        cutContact.className = cutContact.className.replace("show",'');
    }
}


/*-------------------------------------------------------------------
    =====> Gallery Overlay Modal Area <========
---------------------------------------------------------------------*/

var GalleryModalOne = document.getElementById('po-gallery-modal-1');
var cutterA = document.getElementById('cut-1');
var iconDetaila = document.getElementById('po-eye1');
iconDetaila.onclick = function() {
    GalleryModalOne.style.display = 'block';
}
cutterA.onclick = function() {
    GalleryModalOne.style.display = 'none';
}

var GalleryModalTwo = document.getElementById('po-gallery-modal-2');
var cutterB = document.getElementById('cut-2');
var iconDetailb = document.getElementById('po-eye2');
iconDetailb.onclick = function() {
    GalleryModalTwo.style.display = 'block';
}
cutterB.onclick = function() {
    GalleryModalTwo.style.display = 'none';
}

var GalleryModalThree = document.getElementById('po-gallery-modal-3');
var cutterC = document.getElementById('cut-3');
var iconDetailc = document.getElementById('po-eye3');
iconDetailc.onclick = function() {
    GalleryModalThree.style.display = 'block';
}
cutterC.onclick = function() {
    GalleryModalThree.style.display = 'none';
}

var GalleryModalFour = document.getElementById('po-gallery-modal-4');
var cutterD = document.getElementById('cut-4');
var iconDetaild = document.getElementById('po-eye4');
iconDetaild.onclick = function() {
    GalleryModalFour.style.display = 'block';
}
cutterD.onclick = function() {
    GalleryModalFour.style.display = 'none';
}

var GalleryModalFive = document.getElementById('po-gallery-modal-5');
var cutterE = document.getElementById('cut-5');
var iconDetaile = document.getElementById('po-eye5');
iconDetaile.onclick = function() {
    GalleryModalFive.style.display = 'block';
}
cutterE.onclick = function() {
    GalleryModalFive.style.display = 'none';
}


var GalleryModalSix = document.getElementById('po-gallery-modal-6');
var cutterF = document.getElementById('cut-6');
var iconDetailf = document.getElementById('po-eye6');
iconDetailf.onclick = function() {
    GalleryModalSix.style.display = 'block';
}
cutterF.onclick = function() {
    GalleryModalSix.style.display = 'none';
}


var GalleryModalSeven = document.getElementById('po-gallery-modal-7');
var cutterG = document.getElementById('cut-7');
var iconDetailg = document.getElementById('po-eye7');
iconDetailg.onclick = function() {
    GalleryModalSeven.style.display = 'block';
}
cutterG.onclick = function() {
    GalleryModalSeven.style.display = 'none';
}


var GalleryModalEight = document.getElementById('po-gallery-modal-8');
var cutterH = document.getElementById('cut-8');
var iconDetailh = document.getElementById('po-eye8');
iconDetailh.onclick = function() {
    GalleryModalEight.style.display = 'block';
}
cutterH.onclick = function() {
    GalleryModalEight.style.display = 'none';
}


var GalleryModalNine = document.getElementById('po-gallery-modal-9');
var cutterI = document.getElementById('cut-9');
var iconDetailj = document.getElementById('po-eye9');
iconDetailj.onclick = function() {
    GalleryModalNine.style.display = 'block';
}
cutterI.onclick = function() {
    GalleryModalNine.style.display = 'none';
}


var GalleryModalTen = document.getElementById('po-gallery-modal-10');
var cutterJ = document.getElementById('cut-10');
var iconDetailk = document.getElementById('po-eye10');
iconDetailk.onclick = function() {
    GalleryModalTen.style.display = 'block';
}
cutterJ.onclick = function() {
    GalleryModalTen.style.display = 'none';
}


var GalleryModalEleven = document.getElementById('po-gallery-modal-11');
var cutterK = document.getElementById('cut-11');
var iconDetaill = document.getElementById('po-eye11');
iconDetaill.onclick = function() {
    GalleryModalEleven.style.display = 'block';
}
cutterK.onclick = function() {
    GalleryModalEleven.style.display = 'none';
}


var GalleryModalTwelve = document.getElementById('po-gallery-modal-12');
var cutterL = document.getElementById('cut-12');
var iconDetailm = document.getElementById('po-eye12');
iconDetailm.onclick = function() {
    GalleryModalTwelve.style.display = 'block';
}
cutterL.onclick = function() {
    GalleryModalTwelve.style.display = 'none';
}


var GalleryModalThirteen = document.getElementById('po-gallery-modal-13');
var cutterM = document.getElementById('cut-13');
var iconDetailn = document.getElementById('po-eye13');
iconDetailn.onclick = function() {
    GalleryModalThirteen.style.display = 'block';
}
cutterM.onclick = function() {
    GalleryModalThirteen.style.display = 'none';
}


var GalleryModalFourteen = document.getElementById('po-gallery-modal-14');
var cutterN = document.getElementById('cut-14');
var iconDetailo = document.getElementById('po-eye14');
iconDetailo.onclick = function() {
    GalleryModalFourteen.style.display = 'block';
}
cutterN.onclick = function() {
    GalleryModalFourteen.style.display = 'none';
}


var GalleryModalFiveteen = document.getElementById('po-gallery-modal-15');
var cutterO = document.getElementById('cut-15');
var iconDetailp = document.getElementById('po-eye15');
iconDetailp.onclick = function() {
    GalleryModalFiveteen.style.display = 'block';
}
cutterO.onclick = function() {
    GalleryModalFiveteen.style.display = 'none';
}


var GalleryModalSixteen = document.getElementById('po-gallery-modal-16');
var cutterP = document.getElementById('cut-16');
var iconDetailq = document.getElementById('po-eye16');
iconDetailq.onclick = function() {
    GalleryModalSixteen.style.display = 'block';
}
cutterP.onclick = function() {
    GalleryModalSixteen.style.display = 'none';
}

/*-------------------------------------------------------------------
    ======> Animated testimonials  <=======
---------------------------------------------------------------------*/

   var a = 0;
   collins();
        
   function collins(){
   var x;
   var m = document.getElementsByClassName('co-show-testimonialSlider');
   for(x = 0; x < m.length; x++){
   m[x].style.display = "none";
   }
   a++;
   if(a > m.length){a = 1}
   m[a-1].style.display = "block";
   setTimeout(collins,8000);
  }

/*-------------------------------------------------------------------
    ======> onclick for sidnav <=======
---------------------------------------------------------------------*/

 var menu = document.getElementById('po-rightSidenav');
  var times = document.getElementById('po-navcut');
  var sidenav = document.getElementById('po-sidenav');
menu.onclick = function() {
    sidenav.style.display = 'block';
}
times.onclick = function() {
    sidenav.style.display = 'none';
}

/*-------------------------------------------------------------------
    ======> onclick for sidnav for men tshirt <=======
---------------------------------------------------------------------*/

function Open(){
     var sidenav = document.getElementById('po-sidenav').style.display ='block';
}

function Close(){
     var sidenav = document.getElementById('po-sidenav').style.display ='none';
}


/*-------------------------------------------------------------------
    ======>  Validating Form  for sign up    <=======
---------------------------------------------------------------------*/

function validateForm(){
    var x = document.forms["myForm"]["fname"].value;
    var y = document.forms["myForm"]["lname"].value;
    var z = document.forms["myForm"]["Mname"].value;
    var m = document.forms["myForm"]["Email"].value;
    var psw = document.forms["myForm"]["psw"].value;
    var cpsw = document.forms["myForm"]["cpsw"].value;
    var a = /[a-zA-Z]/g;
    var b = /[\d+]/;
    var c = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
         if(a.test(x) != true || b.test(x) === true){
        alert("Enter Your First Name Correctly");
             return false;
          }
        else if(a.test(y) != true || b.test(y) === true){
        alert("Enter Your Last Name Correctly") ;
            return false;
    }
        else if(a.test(z) != true || b.test(z) === true){
        alert("Enter Your Middle Name Correctly") ;
            return false;
    }
        else if(c.test(m) != true){
        alert("Please enter the right format for email") ;
            return false;
    }
        else if(psw != cpsw){
        alert("Password do not match") ;
            return false;
    }
        else if(psw.length <= 8){
        alert("Password should contain more than 8 charaters") ;
            return false;
    }
        else if(cpsw.length <= 8){
        alert("Password should contain more than 8 charaters") ;
            return false;
    }
}


/*-------------------------------------------------------------------
    ======>  Validating Form  for login   <=======
---------------------------------------------------------------------*/

function validateform(){
    var a;
    var m = document.forms["myForm"]["Email"].value;
     var x = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
     a = document.getElementById("error");
     a.innerHTML = "";
    try{
         if(x.test(m) != true){
               throw "Please enter the right format for email";
         }
    }
    catch(err){
         a.innerHTML = err;
        return false;
    }
    }


/*-------------------------------------------------------------------
    ======>  Hide and show password<=======
---------------------------------------------------------------------*/

function hideHandler() {
    var y = document.getElementById('po-change-eye');
    var x = document.querySelector('.pass');
    if (x.type === "password") {
        x.type = "text";
        y.title = "hide password";
    y.classList.replace('fa-eye-slash',"fa-eye");
    } else {
        x.type = "password";
        y.title = "show password";
        y.classList.replace('fa-eye',"fa-eye-slash");
    }
}

function hideHandlerEye() {
    var y = document.getElementById('po-change-Eye');
    var x = document.querySelector('.cpass');
    if (x.type === "password") {
        x.type = "text";
        y.title = "hide password";
    y.classList.replace('fa-eye-slash',"fa-eye");
    } else {
        x.type = "password";
        y.title = "show password";
        y.classList.replace('fa-eye',"fa-eye-slash");
    }
}


function validatingform(){
    var m = document.forms["Myform"]["Email"].value;
     var c = /([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})/;
     if(c.test(m) != true){
        alert("Please enter the right format for email") ;
            return false;
    }
}







