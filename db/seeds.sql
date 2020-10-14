USE ghostStories_db;

CREATE TABLE stories
(
    story_id int NOT NULL
    AUTO_INCREMENT,
    positive1 TEXT,
    negative1 TEXT,
    positive2 TEXT,
    negative2 TEXT,
    Primary Key
    (story_id)
);


    INSERT INTO stories
        (positive1, negative1, positive2, negative2)
    VALUES
        ("Hello, {{user-name}}. I’m sorry to bother you, but you looked lost. I didn’t mean to scare you. I just wanted to make
        sure you were alright. You seem...distracted. You just walked in here with a dazed look. Do you need anything?", " ", "HELLO MORTAL", " "),
        ("My name is {{ghost-name}}, and this is my home. Welcome. I’m sorry for the mess, there’s only
        so much I can do around here these days. It’s been so long since I’ve had new company.", "Oh, calm down. My name is [ghost-name] and this is my home. Normally I would welcome visitors, please be kind and don’t make me change my mind.", "Hahaha. I'm just messing with you. I get bored sometimes and we don't see many newcomers 'round here. My name is {{ghost-name2}}, and I travelled this whole country looking for ore before the railroads were even built.", "Hah. Get yourself together. Why are you so scared of everything? I travelled this whole land barefoot, and I remember everyone being scared of Ol' {{ghost-name2}}, not the other way around!"),
        ("I was born in {{city-name}} but I spent most of my life in this house. My husband, [name], and I
        loved this home. We raised our family here. My children took their first steps right over there by the
        fireplace. I somehow got stuck here forever. You will probably meet other spirits around here somewhere, so make
        sure to stay on their good side, or you won’t get the key so you can leave. Can you help?", "This is my home. Do not speak of it like that. I worked my whole life for this house. Are you going to help us or not?", "AHAHAHA I spent 18 hours a day digging through the dirt and you ask why I smell bad? Of course I do! I came from {{city-name2}}, but I dug hard and I even owned my own mine for awhile. The people around here called it Ol' {{ghost-name2}}'s Mud Pit. I think we might be on top of it now. This house was never here for me to see it before I just kind of...showed up.", "Of course I did! What else would I have dug for? I left {{city-name2}} to dig for stuff when I was {{age2}} years old. Years later, there was an accident, I think, and all of the sudden I'm stuck here in this fancy house."),
        ("They are other spirits like myself, who were trapped here throughout time, but we want to leave
        now. When I died in a [fav-sport] accident, I just couldn’t let myself leave here. And now I’m stuck. Just give
        the
        others one of these keys and get on their good side to convince them to leave the house for good. If you help
        me, I can leave.", "GET OUT", "Will you help me, friend? I think I'm trapped, and as much I think {{ghost-name1}} is a nice lady, this house isn't my own and I need to keep searching for gold.", "I'll mine your head for gold, {{user-name}}!!!");
