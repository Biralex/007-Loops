const elemDIV = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSPAN = document.querySelector('.rect_span');

/* elem.addEventListener('click', () => {
    console.log('div_new');
});

const handler = () => {
    console.log('div_new1');
};

elem.addEventListener('click', handler);

elem.removeEventListener('click', handler); */

const logTarget = (text, color) => {
    const eventsListElem = document.querySelector('.events-list');
    
    eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null,'DIV', 'green');
const logGreenP = logTarget.bind(null,'P', 'green');
const logGreenSpan = logTarget.bind(null,'span', 'green');

const logGreyDiv = logTarget.bind(null,'DIV', 'grey');
const logGreyP = logTarget.bind(null,'P', 'grey');
const logGreySpan = logTarget.bind(null,'span', 'grey');

elemDIV.addEventListener('click', logGreyDiv, { capture: true});
elemDIV.addEventListener('click', logGreenDiv);

elemP.addEventListener('click', logGreyP, true);
elemP.addEventListener('click', logGreenP);

elemSPAN.addEventListener('click', logGreySpan, true);
elemSPAN.addEventListener('click', logGreenSpan);

