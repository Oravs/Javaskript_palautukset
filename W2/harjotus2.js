/* T1 */
document.write(
  "If I had nine hours to chop down a tree, I'd spend the first six sharpening my ax."
);
/* T2 */
for (let i = 0; i < 51; i++) {
  document.write(i + "<br>");
}
/* T3 */

if (navigator.userAgent.indexOf("Firefox") != -1) {
  window.location.href = "http://www.mozilla.org";
} else if (navigator.userAgent.indexOf("Mozilla") != -1) {
  window.location.href = "http://www.mozilla.org";
} else {
  window.location.href = "http://www.google.com";
}

/* T5.1 */

document.write('<img src="http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg" alt="Example Image">');

/* T5.2 */
var images =[
				"http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg", 
				"http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg", 
				"http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg"
			];
		
var index=Math.floor(Math.random()*images.length);
document.write(`<img src="${images[index]}" alt="random image">`)

