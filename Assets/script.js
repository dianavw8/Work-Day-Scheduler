//funtion will be called when document is ready (after all elements are loaded already)
$(function () {
//get currentDate element
var dateElement = document.getElementById('currentDate');
//get date and put it in when the page is loaded
var dayAndDate = dayjs().format('dddd, MMMM D, YYYY'); 
//get current hour
var currentTime = dayjs().format('H'); 
currentTime = parseInt(currentTime); //change current time into number

//hour elements
var hour9Element = document.getElementById('hour-9');
var hour10Element = document.getElementById('hour-10');
var hour11Element = document.getElementById('hour-11');
var hour12Element = document.getElementById('hour-12');
var hour1Element = document.getElementById('hour-1');
var hour2Element = document.getElementById('hour-2');
var hour3Element = document.getElementById('hour-3');
var hour4Element = document.getElementById('hour-4');
var hour5Element = document.getElementById('hour-5');

//local storage data
var hr9Text = localStorage.getItem('hour-9');
var hr10Text = localStorage.getItem('hour-10');
var hr11Text = localStorage.getItem('hour-11');
var hr12Text = localStorage.getItem('hour-12');
var hr1Text = localStorage.getItem('hour-1');
var hr2Text = localStorage.getItem('hour-2');
var hr3Text = localStorage.getItem('hour-3');
var hr4Text = localStorage.getItem('hour-4');
var hr5Text = localStorage.getItem('hour-5');

//text elements
var hr9TextElement = hour9Element.children[1];
var hr10TextElement = hour10Element.children[1];
var hr11TextElement = hour11Element.children[1];
var hr12TextElement = hour12Element.children[1];
var hr1TextElement = hour1Element.children[1];
var hr2TextElement = hour2Element.children[1];
var hr3TextElement = hour3Element.children[1];
var hr4TextElement = hour4Element.children[1];
var hr5TextElement = hour5Element.children[1];

//get modal element
var clearScheduleModal = new bootstrap.Modal(document.getElementById('clearScheduleModal'))

//calls the function to color the time blocks
colorTheTimeBlocks();

//query select the save buttons and add an on click event
  document.querySelectorAll('.saveBtn').forEach(item => {
    item.addEventListener('click', event => {
      console.log(event);
      
      let timeId = "";
      let textDesc = "";

      if (event.target.localName === "i") {
        timeId = event.target.parentElement.parentElement.id;
        textDesc = event.target.parentElement.parentElement.children[1].value;
      } 
      else { 
        timeId = event.target.parentElement.id;
        textDesc = event.target.parentElement.childNodes[3].value;
      }

      localStorage.setItem(timeId, textDesc);
    })
  })

//query select the save buttons and add an on click event
document.querySelectorAll('#clearButton').forEach(item => {
  item.addEventListener('click', event => {
    clearScheduleModal.show();
  })
})

//query select the modal confirm button and add an on click event
document.querySelectorAll('#scheduleClearConfirm').forEach(item => {
  item.addEventListener('click', event => {
     console.log("clear the storage please");
    localStorage.clear();
    location.reload();
    clearScheduleModal.hide();
  })
})

//row with weekday, month, day and year
  dateElement.textContent += dayAndDate;

//time-block text info from local storage
  hr9TextElement.textContent += nullToBlankanator(hr9Text);
  hr10TextElement.textContent += nullToBlankanator(hr10Text);
  hr11TextElement.textContent += nullToBlankanator(hr11Text);
  hr12TextElement.textContent += nullToBlankanator(hr12Text);
  hr1TextElement.textContent += nullToBlankanator(hr1Text);
  hr2TextElement.textContent += nullToBlankanator(hr2Text);
  hr3TextElement.textContent += nullToBlankanator(hr3Text);
  hr4TextElement.textContent += nullToBlankanator(hr4Text);
  hr5TextElement.textContent += nullToBlankanator(hr5Text);

  // Function that returns blank if null otherwise returns normal text
  function  colorTheTimeBlocks() {
    
    if (currentTime < 9){
      hour9Element.classList.add("future");
      hour10Element.classList.add("future");
      hour11Element.classList.add("future");
      hour12Element.classList.add("future");
      hour1Element.classList.add("future");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 9){
      hour9Element.classList.add("present");
      hour10Element.classList.add("future");
      hour11Element.classList.add("future");
      hour12Element.classList.add("future");
      hour1Element.classList.add("future");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 10){
      hour9Element.classList.add("past");
      hour10Element.classList.add("present");
      hour11Element.classList.add("future");
      hour12Element.classList.add("future");
      hour1Element.classList.add("future");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 11){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("present");
      hour12Element.classList.add("future");
      hour1Element.classList.add("future");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 12){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("present");
      hour1Element.classList.add("future");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 13){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("present");
      hour2Element.classList.add("future");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 14){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("past");
      hour2Element.classList.add("present");
      hour3Element.classList.add("future");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 15){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("past");
      hour2Element.classList.add("past");
      hour3Element.classList.add("present");
      hour4Element.classList.add("future");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 16){
      console.log("yay we are hitting here")
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("past");
      hour2Element.classList.add("past");
      hour3Element.classList.add("past");
      hour4Element.classList.add("present");
      hour5Element.classList.add("future");
    }
    else if(currentTime === 17){
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("past");
      hour2Element.classList.add("past");
      hour3Element.classList.add("past");
      hour4Element.classList.add("past");
      hour5Element.classList.add("present");
    }
    else{
      hour9Element.classList.add("past");
      hour10Element.classList.add("past");
      hour11Element.classList.add("past");
      hour12Element.classList.add("past");
      hour1Element.classList.add("past");
      hour2Element.classList.add("past");
      hour3Element.classList.add("past");
      hour4Element.classList.add("past");
      hour5Element.classList.add("past");
    }
  }
  // Function that returns blank if null otherwise returns normal text
  function  nullToBlankanator(textContent) {
    if(textContent == null){
      textContent = "";
    }
    return textContent;
  }

});

