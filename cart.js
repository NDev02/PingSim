class Cart {

    constructor(ppi, rampAngle, rampLength) {

        this.ppi = ppi;
        this.rampAngle = rampAngle;
        this.rampLength = rampLength;

        this.length = 6;         // |_______|
        this.width = 3;          // |____|
        this.height = 0.75;      // |

        this.x = 0;

        this.acc = 9.8 * Math.sin((90 - this.rampAngle) * Math.PI / 180); // constant, gSin(90deg - theta)
        this.vel = 0;

        this.transform = {
            x: 0,
            y: 0,
            rotation: 0
        }

    }

    start() {

        this.x = 0.001;

    }

    stop() {

        this.x = 0;

    }

    setTransform(x, y, rotation) {

        this.transform.x = x;
        this.transform.y = y - this.height * this.ppi;
        this.transform.rotation = rotation;

    }

    update() {

        let vf = Math.sqrt(2 * this.acc * this.x); // vf = sqrt(2ad) when vi is 0 -> m/s
        vf *= (39.3701 / this.ppi); // pixels/s
        vf /= 1000; // pixels per ms
        this.vel = vf;
        this.x += this.vel * deltaTime; // calc dist since last frame using time between frames

        if (this.x + this.transform.x + this.length > this.rampLength * this.ppi) {

            this.vel = 0;
            this.x = 0.0;

        }

    }

    draw() {

        this.update();

        push();

        translate(this.transform.x, this.transform.y);
        angleMode(DEGREES);
        rotate(this.transform.rotation);

        noStroke();
        fill(255);
        rect(this.x, 0, this.length * this.ppi, this.height * this.ppi);

        pop();

        push();

        translate(this.transform.x, this.transform.y);

        stroke(255);
        let correctedX = (this.x) * Math.sin(this.rampAngle * Math.PI / 180);
        line(correctedX, this.calcHeight(), correctedX, this.calcHeight() + rope.length);

        pop();

    }

    calcHeight() {

        return this.x / (Math.tan(this.rampAngle * Math.PI / 180));

    }

}