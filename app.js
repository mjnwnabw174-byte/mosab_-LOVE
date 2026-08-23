const $ = id => document.getElementById(id);


/* =====================================================
   النجوم
===================================================== */

const stars = $("stars");

for(let i = 0; i < 110; i++){

  const star = document.createElement("span");

  star.className = "star";

  star.style.left =
    Math.random() * 100 + "%";

  star.style.top =
    Math.random() * 100 + "%";

  star.style.animationDelay =
    Math.random() * 4 + "s";

  star.style.animationDuration =
    (2 + Math.random() * 5) + "s";

  stars.appendChild(star);
}


/* =====================================================
   قلوب عائمة
===================================================== */

const floatingHearts =
  $("floatingHearts");

function createFloatingHeart(){

  const heart =
    document.createElement("div");

  heart.className =
    "floating-heart";

  const symbols =
    ["❤️","💗","💖","✨","🌹"];

  heart.textContent =
    symbols[
      Math.floor(
        Math.random() * symbols.length
      )
    ];

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.setProperty(
    "--size",
    Math.random()
  );

  heart.style.setProperty(
    "--duration",
    (5 + Math.random() * 6) + "s"
  );

  floatingHearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 12000);
}

setInterval(
  createFloatingHeart,
  1200
);


/* =====================================================
   التنقل
===================================================== */

const screens =
  document.querySelectorAll(".screen");

function showScreen(id){

  screens.forEach(screen => {

    screen.classList.toggle(
      "active",
      screen.id === id
    );

  });

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

document
  .querySelectorAll(".navigation button")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        showScreen(
          button.dataset.screen
        );

      }
    );

  });


/* =====================================================
   البداية
===================================================== */

$("startBtn")
  .addEventListener("click", () => {

    showScreen("letters");

    playMusic();

  });


$("philosophyBtn")
  .addEventListener("click", () => {

    showScreen("philosophy");

  });


/* =====================================================
   الرسائل
===================================================== */

const letters = [

  "Asoom ❤️ هذه الصفحة ليست مجرد أكواد، بل محاولة صغيرة لصنع مكان يحتفظ ببعض الذكريات الجميلة.",

  "هناك أشخاص يجعلون الأيام العادية تبدو مختلفة، ليس لأن العالم تغير، بل لأن وجودهم أعطى للحظة معنى.",

  "أحيانًا أجمل ما في الذكرى أنها انتهت، لكنها تركت خلفها ابتسامة لا تعرف لماذا ظهرت.",

  "لو كانت الذكريات نجومًا، فبعض اللحظات ستكون أكثر لمعانًا من غيرها، ليس لأنها كانت أكبر، بل لأنها كانت أصدق.",

  "الهدايا الجميلة ليست دائمًا الأشياء التي يمكن لمسها؛ أحيانًا تكون كلمة، اهتمامًا، موقفًا، أو لحظة لا تُنسى.",

  "الوقت يمضي بسرعة، والصور تحفظ شكل اللحظة، لكن الشعور هو الذي يحفظ معناها.",

  "ربما لا نعرف قيمة بعض اللحظات عندما تحدث، ثم يأتي الزمن ليخبرنا أنها كانت أجمل مما ظننا.",

  "هناك فرق بين أن تعيش يومًا، وأن تصنع من يوم عادي ذكرى تتمنى أن تتذكرها بعد سنوات.",

  "الحكايات الجميلة لا تُقاس بعدد صفحاتها، بل بعدد المرات التي تجعلنا نبتسم عندما نعود إليها.",

  "كل صورة هنا تقول شيئًا مختلفًا، وكل ذكرى تحمل جزءًا من وقت لن يعود بنفس الشكل مرة أخرى.",

  "ليس المطلوب أن تكون كل الأيام مثالية؛ يكفي أن يكون بينها لحظات تستحق أن تبقى.",

  "بعض الذكريات لا تحتاج شرحًا طويلًا، يكفي أن يراها أصحابها حتى يفهموا كل شيء.",

  "ولو كان للذكريات عنوان، فربما يكون: الأشياء الصغيرة التي جعلت الأيام أجمل.",

  "هذه الصفحة ستتغير يومًا ما، وستضاف إليها صور جديدة وذكريات جديدة، وهذا أجمل ما فيها.",

  "Mosab × Asoom ❤️ — ذكرى جميلة اليوم، وذكريات أجمل في الأيام القادمة."

];

