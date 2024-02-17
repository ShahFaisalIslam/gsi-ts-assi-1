"use strict";
function make_shirt(size = "L", text = "I love TypeScript") {
    console.log("Shirt size: %s, text on it: '%s'", size, text);
}
make_shirt();
make_shirt("M");
make_shirt("S", "Let me grow up");
