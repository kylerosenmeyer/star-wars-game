//This is a star wars game. This game is an object called "sW".

var sW = {

    //Yoda Attributes
    yoda_name: " Yoda ",
    yoda_hp: 100,
    yoda_attack: 20,
    yoda_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/yoda.gif\">",
    yoda_hero: false,
    yoda_villain: false,

    //Rey Attributes
    rey_name: " Rey ",
    rey_hp: 120,
    rey_attack: 10,
    rey_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/rey.png\">",
    rey_hero: false,
    rey_villain: false,

    //Obi-Wan Kenobi Attributes
    obi_name: " Obi Wan Kenobi ",
    obi_hp: 140,
    obi_attack: 30,
    obi_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/obi-wan.gif\">",
    obi_hero: false,
    obi_villain: false,

    //Kylo Ren Attributes
    kylo_name: " Kylo Ren ",
    kylo_hp: 150,
    kylo_attack: 25,
    kylo_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/kylo-ren.png\">",
    kylo_hero: false,
    kylo_villain: false,

    //Darth Vader Attributes
    vader_name: " Darth Vader ",
    vader_hp: 190,
    vader_attack: 40,
    vader_image: "<img class=\"char_img\" src=\"../star-wars-game/assets/images/darth-vader.gif\">",
    vader_hero: false,
    vader_villain: false,

    gameSetup: function() {

        //Yoda Character Button
        $("#choose-character").append("<button id=\"yoda\">");
        $("#yoda").append(this.yoda_name, this.yoda_image, this.yoda_hp);

        //Rey Character Button
        $("#choose-character").append("<button id=\"rey\">");
        $("#rey").append(this.rey_name, this.rey_image, this.rey_hp);

        //Obi-Wan Kenobi Character Button
        $("#choose-character").append("<button id=\"obi_wan\">");
        $("#obi_wan").append(this.obi_name, this.obi_image, this.obi_hp);

        //Kylo Ren Chacter Button
        $("#choose-character").append("<button id=\"kylo_ren\">");
        $("#kylo_ren").append(this.kylo_name, this.kylo_image, this.kylo_hp);

        //Darth Vader Character Button
        $("#choose-character").append("<button id=\"darth_vader\">");
        $("#darth_vader").append(this.vader_name, this.vader_image, this.vader_hp);
    },

    //Hero functions run the logic on the selection of the user's player

    chooseYoda: function() {
        this.yoda_hero == true;
        if ( (this.rey_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            $("#yoda").detach().appendTo("#your-character");
            $("#your-character, #charTitle2").animate({opacity: 1, duration: 1000});
            $("#charTitle1").empty().append(" Enemy Characters: ");
            this.rey_villain == true;
            this.obi_villain == true;
            this.kylo_villain == true;
            this.vader_villain == true;
        }
    },

    chooseRey: function() {
        if ( (this.yoda_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            $("#rey").detach().appendTo("#your-character");
            $("#your-character, #charTitle2").animate({opacity: 1, duration: 1000});
            $("#charTitle1").empty().append(" Enemy Characters: ");
            this.yoda_villain == true;
            this.obi_villain == true;
            this.kylo_villain == true;
            this.vader_villain == true;
        }
    },

    chooseObi: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.kylo_hero == false) && (this.vader_hero == false) ) {
            $("#obi_wan").detach().appendTo("#your-character");
            $("#your-character, #charTitle2").animate({opacity: 1, duration: 1000});
            $("#charTitle1").empty().append(" Enemy Characters: ");
            this.yoda_villain == true;
            this.rey_villain == true;
            this.kylo_villain == true;
            this.vader_villain == true;
        }
    },

    chooseKylo: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.obi_hero == false) && (this.vader_hero == false) ) {
            $("#kylo_ren").detach().appendTo("#your-character");
            $("#your-character, #charTitle2").animate({opacity: 1, duration: 1000});
            $("#charTitle1").empty().append(" Enemy Characters: ");
            this.yoda_villain == true;
            this.rey_villain == true;
            this.obi_villain == true;
            this.vader_villain == true;
        }
    },

    chooseVader: function() {
        if ( (this.yoda_hero == false) && (this.rey_hero == false) && (this.obi_hero == false) && (this.kylo_hero == false) ) {
            $("#darth_vader").detach().appendTo("#your-character");
            $("#your-character, #charTitle2").animate({opacity: 1, duration: 1000});
            $("#charTitle1").empty().append(" Enemy Characters: ");
            this.yoda_villain == true;
            this.rey_villain == true;
            this.obi_villain == true;
            this.kylo_villain == true;
        }
    },


};

//On DOM Load, get the game ready.

$(document).ready( function() {
    sW.gameSetup();
});

$("#yoda").click(function() {
    sW.chooseYoda();
    console.log(" Yoda choosen? " + sW.yoda_hero);
});



console.log(" Yoda Hero? " + sW.yoda_hero + " Rey Hero? " + sW.rey_hero + " Obi Hero? " + sW.obi_hero + " Kylo Hero? " + sW.kylo_hero + " Vader Hero? " + sW.vader_hero);
console.log("-----------------")
console.log(" Yoda Villain? " + sW.yoda_villain + " Rey Villain? " + sW.rey_villain + " Obi Villain? " + sW.obi_villain + " Kylo Villain? " + sW.kylo_villain + " Vader Villain? " + sW.vader_villain);





