//This is a star wars game. This game is an object called "sW".

var sW = {

    //Yoda Attributes
    yoda_name: " Yoda ",
    yoda_hp: 98,
    yoda_attack: 4,
    yoda_counter: 4.5,
    yoda_image: "<img class=\"char_img\" id=\"yoda_img\" src=\"../star-wars-game/assets/images/yoda.gif\">",
    yoda_hero: false,
    yoda_villain: false,

    //Rey Attributes
    rey_name: " Rey ",
    rey_hp: 86,
    rey_attack: 3,
    rey_counter: 10,
    rey_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/rey.png\">",
    rey_hero: false,
    rey_villain: false,

    //Obi-Wan Kenobi Attributes
    obi_name: " Obi Wan Kenobi ",
    obi_hp: 88,
    obi_attack: 4,
    obi_counter: 4,
    obi_image: "<img class=\"char_img\" id=\"obi_img\" src=\"../star-wars-game/assets/images/obi-wan.gif\">",
    obi_hero: false,
    obi_villain: false,

    //Kylo Ren Attributes
    kylo_name: " Kylo Ren ",
    kylo_hp: 96,
    kylo_attack: 4.5,
    kylo_counter: 6.5,
    kylo_image: "<img class=\"char_img\" id=\"kylo_img\" src=\"../star-wars-game/assets/images/kylo-ren.png\">",
    kylo_hero: false,
    kylo_villain: false,

    //Darth Vader Attributes
    vader_name: " Darth Vader ",
    vader_hp: 90,
    vader_attack: 5,
    vader_counter: 8,
    vader_image: "<img class=\"char_img\" id=\"vader_img\" src=\"../star-wars-game/assets/images/darth-vader.gif\">",
    vader_hero: false,
    vader_villain: false,

    hero_array: [],

    villain_array: [],

    hp_array: [],

    attack_increment: [],

    attack_array: [],

    counter_array: [],

    character_array: [],

    wins_array: [],



    gameSetup: function() {

        //Yoda Character Button (Note that "On the fly" buttons caused problems in later steps, so they are deactivated here).
        // $("#choose-character").append("<button id=\"yoda\">");
        $("#yoda").append(this.yoda_name, this.yoda_image, "HP " + this.yoda_hp);

        //Rey Character Button
        // $("#choose-character").append("<button id=\"rey\">");
        $("#rey").append(this.rey_name, this.rey_image,  "HP " + this.rey_hp);

        //Obi-Wan Kenobi Character Button
        // $("#choose-character").append("<button id=\"obi_wan\">");
        $("#obi_wan").append(this.obi_name, this.obi_image, "HP " + this.obi_hp);

        //Kylo Ren Chacter Button
        // $("#choose-character").append("<button id=\"kylo_ren\">");
        $("#kylo_ren").append(this.kylo_name, this.kylo_image, "HP " + this.kylo_hp);

        //Darth Vader Character Button
        // $("#choose-character").append("<button id=\"darth_vader\">");
        $("#darth_vader").append(this.vader_name, this.vader_image, "HP " + this.vader_hp);

        //Fill the character array for later use
        this.character_array.push(this.yoda_name, this.rey_name, this.obi_name, this.kylo_name, this.vader_name)

        //Fill the HP array for later use
        this.hp_array.push(this.yoda_hp, this.rey_hp, this.obi_hp, this.kylo_hp, this.vader_hp);
        console.log(this.hp_array);

        //Fill the Attack array for later use
        this.attack_array.push(this.yoda_attack, this.rey_attack, this.obi_attack, this.kylo_attack, this.vader_attack)

        //Fill the Attack Increment array for later use
        this.attack_increment.push(this.yoda_attack, this.rey_attack, this.obi_attack, this.kylo_attack, this.vader_attack)
        console.log(this.attack_array);

        //Fill the Counter Attack array for later use
        this.counter_array.push(this.yoda_counter, this.rey_counter, this.obi_counter, this.kylo_counter, this.vader_counter);
    },

    //Hero functions run the logic on the selection of the user's player, marking that player as the hero.

    chooseYoda: function() {
        if ( (this.rey_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            this.yoda_hero = true;
            $("#yoda").detach().appendTo("#your-character");
            $("#rey, #obi_wan, #kylo_ren, #darth_vader").detach().appendTo("#enemy-characters");
            $("#enemy-characters, #your-character, #charTitle2, #charTitle3, #btn-reset").animate({opacity: 1, duration: 1000});
            $("#charTitle1").slideUp();
            this.hero_array.push(this.yoda_hero, this.rey_hero, this.obi_hero, this.kylo_hero, this.vader_hero);
            // console.log(this.hero_array);
        }
    },

    chooseRey: function() {
        if ( (this.yoda_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            this.rey_hero = true;
            $("#rey").detach().appendTo("#your-character");
            $("#yoda, #obi_wan, #kylo_ren, #darth_vader").detach().appendTo("#enemy-characters");
            $("#enemy-characters, #your-character, #charTitle2, #charTitle3, #btn-reset").animate({opacity: 1, duration: 1000});
            $("#charTitle1").slideUp();
            this.hero_array.push(this.yoda_hero, this.rey_hero, this.obi_hero, this.kylo_hero, this.vader_hero);
            // console.log(this.hero_array);
        }
    },

    chooseObi: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            this.obi_hero = true;
            $("#obi_wan").detach().appendTo("#your-character");
            $("#yoda, #rey, #kylo_ren, #darth_vader").detach().appendTo("#enemy-characters");
            $("#enemy-characters, #your-character, #charTitle2, #charTitle3, #btn-reset").animate({opacity: 1, duration: 1000});
            $("#charTitle1").slideUp();
            this.hero_array.push(this.yoda_hero, this.rey_hero, this.obi_hero, this.kylo_hero, this.vader_hero);
            // console.log(this.hero_array);
        }
    },

    chooseKylo: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.obi_hero == false) && (this.vader_hero == false) ) {
            this.kylo_hero = true;
            $("#kylo_ren").detach().appendTo("#your-character");
            $("#yoda, #rey, #obi_wan, #darth_vader").detach().appendTo("#enemy-characters");
            $("#enemy-characters, #your-character, #charTitle2, #charTitle3, #btn-reset").animate({opacity: 1, duration: 1000});
            $("#charTitle1").slideUp();
            this.hero_array.push(this.yoda_hero, this.rey_hero, this.obi_hero, this.kylo_hero, this.vader_hero);
            // console.log(this.hero_array);
        }
    },

    chooseVader: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) ) {
            this.vader_hero = true;
            $("#darth_vader").detach().appendTo("#your-character");
            $("#yoda, #rey, #obi_wan, #kylo_ren").detach().appendTo("#enemy-characters");
            $("#enemy-characters, #your-character, #charTitle2, #charTitle3, #btn-reset").animate({opacity: 1, duration: 1000});
            $("#charTitle1").slideUp();
            this.hero_array.push(this.yoda_hero, this.rey_hero, this.obi_hero, this.kylo_hero, this.vader_hero);
            // console.log(this.hero_array);
        }
    },

    //Villain functions that run the logic on selection of an enemy to fight, marking that player as a villain.

    fightYoda: function() {
        if ( (this.yoda_hero == false) && (this.rey_villain == false) && (this.obi_villain == false) && (this.kylo_villain == false) && (this.vader_villain == false) ) {
            this.yoda_villain = true;
            $("#yoda").detach().appendTo("#fight");
            $("#fight, #charTitle4, #charTitle5, #reset, #attack").animate({opacity: 1, duration: 1000});
            this.villain_array.push(this.yoda_villain, this.rey_villain, this.obi_villain, this.kylo_villain, this.vader_villain);
            $("#attack").slideDown();
            $("#winText, #statistics1, #statistics2").text("");
            // console.log(this.villain_array);
        }
    },

    fightRey: function() {
        if ( (this.rey_hero == false) && (this.yoda_villain == false) && (this.obi_villain == false) && (this.kylo_villain == false) && (this.vader_villain == false) ) {
            this.rey_villain = true;
            $("#rey").detach().appendTo("#fight");
            $("#fight, #charTitle4, #charTitle5, #reset, #attack").animate({opacity: 1, duration: 1000});
            this.villain_array.push(this.yoda_villain, this.rey_villain, this.obi_villain, this.kylo_villain, this.vader_villain);
            $("#attack").slideDown();
            $("#winText, #statistics1, #statistics2").text("");
            // console.log(this.villain_array);
        }

    },

    fightObi: function() {
        if ( (this.obi_hero == false) && (this.yoda_villain == false) && (this.rey_villain == false) && (this.kylo_villain == false) && (this.vader_villain == false) ) {
            this.obi_villain = true;
            $("#obi_wan").detach().appendTo("#fight");
            $("#fight, #charTitle4, #charTitle5, #reset, #attack").animate({opacity: 1, duration: 1000});
            this.villain_array.push(this.yoda_villain, this.rey_villain, this.obi_villain, this.kylo_villain, this.vader_villain);
            $("#attack").slideDown();
            $("#winText, #statistics1, #statistics2").text("");
            // console.log(this.villain_array);
        }

    },

    fightKylo: function() {
        if ( (this.kylo_hero == false) && (this.yoda_villain == false) && (this.rey_villain == false) && (this.obi_villain == false) && (this.vader_villain == false) ) {
            this.kylo_villain = true;
            $("#kylo_ren").detach().appendTo("#fight");
            $("#fight, #charTitle4, #charTitle5, #reset, #attack").animate({opacity: 1, duration: 1000});
            this.villain_array.push(this.yoda_villain, this.rey_villain, this.obi_villain, this.kylo_villain, this.vader_villain);
            $("#attack").slideDown();
            $("#winText, #statistics1, #statistics2").text("");
            // console.log(this.villain_array);
        }

    },

    fightVader: function() {
        if ( (this.vader_hero == false) && (this.yoda_villain == false) && (this.rey_villain == false) && (this.obi_villain == false) && (this.kylo_villain == false) ) {
            this.vader_villain = true;
            $("#darth_vader").detach().appendTo("#fight");
            $("#fight, #charTitle4, #charTitle5, #reset, #attack").animate({opacity: 1, duration: 1000});
            this.villain_array.push(this.yoda_villain, this.rey_villain, this.obi_villain, this.kylo_villain, this.vader_villain);
            $("#attack").slideDown();
            $("#winText, #statistics1, #statistics2").text("");
            // console.log(this.villain_array);
        }
    },

    attack: function() {
        $("html, body").animate({scrollTop:500}, "slow");

        //The first half of the attack subracts your attack from the villain's life, and reports the results
        this.hp_array[this.villain_array.indexOf(true)] = this.hp_array[this.villain_array.indexOf(true)] - this.attack_array[this.hero_array.indexOf(true)];
        $("#statistics1").text("You hit " + this.character_array[this.villain_array.indexOf(true)] + " for " + this.attack_array[this.hero_array.indexOf(true)] + " points!")

        //The second half of the attack subtracts the villain's attack from your life, and reports the results
        this.hp_array[this.hero_array.indexOf(true)] = this.hp_array[this.hero_array.indexOf(true)] - this.counter_array[this.villain_array.indexOf(true)];
        $("#statistics2").text("You got hit by " + this.character_array[this.villain_array.indexOf(true)] + " for " + this.counter_array[this.villain_array.indexOf(true)] + " points!")

        // update the health and attack stats of the character cards
        this.yoda_hp = this.hp_array[0];
        this.yoda_attack = this.attack_array[0]

        this.rey_hp = this.hp_array[1];
        this.rey_attack = this.attack_array[1];

        this.obi_hp = this.hp_array[2];
        this.obi_attack = this.attack_array[2];

        this.kylo_hp = this.hp_array[3];
        this.kylo_attack = this.attack_array[3];

        this.vader_hp = this.hp_array[4];
        this.vader_attack = this.attack_array[4];

        $("#yoda").empty().append(this.yoda_name, this.yoda_image, "HP " + Math.abs(this.yoda_hp));
        $("#rey").empty().append(this.rey_name, this.rey_image, "HP " + Math.abs(this.rey_hp));
        $("#obi_wan").empty().append(this.obi_name, this.obi_image, "HP " + Math.abs(this.obi_hp));
        $("#kylo_ren").empty().append(this.kylo_name, this.kylo_image, "HP " + Math.abs(this.kylo_hp));
        $("#darth_vader").empty().append(this.vader_name, this.vader_image, "HP " + Math.abs(this.vader_hp));

        //What happens if you die

        if ( this.hp_array[this.hero_array.indexOf(true)] <= 0 ) {
            $("#attack").slideUp("slow");
            $("#winText").text("You were defeated! Press restart to play again.");
            $("#statistics1, #statistics2").text("");

            //What happens if the villain dies

        } else if ( this.hp_array[this.villain_array.indexOf(true)] <= 0 ) {

            if ( this.villain_array.indexOf(true) == 0 ) {
                $("#yoda").slideUp("slow");
                this.villain_array.splice(0,5);
                this.yoda_villain = false;
                $("#winText").text("You defeated" + this.yoda_name + "! Select another enemy.");
                $("#statistics1, #statistics2").text("");
                this.wins_array.push("defeated Yoda");

            } else if ( this.villain_array.indexOf(true) == 1 ) {
                $("#rey").slideUp("slow");
                this.villain_array.splice(0,5);
                this.rey_villain = false;
                $("#winText").text("You defeated" + this.rey_name + "! Select another enemy.");
                $("#statistics1, #statistics2").text("");
                this.wins_array.push("defeated Rey");

            } else if ( this.villain_array.indexOf(true) == 2 ) {
                $("#obi_wan").slideUp("slow");
                this.villain_array.splice(0,5);
                this.obi_villain = false;
                $("#winText").text("You defeated" + this.obi_name + "! Select another enemy.");
                $("#statistics1, #statistics2").text("");
                this.wins_array.push("defeated Obi Wan");

            } else if ( this.villain_array.indexOf(true) == 3 ) {
                $("#kylo_ren").slideUp("slow");
                this.villain_array.splice(0,5);
                this.kylo_villain = false;
                $("#winText").text("You defeated" + this.kylo_name + "! Select another enemy.");
                $("#statistics1, #statistics2").text("");
                this.wins_array.push("defeated Kylo Ren");

            } else if ( this.villain_array.indexOf(true) == 4 ) {
                $("#darth_vader").slideUp("slow");
                this.villain_array.splice(0,5);
                this.vader_villain = false;
                $("#winText").text("You defeated" + this.vader_name + "! Select another enemy.");
                $("#statistics1, #statistics2").text("");
                this.wins_array.push("defeated Darth Vader");
            }

            $("#attack").slideUp("slow");

            //What happens at the final battle
            
            if ( this.wins_array.length == 3 ) {
                $("#charTitle2").text("Final Battle");
            }

            //What happens if you defeat all enemies
            
            if ( this.wins_array.length == 4 ) {
            $("#statistics1, #statistics2").text("");
            $("#winText").text("You won the game! There are no more enemies. Press restart to play again.").css("font-size", "24px").css("margin-bottom", "40px").css("padding", "10px");

            if ( this.hero_array[0] == true ) {
                $("#winText").css("border", "1px solid forestgreen").css("box-shadow", "0px 0px 40px forestgreen");
            } else if ( this.hero_array[1] == true ) {
                $("#winText").css("border", "1px solid darkblue").css("box-shadow", "0px 0px 40px darkblue");
            } else if ( this.hero_array[2] == true ) {
                $("#winText").css("border", "1px solid purple").css("box-shadow", "0px 0px 40px purple");
            } else if ( this.hero_array[3] == true ) {
                $("#winText").css("border", "1px solid crimson").css("box-shadow", "0px 0px 40px crimson");
            } else if ( this.hero_array[4] == true ) {
                $("#winText").css("border", "1px solid darkred").css("box-shadow", "0px 0px 40px darkred");
            }
            
            }
        }

        //This increases your attack power.
        this.attack_array[this.hero_array.indexOf(true)] = this.attack_array[this.hero_array.indexOf(true)] + this.attack_increment[this.hero_array.indexOf(true)];

    },

    resetGame: function() {

        $("html, body").animate({scrollTop:0}, "slow");

        //Yoda Attributes
        this.yoda_hp = 98;
        this.yoda_attack = 4;
        this.yoda_hero = false;
        this.yoda_villain = false;

        //Rey Attributes
        this.rey_hp = 86;
        this.rey_attack= 3;
        this.rey_hero = false;
        this.rey_villain = false;

        //Obi-Wan Kenobi Attributes
        this.obi_hp = 88;
        this.obi_attack = 4;
        this.obi_hero = false;
        this.obi_villain = false;

        //Kylo Ren Attributes
        this.kylo_hp = 96;
        this.kylo_attack = 4.5;
        this.kylo_hero = false;
        this.kylo_villain = false;

        //Darth Vader Attributes
        this.vader_hp = 90;
        this.vader_attack = 5;
        this.vader_hero = false;
        this.vader_villain = false;

        //Move the cards back to starting position
        $("#yoda").detach().appendTo("#choose-character");
        $("#rey").detach().appendTo("#choose-character");
        $("#obi_wan").detach().appendTo("#choose-character");
        $("#kylo_ren").detach().appendTo("#choose-character");
        $("#darth_vader").detach().appendTo("#choose-character");

        //Reset the display of the cards
        $("#yoda").empty().append(this.yoda_name, this.yoda_image, this.yoda_hp).slideDown("slow");
        $("#rey").empty().append(this.rey_name, this.rey_image, this.rey_hp).slideDown("slow");
        $("#obi_wan").empty().append(this.obi_name, this.obi_image, this.obi_hp).slideDown("slow");
        $("#kylo_ren").empty().append(this.kylo_name, this.kylo_image, this.kylo_hp).slideDown("slow");
        $("#darth_vader").empty().append(this.vader_name, this.vader_image, this.vader_hp).slideDown("slow");

        //Reset the text and button displays
        $("#your-character, #enemy-characters, #fight, #attack, #btn-reset, #charTitle4").animate({opacity: 0, duration: 1000});
        $("#charTitle1").slideDown();
        $("#winText").text("").css("border", "none").css("box-shadow", "none").css("font-size", "16px");

        //Reset all Arrays as they are on game Setup
        this.hero_array.splice(0,5);
        this.villain_array.splice(0,5);
        this.hp_array.splice(0,5);
        this.attack_array.splice(0,5);
        this.character_array.splice(0,5);
        this.wins_array.splice(0,4);

        this.character_array.push(this.yoda_name, this.rey_name, this.obi_name, this.kylo_name, this.vader_name)
        this.hp_array.push(this.yoda_hp, this.rey_hp, this.obi_hp, this.kylo_hp, this.vader_hp);
        this.attack_array.push(this.yoda_attack, this.rey_attack, this.obi_attack, this.kylo_attack, this.vader_attack)
    },


};

