const dumbQ_color = "#044343";
const hindiEng_color = "#6f4a8e";

const hindiEng = [
  {
    question: "yaatra ka ek hissa ant hai.",
    answer: "“Part of the journey is the end.”~ Tony Stark"
  },
  {
    question:
      "tonee, aapako rokane kee koshish karana mere poore jeevan kee kuchh asaphalataon mein se ek raha hai.",
    answer: "“Tony"
  },
  {
    question:
      "koee bhee raashi kabhee bhee doosaree baar nahin khareedee gaee.",
    answer: "“No amount of money ever bought a second of time.”~ Tony Stark"
  },
  {
    question:
      "aap jaanate hain, main har kisee ko bataata rahata hoon ki unhen aage badhana chaahie aur badhana chaahie. kuchh karate hain, lekin hamen nahin.",
    answer: "“You know"
  },
  {
    question:
      "yah is baare mein nahin hai ki hamane kitana khoya. yah is baare mein hai ki hamane kitana chhoda hai.",
    answer:
      "“It's not about how much we lost. It's about how much we have left.”~ Tony Stark"
  },
  {
    question:
      "koee galatee nahin hai. koee bhee ovar nahin hai. ek doosare ke lie dekhen. yah hamaare jeevan kee ladaee hai.",
    answer:
      "“No mistakes. No do-overs. Look out for each other. This is the fight of our lives.”~ Steve Rogers"
  },
  {
    question:
      "sabase kathin vikalpon ke lie sabase majaboot ichchhaashakti kee aavashyakata hotee hai.",
    answer: "“The hardest choices require the strongest wills.”~ Thanos"
  },
  {
    question:
      "aaj ham ek jeevan ke lie nahin ladate hain, ham un sabhee ke lie ladate hain.",
    answer: "“Today we don’t fight for one life"
  },
  {
    question:
      "yah kisee cheez ke khilaaph hone ke lie paryaapt nahin hai. aapako kuchh behatar karana hoga.",
    answer:
      "“It’s not enough to be against something. You have to be for something better.”~ Tony Stark"
  },
  {
    question: "main ek mahaan raaja kee bajaay ek achchha insaan banoonga.",
    answer: "“I would rather be a good man than a great king.”~ Thor"
  },
  {
    question:
      "main apanee samasyaon ke prati daudana chunata hoon, aur unase door nahin. kyonki aisa isalie hai kyonki heero hee karate hain.",
    answer: "“I choose to run towards my problems"
  },
  {
    question:
      "lekin yah sundar nahin hai kyonki yah rahata hai. yah unake beech rahane ka saubhaagy hai.",
    answer:
      "“But a thing isn’t beautiful because it lasts. It’s a privilege to be among them.”~ Vision"
  },
  {
    question:
      "duniya badal gaee hai aur ham mein se koee bhee vaapas nahin ja sakata. ham jo kar sakate hain vah hamaara sabase achchha hai, aur kabhee-kabhee sabase achchha jo ham kar sakate hain vah shuroo karana hai.",
    answer:
      "“The world has changed and none of us can go back. All we can do is our best"
  },
  {
    question: "mujhe sikhao.",
    answer: "“Teach Me.”~Stephen Strange"
  },
  {
    question:
      "aastha meree talavaar hai. saty meree dhaal hai. gyaan ko mera kavach.",
    answer:
      "“Faith is my sword. Truth is my shield. Knowledge my armor.”~Stephen Strange"
  },
  {
    question:
      "mainne apanee aankhen kholee theen. mujhe ehasaas hua ki mujhe is duniya ko sirph udaane vaalee cheejon kee tulana mein adhik pesh karana tha.",
    answer:
      "“I had my eyes opened. I came to realize that I had more to offer this world than just making things that blow up.”~ Tony Stark"
  },

  {
    question: "sainy bal tumhaare saath ho sakata hai.",
    answer: "“May the Force be with you.” -Star Wars, 1977"
  },
  {
    question: "ghar jaisee koee jagah nahin hai.",
    answer: "“There's no place like home.” -The Wizard of Oz, 1939"
  },
  {
    question: "main duniya ka raaja hoon!",
    answer: "“I'm the king of the world!” -Titanic, 1997"
  },
  {
    question:
      "kaarp daayam. din ko jabt karo, ladakon. apane jeevan ko asaadhaaran banao.",
    answer:
      "“Carpe diem. Seize the day, boys. Make your lives extraordinary.” -Dead Poets Society, 1989"
  },
  {
    question: "praathamik meree priy vaatasan.",
    answer:
      "“Elementary, my dear Watson.” -The Adventures of Sherlock Holmes, 1939"
  },
  {
    question: "yah jeevit hai! yah jeevit hai!",
    answer: "“It's alive! It's alive!” -Frankenstein, 1931"
  },
  {
    question:
      "mere maama ne hamesha kaha ki jeevan chokalet ke ek bakse kee tarah tha. aapako kabhee nahin pata ki aapako kya milane vaala hai.",
    answer:
      "“My mama always said life was like a box of chocolates. You never know what you're gonna get.” -Forrest Gump, 1994"
  },
  {
    question: "main vaapas aaoonga.",
    answer: "“I'll be back.” -The Terminator, 1984"
  },
  {
    question: "aapako ek badee naav kee aavashyakata hai.",
    answer: "“You're gonna need a bigger boat.” -Jaws, 1975"
  },
  {
    question: "aap ko dekh rahe hain, bachche.",
    answer: "“Here's looking at you, kid.” -Casablanca,1942"
  },
  {
    question: "mera anamol.",
    answer: "“My precious.” -The Lord of the Rings: Two Towers, 2002"
  },
  {
    question: "hostan hamaare paas samasya he.",
    answer: "“Houston, we have a problem.” -Apollo 13, 1995"
  },
  {
    question: "besabol mein rona nahin hai!",
    answer: "“There's no crying in baseball!” -A League of Their Own, 1992"
  },
  {
    question: "et phon hom.",
    answer: "“E.T. phone home.” -E.T. the Extra-Terrestrial, 1982"
  },
  {
    question: "tum sach ko sambhaal nahin sakate!",
    answer: "“You can't handle the truth!” -A Few Good Men, 1992"
  },
  {
    question: "ek maartinee. hilaaya hua, uttejit nahin.",
    answer: "“A martini. Shaken, not stirred.” -Goldfinger, 1964"
  },
  {
    question:
      "jeevan ek bhoj hai, aur sabase gareeb choosane vaale maut ko bhookhe hain!",
    answer:
      "“Life is a banquet, and most poor suckers are starving to death!” -Auntie Mame, 1958"
  },
  {
    question: "yadi aap ise banaate hain, to vah aaega.",
    answer: "“If you build it, he will come.” -Field of Dreams, 1989"
  },
  {
    question: "vah saamagree jo sapane dekhate hain.",
    answer: "“The stuff that dreams are made of.” -The Maltese Falcon, 1941"
  },
  {
    question: "deevaar par maijik mirar, sabase nishpaksh kaun hai?",
    answer:
      '“Magic Mirror on the wall, who is the fairest one of all?" -Snow White and the Seven Dwarfs, 1937'
  },
  {
    question: "apane doston ko paas rakho, lekin apane dushmanon ko kareeb.",
    answer:
      "“Keep your friends close, but your enemies closer.” -The Godfather Part II, 1974"
  },
  {
    question: "main tumhaara pita hooai.",
    answer:
      "“I am your father.” -Star Wars Episode V: The Empire Strikes Back, 1980"
  },
  {
    question: "bas tairate raho.",
    answer: "“Just keep swimming.” -Finding Nemo, 2003"
  },
  {
    question:
      "aaj, main khud ko prthvee ke chehare par sabase bhaagyashaalee aadamee maanata hoon.",
    answer:
      "“Today, I consider myself the luckiest man on the face of the earth.” -The Pride of the Yankees, 1942"
  },
  {
    question: "aap dayaalu hain. aap smaart hain. aap mahatvapoorn hain.",
    answer: "“You is kind. You is smart. You is important.” -The Help, 2011"
  },
  {
    question: "hamen yahaan jo mila hai vah sanvaad karane mein viphal hai.",
    answer:
      "“What we've got here is failure to communicate.” -Cool Hand Luke, 1967"
  },
  {
    question: "alavida bebee.",
    answer: "“Hasta la vista, baby.” -Terminator 2: Judgment Day, 1991"
  },
  {
    question:
      "aap samajh nahin pa rahe hain! mere paas varg tha. main ek daavedaar ho sakata tha. main ek chootad ke bajaay koee ho sakata tha, jo ki main hoon.",
    answer:
      "“You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.” -On the Waterfront, 1954"
  },
  {
    question: "bond. jems bond.",
    answer: '"Bond. James Bond." -Dr. No, 1962'
  },
  {
    question: "tum mujhase baat kar rahe ho?",
    answer: "“You talking to me?” -Taxi Driver, 1976"
  },
  {
    question:
      "sadaken; ham kahaan ja rahe hain hamen sadakon kee aavashyakata nahin hai.",
    answer:
      "“Roads? Where we're going we don't need roads.” -Back to the Future, 1985"
  },
  {
    question: "vah karenge, suar. vah karenge.",
    answer: "“That'll do, pig. That'll do.” -Babe, 1995"
  },
  {
    question: "main yahaan chal raha hoon! main yahaan chal raha hoon!",
    answer: "“I'm walking here! I'm walking here!” -Midnight Cowboy, 1969"
  },
  {
    question: "yah saundary jaanavar ko maar daala tha.",
    answer: '"It was beauty killed the beast." -King Kong, 1933'
  },
  {
    question: "stela! he, stela!",
    answer: "“Stella! Hey, Stella!” -A Streetcar Named Desire, 1951"
  },
  {
    question: "jaise kee!",
    answer: '"As if!" -Clueless, 1995'
  },
  {
    question: "ye jonee hai!",
    answer: "“Here's Johnny!” -The Shining, 1980"
  },
  {
    question: "gulaab ka paudha.",
    answer: "“Rosebud.” -Citizen Kane, 1941"
  },
  {
    question: "mere paas vahee hoga jo vah kar raha hai.",
    answer: "“I'll have what she's having.” -When Harry Met Sally, 1989"
  },
  {
    question: "nahin!",
    answer: "“Inconceivable!” -The Princess Bride, 1987"
  },
  {
    question: "theek hai, mi. demil, main apane kloj-ap ke lie taiyaar hoon.",
    answer:
      "“All right, Mr. DeMille, I'm ready for my close-up.” -Sunset Boulevard, 1950"
  },
  {
    question:
      "apane seetabelt ko jakaden. yah ek oobad-khaabad raat hone vaalee hai.",
    answer:
      "“Fasten your seatbelts. It's going to be a bumpy night.” -All About Eve, 1950"
  },
  {
    question: "kisee ko bhee najar andaaj nahin karana chaahie.",
    answer: "“Nobody puts Baby in a corner.” -Dirty Dancing, 1987"
  },
  {
    question: "theek hai, koee bhee sahee nahin hai.",
    answer: "“Well, nobody's perfect.” -Some Like it Hot, 1959"
  },
  {
    question: "ise baahar nikaalo!",
    answer: "“Snap out of it!” -Moonstruck, 1987"
  },
  {
    question: "aap mujhase hailo par mile the.",
    answer: '“You had me at ‘hello.’" -Jerry Maguire, 1996'
  },
  {
    question:
      "ve hamaaree jaan le sakate hain, lekin ve hamaaree svatantrata kabhee nahin lenge! ",
    answer:
      '"They may take our lives, but they\'ll never take our freedom!" -Braveheart, 1995'
  },
  {
    question: "anant kee or aur usase pare!",
    answer: "“To infinity and beyond!” -Toy Story, 1995"
  },
  {
    question: "aap mujhe maar rahe hain, smol.",
    answer: "“You’re killin’ me, Smalls.” -The Sandlot, 1993"
  },
  {
    question: "toto, mujhe lag raha hai ki ham kansaas mein ab nahin hain.",
    answer:
      "“Toto, I've a feeling we're not in Kansas anymore.” -The Wizard of Oz, 1939"
  }
];

