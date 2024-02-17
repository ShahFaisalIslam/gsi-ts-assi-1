"use strict";
function summarize_sandwich(items) {
    console.log("Items in the ordered sandwich:");
    for (let i = 1; i <= items.length; i++) {
        console.log("%d: %s", i, items[i - 1]);
    }
}
summarize_sandwich(["lettuce", "mayyonaise", "chicken"]);
summarize_sandwich(["mayyonaise", "chicken"], "bread");
summarize_sandwich(["lettuce", "ketchup", "chicken", "mustard sauce"], "butter", "tomato");