//On DOM Load, get the game ready.

$(document).ready( function() {
    sW.gameSetup();
});


//When choosing the character to fight with, excecute the corresponding "hero code"

$("#yoda").click(function() {

    sW.chooseYoda();
    
});

$("#rey").click(function() {

    sW.chooseRey();
    
});

$("#obi_wan").click(function() {

    sW.chooseObi();

});

$("#kylo_ren").click(function() {

    sW.chooseKylo();
    
});

$("#darth_vader").click(function() {

    sW.chooseVader();
    
});

//When choosing a charcter to fight, execute the corresponding "fight code"

$("#yoda").click(function() {

    sW.fightYoda();
   
});

$("#rey").click(function() {

    sW.fightRey();

});

$("#obi_wan").click(function() {

    sW.fightObi();

});

$("#kylo_ren").click(function() {

    sW.fightKylo();

});

$("#darth_vader").click(function() {

    sW.fightVader();

});

//This executes the fight logic

$("#attack").click(function() {

    sW.attack();

})

//This executes the game rest
$("#btn-reset").click(function() {

    sW.resetGame();
    

})




console.log(" Yoda Hero? " + sW.yoda_hero + " Rey Hero? " + sW.rey_hero + " Obi Hero? " + sW.obi_hero + " Kylo Hero? " + sW.kylo_hero + " Vader Hero? " + sW.vader_hero);
console.log("-----------------");
console.log(" Yoda Villain? " + sW.yoda_villain + " Rey Villain? " + sW.rey_villain + " Obi Villain? " + sW.obi_villain + " Kylo Villain? " + sW.kylo_villain + " Vader Villain? " + sW.vader_villain);
console.log("-----------------");





