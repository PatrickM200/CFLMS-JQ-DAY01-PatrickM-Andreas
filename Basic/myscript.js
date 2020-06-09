/*
 * My jQuery selectors
 *
 * Apply a style such as a yellow background to the following elements.
 * Test your selectors one at a time.
 */

// all elements
$("*").css("background-color", "yellow");

// all p elements
$("p").css("color", "blue");

// the p element with an ID of "intro"
$("p#intro").css("color", "red");

// all elements with a class of "note"
$(".note").css("background-color", "grey");

// all DIV elements with a class of note
$("div.note").css("color", "green");

// all p elements in the article element
$("arcticle p").css("background-color", "green");

// the last element in any section which is a p tag
$("p:last").css("background-color", "silver");

// the first paragraph on the page
$("p:first").css("background-color", "silver");

// all p elements which have a link
$("p a").css("background-color", "brown");

// the second li within nested ul element
$("li ul li").css("background-color", "blue");


// every second and third p element
$("p:nth-of-type(2)").css("background-color", "white");
$("p:nth-of-type(3)").css("background-color", "white");