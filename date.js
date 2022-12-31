"use strict";

exports.getDate = () => {
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const today = new Date();
    return today.toLocaleDateString("us-en", options);
}