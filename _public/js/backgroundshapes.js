let stars = [];

const maxVelocity = 1;
const accel = 0.1;

function setup() {
    document.querySelectorAll("#background img").forEach(star => {
        let newCoordinate  = {
            element: star,
            velocity: createVector(random(-1,1), random(-1,1)),
            position: createVector(
                random(0, window.innerWidth - star.offsetWidth),
                random(0, window.innerHeight - star.offsetHeight)
            )
        }
        stars.push(newCoordinate)
        star.style.left = newCoordinate.position.x + 'px';
        star.style.top = newCoordinate.position.y + 'px';
    })
}

function draw() {
    for(let i = 0; i<stars.length; i++) {
        let star = stars[i]
        star.position.x += star.velocity.x;
        star.position.y += star.velocity.y

        if(star.position.x + star.element.offsetWidth < window.innerWidth
            && star.position.x > 0) {
            star.element.style.left = star.position.x + 'px';
        }
        else {
            star.velocity.x *= -1;
        }

        if(star.position.y + star.element.offsetHeight < window.innerHeight
            && star.position.y > 0) {
            star.element.style.top = star.position.y + 'px';
        }
        else {
            star.velocity.y *= -1;
        }
        

        star.velocity.x += random(-accel, accel);
        star.velocity.y += random(-accel, accel);
        star.velocity.normalize();
    }
}

