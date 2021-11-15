//Image 1
const dropArea = $("#dragImage1"),
dragText = $("#header1"),
button = $("#button1"),
input = $("#input1")
let file; //this is a global variable and we'll use it inside multiple functions

button.on("click", function (){
  input.click(); //if user click on the button then the input also clicked
});

input.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.addClass("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.addClass("active");
  dragText.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.on("dragleave", ()=>{
  dropArea.removeClass("active");
  dragText.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.originalEvent.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.empty();
      dropArea.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

//Image 2
const dropArea2 = $("#dragImage2"),
dragText2 = $("#header2"),
button2 = $("#button2"),
input2 = $("#input2")
let file2; //this is a global variable and we'll use it inside multiple functions

button2.on("click", function (){
  input2.click(); //if user click on the button then the input also clicked
});

input2.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file2 = this.files[0];
  dropArea2.addClass("active");
  showFile2(); //calling function
});


//If user Drag File Over DropArea
dropArea2.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea2.addClass("active");
  dragText2.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea2.on("dragleave", ()=>{
  dropArea2.removeClass("active");
  dragText2.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea2.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file2 = event.originalEvent.dataTransfer.files[0];
  showFile2(); //calling function
});

function showFile2(){
  let fileType = file2.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea2.empty();
      dropArea2.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file2);
  }else{
    alert("This is not an Image File!");
    dropArea2.classList.remove("active");
    dragText2.textContent = "Drag & Drop to Upload File";
  }
}



//Image 3
const dropArea3 = $("#dragImage3"),
dragText3 = $("#header3"),
button3 = $("#button3"),
input3 = $("#input3")
let file3; //this is a global variable and we'll use it inside multiple functions

button3.on("click", function (){
  input3.click(); //if user click on the button then the input also clicked
});

input3.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file3 = this.files[0];
  dropArea3.addClass("active");
  showFile3(); //calling function
});


//If user Drag File Over DropArea
dropArea3.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea3.addClass("active");
  dragText3.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea3.on("dragleave", ()=>{
  dropArea3.removeClass("active");
  dragText3.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea3.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file3 = event.originalEvent.dataTransfer.files[0];
  showFile3(); //calling function
});

function showFile3(){
  let fileType = file3.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea3.empty();
      dropArea3.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file3);
  }else{
    alert("This is not an Image File!");
    dropArea3.classList.remove("active");
    dragText3.textContent = "Drag & Drop to Upload File";
  }
}


//Image 4
const dropArea4 = $("#dragImage4"),
dragText4 = $("#header4"),
button4 = $("#button4"),
input4 = $("#input4")
let file4; //this is a global variable and we'll use it inside multiple functions

button4.on("click", function (){
  input4.click(); //if user click on the button then the input also clicked
});

input4.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file4 = this.files[0];
  dropArea4.addClass("active");
  showFile4(); //calling function
});


//If user Drag File Over DropArea
dropArea4.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea4.addClass("active");
  dragText4.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea4.on("dragleave", ()=>{
  dropArea4.removeClass("active");
  dragText4.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea4.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file4 = event.originalEvent.dataTransfer.files[0];
  showFile4(); //calling function
});

function showFile4(){
  let fileType = file4.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea4.empty();
      dropArea4.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file4);
  }else{
    alert("This is not an Image File!");
    dropArea4.classList.remove("active");
    dragText4.textContent = "Drag & Drop to Upload File";
  }
}



//Image 5
const dropArea5 = $("#dragImage5"),
dragText5 = $("#header5"),
button5 = $("#button5"),
input5 = $("#input5")
let file5; //this is a global variable and we'll use it inside multiple functions

button5.on("click", function (){
  input5.click(); //if user click on the button then the input also clicked
});

input5.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file5 = this.files[0];
  dropArea5.addClass("active");
  showFile5(); //calling function
});


//If user Drag File Over DropArea
dropArea5.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea5.addClass("active");
  dragText5.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea5.on("dragleave", ()=>{
  dropArea5.removeClass("active");
  dragText5.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea5.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file5 = event.originalEvent.dataTransfer.files[0];
  showFile5(); //calling function
});

function showFile5(){
  let fileType = file5.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea5.empty();
      dropArea5.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file5);
  }else{
    alert("This is not an Image File!");
    dropArea5.classList.remove("active");
    dragText5.textContent = "Drag & Drop to Upload File";
  }
}


//Image 6
const dropArea6 = $("#dragImage6"),
dragText6 = $("#header6"),
button6 = $("#button6"),
input6 = $("#input6")
let file6; //this is a global variable and we'll use it inside multiple functions

