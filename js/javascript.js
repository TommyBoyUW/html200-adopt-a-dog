
function infoalert(name, breed, fee) {
    alert('Name: ' + name + '\nBreed: ' + breed + '\nFees: ' + fee);
}

let a = 0;
let total = 0;
let carttotal = 0;

function adder(x) {
  a= a+x;
 total = a*123.45;

 carttotal = ("$ " + total);
 $(".aboutheader").text(carttotal);

alert("Total adoption fees: $" + total);
}




function blogp() {

var div = document.createElement('div');
const h3 = document.createElement('h3');

const blogInfo =[
  {
    name: 'Traveling With Your Dog',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-1.jpg'
  },

  {
    name: 'How To Walk Multiple Dogs',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-2.jpg'
  },

  {
    name: 'Teach Your Dog To Fetch',
    info: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.  Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explan sus am aut amet ant fugiatum, utem non reptat.',
    info2: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit',
    image: 'images/blog-3.jpg'
  }
];

const container = document.getElementById('blogposts');

h3.textContent = "Adoptadog Blog";
h3.setAttribute('class', 'blogtitle');
  container.appendChild(h3);


for(i=0; i<blogInfo.length; i++){
  const blog = blogInfo[i];


  const containers = document.createElement('blogs');
  containers.classList.add('blogpage');

  const containers2 = document.createElement('blogs2');
  containers2.classList.add('intro');

  const newimage = document.createElement("img");
  newimage.src = blog.image;
  newimage.classList.add('blogpic');

  const title = document.createElement('h4');
  title.textContent = blog.name;
  title.classList.add( 'introblogtitle' );

  const paragraph = document.createElement('p');
  paragraph.textContent = blog.info;
  paragraph.classList.add('blogverb');

  const paragraph2 = document.createElement('p');
  paragraph2.textContent = blog.info2;
  paragraph2.classList.add( 'blogverb');


container.appendChild(containers);

containers.appendChild(newimage);

containers.appendChild(containers2);
containers2.appendChild(title);
containers2.appendChild(paragraph);
containers2.appendChild(paragraph2);

 }

}

function checkoutpage() {

  let x = document.forms["myForm"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else {

    document.querySelector('form.myForm').addEventListener('submit', function(e) {
  e.preventDefault();


    let x = document.querySelector('form.myForm').elements;
    console.log("Name: ", x['name'].value);
    console.log("Email: ", x['applicantEmail'].value);
    console.log("Address: ", x['applicantStreet'].value);
    console.log("City: ", x['applicantCity'].value);
    console.log("State: ", x['states'].value);
    console.log("Zip Code: ", x['applicantZip'].value);
    console.log("First Time Adopter Y/N: ", x['previousadopter'].value);
    console.log("Pickup Location: ", x['pickuplocation'].value);

      alert("Thank you. The form information has been received");
  });

    }
  }

$(function(){

$(".profilephoto").mouseenter(function() {
    $(this).css("cursor","pointer");
    $(this).animate({width: "125%", height: "100%", opacity: "0.3"}, 'slow');
  });



$('.profilephoto').mouseleave(function() {
    $(this).animate({width: "100%", height: "45%", opacity: "1"}, 'slow');
    });
})
