let pageBody = ;// ** use query selector to get the body tag
let currentNode = 0;
let innerNode = 0;
/**
 * * complete the 2 dimensional array that will hold onto images with various styles attached
 */
let contentData = [
    /**
     * *Create inner arrays like the one below
     * *Have at least 5 inner arrays with 3 entries each
     * *Each inner arrays entries should be a photo you took with different photo effects added
     * *ensure that your file setup includes an img folder to hold onto all your images
     * *make each image 600x600px
     */
    ["img/arch_mosaic.png", "img/arch_square.png"],
    
]

/**
 * * create a function expression that will use DOM manipulation to add an h1 tag
 * * fill the tag with a title from a parameter, add a class to the tag and add the tag to the screen
 * *  
 * * Please use a descriptive name for your function 
 */
function whatGoesHere?(whatGoesHere?){
    whatGoesHere?
}

/** 
 * * complete the following function as per the instructions below
 */
function makeImgHolder(){
    let contentMain = document.createElement("main");
    let myImg = document.createElement("img");
    myImg.setAttribute("id", "refImg");
    // ** add the sibling class to the newly made img tag


    // ** fill in the blanks to make a image tag respond to clicks
    myImg.      (" ", ()=>{
        innerNode+=1;
        if(!contentData[currentNode][innerNode]){
            innerNode = 0;
        }
        showContent(document.querySelector("#refImg"), contentData, currentNode, innerNode);
    })
    //** append the image tag to the main tag */

    //** append the main tag to the body tag */

}

function moveImg(e){
    innerNode = 0;
    currentNode +=parseInt(e.target.dataset.dir);
    if ( ){// ** make a condition in the if to check if the number is too high for the number of values in the array
        currentNode = 0;
    }else if( ){ //** make a condition here to check if the number is less than 0
        currentNode = contentData.length-1;
    }
    showContent(document.querySelector("#refImg"), contentData, currentNode, innerNode);
}

//** console log what each of the 5 parameters represent and what they do */
function makeButton(buttonText, id, dataTag, dataValue, funcAction){
    let newButton = // ** complete this line to have it make a new button
    newButton.innerText = //** complete this line to set the buttons text
    newButton.setAttribute("id", id);
    // ** console log what a data attribute is, and what this data attribute does
    newButton.setAttribute(`data-${dataTag}`, dataValue);
    newButton.addEventListener("click", funcAction);
    //** add the apropriate code to the line below to return the new button
    
}

function makeControls(){
    let controlsArea = // ** complete the line to create a new section tag
    controlsArea.append(makeButton("Previous", "previous", "dir", -1, moveImg));
    controlsArea.append(makeButton("Next", "next", "dir", 1, moveImg));
    //** use dom manipulation to add the controls area to the main tag
}


function showContent(target, dataSrc, imgNum, innerNum){
    //** console long what each of the parameters represents and how each one is used */

    //** console log what this line does and an example of what it is a accessing
    target.src = dataSrc[imgNum][innerNum];
}

function init(){
    //**  call the makeTitle function and give your gallery an apropriate name
    makeImgHolder();  //* console log what this function does
    makeControls();
    showContent(document.querySelector("#refImg"), contentData, currentNode, innerNode);
}
//**  run the init function 

//** use your knowledge of CSS and Javascript to custom style the page and use google fonts