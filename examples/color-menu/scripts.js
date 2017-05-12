    'use strict';

    (function(document) {
        var colors = [ '#F44336', '#FF9800', '#009688', '#2196F3', '#2E7D32', '#212121', '#3F51B5', '#E91E63' ],
            obj = {};

        document.addEventListener("DOMContentLoaded", function() {
            var menus = document.getElementsByClassName('color-menu'),
                menu = menus.item(0);
                
            document.body.style.backgroundColor = JSON.parse(localStorage.getItem('bodyCOLOR'));

            
            initializeMenu(menu, colors);
            initializePanel(menu);
            getDate(new Date(parseInt(localStorage.getItem('colorTime'), 10)));
        });

        /**
        * Initializes color-menu
        * 
        * @param {HTMLElement} menu Color menu
        * @param {string[]} colors Initial colors array
        */
        function initializeMenu(menu, colors) {
            colors.forEach(function(color) {
                var button = document.createElement('button');

                menu.appendChild(button);
                button.innerHTML = color;
                button.style.backgroundColor = button.innerHTML;
                button.className = 'color-btn';
                button.style.color = getTextColor(button.style.backgroundColor);
                button.addEventListener('click', changeColor);
            });
        }

        /**
         * Initializes menu panel(add/remove buttons etc)
         * 
         */
        function initializePanel(menu) {
            var addButton = document.getElementById('main-button'),
                removeButton = document.getElementById('remove-button');
            
            addButton.addEventListener('click', function(event) {
                var inputValue = document.getElementById('txt').value;

                if(inputValue.length == 6){
                    var button = document.createElement('button');

                    menu.appendChild(button);
                    button.className = 'color-btn';
                    button.innerHTML = '#' + inputValue;
                    button.style.backgroundColor = button.innerHTML;
                    button.addEventListener('click', changeColor);
                    button.style.color = getTextColor(button.style.backgroundColor);

                    document.getElementById('txt').value = '';
                }
            });

            removeButton.addEventListener('click', function(event) {
                obj.remove();
            });
        }
        /**
         * Changes color
         * 
         * @param {*} event 
         */
        function changeColor(event) {
            obj = event.target;

            var color = obj.style.backgroundColor;
            
            document.body.style.backgroundColor = color;

            var t2 = document.getElementById('title2');
            t2.innerHTML = isColorWarm(color) ? 'Warm' : 'Cold';
            t2.style.color = getTextColor(color);

            localStorage.setItem('bodyCOLOR', JSON.stringify(color));
            localStorage.setItem('colorTime', Date.now());
        }

        function getDate(date){
            var now = Date.now(),
                mainDate = new Date (now - date),
                minutes = mainDate.getMinutes(),
                hours = mainDate.getUTCHours(),
                days = mainDate.getUTCDay();

            var dateTitle = document.getElementById('date');
            
            if(hours < 1){
                dateTitle.innerHTML = minutes + ' minutes ago';
            } else if(days < 1){
                dateTitle.innerHTML = hours + ' hours ago';
            } else if(days < 2){
                dateTitle.innerHTML = 'yesterday';
            } else{
                dateTitle.innerHTML =  + ((new Date().getMonth() + 1) + '.' + (new Date().getFullYear()));
            }
        }

        function getTextColor(color) {
            var rgbColor = getRGB(color);

            var sum = rgbColor.r + rgbColor.g + rgbColor.b,
                gray = sum / 3;

            return gray < 127.5 ? 'white' : 'black';
        }

        function isColorWarm(color) {
            var rgbColor = getRGB(color);

            if (rgbColor.r > rgbColor.b) {
                return true;
            } else if (rgbColor.r < rgbColor.b) {
                return false;
            } else if ((rgbColor.r + rgbColor.g + rgbColor.b) > (255 / 3)) {
                return false;
            } else {
                return true;
            }
        }

        function getRGB(color) {
            var beginIndex = color.indexOf('('),
                substring = color.substring(beginIndex + 1, color.length - 1),
                colorParams = substring.split(', ');
            
            return {
                r: parseInt(colorParams[0]),
                g: parseInt(colorParams[1]),
                b: parseInt(colorParams[2])
            };
        }
    })(document);