//константа вибираем все кнопки Btn с помощью .querySelectorAll и вводим клас кнопок tabs__nav-btn -- выбрали все кнопки и сохранили в константу tabsBtn
const tabsBtn = document.querySelectorAll(".tabs__nav-btn");   
const tabsItems = document.querySelectorAll(".tabs__item");;                                      

//берем нашу коллекцию кнопок tabsBtn, проходим по нашей коллекции кнопок методом .forEach и вешаем на них обработчик события клика


tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function() {  // на каждую кнопку вешаем обработчик события клика "click"
        let currentBtn = item;          //переменная currentBtn, обращаемся к нашей кнопке не через item, а через переменную currentBtn


        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        if( ! currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function(item) {
                item.classList.remove('active');
            });
      
//сначала убираем класс 'active' у всех кнопок
        tabsBtn.forEach(function(item) {  //коллекция всех кнопок tabsBtn проходимся .forEach по этим кнопкам, (item)-это параметр
            item.classList.remove('active'); // у каждой кнопки item убираем клас 'active', в объекте методов .classList выбираем метод .remove. Убираем сейчас класс 'active' у всех кнопок
        });

        tabsItems.forEach(function(item) {  
            item.classList.remove('active'); 
        });
    };


//теперь даем класс 'active' определенной кнопке
        currentBtn.classList.add('active');  //на кнопку currentBtn вешаем новый клас .classList (набор методов), .add('active')- добавляем клас 'active'
        currentTab.classList.add('active');


    });
    
}

document.querySelector('.tabs__nav-btn').click();