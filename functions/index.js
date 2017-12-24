const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from mmmmmmmmm Firebase!");
});


const puppeteer = require('puppeteer');

exports.pdfMaker =  functions.https.onRequest( (request, response) => {
  let PDF;
  puppeteer.launch()
    .then(browser =>{ browser.newPage()})
    .then(page => {
     PDF= page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'})
      .then(page.pdf({path: 'hn.pdf', format: 'A4'}));
     })
    .then(browser.close())
    .catch(function(err) {
       respond.send(err);
     })
     response.send('PDF made');
})

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send(async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
//     await page.pdf({path: 'hn.pdf', format: 'A4'});
  
//     await browser.close();
//   })()
// })