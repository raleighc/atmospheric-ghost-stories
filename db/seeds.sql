USE ghostStories_db;

CREATE TABLE story_one
(
    story_id int NOT NULL
    AUTO_INCREMENT,
    positive TEXT,
    negative TEXT, 
    Primary Key
    (story_id)
);


    INSERT INTO story_one
        (positive, negative)
    VALUES
        ("Hello, {{user-name}}. I’m sorry to bother you, but you looked lost. I didn’t mean to scare you. I just wanted to make
        sure you were alright. You seem...distracted. You just walked in here with a dazed look. Do you need anything?", " "),
        ("My name is {{ghost-name}}, and this is my home. Welcome. I’m sorry for the mess, there’s only
        so much I can do around here these days. It’s been so long since I’ve had new company.", "Oh, calm down. My name is [ghost-name] and this is my home. Normally I would welcome visitors, please
        be kind and don’t make me change my mind."),
        ("I was born in {{city-name}} but I spent most of my life in this house. My husband, [name], and I
        loved this home. We raised our family here. My children took their first steps right over there by the
        fireplace. I somehow got stuck here forever. You will probably meet other spirits around here somewhere, so make
        sure to stay on their good side, or you won’t get the key so you can leave. Can you help?", "This is my home. Do not speak of it like that. I worked my whole life for this house. Are you going to
        help us or not?"),
        ("They are other spirits like myself, who were trapped here throughout time, but we want to leave
        now. When I died in a [fav-sport] accident, I just couldn’t let myself leave here. And now I’m stuck. Just give
        the
        others one of these keys and get on their good side to convince them to leave the house for good. If you help
        me, I can leave.", "GET OUT");
