/**
 * This JavaScript file is responsible for handling the AJAX requests assosciated with Assignment 5. Depending on the requests and wether or not the status was succesful,
 * the DOM will be changed to reflect the responses that were received from the server. There will be three buttons, the first button, second button, and third button, each
 * of which will expect a response, and will reflect the response on the HTML page within the DOM. The first button will have an event listnere which will listen for the 
 * click of the button, and when the button is clicked, an AJAX 'fetch' request is made to the csunix URL, which will convert the response made into text, and be displayed 
 * in an 'h1' tag as this will represent the data that was retreived from the server from the first button. The second button will have an attached event listener which 
 * listens for the click of the second button, and when that second button is clicked, the choice the user has made is saved into a variable, and the url which the request
 * will be made to is created depending on the choice the user has made, either 'mario' or 'starwars'. An AJAX 'fetch' request is then made to the url, and if the response 
 * was succesful (ok), dynamic HTML elements are created in order to display the data that the server has responded with. This will consist of rows, and bootstrap columns 
 * to display the data correctly. The third button will have another event listener attached, which listens for the button being clicked. Similarly to the second button, 
 * the url that the request will be made to is dependant on the choice the user makes. Once the user makes a valid choice, the url is created based upon their choice, and 
 * an AJAX 'POST' request is made to the given url. If the request was succesful (ok), the response from the server is converted into a JSON format, and dynamic HTML elements
 * are created in order to display the data from the response. It will also display the data in a table, using bootstrap and html properties, appending each table to the 
 * container element. The overall purpose of each button is to make requests to the csunix server depending on which button the user has pressed, and which choice they make
 * emphasizing on the use of AJAX requests.
 */

/** BRENDAN DILEO, 000879513. USE OF BOOTSTRAP, AND HELP OF W3SCHOOLS */
/** SA0001: I BRENDAN JOHN DILEO, 000879513 certify that this material is my original work. No other person's work has been used without due acknowledgement. I have not made my work available to anyone else. */


/**
 * This event listener is responsible for the click event on the first button 'firstBtn' HTML element. Once this button has been clicked, a AJAX 'fetch' request is made to
 *  the csunix server. The response that is given from the csunix server is converted to text, and then displayed within the 'content' HTML element. The code uses the '.then'
 * method to handle and receive a succesful response from the server. It converts the response into text by calling upon the 'text()' method. The chained .then' method is used
 * to display the data that has been received from the server which is the result of the 'response.text()' and displays the text in a 'h1' tag in the HTML element 'content'. In
 * case of an error, the 'catch' method will catch the error that has occured, and displays the caught error the the console using the 'console.erro(...)' to log the reason for 
 * the error.
 */
// Adds an event listener which listens for the click of the 'firstBtn' button element.
document.getElementById("firstBtn").addEventListener("click", function() {
    // The HTTP request is made to the url using the 'fetch()' function, this to receive a response/data from the url server.
    fetch("https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php")
    // The chained 'then()' function will handle the response from the server, taking 'response' as an argument. The 'response' object
    // is then converted into text by calling upon the 'text()' function.
    .then(response => response.text())
    // The next chained 'then()' function will handle the logic following the response from the server. It takes the parameter 'data' which
    // consists of the response from the previous 'then' function, and displays the response data on the HTML page (DOM) by accessing the 
    // 'content' elements innerHTML property, and displaying the data in an 'h1' tag.
    .then(data => {
        // The element 'content' on the HTML page is accessed, and sets the innerHTML property of the element to an 'h1' tag which includes
        // the data responded from the server.
        document.getElementById("content").innerHTML = `<h1 class="text-center"> ${data} - 000879513 </h1>`;
    })
    // The chained 'catch' function takes an 'error' as a parameter. This block will catch any errors that are thrown as a result of requesting data
    // from the server, and if an error is found, it is prompted to the console which allows to narrow down the reason for the error.
    .catch(error => console.error("Error: ", error));
});

