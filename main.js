alert("Yoooooo we got some serious work to do. Let's put on some music and get down to business.");

var genre = prompt("What kind of music are you in the style for? Rock? Hip-hop? Country? Or something else?").toLowerCase();
if (genre === "rock") {
  var era = prompt("Hell yeah. Something newer? Something old? Don't care?").toLowerCase();
  if (era === "newer") {
    var style = prompt("Sounds good. Something garagey? Something romantic? Or something that really rocks?").toLowerCase();
    if (style === "garagey") {
      alert("Put on that Courtney Barnett record.");
    }
    else if (style === "romantic") {
      alert("Alright. Let's put on some Father John Misty.");
    }
    else if (style === "really rocks") {
      alert("Young & Young Manhood.")
    }
    else {
      alert("Well, there's always Carroll...");
    }
  }
  else if (era === "old") {
    var style = prompt("Sounds good. Something hard? Something bluesy? Or something poppy?").toLowerCase();
    if (style === "hard") {
      alert("THIN LIZZY. Or Sabbath Vol. 4  \\m/ \\m/");
    }
    else if (style === "bluesy") {
      alert("Stones. Sticky Fingers.");
    }
    else if (style === "poppy"){
      alert("Beatles - duh! Let's do something earlier like Help. Or Rumours if you're all Beatled out.");
    }
    else {
      alert("Just put the Beatles on and shut up.");
    }
  }
  else {
    var style = prompt("Hmm.. well, what are you in the style for? Something laidback? Something with guitars? Something trippy?").toLowerCase();
    if (style === "laidback") {
      alert("Put on some Mac Demarco and let it ride.");
    }
    else if (style === "with guitars") {
      alert("Black Keys or the Strokes or something");
    }
    else if (style === "trippy") {
      alert("~~T~A~M~E~~~I~M~P~A~L~A~~~B~R~O~~");
    }
    else {
      alert("Fuck, I dunno. Just put on Little Joy or something.");
    }
  }
}

else if (genre === "hip-hop") {
  var era = prompt("Alright. Something new? Something classic? Or just more Drake?").toLowerCase();
  if (era === "new") {
    var style = prompt("Something hard? Something wild? Or do you wanna try Future again?").toLowerCase();
    if (style === "hard") {
      alert("Go with Freddie Gibbs. Pinata or maybe that new one.");
    }
    else if (style === "wild") {
      alert("Young Thug it is. ssKRRRRRRRRRRrrr");
    }
    else if (style === "future"){
      alert("DS2, or the Drake one.");
    }
    else {
      alert("We both know you wanna listen to Drake. Just do it.");
    }
  }
  else if (era === "classic"){
    var style = prompt("Tight. You want something jazzy? Soulful? Funky?").toLowerCase();
    if (style === "jazzy") {
      alert("Tribe, baby. Midnight Marauders.");
    }
    else if (style === "soulful") {
      alert("Early Kanye. Late Registration?");
    }
    else if (style === "funky") {
      alert("SOUTHERNPLAYALISTICADILLACMUSIK.");
    }
    else {
      alert("AQUEMINI. OUTKAST ALL DAY.");
    }
  }
  else if (era === "more drake"){
    var style = prompt("Yeah, that's what I thought. What kind of Drake? Hungry Drake? Angry Drake? Vengeful Drake?").toLowerCase();
    if (style === "hungry drake") {
      alert("Take Care or Nothing Was The Same");
    }
    else if (style === "angry drake") {
      alert("IF YOU'RE READING THIS IT'S TOO LATE. 10 BAND$$$");
    }
    else if (style === "vengeful drake") {
      alert("Looks like we goin baaaack to back");
    }
    else {
      alert("1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n1-800-HOTLINE-BLING\n");
    }
  }
  else {
    alert("Drake. You want to listen to Drake.");
  }
}
else if (genre === "country") {
  var era = prompt("Alright. Something new? Something classic? Or Justin Townes Earle again?").toLowerCase();
  if (era === "new") {
    var style = prompt("Alright, new. Something sad? Something rock-y? Some outlaw country?").toLowerCase();
    if (style === "sad") {
      alert("Got it. Let's put on the Ryan Adams. Or Jason Isbell.");
    }
    else if (style === "rock-y") {
      alert("How about some Wilco? Or Old 97's?");
    }
    else if (style === "outlaw") {
      alert("Try the new Chris Stapleton again.");
    }
    else {
      alert("You know you wanna listen to JTE. Go ahead and put on The Good Life.");
    }
  }
  else if (era === "classic"){
    var style = prompt("Always good. Honky tonk? Outlaw? Or something more rockabilly?").toLowerCase();
    if (style === "honky tonk") {
      alert("Hank Williams");
    }
    else if (style === "outlaw") {
      alert("Hank Williams, Jr.");
    }
    else if (style === "rockabilly") {
      alert("Does Elvis count? If not, Johnny Cash.");
    }
    else {
      alert("Townes Van Zandt. Live at the Old Quarter.");
    }
  }
  else if (era === "jte again") {
    var style = prompt("Jesus, ok. What kind of JTE? Folky JTE? Classic JTE? Rock-y JTE?").toLowerCase();
    if (style === "folky jte") {
      alert("Put on Yuma and let it roll.");
    }
    else if (style === "classic jte") {
      alert("The Good Life + Midnight at the Movies = The Good Life");
    }
    else if (style === "rock-y jte") {
      alert("Harlem River Blues it is.");
    }
    else {
      alert("Shit, I don't know, man. Anything but the new ones.");
    }
  }
  else {
    alert("You probably wanna listen to Justin Townes Earle.")
  }
}
else {
  var era = prompt("Hmm.. are you ok with an old standby? Something you've been meaning to listen to? Or a wildcard?").toLowerCase();
  if (era === "old standby") {
    var style = prompt("Classic rock? Folky? Rap? What?").toLowerCase();
    if (style === "") {
      alert("My Aim Is True or Ziggy Stardust.");
    }
    else if (style === "folky") {
      alert("Fleet Foxes or Iron and Wine. Maybe some Bon Iver.");
    }
    else if (style === "rap") {
      alert("Aquemini. Just Aquemini.");
    }
    else{
      alert("Space Is Only Noise That You Can See");
    }
  }
  else if (era === "something new") {
    var style = prompt("Rap? Something electronic? Rock?").toLowerCase();
    if (style === "rap") {
      alert("Put on one of the new Young Thugs mixtapes or Vince Staples.");
    }
    else if (style === "electronic") {
      alert("Maybe Floating Points or Grimes? Is there some Nicolas Jaar you haven't heard?");
    }
    else if (style === "rock") {
      alert("You know there's no good new rock music out. Ty Segall? Kurt Vile?");
    }
    else{
      alert("Try Spotify radio, I guess. Try Post Malone again.");
    }
  }
  else if (era === "wildcard") {
    var number = prompt("Pick a number between 1 and 3.");
    if (number === "1") {
      alert("It's Pronounced Leh-Nerd Skin-Nerd");
    }
    else if (number === "2") {
      alert("Dookie. You know you want to.");
    }
    else if (number === "3") {
      alert("Pete Rock and CL Smooth");
    }
    else{
      alert("You're so out of it. You need Drake to straighten you out.");
    }
  }
  else {
    alert("Just put on Drake or the new Tame Impala.")
  }
}