let letterIndex = 0;

let typingTimer = null;

function typeLetter(text){

  const target =
    $("letterText");

  clearInterval(
    typingTimer
  );

  target.textContent = "";

  let i = 0;

  typingTimer =
    setInterval(() => {

      target.textContent +=
        text[i];

      i++;

      if(i >= text.length){

        clearInterval(
          typingTimer
        );

      }

    }, 25);
}

typeLetter(
  letters[0]
);

$("nextLetter")
  .addEventListener(
    "click",
    () => {

      letterIndex++;

      if(
        letterIndex >=
        letters.length
      ){
        letterIndex = 0;
      }

      typeLetter(
        letters[letterIndex]
      );

    }
  );


/* =====================================================
   الصور
   ملاحظة:
   الصور موجودة مباشرة في المستودع
===================================================== */

const memoryFiles = [

  "1760977951750.jpg",
  "1761384942469.jpg",
  "1778874690158.png",
  "1780516850974.png",
  "1780857266324.png",
  "1780857648704.png",
  "1785434514878.png",
  "1785434576177.png",
  "1785434649635.png",
  "1786650782113.png",
  "1786650948323.png",

  "5cb12082618c659b877545deb56435d5.png",
  "61f9579cdd8ed57bdb29bbb9ef07d8b6.png",
  "8b82651face12c755a69d527202cb29c_0.jpeg",
  "92bad140a8ba7502a33fb20112fc1ed6.png",

  "IMG-20251208-WA0031.jpg",
  "IMG-20260523-WA0003.jpg",
  "IMG-20260812-WA0001.jpg",

  "IMG_٢٠٢٦٠٣٢٠_١٤٣٣٠٦.jpg",
  "IMG_٢٠٢٦٠٥٠١_٠٧٥٩٣٠.jpg",
  "IMG_٢٠٢٦٠٥٢٧_١٦٠٤٢٥.jpg",
  "IMG_٢٠٢٦٠٨٠١_٠٨١٥٢٧.jpg",
  "IMG_٢٠٢٦٠٨٠٣_١٤٢٦١٠.jpg",

  "Screenshot_٢٠٢٥١٠٢١-١٤٣٩٢٠.png",
  "Screenshot_٢٠٢٥١٠٢١-١٩٠٤٤٩.png",
  "Screenshot_٢٠٢٥١٠٢٢-١١٣٩١٠.png",
  "Screenshot_٢٠٢٥١٠٢٢-١١٣٩١٧.png",
  "Screenshot_٢٠٢٥١٠٢٤-١٥١٧٥٠.png",

  "Screenshot_٢٠٢٦٠٢١٠-٠٠٤٠٤٥.png",
  "Screenshot_٢٠٢٦٠٧١٣-١٥٢٣٢٤.png",
  "Screenshot_٢٠٢٦٠٨٠٤-١٣٣٥٠٧.png",
  "Screenshot_٢٠٢٦٠٨٠٤-١٣٣٧٤٠.png",

  "Snapchat-1404698188.jpg",
  "Snapchat-1741585465.jpg",
  "images (3).jpeg"

];

const memoryGrid =
  $("memoryGrid");

memoryFiles.forEach(
  (file,index) => {

    const card =
      document.createElement("div");

    card.className =
      "memory-card";

    const img =
      document.createElement("img");

    /*
      الصور في جذر المستودع
    */

    img.src =
      encodeURIComponent(file);

    img.alt =
      "ذكرى " + (index + 1);

    img.loading =
      "lazy";

    img.onerror = () => {

      card.remove();

    };

    const number =
      document.createElement("div");

    number.className =
      "memory-number";

    number.textContent =
      "#" + (index + 1);

    card.appendChild(img);

    card.appendChild(number);

    memoryGrid.appendChild(card);

  }
);


