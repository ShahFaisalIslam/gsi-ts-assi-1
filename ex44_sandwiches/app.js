"use strict";
function summarize_sandwich(...items) {
    console.log("Items in the ordered sandwich:");
    let i;
    for (i = 0; i < items.length; i++) {
        console.log("%d: %s", i + 1, items[i]);
    }
}
summarize_sandwich("lettuce", "mayyonaise", "chicken");
summarize_sandwich("mayyonaise", "chicken", "bread");
summarize_sandwich("lettuce", "ketchup", "chicken", "mustard sauce", "butter", "tomato");
