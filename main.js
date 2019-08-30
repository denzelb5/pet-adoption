console.log('hi');

const pets =[{
    image: 'https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'Mikey',
    color: 'Color: White',
    skill: 'Special skill: I love to play fetch!',
    type: 'Type: Dog'
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Beagle_puppy_sitting_on_grass.jpg',
    name: 'Ludwig',
    color: 'Color: Black and white mix',
    skill: 'Special skill: I can sniff out anything!',
    type: 'Type: Dog'
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/June_odd-eyed-cat.jpg/1474px-June_odd-eyed-cat.jpg',
    name: 'Marilyn',
    color: 'Color: White',
    skill: 'Special skill: Snuggling',
    type:  'Type: Cat'

},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Adorable-animal-cat-1317844.jpg',
    name: 'Sylvester',
    color: 'Color: Black and white',
    skill: 'Special skill: I love catching mice',
    type: 'Type: Cat'
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Dennis_the_pet_pig_sings%2C_cropped_version.jpg',
    name: 'Dennis',
    color: 'Color: Pink',
    skill: 'Special skill: I love to sing!',
    type: 'Type: Miniature pig'
},
{
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Itchy_piglet.jpg',
    name: 'Buster',
    color: 'Color: Black and white',
    skill: 'Special skill: Chasing my tail',
    type: 'Type: Miniature pig'
}]

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const petCard = (petArr) => {
    let domString = '';
    for (let i = 0; i < petArr.length; i++) {
        const pets = petArr[i];
        domString += `
        <div class="card">
            <h2 id="name">${pets.name}</h2>
            <img src='${pets.image}' alt='Image of ${pets.name}'>
            <div class="info">
                <p class="color">${pets.color}</p>
                <p class="type">${pets.type}</p>
                <p id="skill">${pets.skill}</p>
            </div>
            
        </div>
        `
    }
    printToDom(domString, 'petCard')
}

petCard(pets)