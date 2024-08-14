export function createGrid(obj) {
    let gridElem = document.createElement('div');
    let population = document.createElement('div');
    let filmimg = document.createElement('img');
    let filmName = document.createElement('p');
    let filmCategory = document.createElement('p');

    // population.textContent = obj;
    // filmName.textContent = obj;
    // filmCategory.textContent = obj;1

    gridElem.classList.add('gridElem');
    population.classList.add('population');
    filmName.classList.add('filmName');
    filmCategory.classList.add('filmCategory');

    gridElem.append(population, filmimg, filmName, filmCategory);

    return gridElem
}