/* =====================================================
   الموسيقى
===================================================== */

const music =
  $("music");

const musicSource =
  $("musicSource");

let currentSong = 1;


/*
  مهم:
  سمِّ الأغنيتين داخل المستودع:

  song1.mp3
  song2.mp3

  حتى يعمل الكود بدون مشاكل.
*/

function playMusic(){

  music.play()
    .then(() => {

      $("playBtn")
        .textContent = "⏸";

      $("soundBtn")
        .textContent = "🔊";

    })
    .catch(() => {

      $("playBtn")
        .textContent = "▶";

    });

}

function pauseMusic(){

  music.pause();

  $("playBtn")
    .textContent = "▶";

  $("soundBtn")
    .textContent = "🔇";

}

$("playBtn")
  .addEventListener(
    "click",
    () => {

      if(
        music.paused
      ){

        playMusic();

      }else{

        pauseMusic();

      }

    }
  );


$("soundBtn")
  .addEventListener(
    "click",
    () => {

      if(
        music.paused
      ){

        playMusic();

      }else{

        pauseMusic();

      }

    }
  );


$("switchSong")
  .addEventListener(
    "click",
    () => {

      currentSong =
        currentSong === 1
          ? 2
          : 1;

      music.pause();

      musicSource.src =
        currentSong === 1
          ? "song1.mp3"
          : "song2.mp3";

      $("songName")
        .textContent =
        currentSong === 1
          ? "الأغنية الأولى"
          : "الأغنية الثانية";

      music.load();

      playMusic();

    }
  );


/* =====================================================
   الدردشة
===================================================== */

function escapeHTML(text){

  const div =
    document.createElement("div");

  div.textContent =
    text;

  return div.innerHTML;

}

function sendMessage(){

  const input =
    $("chatInput");

  const text =
    input.value.trim();

  if(!text) return;

  const bubble =
    document.createElement("div");

  bubble.className =
    "bubble mosab";

  bubble.innerHTML =
    "<strong>Mosab 👨‍💻</strong><br>" +
    escapeHTML(text);

  $("chatBox")
    .appendChild(bubble);

  input.value = "";

  $("chatBox").scrollTop =
    $("chatBox").scrollHeight;

  setTimeout(() => {

    const reply =
      document.createElement("div");

    reply.className =
      "bubble asoom";

    reply.innerHTML =
      "<strong>Asoom 🦷</strong><br>" +
      "وصلتني الرسالة ❤️";

    $("chatBox")
      .appendChild(reply);

    $("chatBox").scrollTop =
      $("chatBox").scrollHeight;

  },700);

}

$("sendBtn")
  .addEventListener(
    "click",
    sendMessage
  );

$("chatInput")
  .addEventListener(
    "keydown",
    event => {

      if(
        event.key === "Enter"
      ){

        sendMessage();

      }

    }
  );


/* =====================================================
   الألعاب
===================================================== */

const questions = [

  {
    question:
      "أي شيء يجعل الذكرى أجمل؟ ❤️",

    options:[
      "الصورة 📸",
      "الموقف ✨",
      "الشعور 🤍"
    ]
  },

  {
    question:
      "ماذا نختار لهذه اللحظة؟ 🌙",

    options:[
      "🎬 فيلم",
      "🎵 موسيقى",
      "💬 دردشة"
    ]
  },

  {
    question:
      "أي ذكرى تستحق التكرار؟ ✨",

    options:[
      "أكثر لحظة ضحك",
      "أجمل صورة",
      "لحظة جديدة"
    ]
  },

  {
    question:
      "لو اخترنا مكانًا للذكرى؟ 🌌",

    options:[
      "البحر 🌊",
      "تحت النجوم 🌙",
      "مكان هادئ 🌹"
    ]
  }

];

const gameArea =
  $("gameArea");


