let randomTask = [
  {
    english: "Close your eyes and stand on one leg for 30 secs",
    tamil: "உங்க கண்கள திறக்காம 30 நொடிகளுக்கு ஒற்றை கால்ல நிக்கணும்.",
    timer: 30,
    taskname:"Your Task"
  },
  {
    english: "Kill and laugh for 30 seconds.",
    tamil:
      "அதாவது உங்கள நீங்களே குத்துகிட்டு சிரிக்குற மாதிரி 30 நொடிகளுக்கு நடிக்கணும்!",
    timer: 30,
    taskname:"Your Task"
  },
  {
    english: "Sword fight with an imaginary person ",
    tamil: "கற்பனையான கத்தியோட, கற்பனையான எதிராளியோட சண்ட போடுங்க!",
    timer: "",
    taskname:"Your Task"
  },
  {
    english: "Run backwards on the spot",
    tamil: "நின்ன எடத்துல இருந்தே ஓடணும்.. ஆனா முன்னாடி இல்ல பின்னாடி!",
    timer: "",
    taskname:"Your Task"
  },
  {
    english: "Hop for a minute",
    tamil: "நின்ன இடத்துலயே ஒரு நிமிஷத்துக்கு நொண்டனும்!",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Faint like serial heroine",
    tamil: "நாடங்கள்ள வர்ற நடிகைகள் மாதிரி மயக்கம் அடையனும்",
    timer: "",
    taskname:"Your Task"
  },
  {
    english: "Wear imaginary clothes & get ready for work",
    tamil: "கற்பனையா உடைகள மாற்றி கொண்டு உங்க அலுவலகத்துக்கு கிளம்ப தயாராகணும்",
    timer: "",
    taskname:"Your Task"
  },
  {
    english: "Hoop clockwise and anti-clockwise",
    tamil:
      "அந்த வளையத்த உங்க உடல்ல வெச்சு, கைகள பயன்படுத்தாம, கீழ விழாம முன்னும் பின்னும் சுத்தணும்",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Wrap yourself fully with tissue paper in a minute",
    tamil: "ஒரு நிமிஷத்துக்குள்ள Tissue paper-ஆல உங்க உடல முழுமையா சுத்தணும்",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Dance energetically for the song",
    tamil: "உற்சாகத்தோட ஒரு பாடலுக்கு நடனமாடுங்க!",
    timer: "",
    taskname:"Your Task"
  },
  {
    english: "Keep a biscuit on your forehead, eat it without using your hands",
    tamil: "Biscuit-ஆஹ் உங்க நெற்றியில வெச்சு கைகளோட உதவி இல்லாம சாப்பிடணும்!",
    timer: "",
    taskname:"Your Task"
  },
  {
    english:
      "With a minute dismantle the order of the cups and rearrange it one by one.",
    tamil:
      "ஒரு நிமிஷத்துக்குள்ள மேல இருக்க மஞ்சள் கப்ப மேல இருந்து கீழ கொண்டு வந்து மீண்டும் மேல கொண்டு போகணும்.",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: " Swirl 10 balls with a cup and put them in the bowl in a min  ",
    tamil:
      "ஒரு நிமிஷத்துக்குள்ள 10 பந்துகள ஒரு கப்ப வெச்சு சுழட்டிகிட்டே கொண்டு போய் பக்கத்துல இருக்க பாத்திரத்துல போடணும்!",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Blow 10 balloons in a minute",
    tamil: "10 பலூன்கள ஒரு நிமிஷத்துக்குள்ள ஊதணும்.",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Hold a Karagam on the head for 2 minutes. ",
    tamil: "கரகத்த தலையில வெச்சு கீழ விழாம 2 நிமிடம் நிக்கணும்.",
    timer: 120,
    taskname:"Your Task"
  },
  {
    english:
      "Spin the ball in your index finger without slipping for a minute.",
    tamil:
      "இந்த பந்த உங்க ஆள்காட்டி விரலை வெச்சு 1 நிமிஷம் கீழ விழாம சுத்தணும்.",
    timer: 60,
    taskname:"Your Task"
  },
  {
    english: "Arrange playing cards in a triangle shape.",
    tamil: "இந்த சீட்டு கட்டுகள முக்கோண வடிவுல அடுக்கணும்.",
    timer: 60,
    taskname:"Your Task"
  },
];

let c;
let myTimer;
let startTime;
let timer = document.getElementById("timer");



function myClock() {
  if (!(c === "")) {
    --c;
    // var seconds = c % 60;
    // var secondsInMinutes = (c - seconds) / 60;
    // var minutes = secondsInMinutes % 60;
    if (c === 0) {
      clearInterval(myTimer); 
    }
    // timer.innerText = "0" + minutes + ":" + seconds;
    c===0?timer.innerText="Thank You":timer.innerText=c;
  }
}

function startInterval() {
  myTimer = setInterval(myClock, 1000);
}


function startTimeout() {
  
  if (!(c === "")) {
    let i = 5;
    startTime = setInterval(() => {
      --i;
      timer.innerText = "Start in" + " " + i;
      if (i === 0) {
        clearInterval(startTime);
      }
    }, 1000);
  }
  myTimer = setTimeout(startInterval, 5000);
}
let toggle = document.getElementById("content").classList;
toggle.remove("active");
let video = document.getElementById("video");
video.classList.add("active");

window.addEventListener("keypress", function (event) {
  clearInterval(startTime);
  clearTimeout(myTimer);
  clearInterval(myTimer);
  timer.innerText=""
  if(event.key === "Enter") {
  
    // document.getElementsByTagName('video')[0].webkitEnterFullscreen();
   
    if(toggle.contains("active")){ 
     
  
    video.pause()
      // randomName
      event.preventDefault();
      let random = randomTask[Math.floor(Math.random() * randomTask.length)];
      c = random.timer;
      startTimeout();
      let task= document.getElementById("heading");
      task.innerText=random.taskname;
      let englishCon = document.getElementById("englishCon");
      englishCon.innerText = random.english;
      let tamilCon = document.getElementById("tamilCon");
      tamilCon.innerText = random.tamil;
      //  full screen size
 
   
      toggle.remove("active");
      video.classList.add("active");
          
    }
  else{

    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
    let elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    toggle.add("active");
    video.classList.remove("active");
    video.load();
 
  }
  }
  
})
