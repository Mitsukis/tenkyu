let stars = [];
let limStars =1000; // amount of cube

let x, y, z;
let sound = [];
let col = [];
let fft;
let amplitude;
let level;
let angle;

function preload(){
    sd1 = loadSound('assets/578359main_kepler_star_KIC7671081B.mp3');
    sd2 = loadSound('assets/578358main_kepler_star_KIC12268220C.mp3');
    sd3 = loadSound('assets/584795main_saturn_radio_waves.mp3');
    sd4 = loadSound('assets/693857main_emfisis_chorus_1.mp3');
    sd5 = loadSound('assets/plasmawaves-chorus.mp3');
}

function setup(){
    createCanvas(windowWidth, windowHeight, WEBGL);
    ambientLight(240, 240, 240);
    directionalLight(245, 245, 245, 300, -200, -200);
    pointLight(0, 0, 255, -400, -400, 250);
    // perspective(radians(75), windowWidth / windowHeight, 1, 1200); //消したら大画面
    noStroke();
    initStars();
    colorMode(HSB,360,100,100);

    amplitude = new p5.Amplitude();
    fft = new p5.FFT();
}

function draw(){
  background(0,100,0);
  orbitControl();
  drawSphere();
  let camX = random(-800, 800);
  let camY = random(-800, 800);
  let camZ = random(-800, 800);
  camera(camX, camY, camZ + (windowHeight/2), tan(PI/6), 0, 0, 0, 0, 1, 0);
  rotateX(angle);
  rotateY(angle * 0.3);
  rotateZ(angle * 1.2);

}

function initStars() {
    for (let i = 0; i < limStars; i++) {

        x = random(-800, 800);
        y = random(-400, 400);
        z = random(-800, 800);
        stars[i] = new PointObj(x, y, z);
    }
}

function drawSphere() {
    // var spectrum = fft.analyze();
    // for (var i = 0; i< spectrum.length; i++){
    //     sound[i] = map(spectrum[i], 0, spectrum.length, 0, 255);
    //     sound[i] *= 100000000.0;
    //     sound[i] = Math.round(sound[i]);
    //     console.log(sound[i]);
    // }
    var amp = amplitude.getLevel();
    for (var i = 0; i< limStars; i++){
        level = map(amp, 0, limStars, 0, 255);
        level *= 3000000.0;
        level = Math.round(level);
        console.log(level);
    }

    let col =[];
    for (let i = 0; i < limStars; i++) {
        let size = random(1,10);
        push();
        // col[i] = map(sound[i], 100, 350, 100, 255);//fft
        // fill(0, 0, col[i]*0.001);//fft
        col = map(level, 100, 350, 100, 255);
        fill(0, 0, col*0.001);
        translate(stars[i].x, stars[i].y, stars[i].z);
        sphere(10);
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
