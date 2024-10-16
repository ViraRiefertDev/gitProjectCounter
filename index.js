// Задание

// Нужно доделать проекты коллективно в тех группах, которые были назначенны на Lesson 03

// 1 группа - Участники: Вера Риферт, Elizaveta Kashnitskaya, Paul Pufel, Александр Бадаев
// 2 группа - Участники: Elena Suslova, Maxim Iatiuc, Anischenko Alexander
// 3 группа - Участники: Yulya Dietz, Tatiana N, Viktor Romanenko, Stanislav Borysenko

// Требования:

// 1. В каждой группе выберете тим лида. Тим лид должен создать public репозиторий,
// добавить в collaborators участников его группы, все должны склонировать репозиторий.

// 2. Каждая группа должна создать приложение "Counter". Счётчик, который содержит блок результата и две кнопки,
// для увеличения числа счётчика на 1 и для уменьшения числа счётчика на 1. Начальное значение - 0

// 3. Тим лид должен раздать задания по проекту каждому из участниов.

// 4. Каждый участник в команде, должен сделать ответвление от главной ветки main и работать в ней.
// Когда код будет дописан, нужно залить код в удаленный репозиторий github
// и сделать pull request с вашей удаленной ветки в ветку main.
// Затем нужно скинуть ссылку тим лиду, чтобы он сделал code review

// 5. Если code review пройден, замечаний и конфликтов при слиянии веток нету, то тим лид делает merge веток.

// ДЗ пришлите мне в виде ссылки на gitpages и ссылки на репозиторий команды
// Дедлайн: 15.10.2024 до 15:00

const counterResult = document.querySelector("#counterResult");
const plusButtonCounter = document.querySelector("#increaseButton");
const minusButtonCounter = document.querySelector("#decreaseButton");

let counter = 0;

const plusCounterFunction = () => {
  try {
    if (counter > 98) {
      counter = 0;
      counterResult.textContent = 0;
      alert("Максимальное значение счетчика 99");
    } else {
      counter++;
      counterResult.textContent = counter;
    }
  } catch (error) {
    console.log("Произошла ошибка при увеличении счётчика:", error);
  }
};

const minusCounterFunction = () => {
  if (counter < 1) {
    counter = 0;
    counterResult.textContent = counter;
    alert("Минимальное значение счетчика 0");
  } else {
    counter--;
    counterResult.textContent = counter;
  }
};

plusButtonCounter.addEventListener("click", plusCounterFunction);
minusButtonCounter.addEventListener("click", minusCounterFunction);
