
let coolVideos = [
    {
        gifText: "VERY FANCY DANCING MAN",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fw2d.gif?v=1572646130149",
        id: "w2d",
        checkboxId: "dancingmancheck",
        topOffset: "bottom-3%",
        leftOffset: "right-3%",
        size: "9%"
    },
    {
        gifText: "FUNNY DANCING FROG xd",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fpeepodance.gif?v=1572646132936",
        id: "peepoDance",
        checkboxId: "peepoCheck",
        topOffset: "3%",
        leftOffset: "3%",
        size: "10%"
    },
    {
        gifText: "COOL BEAR DANCE",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbearsdance.gif?v=1572646132075",
        id: "bearDance",
        checkboxId: "bearCheck",
        topOffset: "bottom-0px",
        leftOffset: "40%",
        size: "20%"
    },
    {
        gifText: "BLASTOISE PLAYS PIANO",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fblastoisedance.gif?v=1572646133221",
        id: "blastoiseDance",
        checkboxId: "pokeCheck",
        topOffset: "20%",
        leftOffset: "3%",
        size: "14%"
    },
    {
        gifText: "HHHHHHHHH",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fh.gif?v=1572646130351",
        id: "hDance",
        checkboxId: "hCheck",
        topOffset: "3%",
        leftOffset: "right-3%",
        size: "10%"
    },
    {
        gifText: "ORANGE SHIRT KID!!!",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Forangedance.gif?v=1572646131199",
        id: "orangeDance",
        checkboxId: "orangeCheck",
        topOffset: "20%",
        leftOffset: "right-20%",
        size: "10%"
    },
    {
        gifText: "HIGH SPEED PANTS MAN",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fpantsman3.gif?v=1572646131718",
        id: "pantsDance",
        checkboxId: "pantsCheck",
        topOffset: "30%",
        leftOffset: "right-3%",
        size: "10%"
    },
    {
        gifText: "ANOTHER FROGGE HEHE",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fpepedance2.gif?v=1572646130766",
        id: "pepeDance",
        checkboxId: "pepeCheck",
        topOffset: "3%",
        leftOffset: "45%",
        size: "10%"
    },
    {
        gifText: "BEAR, OF THE POLAR VARIETY",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fpolardancet.gif?v=1572646130661",
        id: "polarDance",
        checkboxId: "polarCheck",
        topOffset: "30%",
        leftOffset: "40%",
        size: "20%"
    },
    {
        gifText: "COLOR CHANGING SHIRT MAN DANCES",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Frainbowdance.gif?v=1572646131278",
        id: "ranbowDance",
        checkboxId: "ranbowCheck",
        topOffset: "60%",
        leftOffset: "right-20%",
        size: "10%"
    },
    {
        gifText: "SPIDER MAN DANCES TO ANY SONG",
        src: "https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fspiderdance.gif?v=1572646130520",
        id: "spiderDance",
        checkboxId: "spiderCheck",
        topOffset: "3%",
        leftOffset: "right-20%",
        size: "10%"
    }
];

