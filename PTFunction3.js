var numbers = [];
            var sum = 0;
            var sumEven = 0;
            var sumOdd = 0;
            var message = '';

            for (var k = 0; k < 25; k++) {
                var num = parseFloat(prompt("Please enter number " + (k + 1), 0));
                numbers.push(num);
                sum += num;
                if (!isNaN(num)) {
                    if (num % 2 === 0) {
                        sumEven += num;
                        message += num + ' is even.<br>';
                    } else {
                        sumOdd += num;
                        message += num + ' is odd.<br>';
                    }
                } else {
                    message += 'Invalid input.<br>';
                }
            }

            // Display the results
            var resultContainer = document.createElement('div');
            resultContainer.innerHTML = "<h1>" + message + "</h1>";
            resultContainer.innerHTML += "<div>Sum of all numbers: " + sum + "</div>";
            resultContainer.innerHTML += "<div>Sum of even numbers: " + sumEven + "</div>";
            resultContainer.innerHTML += "<div>Sum of odd numbers: " + sumOdd + "</div>";
            document.getElementById("container").appendChild(resultContainer);