/**
 * This event listener will listen for the 'click' event on the element 'secondBtn' which is the second button on the HTML page. This means that in
 * the event the user clicks the second button, the code inside the event listener block will be executed. The user is prompted to make a choice in
 * the input on the HTML page, where the valid choices consist of either 'mario' or 'starwars'. The users choice is saved into a variable 'choice'
 * and is trimmed using the 'trim()' function to remove any whitespaces. First the users choice is checked to see if it is empty, null, or undefined
 * as this would be a invalid input value, where if this is the case, the text content of the 'content' element on the HTML page is changed to a string
 * indicating that the user must enter either 'mario' or 'starwars'. If the users choice is not empty, null, or undefined, then the if statement will be
 * skipped, and a variable 'url' is declared and initialized to an empty string as default, as the actual url will depend on the users choice. Another
 * if statement is used to determine which choice the user has made, and depending on if they chose 'mario', or 'starwars', the url is changed to reflect
 * the choice. If the user does not pick either 'mario' or 'starwars', the text content of the element 'content' is changed to another prompt saying that 
 * the user has enetered an invalid choice, and needs to enter either 'mario' or 'starwars'. If the user has entered a valid choice, which means the url 
 * was created with this choice, a AJAX 'fetch' request is made where the argument is the url containing the users choice. As I was getting non stop errors
 * for a bit in this logic, I implemented additional error handling logic to try and debug exactly what was the cause of the errors. So in the chained 'then()'
 * function, the argument 'response' represents the response from the server, is checked inside of the '.then()' function to determine if the response was 
 * succesful or not, and if it wasnt, then an error is thrown. If the response from the server did not result in an error, the response is converted into 
 * JSON format using the 'json()' method following the response object. The chained 'then()' function takes the converted response as a data object, and 
 * first clears the current innerHTML of the 'content' element on the HTML page. Depending on the size of the array of data received from the server,
 * the pictures will either be centered in the page, or put into smaller columns. This is because initially I was getting layouts that did not look as 
 * visually appealing as the example provided in the assignment. Dynamic elements for the 'rows' and 'columns' are created, and added into newly created
 * 'div' elements to hold the data, and is appeneded so they appear beside eachother, and the text appears below the previous text and element. The 'catch' 
 * function is responsible for catching any errors that occur from the request to the server in the 'fetch' request, if any errors occur, they will be 
 * assigned to the 'error' argument in the 'catch' function, and will be logged to the console allowing for an easier way of determining where the error is
 * coming from. 
 */