button6.on("click", function (){
  input6.click(); //if user click on the button then the input also clicked
});

input6.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file6 = this.files[0];
  dropArea6.addClass("active");
  showFile6(); //calling function
});


//If user Drag File Over DropArea
dropArea6.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea6.addClass("active");
  dragText6.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea6.on("dragleave", ()=>{
  dropArea6.removeClass("active");
  dragText6.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea6.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file6 = event.originalEvent.dataTransfer.files[0];
  showFile6(); //calling function
});

function showFile6(){
  let fileType = file6.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea6.empty();
      dropArea6.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file6);
  }else{
    alert("This is not an Image File!");
    dropArea6.classList.remove("active");
    dragText6.textContent = "Drag & Drop to Upload File";
  }
}


//Image 7
const dropArea7 = $("#dragImage7"),
dragText7 = $("#header7"),
button7 = $("#button7"),
input7 = $("#input7")
let file7; //this is a global variable and we'll use it inside multiple functions

button7.on("click", function (){
  input7.click(); //if user click on the button then the input also clicked
});

input7.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file7 = this.files[0];
  dropArea7.addClass("active");
  showFile7(); //calling function
});


//If user Drag File Over DropArea
dropArea7.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea7.addClass("active");
  dragText7.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea7.on("dragleave", ()=>{
  dropArea7.removeClass("active");
  dragText7.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea7.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file7 = event.originalEvent.dataTransfer.files[0];
  showFile7(); //calling function
});

function showFile7(){
  let fileType = file7.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea7.empty();
      dropArea7.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file7);
  }else{
    alert("This is not an Image File!");
    dropArea7.classList.remove("active");
    dragText7.textContent = "Drag & Drop to Upload File";
  }
}



//Image 8

const dropArea8 = $("#dragImage8"),
dragText8 = $("#header8"),
button8 = $("#button8"),
input8 = $("#input8")
let file8; //this is a global variable and we'll use it inside multiple functions

button8.on("click", function (){
  input8.click(); //if user click on the button then the input also clicked
});

input8.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file8 = this.files[0];
  dropArea8.addClass("active");
  showFile8(); //calling function
});


//If user Drag File Over DropArea
dropArea8.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea8.addClass("active");
  dragText8.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea8.on("dragleave", ()=>{
  dropArea8.removeClass("active");
  dragText8.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea8.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file8 = event.originalEvent.dataTransfer.files[0];
  showFile8(); //calling function
});

function showFile8(){
  let fileType = file8.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea8.empty();
      dropArea8.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file8);
  }else{
    alert("This is not an Image File!");
    dropArea8.classList.remove("active");
    dragText8.textContent = "Drag & Drop to Upload File";
  }
}





//Image 9

const dropArea9 = $("#dragImage9"),
dragText9 = $("#header9"),
button9 = $("#button9"),
input9 = $("#input9")
let file9; //this is a global variable and we'll use it inside multiple functions

button9.on("click", function (){
  input9.click(); //if user click on the button then the input also clicked
});

input9.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file9 = this.files[0];
  dropArea9.addClass("active");
  showFile9(); //calling function
});


//If user Drag File Over DropArea
dropArea9.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea9.addClass("active");
  dragText9.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea9.on("dragleave", ()=>{
  dropArea9.removeClass("active");
  dragText9.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea9.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file9 = event.originalEvent.dataTransfer.files[0];
  showFile9(); //calling function
});

function showFile9(){
  let fileType = file9.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea9.empty();
      dropArea9.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file9);
  }else{
    alert("This is not an Image File!");
    dropArea9.classList.remove("active");
    dragText9.textContent = "Drag & Drop to Upload File";
  }
}


//Image 10

const dropArea10 = $("#dragImage10"),
dragText10 = $("#header10"),
button10 = $("#button10"),
input10 = $("#input10")
let file10; //this is a global variable and we'll use it inside multiple functions

button10.on("click", function (){
  input10.click(); //if user click on the button then the input also clicked
});

input10.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file10 = this.files[0];
  dropArea10.addClass("active");
  showFile10(); //calling function
});


//If user Drag File Over DropArea
dropArea10.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea10.addClass("active");
  dragText10.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea10.on("dragleave", ()=>{
  dropArea10.removeClass("active");
  dragText10.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea10.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file10 = event.originalEvent.dataTransfer.files[0];
  showFile10(); //calling function
});

function showFile10(){
  let fileType = file10.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea10.empty();
      dropArea10.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file10);
  }else{
    alert("This is not an Image File!");
    dropArea10.classList.remove("active");
    dragText10.textContent = "Drag & Drop to Upload File";
  }
}



