/* Manejo del DOM */
/* vars */
let arr = [];
let arrFiltered = [];
/* functions */
const printAll = (arr) => { // arr = [[id, img], [id, img], [id, img], [id, img]]
  for (let i = 0; i < arr.length; i++) {
    const item = `<div class="col-xs-2 col-md-1 border-box gray-color"><img class="block auto img-png" src="${arr[i][1]}" alt="${arr[i][0]}"/></div>`;
    document.getElementById('root').insertAdjacentHTML('beforeend', item);
  }
};

const printCard = (roleArr) => {// roleArr = [id,splash,[info]]
  for (let i = 0; i < roleArr.length; i++) {
    const str = `
      <div class="row headline-color auto">
        <div class="col-xs-12 col-md-3">
          <figure class="auto">
            <img class="border-box" src="${roleArr[i][1]}" alt="${roleArr[i][0]}-image" />
          </figure>
        </div>
        <div class="col-xs-12 col-md-9 border-box content-card">
        <h3 class="auto">${roleArr[i][0]}</h3>
        <ul>
          <li>Attack: ${roleArr[i][2]['attack']}</li>
          <li>defense: ${roleArr[i][2]['defense']}</li>
          <li>Magic: ${roleArr[i][2]['magic']}</li>
          <li>Difficulty: ${roleArr[i][2]['difficulty']}</li>
        </ul>
        <button data-champion="${roleArr[i][0]}" class="btn block" type="button">SEE MORE</button>
        </div>
      </div>`;
    document.getElementById('role-container').insertAdjacentHTML('beforeend', str);
  }
};

// shows and hides a block element
const displayBlock = (showId, hideId) => {
  document.getElementById(hideId).classList.add('none');
  document.getElementById(showId).classList.remove('none');
};
/* events */
document.addEventListener('DOMContentLoaded', () => {
  arr = getAll(LOL['data']);
  printAll(arr);
});
/* menu buttons events */
const assassinBtn = document.getElementById('assassin');
assassinBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Assassin');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Assassin';
  displayBlock('role-container', 'root');
  displayBlock('role-container', 'detailsContainer');// (muestra, oculta)
});

const fighterBtn = document.getElementById('fighter');
fighterBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Fighter');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Fighter';
  displayBlock('role-container', 'root');	
  displayBlock('role-container', 'detailsContainer');
});

const mageBtn = document.getElementById('mage');
mageBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Mage');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Mage';
  displayBlock('role-container', 'root');
  displayBlock('role-container', 'detailsContainer');
});

const marksmanBtn = document.getElementById('marksman');
marksmanBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Marksman');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Marksman';
  displayBlock('role-container', 'root');	
  displayBlock('role-container', 'detailsContainer');
});

const tankBtn = document.getElementById('tank');
tankBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Tank');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Tank';
  displayBlock('role-container', 'root');	
  displayBlock('role-container', 'detailsContainer');
});

const supportBtn = document.getElementById('support');
supportBtn.addEventListener('click', () => {
  document.getElementById('role-container').innerHTML = '';
  document.getElementById('submenu').classList.remove('none');
  arrFiltered = roleFilter(LOL['data'], 'Support');
  printCard(arrFiltered);
  document.getElementById('compute-stats').innerHTML = `Media Difficulty: ${computeStats(arrFiltered).toFixed(2)}`;// stats
  document.getElementById('sort-condition').innerHTML = 'Support';
  displayBlock('role-container', 'root');	
  displayBlock('role-container', 'detailsContainer');
});

/* mostrar 2da pantalla */

const printDetails = (profile) => { // [name, title, img, blurb, {info}, {stats} ] // copia todos los elementos, sean arrays o contenido de objetos
  const info = `<div class="col-xs-12 profiles border-box">
				<div>
				<h2 class="in-line">${profile[0]}</h2>
				<button class="btn float-right" type="button"> HOME </button>
				<h3>${profile[1]}</h3>
				</div> 
				<div>
				<div class="col-xs-12 col-md-8">
				<figure class="auto"> 
				<img class="card-size2 center" src="${profile[2]}" alt="${profile[0]}">
				<p class="blurb">${profile[3]}</p>
				</figure>
				</div>	
				<div class="white-color col-xs-12 col-md-4 description border-box"> 
				<p>Attack: ${profile[4]['attack']}</p>
				<p>Defense: ${profile[4]['defense']}</p>
				<p>Mana: ${profile[4]['magic']}</p>
				<p>Difficulty: ${profile[4]['difficulty']}</p>
				</div>
				</div>
				<div class="clear">
				<h3 class="center light-gold-color">STATS</h3>
				<div class="col-xs-12 col-md-6"> 
				<p>Health Points (HP): ${profile[5]['hp']}</p>
				<p>Health Points per level : ${profile[5]['hpperlevel']}</p>
				<p>Magic Points (MP): ${profile[5]['mp']}</p>
				<p>Magic Points per level: ${profile[5]['mpperlevel']}</p>
				<p>Move's speed: ${profile[5]['movespeed']}</p>
				<p>Armor: ${profile[5]['armor']}</p>
				<p>Armor per level: ${profile[5]['armorperlevel']}</p>
				<p>Spell block: ${profile[5]['spellblock']}</p>
				<p>Spell block per level: ${profile[5]['spellblockperlevel']}</p>
				<p>Attack range: ${profile[5]['attackrange']}</p>
				</div>
				<div class="col-xs-12 col-md-6">
				<p>HP Regeneration Points: ${[5]['hpregen']}</p>
				<p>HP Regeneration Points per level: ${profile[5]['hpregenperlevel']}</p>
				<p>MP Regenaration Points: ${profile[5]['mpregen']}</p>
				<p>MP Regenaration Points per level: ${profile[5]['mpregenperlevel']}</p>
				<p>Critical: ${profile[5]['crit']}</p>
				<p>Critical per level: ${profile[5]['critperlevel']}</p>
				<p>Attack Damage: ${profile[5]['attackdamage']}</p>
				<p>Attack Damage per level: ${profile[5]['attackdamageperlevel']}</p>
				<p>Attack speed offset: ${profile[5]['attackspeedoffset']}</p>
				<p>Attack speed per level: ${profile[5]['attackspeedperlevel']}</p>
				</div>
				</div>
			</div>`;
  document.getElementById('detailsContainer').innerHTML = info;
};
	
/* end menu buttons */
const gridClickImg = document.getElementById('root');
gridClickImg.addEventListener('click', (event) => {
  // console.log(e.target.alt); //porque el value proviene del object-keys (nombres de las propiedades del objeto data)
  const profile = championDetails(LOL['data'], event.target.alt);
  printDetails(profile);
  displayBlock('detailsContainer', 'root');
});

const seeMoreBtn = document.getElementById('role-container');
seeMoreBtn.addEventListener('click', (event) => {
  const profile = championDetails(LOL['data'], event.target.dataset.champion);
  printDetails(profile);
  displayBlock('detailsContainer', 'role-container');
});

const sortMenuBtn = document.getElementById('sort-menu');
sortMenuBtn.addEventListener('click', (event) => {
  document.getElementById('role-container').innerHTML = '';
  const sortResult = sortData(arrFiltered, event.target.dataset.skill, 'descendent');
  printCard(sortResult);
  displayBlock('role-container', 'root');	
  displayBlock('role-container', 'detailsContainer');
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', () => {
  document.getElementById('menu-content').classList.toggle('none');
});
