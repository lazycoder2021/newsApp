window.addEventListener('DOMContentLoaded', async function () {
    const response = await fetch(`http://api.mediastack.com/v1/news?access_key=e831f50c5495386e01dd4659c14f192c&languages=en&countries=in&limit=50`);
    const data = await response.json();
    const news = data.data;
    //console.log(data.data[6].image)
    console.log(news)



    const title1 = document.querySelector('.title1');
    const desc1 = document.querySelector('.desc1');
    title1.innerHTML = `<a href="https://www.indiatimes.com/news/india/assam-floods-situation-grim-in-state-as-3-dead-nearly-574-lakh-people-in-22-districts-affected-548479.html">${news[2].title}</a>`;
    desc1.innerHTML = news[2].description;


    const title2 = document.querySelector('.title2');
    const desc2 = document.querySelector('.desc2');

    title2.innerHTML = `<a href="https://www.indiatimes.com/news/india/delhi-records-highest-one-day-rainfall-in-september-in-12-years-imd-issues-orange-alert-548525.html">${news[6].title}</a>`;
    desc2.innerHTML = news[6].description;

    const title3 = document.querySelector('.title3');
    const desc3 = document.querySelector('.desc3');
    const title4 = document.querySelector('.title4');
    const desc4 = document.querySelector('.desc4');

    const title5 = document.querySelector('.title5');
    const desc5 = document.querySelector('.desc5');
    const title6 = document.querySelector('.title6');
    const desc6 = document.querySelector('.desc6');



    title3.innerHTML = `<a href="https://www.businesstoday.in/technology/story/redmi-note-10-pro-and-redmi-note-10-pro-max-get-a-new-dark-nebula-colour-variant-305630-2021-09-01?utm_source=rssfeed">${news[3].title}</a>`;
    desc3.innerHTML = `${news[3].description}`;
    title4.innerHTML = `<a href="https://www.businesstoday.in/latest/economy/story/supertech-twin-tower-case-up-cm-yogi-calls-for-inquiry-action-against-guilty-officers-305642-2021-09-01?utm_source=rssfeed">${news[47].title}</a>`;
    desc4.innerHTML = `${news[47].description}`;
    title5.innerHTML = `<a href="https://www.businesstoday.in/latest/corporate/story/raul-rebello-appointed-as-new-mahindra-finance-coo-305658-2021-09-01?utm_source=rssfeed">${news[6].title}</a>`;
    desc5.innerHTML = `${news[5].description}`;
    title6.innerHTML = `<a href = "https://www.businesstoday.in/latest/corporate/story/raul-rebello-appointed-as-new-mahindra-finance-coo-305658-2021-09-01?utm_source=rssfeed">${news[6].title}</a >`;
    desc6.innerHTML = `${news[6].description}`;

})

const getSports = document.querySelector('.getSports');
const getHealth = document.querySelector('.getHealth');


const title7 = document.querySelector('.title7');
const desc7 = document.querySelector('.desc7');
const title8 = document.querySelector('.title8');
const desc8 = document.querySelector('.desc8');
const title9 = document.querySelector('.title9');
const desc9 = document.querySelector('.desc9');
const title10 = document.querySelector('.title10');
const desc10 = document.querySelector('.desc10');



getSports.addEventListener('click', async function () {
    const results = await fetch('http://api.mediastack.com/v1/news?access_key=e831f50c5495386e01dd4659c14f192c&categories=sports&languages=en&countries=in');
    const data = await results.json();
    console.log(data.data[16])
    console.log(data.data[22])
    console.log(data.data[14])
    console.log(data.data[2])

    title7.innerHTML = `<a href="http://www.indiansportsnews.com/badminton-news/47788-tokyo-paralympics-india-s-pramod-bhagat-wins-gold-manoj-sarkar-bags-bronze-in-men-s-singles-badminton-sl3-class-event">${data.data[16].title}</a>`;
    title8.innerHTML = `<a href="http://www.indiansportsnews.com/cricket-news/47787-we-have-sufficient-time-to-get-back-into-rhythm-for-remainder-of-2021-season-says-delhi-capitals-assistant-coach-ajay-ratra">${data.data[22].title}</a>`
    title9.innerHTML = `<a href="https://sportscafe.in/cricket/articles/2021/sep/02/ban-vs-nz-finn-allens-addition-to-the-side-will-add-a-lot-of-fire-to-the-batting-lineup-says-glenn-poknall?utm_medium=rss">${data.data[14].title}</a>`
    title10.innerHTML = `<a href="https://sportscafe.in/cricket/articles/2021/sep/02/ban-vs-nz-finn-allens-addition-to-the-side-will-add-a-lot-of-fire-to-the-batting-lineup-says-glenn-poknall?utm_medium=rss">${data.data[2].title}</a>`

    desc7.innerHTML = data.data[16].description;
    desc8.innerHTML = data.data[22].description;
    desc9.innerHTML = data.data[14].description;
    desc10.innerHTML = data.data[2].description;


})

const title11 = document.querySelector('.title11');
const desc11 = document.querySelector('.desc11');
const title12 = document.querySelector('.title12');
const desc12 = document.querySelector('.desc12');
const title13 = document.querySelector('.title13');
const desc13 = document.querySelector('.desc13');
const title14 = document.querySelector('.title14');
const desc14 = document.querySelector('.desc14');


getHealth.addEventListener('click', async function () {
    const results = await fetch('http://api.mediastack.com/v1/news?access_key=e831f50c5495386e01dd4659c14f192c&categories=health&languages=en');
    const data = await results.json();
    console.log(data.data[5])
    console.log(data.data[22])
    console.log(data.data[4])
    console.log(data.data[9])

    title11.innerHTML = `<a href="https://www.nytimes.com/2021/09/07/well/coffee-caffeine-sleep-pressure.html">${data.data[5].title}</a>`;
    title12.innerHTML = `<a href="https://www.nytimes.com/2021/10/04/health/depression-treatment-deep-brain-stimulation.html">${data.data[22].title}</a>`;
    title13.innerHTML = `<a href="https://www.bbc.co.uk/news/uk-politics-58476632?at_medium=RSS&at_campaign=KARANGA">${data.data[4].title}</a>`;
    title14.innerHTML = `<a href="https://www.nytimes.com/2021/10/04/health/depression-treatment-deep-brain-stimulation.html">${data.data[6].title}</a>`;

    desc11.innerHTML = data.data[5].description;
    desc12.innerHTML = data.data[22].description;
    desc13.innerHTML = data.data[4].description;
    desc14.innerHTML = data.data[9].description;
})









