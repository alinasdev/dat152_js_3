"use strict";

{
    function increment() {
        ++(document.getElementById('number').textContent);
    }

    function init() {
        document.getElementById('number').textContent=0;
        document.getElementById('bt').addEventListener('click',increment);
    }
    init();
}

