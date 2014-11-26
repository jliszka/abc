/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        app.showGrid();
    },

    showGrid: function() {
        var colors = ["red", "blue", "green", "purple", "orange"]
        var i = 0;

        var div = document.getElementById('app');
        div.innerHTML = "";

        for (letter in app.letters) {
            var e = document.createElement("a");
            e.classList.add("letter");
            e.classList.add(colors[i]);
            e.ontouchstart = (function(l) { return function() { app.showLetter(l); } })(letter);
            i = (i+1) % colors.length;
            var t = document.createTextNode(letter);
            e.appendChild(t);
            div.appendChild(e);
        }        
    },

    showLetter: function(letter) {
        var div = document.getElementById('app');
        div.innerHTML = "";

        var e = document.createElement("a");
        e.classList.add("bigletter");
        e.ontouchstart = function() { app.showGrid(); };
        var t = document.createTextNode(letter);
        e.appendChild(t);
        div.appendChild(e);

        for (i in app.letters[letter]) {
            var img = app.letters[letter][i];
            var e = document.createElement("img");
            e.src = "img/" + img;
            e.classList.add("img");
            e.classList.add("img"+i);
            div.appendChild(e);
            i++;
        }
    },

    letters: {
        'A': [ "anna.png", "airplane.jpg", "arrow.jpg", "apple.jpg" ],
        'B': [ "ball.jpg", "balloon.jpg", "banana.jpg", "bubble.jpg", "bubbe.png", "bottle.jpg" ], // bunny, baby, bird
        'C': [ "cat.jpg", "car.jpg", "cow.jpg", "crocodile.jpg" ], // coffee
        'D': [ "dog.jpg", "daddy.png", "duck.jpg", "diaper.png" ],
        'G': [ "grapes.jpg", "glasses.jpg", "george.jpg", "guitar.jpg" ],
        'H': [ "horse.jpg", "heart.png", "hair.jpg", "hat.jpg" ],
        'J': [ "juice.jpg", "julie.png" ],
        'M': [ "mommy.png", "margo.png", "moon.jpg", "mango.jpg", "milk.jpg", "madeline.jpg" ],
        'N': [ "noodles.jpg", "nina.png", "necklace.jpg", "nose.jpg" ],
        'O': [ "orange.jpg", "owl.jpg" ],
        'P': [ "pig.jpg", "peas.jpg", "potato.jpg", "purple.jpg" ],
        'T': [ "tunnel.jpg", "tree.jpg", "turkey.jpg", "teeth.jpg" ]
    }
};

app.initialize();