let songData = [
    {
        value: "turbo",
        text: "Super Turbo Heat Dance",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fheatdance.mp3?v=1572912573763")
    },
    {
        value: "athletic",
        text: "Athletic Theme - Super Mario World",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fathletic.mp3?v=1572912576319")
    },
    {
        value: "deltarune",
        text: "The World Revolving",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fdeltarune.mp3?v=1572912573702")
    },
    {
        value: "bigapple",
        text: "Big Apple, 3am",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbigapple.mp3?v=1572912574428")
    },
    {
        value: "megalovania",
        text: "Megalovania",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fmegalovania.mp3?v=1572912572685")
    },
    {
        value: "oatmeal",
        text: "1 2 Oatmeal",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2F12oatmeal.mp3?v=1572912576159")
    },
    {
        value: "bodywash",
        text: "Terry's Athletic Bodywash",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fathleticbodywash.mp3?v=1572912576312")
    },
    {
        value: "countdown",
        text: "The Final Countdown",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fcountdown.mp3?v=1572912576395")
    },
    {
        value: "yogurt",
        text: "Kirby - Yogurt Yard",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fyogurt.mp3?v=1572912575309")
    },
    {
        value: "brass",
        text: "Ali-A Intro (Brass)",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbrass.mp3?v=1572912573614")
    },
    {
        value: "brother",
        text: "Brotherman Bill",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbrothermanbill.mp3?v=1572912574306")
    },
    {
        value: "moscow",
        text: "Moscow",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fmoscow.mp3?v=1572912575835")
    },
    {
        value: "hamantha",
        text: "The Ballad of Hamantha",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fhamantha.mp3?v=1572912575350")
    },
    {
        value: "killchop",
        text: "666 Kill Chop Deluxe",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fkillchop.mp3?v=1572912572987")
    },
    {
        value: "overture",
        text: "William Tell Overture - Finale",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Foverture.mp3?v=1572912574187")
    },
    {
        value: "rasputin",
        text: "Love The Way You Move",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Frasputin.mp3?v=1572912576062")
    },
    {
        value: "kirby",
        text: "Kirby Right Back at Ya Theme",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fkirby.mp3?v=1572912574981")
    },
    {
        value: "dedede",
        text: "Dedede's Theme",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fdedede.mp3?v=1572912575923")
    },
    {
        value: "parappa",
        text: "Instructor Mooselini's Car Rap",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fparappa.mp3?v=1572912577735")
    },
    {
        value: "wowwow",
        text: "Wow wow",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fwowwow.mp3?v=1572912573907")
    },
    {
        value: "nightofnights",
        text: "Night of Nights",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fnightofnights.mp3?v=1572912575081")
    },
    {
        value: "gourmet",
        text: "Gourmet Race",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fgourmet.mp3?v=1572912573294")
    },
    {
        value: "scatman",
        text: "Scatman's World",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fscatmansworld.mp3?v=1572912575985")
    },
    {
        value: "rockefeller",
        text: "Rockefeller Street - Nightcore",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Frockefeller.mp3?v=1572912575559")
    },
    {
        value: "vengabus",
        text: "Vengabus",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fvengabus.mp3?v=1572912576796")
    },
    {
        value: "flamingo",
        text: "Kero Kero Bonito - Flamingo",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fflamingo.mp3?v=1572912574118")
    },
    {
        value: "bruhtherman",
        text: "Bruh-therman Bill",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbruthermanbill2.mp3?v=1572646074164")
    },
    {
        value: "congratulations",
        text: "Congratulations!!!",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fcongratulations.mp3?v=1574031832765")
    },
    {
        value: "doom",
        text: "At Doom's Gate",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fatdoomsgate.mp3?v=1574031899383")
    },
    {
        value: "slamjam",
        text: "Dunkstein and Slamough",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fdunksteinandslamough.mp3?v=1574031945179")
    },
    {
        value: "gas",
        text: "Gas gas gas",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fgasgasgas.mp3?v=1574032094677")
    },
    {
        value: "bobomb",
        text: "Bob-omb Battlefield",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbobomb.mp3?v=1574032195263")
    },
    {
        value: "brainpower",
        text: "Brain Power",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fbrainpower.mp3?v=1574036254904")
    },
    {
        value: "dothemario",
        text: "Do the Mario!",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fdothemario.mp3?v=1574036332557")
    },
    {
        value: "loudnigra",
        text: "aaaaAAAAAAAAAAAAAAAAAAAAA",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Floudnigra.mp3?v=1574036421047")
    },
    {
        value: "mariocanyon",
        text: "Mario Canyon",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fmariocanyon.mp3?v=1574036450238")
    },
    {
        value: "pepsiman",
        text: "Pepsi Man",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fpepsiman.mp3?v=1574036549429")
    },
    {
        value: "sandcanyon",
        text: "Sand Canyon",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fsandcanyon.mp3?v=1574036597424")
    },
    {
        value: "workharder",
        text: "Work Harder",
        sound: new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fworkharder.mp3?v=1574036641249")
    }
];

const sfx = {
    "speen": new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fspeen.mp3?v=1574036736213"),
    "boing": new buzz.sound("https://cdn.glitch.com/b2f79144-0257-4971-bc48-d3cb0405d952%2Fboing.mp3?v=1574036730657")
};