//Image 11

const dropArea11 = $("#dragImage11"),
dragText11 = $("#header11"),
button11 = $("#button11"),
input11 = $("#input11")
let file11; //this is a global variable and we'll use it inside multiple functions

button11.on("click", function (){
  input11.click(); //if user click on the button then the input also clicked
});

input11.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file11 = this.files[0];
  dropArea11.addClass("active");
  showFile11(); //calling function
});


//If user Drag File Over DropArea
dropArea11.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea11.addClass("active");
  dragText11.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea11.on("dragleave", ()=>{
  dropArea11.removeClass("active");
  dragText11.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea11.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file11 = event.originalEvent.dataTransfer.files[0];
  showFile11(); //calling function
});

function showFile11(){
  let fileType = file11.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea11.empty();
      dropArea11.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file11);
  }else{
    alert("This is not an Image File!");
    dropArea11.classList.remove("active");
    dragText11.textContent = "Drag & Drop to Upload File";
  }
}



//Image 12

const dropArea12 = $("#dragImage12"),
dragText12 = $("#header12"),
button12 = $("#button12"),
input12 = $("#input12")
let file12; //this is a global variable and we'll use it inside multiple functions

button12.on("click", function (){
  input12.click(); //if user click on the button then the input also clicked
});

input12.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file12 = this.files[0];
  dropArea12.addClass("active");
  showFile12(); //calling function
});


//If user Drag File Over DropArea
dropArea12.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea12.addClass("active");
  dragText12.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea12.on("dragleave", ()=>{
  dropArea12.removeClass("active");
  dragText12.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea12.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file12 = event.originalEvent.dataTransfer.files[0];
  showFile12(); //calling function
});

function showFile12(){
  let fileType = file12.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea12.empty();
      dropArea12.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file12);
  }else{
    alert("This is not an Image File!");
    dropArea12.classList.remove("active");
    dragText12.textContent = "Drag & Drop to Upload File";
  }
}




//Image 13

const dropArea13 = $("#dragImage13"),
dragText13 = $("#header13"),
button13 = $("#button13"),
input13 = $("#input13")
let file13; //this is a global variable and we'll use it inside multiple functions

button13.on("click", function (){
  input13.click(); //if user click on the button then the input also clicked
});

input13.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file13 = this.files[0];
  dropArea13.addClass("active");
  showFile13(); //calling function
});


//If user Drag File Over DropArea
dropArea13.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea13.addClass("active");
  dragText13.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea13.on("dragleave", ()=>{
  dropArea13.removeClass("active");
  dragText13.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea13.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file13 = event.originalEvent.dataTransfer.files[0];
  showFile13(); //calling function
});

function showFile13(){
  let fileType = file13.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea13.empty();
      dropArea13.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file13);
  }else{
    alert("This is not an Image File!");
    dropArea13.classList.remove("active");
    dragText13.textContent = "Drag & Drop to Upload File";
  }
}



//Image 14

const dropArea14 = $("#dragImage14"),
dragText14 = $("#header14"),
button14 = $("#button14"),
input14 = $("#input14")
let file14; //this is a global variable and we'll use it inside multiple functions

button14.on("click", function (){
  input14.click(); //if user click on the button then the input also clicked
});

input14.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file14 = this.files[0];
  dropArea14.addClass("active");
  showFile14(); //calling function
});


//If user Drag File Over DropArea
dropArea14.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea14.addClass("active");
  dragText14.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea14.on("dragleave", ()=>{
  dropArea14.removeClass("active");
  dragText14.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea14.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file14 = event.originalEvent.dataTransfer.files[0];
  showFile14(); //calling function
});

function showFile14(){
  let fileType = file14.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea14.empty();
      dropArea14.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file14);
  }else{
    alert("This is not an Image File!");
    dropArea14.classList.remove("active");
    dragText14.textContent = "Drag & Drop to Upload File";
  }
}



//Image 15

const dropArea15 = $("#dragImage15"),
dragText15 = $("#header15"),
button15 = $("#button15"),
input15 = $("#input15")
let file15; //this is a global variable and we'll use it inside multiple functions

button15.on("click", function (){
  input15.click(); //if user click on the button then the input also clicked
});

input15.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file15 = this.files[0];
  dropArea15.addClass("active");
  showFile15(); //calling function
});


//If user Drag File Over DropArea
dropArea15.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea15.addClass("active");
  dragText15.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea15.on("dragleave", ()=>{
  dropArea15.removeClass("active");
  dragText15.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea15.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file15 = event.originalEvent.dataTransfer.files[0];
  showFile15(); //calling function
});

