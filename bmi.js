//  let form =document.querySelector('form');
// //  console.log(form);
// form.addEventListener('submit',function(e){
//   console.log(e);
// })
document.addEventListener("DOMContentLoaded", () => {
  console.log("dom");
  let form = document.querySelector('form');
  console.log(form);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(e);
    let height = parseInt(document.querySelector('#height').value);
    let weight=parseInt(document.querySelector('#weight').value);
    // console.log(height);
    if(height===''||height<0||isNaN(height)){
      document.querySelector('#result').innerHTML="Enter correct height";
    }
    if(weight===''||weight<0||isNaN(weight)){
      document.querySelector('#result').innerHTML="Enter correct Weight ";
    }
    let h=height*height;
    console.log(weight/h);
    document.querySelector('#result').innerHTML=`The BMI is${weight/height} `;




  });
});