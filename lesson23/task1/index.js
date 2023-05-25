//console.log('Hello world')

const tasks = [
    { text: 'Buy milk', done: true },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: false },
    { text: 'Buy meat', done: true },
  ];

  /* const tasks = [
    'Buy milk',
    'Pick up Tom from airport',
    'Visit party',
    'Visit doctor',
    'Buy meat',
  ];
 */
function renderListItem(listItems) {
    
    const listElem = document.querySelector('.list');

    const listItemElements = listItems
    .sort((a, b) => a.done - b.done)
    .map(({text, done}) => {

        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        
        const checkBoxElement = document.createElement('input');

        if (done) {
            listItemElem.classList.add('list__item_done');
        }
        
        checkBoxElement.classList.add('list__item-checkbox');
        checkBoxElement.setAttribute('type','checkbox');
        
        //checkBoxElement.setAttribute('checked', done);
        checkBoxElement.checked = done;
    
        //console.log(done);

        listItemElem.append(checkBoxElement, text);

        //listElem.append(listItemElem);

        return listItemElem;

    });

    listElem.append(...listItemElements);

  }

  renderListItem(tasks);