function showFile15(){
  let fileType = file15.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea15.empty();
      dropArea15.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file15);
  }else{
    alert("This is not an Image File!");
    dropArea15.classList.remove("active");
    dragText15.textContent = "Drag & Drop to Upload File";
  }
}




//Image 16

const dropArea16 = $("#dragImage16"),
dragText16 = $("#header16"),
button16 = $("#button16"),
input16 = $("#input16")
let file16; //this is a global variable and we'll use it inside multiple functions

button16.on("click", function (){
  input16.click(); //if user click on the button then the input also clicked
});

input16.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file16 = this.files[0];
  dropArea16.addClass("active");
  showFile16(); //calling function
});


//If user Drag File Over DropArea
dropArea16.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea16.addClass("active");
  dragText16.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea16.on("dragleave", ()=>{
  dropArea16.removeClass("active");
  dragText16.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea16.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file16 = event.originalEvent.dataTransfer.files[0];
  showFile16(); //calling function
});

function showFile16(){
  let fileType = file16.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea16.empty();
      dropArea16.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file16);
  }else{
    alert("This is not an Image File!");
    dropArea16.classList.remove("active");
    dragText16.textContent = "Drag & Drop to Upload File";
  }
}


//Image 17

const dropArea17 = $("#dragImage17"),
dragText17 = $("#header17"),
button17 = $("#button17"),
input17 = $("#input17")
let file17; //this is a global variable and we'll use it inside multiple functions

button17.on("click", function (){
  input17.click(); //if user click on the button then the input also clicked
});

input17.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file17 = this.files[0];
  dropArea17.addClass("active");
  showFile17(); //calling function
});


//If user Drag File Over DropArea
dropArea17.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea17.addClass("active");
  dragText17.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea17.on("dragleave", ()=>{
  dropArea17.removeClass("active");
  dragText17.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea17.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file17 = event.originalEvent.dataTransfer.files[0];
  showFile17(); //calling function
});

function showFile17(){
  let fileType = file17.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea17.empty();
      dropArea17.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file17);
  }else{
    alert("This is not an Image File!");
    dropArea17.classList.remove("active");
    dragText17.textContent = "Drag & Drop to Upload File";
  }
}



//Image 18

const dropArea18 = $("#dragImage18"),
dragText18 = $("#header18"),
button18 = $("#button18"),
input18 = $("#input18")
let file18; //this is a global variable and we'll use it inside multiple functions

button18.on("click", function (){
  input18.click(); //if user click on the button then the input also clicked
});

input18.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file18 = this.files[0];
  dropArea18.addClass("active");
  showFile18(); //calling function
});


//If user Drag File Over DropArea
dropArea18.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea18.addClass("active");
  dragText18.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea18.on("dragleave", ()=>{
  dropArea18.removeClass("active");
  dragText18.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea18.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file18 = event.originalEvent.dataTransfer.files[0];
  showFile18(); //calling function
});

function showFile18(){
  let fileType = file18.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea18.empty();
      dropArea18.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file18);
  }else{
    alert("This is not an Image File!");
    dropArea18.classList.remove("active");
    dragText18.textContent = "Drag & Drop to Upload File";
  }
}




//Image 19

const dropArea19 = $("#dragImage19"),
dragText19 = $("#header19"),
button19 = $("#button19"),
input19 = $("#input19")
let file19; //this is a global variable and we'll use it inside multiple functions

button19.on("click", function (){
  input19.click(); //if user click on the button then the input also clicked
});

input19.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file19 = this.files[0];
  dropArea19.addClass("active");
  showFile19(); //calling function
});


//If user Drag File Over DropArea
dropArea19.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea19.addClass("active");
  dragText19.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea19.on("dragleave", ()=>{
  dropArea19.removeClass("active");
  dragText19.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea19.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file19 = event.originalEvent.dataTransfer.files[0];
  showFile19(); //calling function
});

function showFile19(){
  let fileType = file19.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea19.empty();
      dropArea19.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file19);
  }else{
    alert("This is not an Image File!");
    dropArea19.classList.remove("active");
    dragText19.textContent = "Drag & Drop to Upload File";
  }
}



//Image 20

const dropArea20 = $("#dragImage20"),
dragText20 = $("#header20"),
button20 = $("#button20"),
input20 = $("#input20")
let file20; //this is a global variable and we'll use it inside multiple functions

button20.on("click", function (){
  input20.click(); //if user click on the button then the input also clicked
});

