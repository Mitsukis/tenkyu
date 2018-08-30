const RANGE = 150;
const stars = [];
const limStars = 2000;
let rotCamPos;
let cameraPosZ = 1000;
let angle = 0;

function preload(){
    sd1 = loadSound('assets/578359main_kepler_star_KIC7671081B.mp3');
    sd2 = loadSound('assets/578358main_kepler_star_KIC12268220C.mp3');
    sd3 = loadSound('assets/584795main_saturn_radio_waves.mp3');
    sd4 = loadSound('assets/693857main_emfisis_chorus_1.mp3');
    sd5 = loadSound('assets/plasmawaves-chorus.mp3');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    ambientLight(120, 120, 170);
    pointLight(200, 200, 250, -400, -400, 400);
    perspective(radians(55), width / height, 0, 10000); //boxの大きさ
    camera(0, 0, cameraPosZ, 0, 0, 0, 0, 1, 0);
    noStroke();
    initStars();
    amplitude = new p5.Amplitude();
    colorMode(HSB,360,100,100);
}

function draw() {
    // orbitControl();
    background(0,100,0);
    rotateX(angle);
    rotateY(angle);
    rotateZ(angle);
    angle += 0.004; //動きの速さ
    ambientMaterial(8, 8, 8, 100);
    box(RANGE * 2);
    drawSphere();
}

function initStars() {
    for (let i = 0; i < limStars; i++) {
        let x, y, z;
        x = random(-RANGE, RANGE);
        y = random(-RANGE, RANGE);
        z = random(-RANGE, RANGE);
        stars[i] = new PointObj(x, y, z);
    }
}

function drawSphere() {
    var amp = amplitude.getLevel();
    for (var i = 0; i< limStars; i++){
        level = map(amp, 0, limStars, 0, 255);
        level *= 3000000.0;
        level = Math.round(level);
        console.log(level);
    }

    let col =[];
    for (let i = 0; i < limStars; i++) {
        let size = random(1,3);
        push();
        // col[i] = map(sound[i], 100, 350, 100, 255);//fft
        // fill(0, 0, col[i]*0.001);//fft
        col = map(level, 100, 350, 100, 255);
        fill(0, 0, col*0.001);
        translate(stars[i].x, stars[i].y, stars[i].z);
        sphere(1);
        pop();
    }
}

class PointObj {
    constructor(ex, why, zi) {
        this.x = ex;
        this.y = why;
        this.z = zi;
    }
}

function keyPressed(){
    if(keyCode == 65){
        sd1.play(); // 再生
    } else if(keyCode == 66){
        sd2.play(); // 再生
    } else if (keyCode == 67){
        sd3.play(); // 再生
    } else if (keyCode == 68){
        sd4.play(); // 再生
    } else if (keyCode == 69){
        sd5.play(); // 再生
    }
  }
