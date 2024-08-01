//Задача № 1

function cachingDecoratorNew(func) {
    let cache = [];
    return function(...args) {

        /*считаем хэш для аргументов и проверяем наличие в кэше, если есть возвращаем*/
        const newHash = md5(args);
        if(cache.find(item => item.hash === newHash)) {
            return 'Из кеша: ' + cache.filter(item => item.hash === newHash)[0]['value'];
        }

        /*если нет в кэше, выполняем вычисления*/
        const result = func(...args);

        /*если длина кэша больше 5 выкидываем первый элемент и записываем в кэш*/
        if(cache.length >= 5) {
            cache.shift();
            cache.push({
                hash: newHash,
                value: result,
            });
        } 

        /*если длина кэша меньше 5 записываем в кэш*/
        else {
            cache.push({
                hash: newHash,
                value: result,
            });
        }

        return 'Вычисляем: ' + result;
    }
}

//Задача № 2


function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    function wrapper(...args) {

        /*считаем каждый вызов обертки*/
        wrapper.allCount++; 

        /*если вызов по таймеру запущен, удаляем id таймера*/
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        /*если функция переданная в обертку еще не вызывалась,
        вызываем ее сразу и считаем вызов*/
        if ( wrapper.count === 0 ) {
            func(...args);
            wrapper.count++;
            return;
        }

        /*создаем новый таймер на выполнение функции (перезапуская отсчет,
         откладываем выполнение обернутой функции по причине нового вызова)
        , считаем вызов обернутой функции*/
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);

    }

    /*создаем свойства для обьекта функции обертки перед тем как вернуть ее*/
    wrapper.count = 0;
    wrapper.allCount = 0;

    return wrapper;
}


/*тест
const functionToDecorate = () => console.log("тук тук");

const decoratedFunction = debounceDecoratorNew(functionToDecorate, 1000);

console.log(decoratedFunction(1,2,3));
console.log(decoratedFunction(1,2,3));
console.log(decoratedFunction(1,2,3));
console.log(decoratedFunction(1,2,3));
setTimeout(() => console.log(decoratedFunction.count, decoratedFunction.allCount), 2000);
*/