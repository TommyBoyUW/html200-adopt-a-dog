
function infoalert(name, breed, fee) {
    alert('Name: ' + name + '\nBreed: ' + breed + '\nFees: ' + fee);
}

let a = 0;
function adder(x) {
  a= a+x;
 total = a*123.45;
alert("Total adoption fees: $" + total);
}


function blogp() {

  var div = document.createElement('div');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const aside = document.createElement('aside');
  const body = document.querySelector('div');

body.append(h3);
h3.setAttribute('class', 'blogtitle');
h3.innerHTML = "Adoptadog Blog";

div.setAttribute('class', 'blogpage');
body.append(div);

img.setAttribute('class','blogpics');
img.setAttribute('id', 'pic');
div.append(img);

div.append(aside);
aside.setAttribute('class', 'intro');

aside.append(h4);
h4.setAttribute('class', 'title');

aside.append(p);
p.setAttribute('class', 'blogverb');


//const blogs = document.createElement('blogs');
//blogs.append(div);

//const blogs = [
//{number: 1, picture: 'images/blog-1.jpg', title: 'Traveling With Your Dog'},
//{number: 2, picture: 'images/blog-2.jpg', title: 'How To Walk Multiple Dogs'},
//{number: 3, picture: 'images/blog-3.jpg', title: 'Teach Your Dog To Fetch!'}
//];


let pics = ['images/blog-1.jpg', 'images/blog-2.jpg', 'images/blog-3.jpg'];
let title = ['Traveling With Your Dog', 'How To Walk Multiple Dogs', 'Teach Your Dog To Fetch!'];

let story = [];
story[0]= "Aduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat. Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

story[1]= "Bduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

story[2]= "Cduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.";

//const myCollection = document.getElementsByTagName("h4");

//var img = document.createElement('img');
//var spans=[];

for (let i=-0; i < 1; i += 1) {
//img.setAttribute("src", blogs.picture);
// document.createElement(blogs[i]);
img.src += pics[i];
h4.textContent += title[i];
p.textContent += story[i];


 }

}



//function checkoutpage() {

  //const submitButton = document.createElement('button');
  //submitButton.setAttribute('type', 'submit');
  //submitButton.textContent = 'Submit';
  //form.appendChild(submitButton);
  //form.addEventListener('submit', function(e) {
   //alert("Thank you. The form information has been received");
  //  });
//}

function validateForm() {
  let x = document.forms["myForm"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  else {
    alert("Thank you. The form information has been received");

      console.log();
}
}