const dumbQ = [
  {
    question: "What did one campfire say to the other?",
    answer: "Shall we go out tonight?"
  },
  {
    question: "Why can’t a woman living in the Europe be buried in Canada?",
    answer: "A living woman cannot be buried anywhere."
  },
  {
    question: "Why are movie stars considered cool?",
    answer: "Because they have so many fans."
  },
  {
    question: "What is white and black, but red all over?",
    answer: "The newspaper is “read” all over."
  },
  {
    question: "What is the biggest problem with snow boots?",
    answer: "Snow boots melt"
  },
  {
    question: "Why do fluorescent lights hum?",
    answer: "Because they cannot remember the words."
  },
  {
    question: "What becomes wetter the more it dries?",
    answer: "A towel"
  },
  {
    question: "What did the ocean say to the beach?",
    answer: "Nothing; it waved."
  },
  {
    question: "Where is an ocean with no water?",
    answer: "On a map"
  },
  {
    question: "What type hair does an ocean have?",
    answer: "Wavy"
  },
  {
    question: "Why did the clown visit the doctor?",
    answer: "Because he was feeling a bit funny."
  },
  {
    question: "What is sticky and brown?",
    answer: "A stick"
  },
  {
    question: "What happens if you throw a white hat into the Black Sea?",
    answer: "The hat gets wet."
  },
  {
    question: "What provides the strength and power to walk through walls?",
    answer: "A door"
  },
  {
    question: "Why did Superman cross the road?",
    answer: "He wanted to get to the supermarket."
  },
  {
    question: "Which nail does a carpenter try to miss?",
    answer: "His fingernail"
  },
  {
    question: "What do you always see at the beginning of a parade?",
    answer: "The letter p"
  },
  {
    question: "What do snowmen eat for breakfast?",
    answer: "Frosted Flakes"
  },
  {
    question: "What happened to the human cannonball?",
    answer: "He got fired."
  },
  {
    question: "Which room has no walls?",
    answer: "A mushroom"
  },
  {
    question: "How can a woman go eight days without sleep?",
    answer: "She sleeps at night."
  },
  {
    question:
      "How can you drop a raw egg onto a concrete floor and not crack it?",
    answer: "No problem, because concrete floors are very hard to crack."
  },
  {
    question: "How can you lift an elephant with one hand?",
    answer: "You cannot, because you will never find an elephant with one hand."
  },
  {
    question: "If two waves have a race, who wins?",
    answer: "They “tied” (tide)."
  },
  {
    question: "Why did the cowboy ride his mule into town?",
    answer: "Because his mule was too heavy to carry."
  },
  {
    question: "What goes up and down, but never moves?",
    answer: "Stairs"
  },
  {
    question: "What happened to the lion when he ate the clown?",
    answer: "He felt funny."
  },
  {
    question:
      "If a rooster lays an egg on top of the barn roof, which way will it roll?",
    answer: "It will not roll, because roosters do not lay eggs."
  },
  {
    question: "How many animals did Moses take into the ark?",
    answer: "None, because it was Noah who built and loaded the ark."
  },
  {
    question:
      "How many legs does an elephant have if you count his trunk as a leg?",
    answer:
      "Four, because calling the elephant’s trunk a leg does not make it one."
  },
  {
    question:
      "How much dirt is there in a hole that is 3 feet deep, 6 feet long, and 4 feet wide?",
    answer: "None, because a hole does not have any dirt inside."
  },
  {
    question: "What did the quilt say to the bed?",
    answer: "I’ve got you covered."
  },
  {
    question: "Why did the woman run around her bed at night?",
    answer: "To catch up on her sleep"
  },
  {
    question: "What can you never eat for breakfast?",
    answer: "Lunch or dinner"
  },
  {
    question: "What has 4 wheels and flies?",
    answer: "A garbage truck"
  },
  {
    question: "How many sides does a circle have?",
    answer: " Two, because it has an inside and an outside."
  },
  {
    question:
      "If you imagine you are in a sinking rowboat surrounded by sharks, how would you survive?",
    answer: "Stop imagining."
  },
  {
    question:
      "If ten birds are sitting in a tree and a hunter shoots one, how birds many are left in the tree?",
    answer: "None, because after one bird got shot, the rest flew away."
  },
  {
    question:
      "If a monkey, a squirrel, and a bird are racing to the top of a coconut tree, who will get the banana first?",
    answer: "None, because you cannot get a banana from a coconut tree."
  },
  {
    question: "What two words, when combined, hold the most letters?",
    answer: "Post Office"
  }
];

export { dumbQ_color, dumbQ, hindiEng_color, hindiEng };