input20.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file20 = this.files[0];
  dropArea20.addClass("active");
  showFile20(); //calling function
});


//If user Drag File Over DropArea
dropArea20.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea20.addClass("active");
  dragText20.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea20.on("dragleave", ()=>{
  dropArea20.removeClass("active");
  dragText20.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea20.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file20 = event.originalEvent.dataTransfer.files[0];
  showFile20(); //calling function
});

function showFile20(){
  let fileType = file20.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea20.empty();
      dropArea20.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file20);
  }else{
    alert("This is not an Image File!");
    dropArea20.classList.remove("active");
    dragText20.textContent = "Drag & Drop to Upload File";
  }
}



//Image 21

const dropArea21 = $("#dragImage21"),
dragText21 = $("#header21"),
button21 = $("#button21"),
input21 = $("#input21")
let file21; //this is a global variable and we'll use it inside multiple functions

button21.on("click", function (){
  input21.click(); //if user click on the button then the input also clicked
});

input21.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file21 = this.files[0];
  dropArea21.addClass("active");
  showFile21(); //calling function
});


//If user Drag File Over DropArea
dropArea21.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea21.addClass("active");
  dragText21.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea21.on("dragleave", ()=>{
  dropArea21.removeClass("active");
  dragText21.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea21.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file21 = event.originalEvent.dataTransfer.files[0];
  showFile21(); //calling function
});

function showFile21(){
  let fileType = file21.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea21.empty();
      dropArea21.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file21);
  }else{
    alert("This is not an Image File!");
    dropArea21.classList.remove("active");
    dragText21.textContent = "Drag & Drop to Upload File";
  }
}




//Image 22

const dropArea22 = $("#dragImage22"),
dragText22 = $("#header22"),
button22 = $("#button22"),
input22 = $("#input22")
let file22; //this is a global variable and we'll use it inside multiple functions

button22.on("click", function (){
  input22.click(); //if user click on the button then the input also clicked
});

input22.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file22 = this.files[0];
  dropArea22.addClass("active");
  showFile22(); //calling function
});


//If user Drag File Over DropArea
dropArea22.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea22.addClass("active");
  dragText22.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea22.on("dragleave", ()=>{
  dropArea22.removeClass("active");
  dragText22.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea22.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file22 = event.originalEvent.dataTransfer.files[0];
  showFile22(); //calling function
});

function showFile22(){
  let fileType = file22.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea22.empty();
      dropArea22.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file22);
  }else{
    alert("This is not an Image File!");
    dropArea22.classList.remove("active");
    dragText22.textContent = "Drag & Drop to Upload File";
  }
}



//Image 23

const dropArea23 = $("#dragImage23"),
dragText23 = $("#header23"),
button23 = $("#button23"),
input23 = $("#input23")
let file23; //this is a global variable and we'll use it inside multiple functions

button23.on("click", function (){
  input23.click(); //if user click on the button then the input also clicked
});

input23.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file23 = this.files[0];
  dropArea23.addClass("active");
  showFile23(); //calling function
});


//If user Drag File Over DropArea
dropArea23.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea23.addClass("active");
  dragText23.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea23.on("dragleave", ()=>{
  dropArea23.removeClass("active");
  dragText23.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea23.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file23 = event.originalEvent.dataTransfer.files[0];
  showFile23(); //calling function
});

function showFile23(){
  let fileType = file23.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea23.empty();
      dropArea23.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file23);
  }else{
    alert("This is not an Image File!");
    dropArea23.classList.remove("active");
    dragText23.textContent = "Drag & Drop to Upload File";
  }
}



//Image 24

const dropArea24 = $("#dragImage24"),
dragText24 = $("#header24"),
button24 = $("#button24"),
input24 = $("#input24")
let file24; //this is a global variable and we'll use it inside multiple functions

button24.on("click", function (){
  input24.click(); //if user click on the button then the input also clicked
});

input24.on("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file24 = this.files[0];
  dropArea24.addClass("active");
  showFile24(); //calling function
});


//If user Drag File Over DropArea
dropArea24.on("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea24.addClass("active");
  dragText24.value = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea24.on("dragleave", ()=>{
  dropArea24.removeClass("active");
  dragText24.value = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea24.on("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file24 = event.originalEvent.dataTransfer.files[0];
  showFile24(); //calling function
});

function showFile24(){
  let fileType = file24.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea24.empty();
      dropArea24.html(imgTag); //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file24);
  }else{
    alert("This is not an Image File!");
    dropArea24.classList.remove("active");
    dragText24.textContent = "Drag & Drop to Upload File";
  }
}