// Attaches an event listener to the element 'secondBtn' which is the second button on the HTML page. The event listener is setup so it listens for when the user
// has clicked the button, and the code inside the body of the event listeners function is executed when the user has clicked the button.
document.getElementById("secondBtn").addEventListener("click", function() {
    // DEBUG. Initially my event listener was not working so I added this line, however I determined the event listener was working and the issue was elsewhere.
    console.log("Event Listener!");
    // The variable 'choice' is assigned to the input value of the HTML element 'input', and uses the 'trim()' function to remove
    // any additional whitespace (spaces). This represents what the user has entered into the input on the HTML page.
    let choice = document.getElementById("input").value.trim();

    // This if statement checks if the variable 'choice' is empty, or holds null or undefined.
    if (!choice) {
        // So the user knows that they must enter 'mario' or 'starwars' to get a response, the text content of the container element
        // is changed to a prompt letting the user know they need to either enter 'mario' or 'starwars'.
        document.getElementById("content").textContent = "Please enter 'mario' or 'starwars'.";
        //DEBUG. Wanted to make sure that this if statement was considering the negated choice as an invalid input.
        console.log("Invalid!");
        // Since an invalid input value was given, the return statement is used to exit the event listener and not execute any other
        // code.
        return; 
    }

    // A variable 'url' is delcared and initialized to an empty string. This was done as I initially was declaring the url variable in the if statements,
    // but this limited the use of the variable due to the scope.
    let url = "";
    // This variable 'conatiner' will contain the element 'content' and will act as the parent element for each row and column to go into.
    let container = document.getElementById("content");

    // This if statement first converts the users choice to lower case using the 'toLowerCase()' function, and then uses the strictly equal operator to check
    // if the users choice was 'mario'.
    if (choice.toLowerCase() === "mario") {
        // If the user did choose 'mario', the url that the AJAX request will be going to is changed, and the choice at the end is added to reflect the fact
        // the user has chosen 'mario'.
        url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=mario";
        // DEBUG. At first this was not working as I was not including the choice in the end of the url 'choice='.
        console.log(url);
    // The else if block converts the users choice to lower case using the 'toLowerCase()' function, and checks if the user has chosen 'starwars' using the 
    // strictly equal operator.    
    } else if (choice.toLowerCase() === "starwars") {
        // If the user has chosen 'starwars', the url that the AJAX request is made to is changed, as the choice at the end of the url is now 'starwars', this 
        // is so the data that is being fetched from this url will provide the 'starwars' specific data.
        url = "https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=starwars";
    // The else block will be executed if the user has entered something other than 'mario' or 'starwars', as anything other than those two options is considered
    // invalid.    
    } else {
        // If the user does enter an invalid option, the text content of the HTML element 'content' is changed so that the user knows that they have made an
        // invalid choice.
        document.getElementById("content").textContent = "Invalid choice. Please enter 'mario' or 'starwars'.";
        // This return statement makes sure no code past this point is executed, and the event listener is exited.
        return;
    }

    // A AJAX 'fetch' request is made to the parameter 'url', which is the url that is dependant on the users choice.
    fetch(url)
        // The 'then()' function takes an argument 'response' which is the response received from the url/server.
        .then(response => {
            // DEBUG. At first I could not get a succesful response no matter what I tried. So I added this if statement to determine where the error was
            // coming from.
            // The if statement checks if the response received from the server/url was not ok using the negation operator '!' and the 'ok' property.
            if (!response.ok) {
                // DEBUG. I wanted to see the error so I logged it to the console before throwing it as a new error.
                console.log(error);
                // A new error is thrown given the unsuccesful response, with the text "Unsuccesful! The network Response was not ok!"
                throw new Error("Unsuccesful! The network response was not ok");
            }
            // If the repsonse was ok, which means the if statements condition did not evaluate to true, then the response from the server is converted into
            // JSON format by calling upon the 'json()' function on the response 'response' object. This returns the response from the server in a JSON format.
            return response.json();
        })
        // The chained 'then()' takes the parameter 'data' which contains the succesful response converted into JSON format from the previous 'then()', and the
        // 'fetch' request itself.
        .then(data => {
            // DEBUG. I wanted to make sure that the data was actually being received before coding anything else.
            console.log(data);
            // The innerHTML property of the HTML element 'content' is cleared so that the new data can be displayed inside.
            document.getElementById("content").innerHTML = "";

            // A variable 'row' is declared and initialized to the creation of a new element 'div' by using the 'createElement'.
            let row = document.createElement("div");
            // A new 'row' class is added to the contents of the variable 'row' currently holding the 'div' class. This will allow for the new 'row' element to 
            // appear within the 'div' element.
            row.classList.add("row");

            // This if statement checks if the data that was received from the 'fetch' request is an array, by calling upon the 'isArray()' function after the 
            // Array object itself.
            if (Array.isArray(data)) {
                // If the data received from the AJAX 'fetch' request was an array of data, the nested if statement checks if the length of the array is either 
                // 1 or 2, using the strictly equal operator.
                if (data.length === 1 || data.length === 2) {
                    // If the length of the array was either 1 or 2, meaning it contains 1 or 2 elements, the 'justify-content-center' class is added to the row
                    // using the '.add()' function. This is so the pictures (data) received from the response are centered on the webpage. Initially I was getting
                    // the images showing everywhere, and in all different sizes.
                    row.classList.add("justify-content-center");
                }
                // This for each loop iterates over each element 'dataPiece' in the 'data' array, which is an array of data that was received from the server/url.
                data.forEach(dataPiece => {
                    // DEBUG. Wanted to make sure each data piece was actually being accessed induvidually by using the foreach loop.
                    console.log(dataPiece);
                    // A new variable 'column' is declared and initialized to the creation of a new element 'div'. This is so each element of data appears in
                    // its own column.
                    let column = document.createElement("div");
                    // The class 'col-md-4' bootstrap style is added to the column variable allowing for the pieces of data to appear in a boostrap grid.
                    column.classList.add("col-md-4");
                    //DEBUG. I wanted to make sure that the series, url, and name actually corresponded with the data picture being displayed.
                    console.log(dataPiece.series);
                    console.log(dataPiece.url);
                    console.log(dataPiece.name);
                    // The innerHTML of the column in each iteration will contain the name of the series of the data piece, the image itself, and the name of the
                    // specific data piece which is determined by the data that is received from the AJAX request.
                    column.innerHTML = `
                        <h2>${dataPiece.series}</h2>
                        <img src="${dataPiece.url}" class="img-fluid" alt="${dataPiece.name}">
                        <p>${dataPiece.name}</p>
                    `;
                    // The column is then appended to the 'row' element/variable so that each column is apart of the same row.
                    row.appendChild(column);
                });
            // If the data received from the AJAX request is not an array of data, the else block will be executed.    
            } else {
                // A variable 'column' is declared and initialized to the creation of a dynamic element 'div', similarly to the column in the array.
                let column = document.createElement("div");
                // The class of 'col-md-4' boostrap style is added to the column class, applying the bootsrap grid style.
                column.classList.add("col-md-4");
                // DEBUG. If the data did not appear in an array, I wanted to make sure the name, seriies, and url were still being accessed propely as 
                // an induvidual piece of data.
                console.log(data.series);
                console.log(data.url);
                console.log(data.name);
                // The innerHTML of the column will contain the series of the piece of data, the picture of the piece of data, and the name of the piece of 
                // data. This directly accesses the data itself as it is not an array of data in this case, and is instead a singular piece of data which is 
                // received from the AJAX request.
                column.innerHTML = `
                    <h2>${data.series}</h2>
                    <img src="${data.url}" class="img-fluid" alt="${data.name}">
                    <p>${data.name}</p>
                `;
                // The column is then appended to the 'row' element so that the column is apart of the row.
                row.appendChild(column);
            }

            // The 'row' which will contain each column of data, is then appended to the parent element container, so that each row, and column of data appears
            // in the 'content' element on the HTML page.
            container.appendChild(row);

            // A new variable 'dataCopyright' is declared and initialized to a newly created dynamic 'p' element. This element will hold text that consists of 
            // the corresponding copyright notice depending on which images are shown.
            let dataCopyright = document.createElement("p");

            // This if statement checks the choice the user made by comparing the value that the 'choice' variable holds.
            // The first if statement checks if the choice the user made converted to lower case using the 'toLowerCase' function is strictly equal to
            // 'mario' using the strict equality operator '==='.
            if (choice.toLowerCase() === "mario") {
                // If the choice is 'mario', the text content of the 'p' element 'dataCopyright' will now contain the nintendo copyright notice.
                dataCopyright.textContent = "Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo. © 2019 Nintendo.";
            // This else if checks if the the choice the user made was not 'mario', and is instead 'starwars'.
            } else if (choice.toLowerCase() === "starwars") {
                // If the choice was 'starwars', the 'dataCopyright' variable holding the 'p' elements text content is changed to the star wars copyright notice.
                dataCopyright.textContent = "Star Wars © & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material © 2022 Electronic Arts Inc.";
            }

            //DEBUG. I wanted to make sure the proper copyright notice was being displayed depedning on the data.
            console.log(dataCopyright);

            // The 'dataCopyright' variable holding the 'p' element is appended to the container afterwards so the copyright notice appears underneath the pictures.
            container.appendChild(dataCopyright);
        })
        // The 'catch()' function taking 'error' as an argument is responsible for handling any errors that occur during the request or proccessing and formatting 
        // of the data that is received. The 'error' object is the error that the function has caught, and is displayed to the console using the 'console.error'.
        .catch(error => console.error("Error: ", error));
    });

    /**
     * This event listener is responsible for handling (listening for) the 'click' event of the third button which is the 'thirdBtn' element on the HTML page. Similarly 
     * to the second button, pressing the third button will display the images of data that have been received from the AJAX request, however when pressing the third 
     * button additional data will be displayed within a table representing additional information on the data. Inside the body of the event listener, the choice the
     * user makes into the 'input' element on the HTML page is saved into the variable 'choice', containing the users input value. The variable will use the 'trim()'
     * function to get rid of (trim) any additional whitespace (spaces) that may be present in the input. An if statement will then check if the variable 'choice' 
     * holding the users input is empty, null, or undefined, as if it is, then no request will be made, and instead the text content of the 'container' will reflect
     * that the user must enter either 'mario' or 'starwars' by being set to a string telling the user to do this. The assignment mentions "To simplify the overall 
     * situation, you may choose to disable the input tag once one of the 2nd or 3rd buttons is pressed to avoid tracking state and managing a more complicated 
     * situation.", which has led me to implement the disabling of the input after the if statement. By accessing the 'disabled' property of the 'input' element
     * on the HTML page, this prevents the user from entering anything else after they have made a valid choice. A AJAX 'fetch' request is then ,ade to the specified
     * url, where the choice is a string interpolation that contains the value that is saved into the 'choice' variable. This was done to prevent additional if else
     * statements and reduce the overall size of the code. The 'fetch' request specifies that the method of the request will be a 'POST' request, which means that the 
     * data will be sent to the server/url. Following the method, the body is speicfied converting the object 'choice' into a JSON text/string using the 'JSON.stringify'
     * function. This is so the data sent to the server is in a JSON format, therefore it can be interpretted by the server. Following the body of the request, are the 
     * request headers. These are responsible for specifiying the header of the request, and in this case it is setting the 'Content-Type' header to 'application.json'
     * which means that the body request will be in a JSON format. Initially I had included a 'CORS' header here aswell because I was facing CORS related issues, however
     * this did not work, and still gave me errors. The only solution I managed to find was opening the files on csunix, I assume because in that case the requests were
     * to and from the same domain. The 'then()' takes the 'response' object as a parameter, which is the response that the server has given after the 'fetch' AJAX request.
     * I have also included debugging/error handling logic there aswell to try and determine why it was not working. I ended up finding out it was a CORS issue. If the
     * response was ok (succesful), the response is returned in JSON format, by calling upon the 'json()' function on the 'response' object. The next chained 'then()' 
     * function takes the response that was given from the server in the previous 'then()' function as the object 'data', and acesses the HTML element 'content' and 
     * saves it into a new variable 'container'. Any previous HTML that was present in the 'content' element is removed by clearing the innerHTML of the container variable.
     * A new variable 'row' is then declared and assigned to the dynamic creation of a new 'div' element, ands then the classes 'row' and 'justify-content-center' are added
     * to this class/element using the 'classList.add' function. A for each loop is then started to iterate through each piece of data that is found in the array of data that
     * is responded by the server. In each iteration for the data piece 'dataPiece', a new variable column is declared and inialized to the creation of a new dynamic element 'div',
     * and in each iteration this newly created element will have the 'col-md-4', 'mb-3', and 'text-center' styles added to the class. This is so the table appears nicely on 
     * the HTML page using bootstrap and CSS styles. Inside of each iteration in the for each loop, a new variable 'img' is declared and initialized to the creation of a new
     * dynamic element 'img', and the 'src' and 'alt' of the images are assigned to the images url, and the name of this iterations image. The styles 'img-fluid', and 'rounded' 
     * are added to the 'img' element/class for a better visual representation of the image. So the series of each image is accurately displayed on the HTML page, a new variable
     * 'imgSeries' is declared and initialized to a new dynamic element 'h2', and the text content of the element is assigned to the series data of this piece of datas iteration.
     * In order to also display the name of the image, a new variable 'imgName' is declared and initialized to a new 'p' element, and the text content of this element is set to the
     * name of the image data in this iteration of the for each loop. Then each element 'img', 'imgSeries', and 'imgName' are appended to the column variable, so each of these elements
     * are added to the current iterations column. The current iterations column is then appended to the variable 'row'. A new variable is then declared 'dataTable' which is 
     * initialized to a new dynamic 'table' element, and then has the 'table', 'table-striped', 'table-bordered' class and styles added to it to make the table look more visually
     * appealing and resemble the example given in the assignment. Two new variables 'tableTHead' and 'tableHeaderRow' are declared and initialized to new dynamic elements 'thead' 
     * and 'tr', the inner html of the 'tableHeaderRow' is given table header 'th' tags each of which represent a certain piece of information of the given data, it will have a 
     * header for the series, the name of the picture, and the url in which the picture was retreived from (csunix). Both of the elements are then appended to eachother so that 
     * they appear nicely in a table with spacing. Next a variable 'tableTBody' is declared and initialized to a 'tbody' element, which is followed by the start of another foreach
     * loop. The purpose of this foreach loop is so that for every piece of data 'dataPiece', will be displayed in its own row of table data 'td'. This is the reason for declaring another
     * variable 'row' which is initialized to creating a new dynamic 'tr' element. The inner html of the row is then set to three 'td' elements, each of which will contain the series
     * of the current iterations data, the name of the current iterations data, and the url of the current iterations data. The 'tableTBody' is then appended to the 'row', and then the
     * 'tableTBody' is then appended to the 'table'. This is done so all of the data will appear in rows, in the body of the table, which will be in the table parent element.
     * The 'table' parent element is then appended to the 'container' itself which will allow each of the data tables to be displayed within the 'container' 'content' HTML element.
     * The variable 'dataCopyright' is declared and initialized to the creation of a new dynamic 'p' element, this will hold the copyright line depending on which data is shown, either
     * 'mario' or 'starwars', as the assignment specifically mentions that a copyright notice needs to be displayed. The if statement underneath the variable declration checks if the 
     * variable 'choice' which holds the users choice is either 'mario', or 'starwars' and depending on the choice, the corresponding copyright notice will be added into the 'dataCopyright'
     * variables text content. The last lines of code 'catch()' method is responsible for 'catching' any errors that are thrown as a result of the 'fetch' and 'POST' request to the server.
     * If an error is thrown and caught by the 'catch' method, the object 'error' will hold the error that was thrown and caught, and the error will be displayed into the console. Additionally,
     * the text content of the HTML element 'content' will be changed to a string indicating that an error occured.
     */

    // An event listener is added to the button 'thirdBtn' element on the HTML page, where the event listener is listening for the 'click' event. When the user clicks on the button, it will
    // trigger this event listener.
    document.getElementById("thirdBtn").addEventListener("click", function() {
        // The variable 'choice' accesses the input value of the 'input' element on the HTML page. It uses the 'trim()' function to trim any white space that is present in the input value entered
        // by the user.
        let choice = document.getElementById("input").value.trim();
    
        // This if statement is responsible for checking if the variable 'choice', which holds the users input value is empty, null, or undefined by negating the variable.
        if (!choice) {
            // If the choice is either empty, null, or undefined, the text content of the 'content' element on the HTML page is accessed and changed to now show the user a
            // message as they need to enter either 'mario' or 'starwars' as input.
            document.getElementById("content").textContent = "Please enter 'mario' or 'starwars'.";
            // The return statement is used to exit the event listener and not execute any code past this point.
            return;
        }

        // Like the use of the second button, the assignment mentions to simplify the overall siutation and avoid tracking the state, to just disable the input after the user has entered 
        // an input value 'choice'. This is why the input value 'input' accessed from the HTML page will now use the 'disbaled' property, and set this to true, and the input will now be 
        // disabled.
        document.getElementById("input").disabled = true;
    
        // DEBUG. Initially I did not have the if statement block checking if the 'choice' holds empty, null, or undefined so I impleneted this line to determine what the 'choice' was being saved as.
        // After seeing that sometimes the choice was taking values like 'hello', or 'bye', this is what made me realize I needed to follow similar structure as I did within the logic for the second
        // button and implement a similar if statement check.
        console.log("Choice made was:", choice); 
    
        // The 'fetch()' function is used to make a 'fetch' request to the server specified in the url. The url is determined by the users choice that is saved into the variable 'choice'. The url 
        // contains a string interpolation of the variable 'choice' which contains the users input value.
        fetch(`https://csunix.mohawkcollege.ca/~adams/10259/a6_responder.php?choice=${choice}`, {
            // Inside this block of code belonging to the request, the method of the request is specified as a 'POST' request. This is done so the input value which ins considered the user data, is
            // sent to the server.
            method: 'POST',
            // The body of the request represents the conversion of the object 'choice' into a JSON string. This is done because the data is being sent to the server. The object 'choice' that is being
            // converted contains a property 'choice' which holds the input value from the user.
            body: JSON.stringify({ choice: choice }), 
            // The headers property specifies that the data that is being sent in the 'POST' request will be in a JSON format/JSON string.
            headers: {
                'Content-Type': 'application/json'
            },
        })
        // Inside of the 'then()' method is the 'response' object which represents the response that is received from the server.
        .then(response => {
            // DEBUG. I was getting an error here as no matter what I tried I could not get a response so I added this to debug statement to see what exactly the response consisted of.
            // NOTED AFTER: The error was not actually coming from here, and was coming from a CORS related issue.
            console.log(response);
            // The if statement then checks the 'ok' property of the response object, and negates it using the not operator '!', this essentially checks if the response from the server
            // was NOT ok.
            if (!response.ok) {
                // If the response from the server was NOT ok, an error is thrown with the text "Error! The network response was not ok" which implies that the response was not succesful,
                // and resulted in an error.
                throw new Error('Error! The network response was not ok');
            }
            // If the if statements condition is not true, and the body of the if statement is skipped, this means that the response was ok, and the response from the server is converted
            // into JSON format by calling upon the '.json()' to parse the responses JSON content.
            return response.json();
        })
        // The chained 'then()' method takes the parsed JSON response as an argument 'data'.
        .then(data => {
            // DEBUG. Iam not getting any data whatsoever, so I have tried to log the data that should be/is being received. Reached out to proffesor, and awaiting a response. COME BACK TO THIS***
            // *** NOTED AFTER: The data was not being retreived due to a CORS issue I was unaware of initially when logging the data. I fixed the issue by loading the page on the csunix server itself.
            console.log(data);
            // Inside the .then()'s code block, a variable 'container' is declared and initialized to the 'content' element on the HTML page.
            let container = document.getElementById("content");
            // The inner HTML of the 'content' element that is saved into the variable 'container' is cleared/removed by setting it to an empty string so that the new data can now be displayed into 
            // this element.
            container.innerHTML = ""; 
    
            // A new variable 'row' is declared and initialized to a new dynamic element 'div' which is created by calling upon the 'createElement' function.
            let row = document.createElement("div");
            // The classes 'row' and 'justify-content-center' are then added to the 'row' by using the 'classList.add' function. This makes it so the 'row' will now have the 'row' class, and 
            // the data/content inside of this row will be centered on the webpage.
            row.classList.add("row", "justify-content-center");
    
            // This is the start of a new for each loop, which iterates through each element 'dataPiece' in the array of data 'data' that has been received from the server.
            data.forEach(dataPiece => {
                // DEBUG. No matter what I do I cannot get the data to show, maybe the problem is here? I want to see each piece of data displayed induvidually, so I can see
                // if some of the data is missing, or is not being sent/received correctly.
                // NOTED AFTER: The problem was not here, the array was working. It was a CORS issue.
                console.log(dataPiece);
                // For each piece of data 'dataPiece' that has been found in the array of data, a new variable 'column' is declared and initialized to a new dynamic element
                // 'div'. This is responsible for holding each induvidual piece of data.
                let column = document.createElement("div");
                // The 'column' variable of element 'div' then gets the bootstrap classes 'col-md-4' and 'mb-3' along with the 'text-center' class so that the column is 
                // displayed nicely on the HTML page.
                column.classList.add("col-md-4", "mb-3", "text-center");
    
                // A new variable 'img' is declared and initialized to a new dynamic element 'img' which is created using the 'createElement()' function. The purpose of this
                // variable is to hold the image that is found in this current piece of data.
                let img = document.createElement("img");
                // DEBUG. Wanted to make sure it was the correct url being assigned to the src.
                console.log(dataPiece.url);
                // The 'src' element of the image element is assigned to the current piece of datas 'dataPiece 'url, this will make it so the source of the image is coming from the
                // url link at which it was retreived from.
                img.src = dataPiece.url;
                // DEBUG. Wanted to make sure it was the correct name being assigned to the alt.
                console.log(dataPiece.name);
                // The 'alt' property of the image element is assigned to the name of the current piece of datas 'dataPiece' name. This allows for the 'alt' property of the image to
                // be set based upon the name of the image in this current iterations piece of data.
                img.alt = dataPiece.name;
                // Two CSS/Bootstrap classes are then added to the 'img' elements styles. 'img-fluid' and 'rounded' using the 'classList.add()' method, this will make it so the image will
                // responsive and visually appealing.
                img.classList.add("img-fluid", "rounded");
    
                // A new variable 'imgSeries' is declared and initialized to a newly created dynamic element 'h2', this will be responsible for holding the series in which each piece of datas
                // image belongs to, and will be displayed on the HTML page within an 'h2' tag.
                let imgSeries = document.createElement("h2");
                // DEBUG. Wanted to make sure it was the correct series.
                console.log(dataPiece.series);
                
                // The text content of the 'imgSeries' 'h2' tag is set to a string interpolation 'dataPiece.series' which holds the piece of datas series name in this current iteration of the 
                // for each loop. For every piece of data found in the 'data' array, this will change everytime, each time belonging to a different column.
                imgSeries.textContent = `${dataPiece.series}`;
    
                // The variable 'imgName' is declared and initialized to a newly created dynamic element 'p' which will hold the name of the piece of data in this current iteration.
                let imgName = document.createElement("p");
                // The text content of the 'imgName' element is changed to now hold the name of the piece of data 'dataPiece' in this iteration of the for each loop. For every piece of
                // data in the 'data' array, a new name will be assigned to this variable and will show in its own column on the webpage.
                imgName.textContent = `${dataPiece.name}`;

                // In order to display each of these dynamic elements on the HTML page, in every iteration of the for each loop the series of the current piece of data 'imgSeries', the 
                // actual image of the current piece of data 'img', and the name of the current piece of data 'imgName' are all appended to the column that was created dynamically
                // above. This is so for every piece of data in the array, they will each appear in their own column, and then will appear in a row for a better visual expirience.
                column.appendChild(imgSeries);
                column.appendChild(img);
                column.appendChild(imgName);

                // The 'variable' column which holds a dynamically created 'div' element is then appended to the 'row' variable, this is done so each induvidual 'column' holding the 
                // data's information is then appended (added) to the element 'row' which will hold each column of data.
                row.appendChild(column);
            });

            // Once the for each loop has gone through each piece of data 'dataPiece' in the array, the 'row' itself is then appended to the 'conatainer' variable which holds the 'content'
            // element from the HTML page. This is done so the entire row is now displayed onto the HTML page, each column with its own styles.
            container.appendChild(row);

            // A new variable 'dataTable' is then declared and initialized to a newly created dynamic element 'table' which will hold each 'column' and 'row' of data. 
            // Bassically this table is responsible for holding each piece of data 'dataPiece' in the array, that has been placed into colums and rows.
            let dataTable = document.createElement("table");
            // The 'dataTable' table then gets the 'table', 'table-striped', and 'table-bordered' bootstrap styles added to it by using the 'classList.add()' function. 
            // This is done as the assignment example featured a table which had a striped look, with a border surrounding it so I tried my best to both be original, and
            // adhere to the assignments instructions. 
            dataTable.classList.add("table", "table-striped", "table-bordered");

            // Since the table holding the data has the components of a HTML table, the variable 'tableThead' is declared and initialized to a new dynamic element 'thead' 
            // that is created using the 'createElement()' function. This will hold each header of the table, like the series of the piece of data, the name of the piece 
            // of data, and and the url in which the piece of data was retreived from (csunix).
            let tableThead = document.createElement("thead");

            // The variable 'tableHeaderRow' is declared and initialized to the creation of a new dynamic element 'tr' by using the 'createElement()' function. The purpose
            // of this is to hold each of the tables headers in rows, which will be holding the name of the data that will be displayed under the headers.
            let tableHeaderRow = document.createElement("tr");
            // The inner html of the 'tableHeaderRow' is set to three table header 'th' tags, each of which will contain the word 'series', 'name' or 'url', which indicates
            // each section of the table, and the type of data that will be under this section.
            tableHeaderRow.innerHTML = `
                <th class="bg-info text-white">Series</th>
                <th class="bg-info text-white">Name</th>
                <th class="bg-info text-white">URL</th>
            `;
            // The 'tableHeaderRow' is then appended to the 'tableThead' so that the tables headers are apart of the overall table header itself.
            tableThead.appendChild(tableHeaderRow);
            // The 'tableThead' is then appended to the 'dataTable' table so that the table headers, and each of the subheaders are apart of the overall table that will be holding
            // all of the data.
            dataTable.appendChild(tableThead);
    
            // The variable 'tableTbody' is declared and initialized to a new dyanmically created element 'tbody' using the 'createElement()' function. This variable is created as 
            // the table that is holding all of the data will need a body which will consist of the various categories of data.
            let tableTbody = document.createElement("tbody");
            // A new for each loop is started and accesses every 'dataPiece' in the 'data' array of data.
            data.forEach(dataPiece => {
                // For every 'dataPiece' found in the array, a new variable 'row' is declared and initialized to a new dynamically created element 'tr', the purpose of this element
                // is to display the parts of this piece of data 'dataPiece' in a row in the body of the table.
                let row = document.createElement("tr");
                // The inner html of this 'tr'/'row' is then set to three table data tags 'td', each of which will contain a different part of the piece of datas data. The first table 
                // data tag will contain the series name of the data piece, the following tag will contain the name of the data piece, and the last tag will contain the url in which the
                // piece of data was retreived from. (Will always be csunix). Each table data 'td' tag will use the string interpolation to display the current piece of datas series, name,
                // or url within the tag, this is done to avoid the need to use multiple if statements and reduce the length of the code.
                row.innerHTML = `
                    <td class="bg-light">${dataPiece.series}</td>
                    <td class="bg-light">${dataPiece.name}</td>
                    <td class="bg-light">${dataPiece.url}</td>
                `;
                // The 'row' variable containing the 'tr' element is then appended to the 'tableTbody' which adds the table row into the body of the table.
                tableTbody.appendChild(row);
            });
            // The body of the table 'tableTbody' is then added (appended) to the 'dataTable' variable which holds the 'table' element. This is so the actual body of the table appears inside
            // of the table itself.
            dataTable.appendChild(tableTbody);

            // Once the body of the table is added into the table, the actual table is added (appended) to the 'container' variable which holds the 'content' element from the HTML page. This is
            // done so the table of data will also appear in the 'content' element of the HTML page.
            container.appendChild(dataTable);

            // The variable 'dataCopyright' is declared and initialized to the newly dynamically created 'p' tag. This is done because the assignment specifically mentions that each copyright notice
            // needs to be included in the element holding the pictures and data table.
            let dataCopyright = document.createElement("p");
            // This if statement determines which copyright notice to show, depending on which choice the user has made either 'mario' or 'starwars'. 
            // The first if statement checks if the users choice was 'mario' by converting the value held in the 'choice' variable to lower case using the 'toLowerCase()' function, and checking if it
            // is strictly equal to 'mario' using the strictly equal operator '==='.
            if (choice.toLowerCase() === "mario") {
                // If the choice was 'mario', then the text content of the 'dataCopyright' variable holding the 'p' element is set to the mario copyright notice.
                dataCopyright.textContent = "Game trademarks and copyrights are properties of their respective owners. Nintendo properties are trademarks of Nintendo. © 2019 Nintendo.";
            // This else if statement checks if the choice the user made was 'starwars', again using the 'toLowerCase()' function and the strictly equal operator '==='.
            } else if (choice.toLowerCase() === "starwars") {
                // If the choice was 'starwars', the text content of the 'dataCopyright' variable holding the 'p' element is set to a starwars copyright notice.
                dataCopyright.textContent = "Star Wars © & TM 2022 Lucasfilm Ltd. All rights reserved. Visual material © 2022 Electronic Arts Inc.";
            }
            // The 'dataCopyright' variable holding the 'p' element is appended (added) to the 'container' which is holding the 'content' element from the HTML page, this is so the copyright notcie
            // will appear inside of the container once the user has chosen one of the options.
            container.appendChild(dataCopyright);
        })
        // The 'catch()' method block is responsible for catching any errors thrown when making a AJAX 'fetch' request to the csunix server. The 'error' object will hold the error that was thrown.
        .catch(error => {
            // If an error was thrown, the object which holds the error 'error' is logged to the console which allows for an easier way of determining the source of issue.
            // This helped me determine my initial error which was a result of an incorrectly created dynamic element.
            console.error("Error fetching data: ", error);
            // I added this as a more user friendly debugging method, which will let the user know if an error occured.
            // The text content of the 'content' element on the html page is set to a string which lets the user know that an error occured.
            document.getElementById("content").textContent = "Error! Something went wrong while fetching the data. Please try again!";
        });
    });