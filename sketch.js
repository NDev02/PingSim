
let canvas;
let ppi = 5;
let angle = 78;
let cart;
let bucketX = 0;
let rampSupportX = 0;
let rope = {
    dropHeight: 0,
    length: 0
};

function setup() {

    canvas = createCanvas(800, 500);
    canvas.parent("canvas");
    cart = new Cart(ppi, angle, 144);
    rampSupportX = (width - 140.84 * ppi) / 2;
    updateBucket();

}

function draw() {

    clear();
    background('#00284d');
    drawRamp();
    fill(255);
    cart.draw();
    drawBucket();

}

function drawRamp() {

    let xoff = rampSupportX;

    fill(120);
    noStroke();
    rect(0 + xoff, height, 2.5 * ppi, -60 * ppi); // Draw first support with 3inx60in
    rect((140.84 * ppi) - (2.5 * ppi) + xoff, height, 2.5 * ppi, -30 * ppi); // Draw second support with 3inx30in

    push();
    translate(xoff, height - ((60 * ppi) + (1 * ppi))); // Translate to top of first support
    cart.setTransform(xoff, height - ((60 * ppi) + (1 * ppi)), (90 - angle));
    angleMode(DEGREES);
    rotate(90 - angle); // Rotate 78deg bc this is the angle btw the first support and the ramp
    rect(0, 0, 144 * ppi, 1 * ppi); // Draw top part of ramp
    pop();


}

function drawBucket() {

    fill(255, 255, 255, 200);
    rect(bucketX - ((12 * ppi) / 2), height, 12 * ppi, -3 * ppi);

}

function run() {

    cart.start();

}

function updateBucket() {

    bucketX = rampSupportX + (document.querySelector("#bucket-distance").value * ppi);
    let res = document.querySelector("#bucket-distance").value / (Math.tan(angle * Math.PI / 180));
    let dropHeight = res;
    rope.dropHeight = res * ppi;
    rope.length = (60 - dropHeight - 1.5) * ppi;
    // console.log(`Triangle Height: ${dropHeight}in`);
    // console.log(`Rope Length: ${60 - dropHeight}in`);
    document.querySelector("#string-length").value = 60 - dropHeight - 1.5; // overall height of ramp - "drop" triangle height -> from ramp to ground, remove 1.5 to clear front of bucket

}