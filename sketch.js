var weight = window.innerWidth;
var height = window.innerHeight;

let cartoon_toy_whistle;
let epic_orchestra_transition;
let fast_rocket_whoosh;
let retro_game_emergency_alarm;
let sad_game_over_trombone;
let sick_man_sneeze;
let small_crowd_laugh_and_applause;
let trumpet_fanfare;
let vintage_telephone_ringtone;

let buttons_top = [];
let buttons_middle = [];
let buttons_bottom = [];

function setup() {
  // put setup code here
  canvas = createCanvas(weight, height);

  // load sounds
  cartoon_toy_whistle = loadSound("sounds/cartoon_toy_whistle.wav");
  epic_orchestra_transition = loadSound("sounds/epic_orchestra_transition.wav");
  fast_rocket_whoosh = loadSound("sounds/fast_rocket_whoosh.wav");
  retro_game_emergency_alarm = loadSound(
    "sounds/retro_game_emergency_alarm.wav"
  );
  sad_game_over_trombone = loadSound("sounds/sad_game_over_trombone.wav");
  sick_man_sneeze = loadSound("sounds/sick_man_sneeze.wav");
  small_crowd_laugh_and_applause = loadSound(
    "sounds/small_crowd_laugh_and_applause.wav"
  );
  trumpet_fanfare = loadSound("sounds/trumpet_fanfare.wav");
  vintage_telephone_ringtone = loadSound(
    "sounds/vintage_telephone_ringtone.wav"
  );

  let b1 = new Button(
    weight / 3,
    height / 3,
    200,
    80,
    color(226, 132, 19),
    color(244, 190, 124),
    cartoon_toy_whistle
  );
  let b2 = new Button(
    weight / 2,
    height / 3,
    200,
    80,
    color(0, 159, 183),
    color(153, 241, 255),
    epic_orchestra_transition
  );
  let b3 = new Button(
    (2 * weight) / 3,
    height / 3,
    200,
    80,
    color(145, 145, 233),
    color(204, 204, 245),
    fast_rocket_whoosh
  );

  let b4 = new Button(
    weight / 3,
    height / 2,
    200,
    80,
    color(205, 92, 92),
    color(240, 128, 128),
    retro_game_emergency_alarm
  );
  let b5 = new Button(
    weight / 2,
    height / 2,
    200,
    80,
    color(72, 209, 204),
    color(175, 238, 238),
    sad_game_over_trombone
  );
  let b6 = new Button(
    (2 * weight) / 3,
    height / 2,
    200,
    80,
    color(255, 215, 0),
    color(255, 255, 0),
    sick_man_sneeze
  );

  let b7 = new Button(
    weight / 3,
    (2 * height) / 3,
    200,
    80,
    color(255, 163, 175),
    color(255, 214, 220),
    small_crowd_laugh_and_applause
  );
  let b8 = new Button(
    weight / 2,
    (2 * height) / 3,
    200,
    80,
    color(143, 45, 86),
    color(216, 131, 166),
    trumpet_fanfare
  );
  let b9 = new Button(
    (2 * weight) / 3,
    (2 * height) / 3,
    200,
    80,
    color(236, 78, 32),
    color(234, 162, 133),
    vintage_telephone_ringtone
  );

  buttons_top.push(b1);
  buttons_top.push(b2);
  buttons_top.push(b3);

  buttons_middle.push(b4);
  buttons_middle.push(b5);
  buttons_middle.push(b6);

  buttons_bottom.push(b7);
  buttons_bottom.push(b8);
  buttons_bottom.push(b9);
}

function draw() {
  // put drawing code here
  background(247, 178, 183);
  noStroke();
  for (let i = 0; i < buttons_top.length; i++) {
    buttons_top[i].show(); // using our show() function from our Button class.
    buttons_middle[i].show();
    buttons_bottom[i].show();
  }
}

class Button {
  constructor(x, y, w, h, color, accent, song) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.accent = accent;
    this.song = song;
  }
}

function show() {
  noStroke();

  fill(this.color);
  rect(this.x, this.y, this.w, this.h);

  fill(this.accent);
  ellipse(this.x, this.y, this.w, this.h);

  fill(this.color);
  arc(this.x, this.y, this.w, this.h, TWO_PI, PI);
}
