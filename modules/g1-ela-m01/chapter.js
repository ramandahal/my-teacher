/* G1-ELA-M01 Sound Safari — chapter content for the My Teacher player.
   Data only. Validate with: node tools/validate-chapter.js modules/g1-ela-m01/chapter.js */
window.MT_CHAPTER = {
 "id": "g1-ela-m01",
 "code": "ELA M01",
 "grade": 1,
 "subject": "English",
 "lang": "en-US",
 "title": "Sound Safari",
 "emoji": "🦁",
 "tagline": "Hear the sounds in words, then read and spell short words!",
 "standards": [
  "RF.1.2c",
  "RF.1.3b"
 ],
 "standardsNote": "Common Core (US). Phonological awareness and decoding of regularly spelled one-syllable words.",
 "version": "1.0.0",
 "status": "beta",
 "skills": [
  {
   "id": "first",
   "title": "First sounds",
   "emoji": "👂",
   "standard": "RF.1.2c",
   "learn": [
    {
     "emoji": "👂☀️",
     "text": "Every word is made of sounds. Listen to the very FIRST sound in “sun”: sss-un.",
     "say": "Every word is made of sounds. Listen to the very first sound in sun. sss, un."
    },
    {
     "emoji": "☀️🧦",
     "text": "“Sun” and “sock” start with the same sound: sss! Sss-un. Sss-ock.",
     "say": "Sun and sock start with the same sound. sss, un. sss, ock."
    },
    {
     "emoji": "🐍",
     "text": "Trick: say the word slowly and notice what your mouth does first.",
     "say": "Here is a trick. Say the word slowly, and notice what your mouth does first."
    }
   ],
   "items": [
    {
     "id": "first-1",
     "prompt": "Which one starts with the same sound as “sun”?",
     "say": "Which one starts with the same sound as sun?",
     "stimulus": {
      "emoji": "☀️",
      "label": "sun",
      "alt": "sun"
     },
     "options": [
      {
       "v": "sock",
       "e": "🧦",
       "l": "sock"
      },
      {
       "v": "bus",
       "e": "🚌",
       "l": "bus"
      },
      {
       "v": "map",
       "e": "🗺️",
       "l": "map"
      }
     ],
     "answer": "sock",
     "speakOptions": true,
     "hints": [
      "Say “sun” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Sun and sock both start with the same sound.",
     "feedback": {
      "bus": "Bus ENDS with that sound. We need a word that STARTS like sun.",
      "map": "Map starts with a different sound. Say sun and map slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-2",
     "prompt": "Which one starts with the same sound as “bed”?",
     "say": "Which one starts with the same sound as bed?",
     "stimulus": {
      "emoji": "🛏️",
      "label": "bed",
      "alt": "bed"
     },
     "options": [
      {
       "v": "bag",
       "e": "👜",
       "l": "bag"
      },
      {
       "v": "web",
       "e": "🕸️",
       "l": "web"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      }
     ],
     "answer": "bag",
     "speakOptions": true,
     "hints": [
      "Say “bed” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Bed and bag both start with the same sound.",
     "feedback": {
      "web": "Web ENDS with that sound. We need a word that STARTS like bed.",
      "pen": "Pen starts with a different sound. Say bed and pen slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-3",
     "prompt": "Which one starts with the same sound as “dog”?",
     "say": "Which one starts with the same sound as dog?",
     "stimulus": {
      "emoji": "🐶",
      "label": "dog",
      "alt": "dog"
     },
     "options": [
      {
       "v": "duck",
       "e": "🦆",
       "l": "duck"
      },
      {
       "v": "log",
       "e": "🪵",
       "l": "log"
      },
      {
       "v": "fox",
       "e": "🦊",
       "l": "fox"
      }
     ],
     "answer": "duck",
     "speakOptions": true,
     "hints": [
      "Say “dog” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Dog and duck both start with the same sound.",
     "feedback": {
      "log": "Log starts with a different sound. Say dog and log slowly and listen to the very start.",
      "fox": "Fox starts with a different sound. Say dog and fox slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-4",
     "prompt": "Which one starts with the same sound as “pig”?",
     "say": "Which one starts with the same sound as pig?",
     "stimulus": {
      "emoji": "🐷",
      "label": "pig",
      "alt": "pig"
     },
     "options": [
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "fish",
       "e": "🐟",
       "l": "fish"
      }
     ],
     "answer": "pen",
     "speakOptions": true,
     "hints": [
      "Say “pig” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Pig and pen both start with the same sound.",
     "feedback": {
      "bug": "Bug starts with a different sound. Say pig and bug slowly and listen to the very start.",
      "fish": "Fish starts with a different sound. Say pig and fish slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-5",
     "prompt": "Which one starts with the same sound as “map”?",
     "say": "Which one starts with the same sound as map?",
     "stimulus": {
      "emoji": "🗺️",
      "label": "map",
      "alt": "map"
     },
     "options": [
      {
       "v": "moon",
       "e": "🌙",
       "l": "moon"
      },
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "moon",
     "speakOptions": true,
     "hints": [
      "Say “map” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Map and moon both start with the same sound.",
     "feedback": {
      "cap": "Cap starts with a different sound. Say map and cap slowly and listen to the very start.",
      "dog": "Dog starts with a different sound. Say map and dog slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-6",
     "prompt": "Which one starts with the same sound as “fox”?",
     "say": "Which one starts with the same sound as fox?",
     "stimulus": {
      "emoji": "🦊",
      "label": "fox",
      "alt": "fox"
     },
     "options": [
      {
       "v": "fish",
       "e": "🐟",
       "l": "fish"
      },
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "fish",
     "speakOptions": true,
     "hints": [
      "Say “fox” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Fox and fish both start with the same sound.",
     "feedback": {
      "box": "Box starts with a different sound. Say fox and box slowly and listen to the very start.",
      "sun": "Sun starts with a different sound. Say fox and sun slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-7",
     "prompt": "Which one starts with the same sound as “leg”?",
     "say": "Which one starts with the same sound as leg?",
     "stimulus": {
      "emoji": "🦵",
      "label": "leg",
      "alt": "leg"
     },
     "options": [
      {
       "v": "log",
       "e": "🪵",
       "l": "log"
      },
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "ten",
       "e": "🔟",
       "l": "ten"
      }
     ],
     "answer": "log",
     "speakOptions": true,
     "hints": [
      "Say “leg” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Leg and log both start with the same sound.",
     "feedback": {
      "bug": "Bug starts with a different sound. Say leg and bug slowly and listen to the very start.",
      "ten": "Ten starts with a different sound. Say leg and ten slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-8",
     "prompt": "Which one starts with the same sound as “hat”?",
     "say": "Which one starts with the same sound as hat?",
     "stimulus": {
      "emoji": "🎩",
      "label": "hat",
      "alt": "hat"
     },
     "options": [
      {
       "v": "hen",
       "e": "🐔",
       "l": "hen"
      },
      {
       "v": "cat",
       "e": "🐱",
       "l": "cat"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "hen",
     "speakOptions": true,
     "hints": [
      "Say “hat” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Hat and hen both start with the same sound.",
     "feedback": {
      "cat": "Cat starts with a different sound. Say hat and cat slowly and listen to the very start.",
      "sun": "Sun starts with a different sound. Say hat and sun slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-9",
     "prompt": "Which one starts with the same sound as “ten”?",
     "say": "Which one starts with the same sound as ten?",
     "stimulus": {
      "emoji": "🔟",
      "label": "ten",
      "alt": "ten"
     },
     "options": [
      {
       "v": "tent",
       "e": "⛺",
       "l": "tent"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "bus",
       "e": "🚌",
       "l": "bus"
      }
     ],
     "answer": "tent",
     "speakOptions": true,
     "hints": [
      "Say “ten” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Ten and tent both start with the same sound.",
     "feedback": {
      "pen": "Pen starts with a different sound. Say ten and pen slowly and listen to the very start.",
      "bus": "Bus starts with a different sound. Say ten and bus slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-10",
     "prompt": "Which one starts with the same sound as “can”?",
     "say": "Which one starts with the same sound as can?",
     "stimulus": {
      "emoji": "🥫",
      "label": "can",
      "alt": "can"
     },
     "options": [
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      },
      {
       "v": "van",
       "e": "🚐",
       "l": "van"
      },
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      }
     ],
     "answer": "cap",
     "speakOptions": true,
     "hints": [
      "Say “can” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Can and cap both start with the same sound.",
     "feedback": {
      "van": "Van starts with a different sound. Say can and van slowly and listen to the very start.",
      "bed": "Bed starts with a different sound. Say can and bed slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-11",
     "prompt": "Which one starts with the same sound as “bus”?",
     "say": "Which one starts with the same sound as bus?",
     "stimulus": {
      "emoji": "🚌",
      "label": "bus",
      "alt": "bus"
     },
     "options": [
      {
       "v": "bell",
       "e": "🔔",
       "l": "bell"
      },
      {
       "v": "six",
       "e": "6️⃣",
       "l": "six"
      },
      {
       "v": "hen",
       "e": "🐔",
       "l": "hen"
      }
     ],
     "answer": "bell",
     "speakOptions": true,
     "hints": [
      "Say “bus” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Bus and bell both start with the same sound.",
     "feedback": {
      "six": "Six starts with a different sound. Say bus and six slowly and listen to the very start.",
      "hen": "Hen starts with a different sound. Say bus and hen slowly and listen to the very start."
     },
     "skill": "first"
    },
    {
     "id": "first-12",
     "prompt": "Which one starts with the same sound as “lock”?",
     "say": "Which one starts with the same sound as lock?",
     "stimulus": {
      "emoji": "🔒",
      "label": "lock",
      "alt": "lock"
     },
     "options": [
      {
       "v": "lips",
       "e": "👄",
       "l": "lips"
      },
      {
       "v": "sock",
       "e": "🧦",
       "l": "sock"
      },
      {
       "v": "map",
       "e": "🗺️",
       "l": "map"
      }
     ],
     "answer": "lips",
     "speakOptions": true,
     "hints": [
      "Say “lock” slowly. Listen to the very first sound your mouth makes.",
      "Now say each word slowly. Which one starts with that same first sound?"
     ],
     "why": "Lock and lips both start with the same sound.",
     "feedback": {
      "sock": "Sock starts with a different sound. Say lock and sock slowly and listen to the very start.",
      "map": "Map starts with a different sound. Say lock and map slowly and listen to the very start."
     },
     "skill": "first"
    }
   ]
  },
  {
   "id": "last",
   "title": "Last sounds",
   "emoji": "🔚",
   "standard": "RF.1.2c",
   "learn": [
    {
     "emoji": "🐱",
     "text": "Now listen to the LAST sound. Say “cat” slowly: ca-t. The last sound is t.",
     "say": "Now listen to the last sound. Say cat slowly. ca, t. The last sound is t."
    },
    {
     "emoji": "🐱🥜",
     "text": "“Cat” and “nut” end the same way: ca-t, nu-t.",
     "say": "Cat and nut end the same way. ca, t. nu, t."
    },
    {
     "emoji": "🧊",
     "text": "Trick: say the word and “freeze” on the last sound.",
     "say": "Here is a trick. Say the word and freeze on the last sound."
    }
   ],
   "items": [
    {
     "id": "last-1",
     "prompt": "Which one ends with the same sound as “cat”?",
     "say": "Which one ends with the same sound as cat?",
     "stimulus": {
      "emoji": "🐱",
      "label": "cat",
      "alt": "cat"
     },
     "options": [
      {
       "v": "nut",
       "e": "🥜",
       "l": "nut"
      },
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      }
     ],
     "answer": "nut",
     "speakOptions": true,
     "hints": [
      "Say “cat” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Cat and nut end with the same sound.",
     "feedback": {
      "cap": "Cap STARTS like cat. We need a word that ENDS like cat.",
      "pen": "Pen ends with a different sound. Say cat and pen and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-2",
     "prompt": "Which one ends with the same sound as “bus”?",
     "say": "Which one ends with the same sound as bus?",
     "stimulus": {
      "emoji": "🚌",
      "label": "bus",
      "alt": "bus"
     },
     "options": [
      {
       "v": "lips",
       "e": "👄",
       "l": "lips"
      },
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "lips",
     "speakOptions": true,
     "hints": [
      "Say “bus” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Bus and lips end with the same sound.",
     "feedback": {
      "bed": "Bed STARTS like bus. We need a word that ENDS like bus.",
      "dog": "Dog ends with a different sound. Say bus and dog and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-3",
     "prompt": "Which one ends with the same sound as “pig”?",
     "say": "Which one ends with the same sound as pig?",
     "stimulus": {
      "emoji": "🐷",
      "label": "pig",
      "alt": "pig"
     },
     "options": [
      {
       "v": "log",
       "e": "🪵",
       "l": "log"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "log",
     "speakOptions": true,
     "hints": [
      "Say “pig” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Pig and log end with the same sound.",
     "feedback": {
      "pen": "Pen STARTS like pig. We need a word that ENDS like pig.",
      "sun": "Sun ends with a different sound. Say pig and sun and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-4",
     "prompt": "Which one ends with the same sound as “hen”?",
     "say": "Which one ends with the same sound as hen?",
     "stimulus": {
      "emoji": "🐔",
      "label": "hen",
      "alt": "hen"
     },
     "options": [
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      },
      {
       "v": "hat",
       "e": "🎩",
       "l": "hat"
      },
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      }
     ],
     "answer": "sun",
     "speakOptions": true,
     "hints": [
      "Say “hen” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Hen and sun end with the same sound.",
     "feedback": {
      "hat": "Hat STARTS like hen. We need a word that ENDS like hen.",
      "box": "Box ends with a different sound. Say hen and box and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-5",
     "prompt": "Which one ends with the same sound as “map”?",
     "say": "Which one ends with the same sound as map?",
     "stimulus": {
      "emoji": "🗺️",
      "label": "map",
      "alt": "map"
     },
     "options": [
      {
       "v": "ship",
       "e": "🚢",
       "l": "ship"
      },
      {
       "v": "moon",
       "e": "🌙",
       "l": "moon"
      },
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      }
     ],
     "answer": "ship",
     "speakOptions": true,
     "hints": [
      "Say “map” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Map and ship end with the same sound.",
     "feedback": {
      "moon": "Moon STARTS like map. We need a word that ENDS like map.",
      "bed": "Bed ends with a different sound. Say map and bed and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-6",
     "prompt": "Which one ends with the same sound as “fox”?",
     "say": "Which one ends with the same sound as fox?",
     "stimulus": {
      "emoji": "🦊",
      "label": "fox",
      "alt": "fox"
     },
     "options": [
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "fish",
       "e": "🐟",
       "l": "fish"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "box",
     "speakOptions": true,
     "hints": [
      "Say “fox” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Fox and box end with the same sound.",
     "feedback": {
      "fish": "Fish STARTS like fox. We need a word that ENDS like fox.",
      "sun": "Sun ends with a different sound. Say fox and sun and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-7",
     "prompt": "Which one ends with the same sound as “van”?",
     "say": "Which one ends with the same sound as van?",
     "stimulus": {
      "emoji": "🚐",
      "label": "van",
      "alt": "van"
     },
     "options": [
      {
       "v": "pin",
       "e": "📌",
       "l": "pin"
      },
      {
       "v": "web",
       "e": "🕸️",
       "l": "web"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "pin",
     "speakOptions": true,
     "hints": [
      "Say “van” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Van and pin end with the same sound.",
     "feedback": {
      "web": "Web ends with a different sound. Say van and web and listen to the very end.",
      "dog": "Dog ends with a different sound. Say van and dog and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-8",
     "prompt": "Which one ends with the same sound as “leg”?",
     "say": "Which one ends with the same sound as leg?",
     "stimulus": {
      "emoji": "🦵",
      "label": "leg",
      "alt": "leg"
     },
     "options": [
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "lips",
       "e": "👄",
       "l": "lips"
      },
      {
       "v": "ten",
       "e": "🔟",
       "l": "ten"
      }
     ],
     "answer": "bug",
     "speakOptions": true,
     "hints": [
      "Say “leg” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Leg and bug end with the same sound.",
     "feedback": {
      "lips": "Lips STARTS like leg. We need a word that ENDS like leg.",
      "ten": "Ten ends with a different sound. Say leg and ten and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-9",
     "prompt": "Which one ends with the same sound as “ten”?",
     "say": "Which one ends with the same sound as ten?",
     "stimulus": {
      "emoji": "🔟",
      "label": "ten",
      "alt": "ten"
     },
     "options": [
      {
       "v": "can",
       "e": "🥫",
       "l": "can"
      },
      {
       "v": "tent",
       "e": "⛺",
       "l": "tent"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "can",
     "speakOptions": true,
     "hints": [
      "Say “ten” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Ten and can end with the same sound.",
     "feedback": {
      "tent": "Tent STARTS like ten. We need a word that ENDS like ten.",
      "dog": "Dog ends with a different sound. Say ten and dog and listen to the very end."
     },
     "skill": "last"
    },
    {
     "id": "last-10",
     "prompt": "Which one ends with the same sound as “dog”?",
     "say": "Which one ends with the same sound as dog?",
     "stimulus": {
      "emoji": "🐶",
      "label": "dog",
      "alt": "dog"
     },
     "options": [
      {
       "v": "frog",
       "e": "🐸",
       "l": "frog"
      },
      {
       "v": "duck",
       "e": "🦆",
       "l": "duck"
      },
      {
       "v": "bus",
       "e": "🚌",
       "l": "bus"
      }
     ],
     "answer": "frog",
     "speakOptions": true,
     "hints": [
      "Say “dog” slowly. Stretch it out. Listen to the LAST sound.",
      "Say each word and freeze on its last sound. Which last sound matches?"
     ],
     "why": "Dog and frog end with the same sound.",
     "feedback": {
      "duck": "Duck STARTS like dog. We need a word that ENDS like dog.",
      "bus": "Bus ends with a different sound. Say dog and bus and listen to the very end."
     },
     "skill": "last"
    }
   ]
  },
  {
   "id": "middle",
   "title": "Middle sounds (short vowels)",
   "emoji": "🎯",
   "standard": "RF.1.2c",
   "learn": [
    {
     "emoji": "🐱",
     "text": "Short words have a middle sound too. In “cat” it is the sound in the middle: c-A-t.",
     "say": "Short words have a middle sound too. Listen to the middle of cat."
    },
    {
     "emoji": "🍎🥚🐙☂️",
     "text": "Middle sounds are often vowels: the sounds at the start of apple, egg, it, octopus and umbrella.",
     "say": "Middle sounds are often vowels. They are the sounds at the start of apple, egg, it, octopus, and umbrella."
    },
    {
     "emoji": "🐱🗺️",
     "text": "“Cat” and “map” have the same middle sound — the start of “apple” 🍎.",
     "say": "Cat and map have the same middle sound. It is the sound at the start of apple."
    }
   ],
   "items": [
    {
     "id": "mid-1",
     "prompt": "Which one has the same MIDDLE sound as “cat”?",
     "say": "Which one has the same middle sound as cat?",
     "stimulus": {
      "emoji": "🐱",
      "label": "cat",
      "alt": "cat"
     },
     "options": [
      {
       "v": "map",
       "e": "🗺️",
       "l": "map"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      },
      {
       "v": "pig",
       "e": "🐷",
       "l": "pig"
      }
     ],
     "answer": "map",
     "speakOptions": true,
     "hints": [
      "Say “cat” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “cat” is the same sound that starts “apple” 🍎."
     ],
     "why": "Cat and map have the same middle sound — like the start of “apple” 🍎.",
     "feedback": {
      "dog": "Listen to the middle of dog: it has the middle sound you hear at the start of “octopus” 🐙. ",
      "pig": "Listen to the middle of pig: it has the middle sound you hear at the start of “it” . "
     },
     "skill": "middle"
    },
    {
     "id": "mid-2",
     "prompt": "Which one has the same MIDDLE sound as “pig”?",
     "say": "Which one has the same middle sound as pig?",
     "stimulus": {
      "emoji": "🐷",
      "label": "pig",
      "alt": "pig"
     },
     "options": [
      {
       "v": "six",
       "e": "6️⃣",
       "l": "six"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      }
     ],
     "answer": "six",
     "speakOptions": true,
     "hints": [
      "Say “pig” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “pig” is the same sound that starts “it”."
     ],
     "why": "Pig and six have the same middle sound — like the start of “it”.",
     "feedback": {
      "pen": "Pen starts like pig, but its middle sound is different. ",
      "bug": "Listen to the middle of bug: it has the middle sound you hear at the start of “umbrella” ☂️. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-3",
     "prompt": "Which one has the same MIDDLE sound as “dog”?",
     "say": "Which one has the same middle sound as dog?",
     "stimulus": {
      "emoji": "🐶",
      "label": "dog",
      "alt": "dog"
     },
     "options": [
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "bag",
       "e": "👜",
       "l": "bag"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "box",
     "speakOptions": true,
     "hints": [
      "Say “dog” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “dog” is the same sound that starts “octopus” 🐙."
     ],
     "why": "Dog and box have the same middle sound — like the start of “octopus” 🐙.",
     "feedback": {
      "bag": "Listen to the middle of bag: it has the middle sound you hear at the start of “apple” 🍎. ",
      "sun": "Listen to the middle of sun: it has the middle sound you hear at the start of “umbrella” ☂️. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-4",
     "prompt": "Which one has the same MIDDLE sound as “sun”?",
     "say": "Which one has the same middle sound as sun?",
     "stimulus": {
      "emoji": "☀️",
      "label": "sun",
      "alt": "sun"
     },
     "options": [
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "six",
       "e": "6️⃣",
       "l": "six"
      },
      {
       "v": "hat",
       "e": "🎩",
       "l": "hat"
      }
     ],
     "answer": "bug",
     "speakOptions": true,
     "hints": [
      "Say “sun” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “sun” is the same sound that starts “umbrella” ☂️."
     ],
     "why": "Sun and bug have the same middle sound — like the start of “umbrella” ☂️.",
     "feedback": {
      "six": "Six starts like sun, but its middle sound is different. ",
      "hat": "Listen to the middle of hat: it has the middle sound you hear at the start of “apple” 🍎. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-5",
     "prompt": "Which one has the same MIDDLE sound as “bed”?",
     "say": "Which one has the same middle sound as bed?",
     "stimulus": {
      "emoji": "🛏️",
      "label": "bed",
      "alt": "bed"
     },
     "options": [
      {
       "v": "web",
       "e": "🕸️",
       "l": "web"
      },
      {
       "v": "bag",
       "e": "👜",
       "l": "bag"
      },
      {
       "v": "pig",
       "e": "🐷",
       "l": "pig"
      }
     ],
     "answer": "web",
     "speakOptions": true,
     "hints": [
      "Say “bed” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “bed” is the same sound that starts “egg” 🥚."
     ],
     "why": "Bed and web have the same middle sound — like the start of “egg” 🥚.",
     "feedback": {
      "bag": "Bag starts like bed, but its middle sound is different. ",
      "pig": "Listen to the middle of pig: it has the middle sound you hear at the start of “it” . "
     },
     "skill": "middle"
    },
    {
     "id": "mid-6",
     "prompt": "Which one has the same MIDDLE sound as “hat”?",
     "say": "Which one has the same middle sound as hat?",
     "stimulus": {
      "emoji": "🎩",
      "label": "hat",
      "alt": "hat"
     },
     "options": [
      {
       "v": "van",
       "e": "🚐",
       "l": "van"
      },
      {
       "v": "hen",
       "e": "🐔",
       "l": "hen"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "van",
     "speakOptions": true,
     "hints": [
      "Say “hat” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “hat” is the same sound that starts “apple” 🍎."
     ],
     "why": "Hat and van have the same middle sound — like the start of “apple” 🍎.",
     "feedback": {
      "hen": "Hen starts like hat, but its middle sound is different. ",
      "dog": "Listen to the middle of dog: it has the middle sound you hear at the start of “octopus” 🐙. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-7",
     "prompt": "Which one has the same MIDDLE sound as “fox”?",
     "say": "Which one has the same middle sound as fox?",
     "stimulus": {
      "emoji": "🦊",
      "label": "fox",
      "alt": "fox"
     },
     "options": [
      {
       "v": "sock",
       "e": "🧦",
       "l": "sock"
      },
      {
       "v": "fish",
       "e": "🐟",
       "l": "fish"
      },
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      }
     ],
     "answer": "sock",
     "speakOptions": true,
     "hints": [
      "Say “fox” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “fox” is the same sound that starts “octopus” 🐙."
     ],
     "why": "Fox and sock have the same middle sound — like the start of “octopus” 🐙.",
     "feedback": {
      "fish": "Fish starts like fox, but its middle sound is different. ",
      "bed": "Listen to the middle of bed: it has the middle sound you hear at the start of “egg” 🥚. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-8",
     "prompt": "Which one has the same MIDDLE sound as “bus”?",
     "say": "Which one has the same middle sound as bus?",
     "stimulus": {
      "emoji": "🚌",
      "label": "bus",
      "alt": "bus"
     },
     "options": [
      {
       "v": "duck",
       "e": "🦆",
       "l": "duck"
      },
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      }
     ],
     "answer": "duck",
     "speakOptions": true,
     "hints": [
      "Say “bus” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “bus” is the same sound that starts “umbrella” ☂️."
     ],
     "why": "Bus and duck have the same middle sound — like the start of “umbrella” ☂️.",
     "feedback": {
      "box": "Box starts like bus, but its middle sound is different. ",
      "pen": "Listen to the middle of pen: it has the middle sound you hear at the start of “egg” 🥚. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-9",
     "prompt": "Which one has the same MIDDLE sound as “pin”?",
     "say": "Which one has the same middle sound as pin?",
     "stimulus": {
      "emoji": "📌",
      "label": "pin",
      "alt": "pin"
     },
     "options": [
      {
       "v": "ship",
       "e": "🚢",
       "l": "ship"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      }
     ],
     "answer": "ship",
     "speakOptions": true,
     "hints": [
      "Say “pin” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “pin” is the same sound that starts “it”."
     ],
     "why": "Pin and ship have the same middle sound — like the start of “it”.",
     "feedback": {
      "pen": "Pen starts like pin, but its middle sound is different. ",
      "sun": "Listen to the middle of sun: it has the middle sound you hear at the start of “umbrella” ☂️. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-10",
     "prompt": "Which one has the same MIDDLE sound as “ten”?",
     "say": "Which one has the same middle sound as ten?",
     "stimulus": {
      "emoji": "🔟",
      "label": "ten",
      "alt": "ten"
     },
     "options": [
      {
       "v": "leg",
       "e": "🦵",
       "l": "leg"
      },
      {
       "v": "van",
       "e": "🚐",
       "l": "van"
      },
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      }
     ],
     "answer": "leg",
     "speakOptions": true,
     "hints": [
      "Say “ten” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “ten” is the same sound that starts “egg” 🥚."
     ],
     "why": "Ten and leg have the same middle sound — like the start of “egg” 🥚.",
     "feedback": {
      "van": "Listen to the middle of van: it has the middle sound you hear at the start of “apple” 🍎. ",
      "dog": "Listen to the middle of dog: it has the middle sound you hear at the start of “octopus” 🐙. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-11",
     "prompt": "Which one has the same MIDDLE sound as “bag”?",
     "say": "Which one has the same middle sound as bag?",
     "stimulus": {
      "emoji": "👜",
      "label": "bag",
      "alt": "bag"
     },
     "options": [
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      },
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      }
     ],
     "answer": "cap",
     "speakOptions": true,
     "hints": [
      "Say “bag” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “bag” is the same sound that starts “apple” 🍎."
     ],
     "why": "Bag and cap have the same middle sound — like the start of “apple” 🍎.",
     "feedback": {
      "bug": "Bug starts like bag, but its middle sound is different. ",
      "bed": "Bed starts like bag, but its middle sound is different. "
     },
     "skill": "middle"
    },
    {
     "id": "mid-12",
     "prompt": "Which one has the same MIDDLE sound as “nut”?",
     "say": "Which one has the same middle sound as nut?",
     "stimulus": {
      "emoji": "🥜",
      "label": "nut",
      "alt": "nut"
     },
     "options": [
      {
       "v": "drum",
       "e": "🥁",
       "l": "drum"
      },
      {
       "v": "log",
       "e": "🪵",
       "l": "log"
      },
      {
       "v": "pin",
       "e": "📌",
       "l": "pin"
      }
     ],
     "answer": "drum",
     "speakOptions": true,
     "hints": [
      "Say “nut” very slowly. The middle sound is the one between the first and the last.",
      "The middle sound in “nut” is the same sound that starts “umbrella” ☂️."
     ],
     "why": "Nut and drum have the same middle sound — like the start of “umbrella” ☂️.",
     "feedback": {
      "log": "Listen to the middle of log: it has the middle sound you hear at the start of “octopus” 🐙. ",
      "pin": "Listen to the middle of pin: it has the middle sound you hear at the start of “it” . "
     },
     "skill": "middle"
    }
   ]
  },
  {
   "id": "read",
   "title": "Read short words",
   "emoji": "📖",
   "standard": "RF.1.3b",
   "learn": [
    {
     "emoji": "👉🔤",
     "text": "To read a word, say the sound of each letter, left to right.",
     "say": "To read a word, say the sound of each letter, from left to right."
    },
    {
     "emoji": "🐶",
     "text": "d … o … g. Now blend them faster: d-o-g, dog!",
     "say": "d, o, g. Now blend them faster. dog!"
    },
    {
     "emoji": "🔍",
     "text": "Look at EVERY letter. “dog” and “log” only change one letter!",
     "say": "Look at every letter. Dog and log only change one letter!"
    }
   ],
   "items": [
    {
     "id": "read-1",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "cat"
     },
     "options": [
      {
       "v": "cat",
       "e": "🐱",
       "l": "cat"
      },
      {
       "v": "hat",
       "e": "🎩",
       "l": "hat"
      },
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      }
     ],
     "answer": "cat",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "c-a-t … cat!",
     "feedback": {
      "hat": "That picture is “hat”. Look again at each letter in the word.",
      "cap": "That picture is “cap”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-2",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "dog"
     },
     "options": [
      {
       "v": "dog",
       "e": "🐶",
       "l": "dog"
      },
      {
       "v": "log",
       "e": "🪵",
       "l": "log"
      },
      {
       "v": "duck",
       "e": "🦆",
       "l": "duck"
      }
     ],
     "answer": "dog",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "d-o-g … dog!",
     "feedback": {
      "log": "That picture is “log”. Look again at each letter in the word.",
      "duck": "That picture is “duck”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-3",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "pig"
     },
     "options": [
      {
       "v": "pig",
       "e": "🐷",
       "l": "pig"
      },
      {
       "v": "pin",
       "e": "📌",
       "l": "pin"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      }
     ],
     "answer": "pig",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "p-i-g … pig!",
     "feedback": {
      "pin": "That picture is “pin”. Look again at each letter in the word.",
      "pen": "That picture is “pen”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-4",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "bus"
     },
     "options": [
      {
       "v": "bus",
       "e": "🚌",
       "l": "bus"
      },
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      }
     ],
     "answer": "bus",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "b-u-s … bus!",
     "feedback": {
      "bug": "That picture is “bug”. Look again at each letter in the word.",
      "box": "That picture is “box”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-5",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "hen"
     },
     "options": [
      {
       "v": "hen",
       "e": "🐔",
       "l": "hen"
      },
      {
       "v": "pen",
       "e": "🖊️",
       "l": "pen"
      },
      {
       "v": "hat",
       "e": "🎩",
       "l": "hat"
      }
     ],
     "answer": "hen",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "h-e-n … hen!",
     "feedback": {
      "pen": "That picture is “pen”. Look again at each letter in the word.",
      "hat": "That picture is “hat”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-6",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "fox"
     },
     "options": [
      {
       "v": "fox",
       "e": "🦊",
       "l": "fox"
      },
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "frog",
       "e": "🐸",
       "l": "frog"
      }
     ],
     "answer": "fox",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "f-o-x … fox!",
     "feedback": {
      "box": "That picture is “box”. Look again at each letter in the word.",
      "frog": "That picture is “frog”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-7",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "bed"
     },
     "options": [
      {
       "v": "bed",
       "e": "🛏️",
       "l": "bed"
      },
      {
       "v": "bag",
       "e": "👜",
       "l": "bag"
      },
      {
       "v": "web",
       "e": "🕸️",
       "l": "web"
      }
     ],
     "answer": "bed",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "b-e-d … bed!",
     "feedback": {
      "bag": "That picture is “bag”. Look again at each letter in the word.",
      "web": "That picture is “web”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-8",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "sun"
     },
     "options": [
      {
       "v": "sun",
       "e": "☀️",
       "l": "sun"
      },
      {
       "v": "six",
       "e": "6️⃣",
       "l": "six"
      },
      {
       "v": "nut",
       "e": "🥜",
       "l": "nut"
      }
     ],
     "answer": "sun",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "s-u-n … sun!",
     "feedback": {
      "six": "That picture is “six”. Look again at each letter in the word.",
      "nut": "That picture is “nut”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-9",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "map"
     },
     "options": [
      {
       "v": "map",
       "e": "🗺️",
       "l": "map"
      },
      {
       "v": "cap",
       "e": "🧢",
       "l": "cap"
      },
      {
       "v": "mouse",
       "e": "🐭",
       "l": "mouse"
      }
     ],
     "answer": "map",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "m-a-p … map!",
     "feedback": {
      "cap": "That picture is “cap”. Look again at each letter in the word.",
      "mouse": "That picture is “mouse”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-10",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "ten"
     },
     "options": [
      {
       "v": "ten",
       "e": "🔟",
       "l": "ten"
      },
      {
       "v": "tent",
       "e": "⛺",
       "l": "tent"
      },
      {
       "v": "can",
       "e": "🥫",
       "l": "can"
      }
     ],
     "answer": "ten",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "t-e-n … ten!",
     "feedback": {
      "tent": "That picture is “tent”. Look again at each letter in the word.",
      "can": "That picture is “can”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-11",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "bug"
     },
     "options": [
      {
       "v": "bug",
       "e": "🐛",
       "l": "bug"
      },
      {
       "v": "bag",
       "e": "👜",
       "l": "bag"
      },
      {
       "v": "drum",
       "e": "🥁",
       "l": "drum"
      }
     ],
     "answer": "bug",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "b-u-g … bug!",
     "feedback": {
      "bag": "That picture is “bag”. Look again at each letter in the word.",
      "drum": "That picture is “drum”. Look again at each letter in the word."
     },
     "skill": "read"
    },
    {
     "id": "read-12",
     "prompt": "Read the word. Tap the matching picture.",
     "say": "Read the word. Then tap the picture that matches.",
     "stimulus": {
      "word": "box"
     },
     "options": [
      {
       "v": "box",
       "e": "📦",
       "l": "box"
      },
      {
       "v": "bus",
       "e": "🚌",
       "l": "bus"
      },
      {
       "v": "sock",
       "e": "🧦",
       "l": "sock"
      }
     ],
     "answer": "box",
     "showLabels": false,
     "hints": [
      "Point to each letter and say its sound, left to right.",
      "Now say the sounds again, faster and faster, until they join into a word."
     ],
     "why": "b-o-x … box!",
     "feedback": {
      "bus": "That picture is “bus”. Look again at each letter in the word.",
      "sock": "That picture is “sock”. Look again at each letter in the word."
     },
     "skill": "read"
    }
   ]
  },
  {
   "id": "spell",
   "title": "Spell short words",
   "emoji": "✏️",
   "standard": "RF.1.3b",
   "learn": [
    {
     "emoji": "🐶",
     "text": "To spell a word, say it slowly and write a letter for each sound: d-o-g.",
     "say": "To spell a word, say it slowly and write a letter for each sound. d, o, g."
    },
    {
     "emoji": "🍎🥚🐙☂️",
     "text": "The middle letter is often a vowel: a, e, i, o or u.",
     "say": "The middle letter is often a vowel. a, e, i, o, or u."
    },
    {
     "emoji": "🐱",
     "text": "c _ t … say “cat” slowly. The middle sound is the start of “apple”, so the letter is a!",
     "say": "c, blank, t. Say cat slowly. The middle sound is the start of apple, so the letter is a."
    }
   ],
   "items": [
    {
     "id": "spell-1",
     "kind": "letters",
     "prompt": "Which letter is missing? c _ t",
     "say": "Which letter is missing in the word cat?",
     "stimulus": {
      "emoji": "🐱",
      "word": "c _ t",
      "alt": "cat"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "a",
     "hints": [
      "Say “cat” slowly and listen for the middle sound.",
      "The middle sound in “cat” is the sound at the start of “apple” 🍎."
     ],
     "why": "c-a-t spells cat.",
     "feedback": {
      "e": "That spells “cet”, not “cat”. Say “cat” slowly — does the middle sound match?",
      "i": "That spells “cit”, not “cat”. Say “cat” slowly — does the middle sound match?",
      "o": "That spells “cot”, not “cat”. Say “cat” slowly — does the middle sound match?",
      "u": "That spells “cut”, not “cat”. Say “cat” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-2",
     "kind": "letters",
     "prompt": "Which letter is missing? d _ g",
     "say": "Which letter is missing in the word dog?",
     "stimulus": {
      "emoji": "🐶",
      "word": "d _ g",
      "alt": "dog"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "o",
     "hints": [
      "Say “dog” slowly and listen for the middle sound.",
      "The middle sound in “dog” is the sound at the start of “octopus” 🐙."
     ],
     "why": "d-o-g spells dog.",
     "feedback": {
      "a": "That spells “dag”, not “dog”. Say “dog” slowly — does the middle sound match?",
      "e": "That spells “deg”, not “dog”. Say “dog” slowly — does the middle sound match?",
      "i": "That spells “dig”, not “dog”. Say “dog” slowly — does the middle sound match?",
      "u": "That spells “dug”, not “dog”. Say “dog” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-3",
     "kind": "letters",
     "prompt": "Which letter is missing? p _ g",
     "say": "Which letter is missing in the word pig?",
     "stimulus": {
      "emoji": "🐷",
      "word": "p _ g",
      "alt": "pig"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "i",
     "hints": [
      "Say “pig” slowly and listen for the middle sound.",
      "The middle sound in “pig” is the sound at the start of “it”."
     ],
     "why": "p-i-g spells pig.",
     "feedback": {
      "a": "That spells “pag”, not “pig”. Say “pig” slowly — does the middle sound match?",
      "e": "That spells “peg”, not “pig”. Say “pig” slowly — does the middle sound match?",
      "o": "That spells “pog”, not “pig”. Say “pig” slowly — does the middle sound match?",
      "u": "That spells “pug”, not “pig”. Say “pig” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-4",
     "kind": "letters",
     "prompt": "Which letter is missing? b _ s",
     "say": "Which letter is missing in the word bus?",
     "stimulus": {
      "emoji": "🚌",
      "word": "b _ s",
      "alt": "bus"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "u",
     "hints": [
      "Say “bus” slowly and listen for the middle sound.",
      "The middle sound in “bus” is the sound at the start of “umbrella” ☂️."
     ],
     "why": "b-u-s spells bus.",
     "feedback": {
      "a": "That spells “bas”, not “bus”. Say “bus” slowly — does the middle sound match?",
      "e": "That spells “bes”, not “bus”. Say “bus” slowly — does the middle sound match?",
      "i": "That spells “bis”, not “bus”. Say “bus” slowly — does the middle sound match?",
      "o": "That spells “bos”, not “bus”. Say “bus” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-5",
     "kind": "letters",
     "prompt": "Which letter is missing? b _ d",
     "say": "Which letter is missing in the word bed?",
     "stimulus": {
      "emoji": "🛏️",
      "word": "b _ d",
      "alt": "bed"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "e",
     "hints": [
      "Say “bed” slowly and listen for the middle sound.",
      "The middle sound in “bed” is the sound at the start of “egg” 🥚."
     ],
     "why": "b-e-d spells bed.",
     "feedback": {
      "a": "That spells “bad”, not “bed”. Say “bed” slowly — does the middle sound match?",
      "i": "That spells “bid”, not “bed”. Say “bed” slowly — does the middle sound match?",
      "o": "That spells “bod”, not “bed”. Say “bed” slowly — does the middle sound match?",
      "u": "That spells “bud”, not “bed”. Say “bed” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-6",
     "kind": "letters",
     "prompt": "Which letter is missing? f _ x",
     "say": "Which letter is missing in the word fox?",
     "stimulus": {
      "emoji": "🦊",
      "word": "f _ x",
      "alt": "fox"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "o",
     "hints": [
      "Say “fox” slowly and listen for the middle sound.",
      "The middle sound in “fox” is the sound at the start of “octopus” 🐙."
     ],
     "why": "f-o-x spells fox.",
     "feedback": {
      "a": "That spells “fax”, not “fox”. Say “fox” slowly — does the middle sound match?",
      "e": "That spells “fex”, not “fox”. Say “fox” slowly — does the middle sound match?",
      "i": "That spells “fix”, not “fox”. Say “fox” slowly — does the middle sound match?",
      "u": "That spells “fux”, not “fox”. Say “fox” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-7",
     "kind": "letters",
     "prompt": "Which letter is missing? s _ n",
     "say": "Which letter is missing in the word sun?",
     "stimulus": {
      "emoji": "☀️",
      "word": "s _ n",
      "alt": "sun"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "u",
     "hints": [
      "Say “sun” slowly and listen for the middle sound.",
      "The middle sound in “sun” is the sound at the start of “umbrella” ☂️."
     ],
     "why": "s-u-n spells sun.",
     "feedback": {
      "a": "That spells “san”, not “sun”. Say “sun” slowly — does the middle sound match?",
      "e": "That spells “sen”, not “sun”. Say “sun” slowly — does the middle sound match?",
      "i": "That spells “sin”, not “sun”. Say “sun” slowly — does the middle sound match?",
      "o": "That spells “son”, not “sun”. Say “sun” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-8",
     "kind": "letters",
     "prompt": "Which letter is missing? p _ n",
     "say": "Which letter is missing in the word pen?",
     "stimulus": {
      "emoji": "🖊️",
      "word": "p _ n",
      "alt": "pen"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "e",
     "hints": [
      "Say “pen” slowly and listen for the middle sound.",
      "The middle sound in “pen” is the sound at the start of “egg” 🥚."
     ],
     "why": "p-e-n spells pen.",
     "feedback": {
      "a": "That spells “pan”, not “pen”. Say “pen” slowly — does the middle sound match?",
      "i": "That spells “pin”, not “pen”. Say “pen” slowly — does the middle sound match?",
      "o": "That spells “pon”, not “pen”. Say “pen” slowly — does the middle sound match?",
      "u": "That spells “pun”, not “pen”. Say “pen” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-9",
     "kind": "letters",
     "prompt": "Which letter is missing? m _ p",
     "say": "Which letter is missing in the word map?",
     "stimulus": {
      "emoji": "🗺️",
      "word": "m _ p",
      "alt": "map"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "a",
     "hints": [
      "Say “map” slowly and listen for the middle sound.",
      "The middle sound in “map” is the sound at the start of “apple” 🍎."
     ],
     "why": "m-a-p spells map.",
     "feedback": {
      "e": "That spells “mep”, not “map”. Say “map” slowly — does the middle sound match?",
      "i": "That spells “mip”, not “map”. Say “map” slowly — does the middle sound match?",
      "o": "That spells “mop”, not “map”. Say “map” slowly — does the middle sound match?",
      "u": "That spells “mup”, not “map”. Say “map” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-10",
     "kind": "letters",
     "prompt": "Which letter is missing? h _ n",
     "say": "Which letter is missing in the word hen?",
     "stimulus": {
      "emoji": "🐔",
      "word": "h _ n",
      "alt": "hen"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "e",
     "hints": [
      "Say “hen” slowly and listen for the middle sound.",
      "The middle sound in “hen” is the sound at the start of “egg” 🥚."
     ],
     "why": "h-e-n spells hen.",
     "feedback": {
      "a": "That spells “han”, not “hen”. Say “hen” slowly — does the middle sound match?",
      "i": "That spells “hin”, not “hen”. Say “hen” slowly — does the middle sound match?",
      "o": "That spells “hon”, not “hen”. Say “hen” slowly — does the middle sound match?",
      "u": "That spells “hun”, not “hen”. Say “hen” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-11",
     "kind": "letters",
     "prompt": "Which letter is missing? b _ g",
     "say": "Which letter is missing in the word bug?",
     "stimulus": {
      "emoji": "🐛",
      "word": "b _ g",
      "alt": "bug"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "u",
     "hints": [
      "Say “bug” slowly and listen for the middle sound.",
      "The middle sound in “bug” is the sound at the start of “umbrella” ☂️."
     ],
     "why": "b-u-g spells bug.",
     "feedback": {
      "a": "That spells “bag”, not “bug”. Say “bug” slowly — does the middle sound match?",
      "e": "That spells “beg”, not “bug”. Say “bug” slowly — does the middle sound match?",
      "i": "That spells “big”, not “bug”. Say “bug” slowly — does the middle sound match?",
      "o": "That spells “bog”, not “bug”. Say “bug” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-12",
     "kind": "letters",
     "prompt": "Which letter is missing? s _ x",
     "say": "Which letter is missing in the word six?",
     "stimulus": {
      "emoji": "6️⃣",
      "word": "s _ x",
      "alt": "six"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "i",
     "hints": [
      "Say “six” slowly and listen for the middle sound.",
      "The middle sound in “six” is the sound at the start of “it”."
     ],
     "why": "s-i-x spells six.",
     "feedback": {
      "a": "That spells “sax”, not “six”. Say “six” slowly — does the middle sound match?",
      "e": "That spells “sex”, not “six”. Say “six” slowly — does the middle sound match?",
      "o": "That spells “sox”, not “six”. Say “six” slowly — does the middle sound match?",
      "u": "That spells “sux”, not “six”. Say “six” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-13",
     "kind": "letters",
     "prompt": "Which letter is missing? b _ x",
     "say": "Which letter is missing in the word box?",
     "stimulus": {
      "emoji": "📦",
      "word": "b _ x",
      "alt": "box"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "o",
     "hints": [
      "Say “box” slowly and listen for the middle sound.",
      "The middle sound in “box” is the sound at the start of “octopus” 🐙."
     ],
     "why": "b-o-x spells box.",
     "feedback": {
      "a": "That spells “bax”, not “box”. Say “box” slowly — does the middle sound match?",
      "e": "That spells “bex”, not “box”. Say “box” slowly — does the middle sound match?",
      "i": "That spells “bix”, not “box”. Say “box” slowly — does the middle sound match?",
      "u": "That spells “bux”, not “box”. Say “box” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-14",
     "kind": "letters",
     "prompt": "Which letter is missing? v _ n",
     "say": "Which letter is missing in the word van?",
     "stimulus": {
      "emoji": "🚐",
      "word": "v _ n",
      "alt": "van"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "a",
     "hints": [
      "Say “van” slowly and listen for the middle sound.",
      "The middle sound in “van” is the sound at the start of “apple” 🍎."
     ],
     "why": "v-a-n spells van.",
     "feedback": {
      "e": "That spells “ven”, not “van”. Say “van” slowly — does the middle sound match?",
      "i": "That spells “vin”, not “van”. Say “van” slowly — does the middle sound match?",
      "o": "That spells “von”, not “van”. Say “van” slowly — does the middle sound match?",
      "u": "That spells “vun”, not “van”. Say “van” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-15",
     "kind": "letters",
     "prompt": "Which letter is missing? l _ g",
     "say": "Which letter is missing in the word leg?",
     "stimulus": {
      "emoji": "🦵",
      "word": "l _ g",
      "alt": "leg"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "e",
     "hints": [
      "Say “leg” slowly and listen for the middle sound.",
      "The middle sound in “leg” is the sound at the start of “egg” 🥚."
     ],
     "why": "l-e-g spells leg.",
     "feedback": {
      "a": "That spells “lag”, not “leg”. Say “leg” slowly — does the middle sound match?",
      "i": "That spells “lig”, not “leg”. Say “leg” slowly — does the middle sound match?",
      "o": "That spells “log”, not “leg”. Say “leg” slowly — does the middle sound match?",
      "u": "That spells “lug”, not “leg”. Say “leg” slowly — does the middle sound match?"
     },
     "skill": "spell"
    },
    {
     "id": "spell-16",
     "kind": "letters",
     "prompt": "Which letter is missing? n _ t",
     "say": "Which letter is missing in the word nut?",
     "stimulus": {
      "emoji": "🥜",
      "word": "n _ t",
      "alt": "nut"
     },
     "options": [
      {
       "v": "a",
       "l": "a"
      },
      {
       "v": "e",
       "l": "e"
      },
      {
       "v": "i",
       "l": "i"
      },
      {
       "v": "o",
       "l": "o"
      },
      {
       "v": "u",
       "l": "u"
      }
     ],
     "answer": "u",
     "hints": [
      "Say “nut” slowly and listen for the middle sound.",
      "The middle sound in “nut” is the sound at the start of “umbrella” ☂️."
     ],
     "why": "n-u-t spells nut.",
     "feedback": {
      "a": "That spells “nat”, not “nut”. Say “nut” slowly — does the middle sound match?",
      "e": "That spells “net”, not “nut”. Say “nut” slowly — does the middle sound match?",
      "i": "That spells “nit”, not “nut”. Say “nut” slowly — does the middle sound match?",
      "o": "That spells “not”, not “nut”. Say “nut” slowly — does the middle sound match?"
     },
     "skill": "spell"
    }
   ]
  }
 ]
};
