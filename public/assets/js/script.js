// $(window).on("load", function () {
//   $("#dialogue1").text(storyOne[0].val);
// });

// adding event listeners to user choice buttons

// $("#negativeBtn").on("click", function (req, res) {
//   // prompt negative 1 response
// });
$(document).ready(function () {
  $("#gogoGhostie").on("click", function (event) {
    event.preventDefault();
    console.log("this clicked");
    $("#interaction1-0").removeClass("hide");
  });
  $("#positiveBtn").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").removeClass("hide");
  });
  $("#negativeBtn").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-2").removeClass("hide");
  });

  // lines 16-25 have to copy/paste a few times. In on click fn, hide previous line of text, show new //

  $("#run").onclick = function () {
    // return to foyer
    window.location.href = "/";
  };

  // $("#startBtn").onclick = function () {

  // }

  storyOne = [
    {
      pos1: `Hello, {{userName}}. I’m sorry to bother you, but you looked lost. I didn’t mean to scare you.
            I just wanted to make sure you were alright. You seem...distracted. You just walked in here with 
            a dazed look. Do you need anything?`,
    },
    {
      pos2: `My name is {{ghostName}}, and this is my home. Welcome. I’m sorry for the mess, there’s only
            so much I can do around here these days. It’s been so long since I’ve had new company.`,
    },
    {
      neg2: `Oh, calm down. My name is {{ghostName}} and this is my home. Normally I would welcome visitors, please
            be kind and don’t make me change my mind.`,
    },
    {
      pos3: `I was born in {{homeTown}} but I spent most of my life in this house. My husband, Charlie, and
            I loved this home. We raised our family here. My children took their first steps right over there by the
            fireplace. I somehow got stuck here forever. You will probably meet other spirits around here somewhere, so
            make sure to stay on their good side, or you won’t get the key so you can leave. Can you help?`,
    },
    {
      neg3: `This is my home. Do not speak of it like that. I worked my whole life for this house. Are you going
         to help us or not?`,
    },
    {
      pos4: `They are other spirits like myself, who were trapped here throughout time, but we want to
            leave now. When I died in a {{faveSport}} accident, I just couldn’t let myself leave here. And now I’m stuck. Just give
            the others one of these keys and get on their good side to convince them to leave the house for good. If you
            help me, I can leave.`,
    },
    {
      neg4: `GET OUT`,
    },
  ];

  storyTwo = [
    {
      pos1: `HELLO MORTAL`,
    },
    {
      pos2: `Hahaha. I'm just messing with you. I get bored sometimes and we don't see many newcomers 'round
        here. My name is {{ghost-name2}}, and I travelled this whole country looking for ore before the railroads were
        even built.`,
    },
    {
      neg2: `Hah. Get yourself together. Why are you so scared of everything? I travelled this whole land barefoot,
        and I remember everyone being scared of Ol' {{ghost-name2}}, not the other way around!`,
    },
    {
      pos3: `AHAHAHA I spent 18 hours a day digging through the dirt and you ask why I smell bad? Of course
        I do! I came from {{city-name2}}, but I dug hard and I even owned my own mine for awhile. The people around here
        called it Ol' {{ghost-name2}}'s Mud Pit. I think we might be on top of it now. This house was never here for me
        to see it before I just kind of...showed up.`,
    },
    {
      neg3: `Of course I did! What else would I have dug for? I left {{city-name2}} to dig for stuff when I was
        {{age2}} years old. Years later, there was an accident, I think, and all of the sudden I'm stuck here in this
        fancy house.`,
    },
    {
      pos4: `Will you help me, friend? I think I'm trapped, and as much I think {{ghost-name1}} is a nice
        lady, this house isn't my own and I need to keep searching for gold.`,
    },
    {
      neg4: `I'll mine your head for gold, {{user-name}}!!!`,
    },
  ];

  userResponseRoom2 = [
    {
      pos1: "Ahhh! Hello? Who are you?",
    },
    {
      neg1: "Oh my gosh what the heck? why do you have to be so mean.",
    },
    {
      pos2: "Uh, ok. Why do you smell so bad?",
    },
    {
      neg2: "Oh, cool, did you mine gold?",
    },
    {
      pos3: "Are you trapped here? I think I can help.",
    },
    {
      neg3: "Have fun sitting here doing nothing.",
    },
  ];

  storyThree = [
    {
      pos1: `Who goes there?`,
    },
    {
      pos2: `I was one of the first people to build permanently on this patch of land. Greetings, my name is
BARNABY JENKINS. Welcome to my land. I was here when we were still a loyal colony. I came from LIVERPOOL to provide
my pious services to this wild place.`,
    },
    {
      neg2: `I am not a demon, you fool. I'm a simple, god-fearing preacher who who travelled from across the ocean to
settle this vast land with my family and provide ministry for others like us.`,
    },
    {
      pos3: `Not exactly. For a long time my wife, BARBARA, and I wandered in the overgrown potato fields
outside after our cabin finally collapsed from old age. When GERTRUDE built her house on the same land, I got stuck
inside her house. I don't know what happened to the rest of my family.`,
    },
    {
      neg3: `Do not mistake my annoyance for ill intent. I help take care of this place and I don't like visitors
disturbing the peace. I once took care of the outside fields for a long time until this house was built and I became
trapped inside.`,
    },
    {
      pos4: `Thank you. I believe they have been set free somehow. I don't know why I'm still here, but it may
have something to do with my insistence that this land is mine and only mine. In my younger days on the homestead,
we had to fight each other for resources, and maybe I wasn't so kind to my neighbors. Perhaps that's why I'm stuck.`,
    },
    {
      neg4: `Do not test me child. I will chase you away like I chased the others away.`,
    },
    {
      pos5: `I would appreciate any help. I just want to leave this house.`,
    },
    {
      neg5: `OH REALLY?`,
    },
  ];

  userResponseRoom3 = [
    {
      pos1: "Woah! Who are you?",
    },
    {
      neg1: "Ahh get away, you demon.",
    },
    {
      pos2: "Oh wow, so you've been in the house the longest?",
    },
    {
      neg2: "Okay, well demons are mean, so...",
    },
    {
      pos3: "I'm so sorry to hear that. I hope they're okay.",
    },
    {
      neg3: "Well, you can't stop me.",
    },
    {
      pos4: "It must have been a difficult life. Can I help you?",
    },
    {
      neg4: "Well, you can't really stop me.",
    },
  ];
});
