completion(0);

let last = "";

const script = document.createElement('script');
const joystick = document.createElement('div');
joystick.style = "width:200px;height:200px;margin-bottom:20px;position:absolute;";
joystick.id = "joystick";
document.body.appendChild(joystick);
//script.src = "https://raw.githubusercontent.com/bobboteck/JoyStick/refs/heads/master/joy.js";
script.src = "https://bobboteck.github.io/joy/joy.js";
script.async = true;
let s;
script.onload = () => {
    s = new JoyStick('joystick', {}, function() {
        keys = data.cardinalDirection
        .replace('W','a')
        .replace('N','w')
        .replace('S','s')
        .replace('E','d');
        for (const key of last) {
            if (keys.indexOf(key) == -1) {
                document.body
                .dispatchEvent(new KeyboardEvent(
                    "keyup",
                    {bubbles: true, key}
                ));
            }
        }
        for (const key of "wasd") {
            const now = keys.indexOf(key);
alert(now);
            if (!now && last.indexOf(key) != -1) {
                document.body
                .dispatchEvent(new KeyboardEvent(
                    "keyup",
                    {bubbles: true, key}
                ));
            } else {
                document.body
                .dispatchEvent(new KeyboardEvent(
                    "keydown",
                    {bubbles: true, key}
                ));
            }
        }
    });
};

script.onerror = () => {
    console.error("Error loading.");
    alert("useless piece of shit");
};

document.head.appendChild(script);