function openQuestionGame(){

  let index = 0;

  function render(){

    const item =
      questions[index];

    gameArea.innerHTML = `

      <div class="letter-box">

        <h3>
          ${item.question}
        </h3>

        <br>

        ${item.options
          .map(
            (option,i) => `

              <button
                class="main-btn game-answer"
                data-i="${i}"
                style="margin:6px"
              >
                ${option}
              </button>

            `
          )
          .join("")}

      </div>

    `;

    document
      .querySelectorAll(
        ".game-answer"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            index++;

            if(
              index >=
              questions.length
            ){

              gameArea.innerHTML = `

                <div class="letter-box">

                  <h2>
                    ✨ انتهت اللعبة
                  </h2>

                  <p style="
                    margin-top:15px;
                    line-height:2;
                  ">
                    لا توجد إجابة خاطئة...
                    <br>
                    أجمل شيء هو أنكم شاركتم اللحظة.
                  </p>

                </div>

              `;

            }else{

              render();

            }

          }
        );

      });

  }

  render();

}


function openChoiceGame(){

  const choices = [

    "📸 نشاهد الصور",
    "🎵 نسمع الموسيقى",
    "💌 نقرأ رسالة",
    "🎮 نلعب",
    "🌙 نقرأ الفلسفة"

  ];

  gameArea.innerHTML = `

    <div class="letter-box">

      <h3>
        ماذا نختار الآن؟ ❤️
      </h3>

      <br>

      ${choices
        .map(
          choice => `

            <button
              class="main-btn choice-btn"
              style="margin:6px"
            >
              ${choice}
            </button>

          `
        )
        .join("")}

    </div>

  `;

  document
    .querySelectorAll(
      ".choice-btn"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          gameArea.innerHTML = `

            <div class="letter-box">

              <h2>
                اختيار جميل ✨
              </h2>

              <p style="
                margin-top:15px;
                line-height:2;
              ">
                ${button.textContent}
              </p>

            </div>

          `;

        }
      );

    });

}


function openMemoryGame(){

  gameArea.innerHTML = `

    <div class="letter-box">

      <h2>
        🧠 اختبار الذكريات
      </h2>

      <p style="
        margin-top:15px;
        line-height:2;
      ">
        افتح الصور،
        اختر صورة،
        وحاول تذكر قصتها.
      </p>

      <br>

      <button
        class="main-btn"
        id="openMemories"
      >
        افتح الذكريات 📸
      </button>

    </div>

  `;

  $("openMemories")
    .addEventListener(
      "click",
      () => {

        showScreen(
          "memories"
        );

      }
    );

}


document
  .querySelectorAll(
    ".game-card"
  )
  .forEach(card => {

    card.addEventListener(
      "click",
      () => {

        const game =
          card.dataset.game;

        if(
          game === "questions"
        ){

          openQuestionGame();

        }

        if(
          game === "choices"
        ){

          openChoiceGame();

        }

        if(
          game === "memory"
        ){

          openMemoryGame();

        }

      }
    );

  });


/* =====================================================
   الهدية
===================================================== */

$("giftBtn")
  .addEventListener(
    "click",
    () => {

      showScreen("gift");

    }
  );


const giftMessages = [

  "🎁 الهدية الأولى: ذكرى جميلة لا تحتاج إلى تغليف.",

  "🌹 الهدية الثانية: لحظة بسيطة أصبحت جزءًا من الحكاية.",

  "✨ الهدية الثالثة: ابتسامة نتذكرها عندما نعود إلى هذه الصفحة.",

  "🌙 والهدية الأخيرة: أن تبقى الذكريات الجميلة أجمل من أن تُنسى."

];

let giftIndex = 0;

$("openGift")
  .addEventListener(
    "click",
    () => {

      $("giftMessage")
        .textContent =
        giftMessages[giftIndex];

      giftIndex++;

      if(
        giftIndex >=
        giftMessages.length
      ){

        giftIndex = 0;

      }

    }
  );


/* =====================================================
   البداية
===================================================== */

showScreen("home");
