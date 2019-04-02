global.window = global;
require('../src/data.js');
const input1 = {
  Ahri: {
    id: 'Ahri',
    name: 'Ahri',
    title: 'the Nine-Tailed Fox',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg',
    blurb: 'Unlike other foxes that roamed the woods of southern Ionia, Ahri had always felt a strange connection to the magical world around her; a connection that was somehow incomplete. Deep inside, she felt the skin she had been born into was an ill fit for ...',
    info: {
      attack: 3,
      defense: 4,
      magic: 8,
      difficulty: 5
    },
    tags: ['Mage', 'Assassin'],
    stats: {
      hp: 514.4,
      hpperlevel: 80,
      mp: 334,
      mpperlevel: 50,
      movespeed: 330,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 550,
      hpregen: 6.505,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.04,
      attackdamageperlevel: 3,
      attackspeedoffset: -0.065,
      attackspeedperlevel: 2
    }
  },
  Akali: {
    id: 'Akali',
    name: 'Akali',
    title: 'the Fist of Shadow',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg',
    blurb: 'There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...',
    info: {
      attack: 5,
      defense: 3,
      magic: 8,
      difficulty: 7
    },
    tags: ['Assassin'],
    stats: {
      hp: 587.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 26.38,
      armorperlevel: 3.5,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 8.34,
      hpregenperlevel: 0.65,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 58.376,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.1,
      attackspeedperlevel: 3.1
    }
  },
  FiddleSticks: {
    id: 'FiddleSticks',
    name: 'Fiddlesticks',
    title: 'the Harbinger of Doom',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg',
    blurb: 'For nearly twenty years, Fiddlesticks has stood alone in the easternmost summoning chamber of the Institute of War. Only the burning emerald light of his unearthly gaze pierces the musty darkness of his dust-covered home. It is here that the Harbinger ...',
    info: {
      attack: 2,
      defense: 3,
      magic: 9,
      difficulty: 9
    },
    tags: ['Mage', 'Support'],
    stats: {
      hp: 524.4,
      hpperlevel: 80,
      mp: 400.12,
      mpperlevel: 56,
      movespeed: 335,
      armor: 20.88,
      armorperlevel: 3.5,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 480,
      hpregen: 5.605,
      hpregenperlevel: 0.6,
      mpregen: 6,
      mpregenperlevel: 0.8,
      crit: 0,
      critperlevel: 0,
      attackdamage: 48.36,
      attackdamageperlevel: 2.625,
      attackspeedoffset: 0,
      attackspeedperlevel: 2.11
    }
  },
  Graves: {
    id: 'Graves',
    name: 'Graves',
    title: 'the Outlaw',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/Graves.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg',
    blurb: 'Malcolm Graves is a wanted man in every realm, city and empire he has visited. Tough, strong-willed, and above all, relentless, through his life of crime he has amassed (then invariably lost) a small fortune.',
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 3
    },
    tags: ['Marksman'],
    partype: 'MP',
    stats: {
      hp: 551.12,
      hpperlevel: 84,
      mp: 322.2,
      mpperlevel: 40,
      movespeed: 340,
      armor: 24.376,
      armorperlevel: 3.4,
      spellblock: 30,
      spellblockperlevel: 0,
      attackrange: 425,
      hpregen: 6.675,
      hpregenperlevel: 0.7,
      mpregen: 7.9,
      mpregenperlevel: 0.7,
      crit: 0,
      critperlevel: 0,
      attackdamage: 60.83,
      attackdamageperlevel: 2.41,
      attackspeedoffset: 0.3,
      attackspeedperlevel: 2.6
    }
  },
  Evelynn: {
    id: 'Evelynn',
    name: 'Evelynn',
    title: 'the Widowmaker',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg',
    blurb: 'Swift and lethal, Evelynn is one of the most deadly - and expensive - assassins in all of Runeterra. Able to merge with the shadows at will, she patiently stalks her prey, waiting for the right moment to strike. While Evelynn is clearly not entirely ...',
    info: {
      attack: 4,
      defense: 2,
      magic: 7,
      difficulty: 10
    },
    tags: ['Assassin', 'Mage'],
    stats: {
      hp: 531.2,
      hpperlevel: 90,
      mp: 315.6,
      mpperlevel: 42,
      movespeed: 340,
      armor: 26.5,
      armorperlevel: 3.8,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 9.82,
      hpregenperlevel: 0.55,
      mpregen: 8.105,
      mpregenperlevel: 0.6,
      crit: 0,
      critperlevel: 0,
      attackdamage: 53.88,
      attackdamageperlevel: 3.5,
      attackspeedoffset: 0,
      attackspeedperlevel: 3.6
    }
  },
  LeeSin: {
    id: 'LeeSin',
    name: 'Lee Sin',
    title: 'the Blind Monk',
    img: 'https://www.masterypoints.com/assets/img/lol/champion_icons/LeeSin.png',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg',
    blurb: 'As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League\'s High Councilor at the time. While studying at the Arcanum Majoris,...',
    info: {
      attack: 8,
      defense: 5,
      magic: 3,
      difficulty: 6
    },
    tags: ['Fighter', 'Assassin'],
    stats: {
      hp: 570.8,
      hpperlevel: 85,
      mp: 200,
      mpperlevel: 0,
      movespeed: 350,
      armor: 24.216,
      armorperlevel: 3.7,
      spellblock: 32.1,
      spellblockperlevel: 1.25,
      attackrange: 125,
      hpregen: 7.425,
      hpregenperlevel: 0.7,
      mpregen: 50,
      mpregenperlevel: 0,
      crit: 0,
      critperlevel: 0,
      attackdamage: 61.176,
      attackdamageperlevel: 3.2,
      attackspeedoffset: -0.04,
      attackspeedperlevel: 3
    }
  }
};
const input2 = [['Ahri', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', {attack: 3, defense: 4, magic: 8, difficulty: 5}], ['Akali', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', {attack: 5, defense: 3, magic: 8, difficulty: 7}], ['Evelynn', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg', { attack: 4, defense: 2, magic: 7, difficulty: 10}], ['LeeSin', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg', {attack: 8, defense: 5, magic: 3, difficulty: 6}]];
const output1 = [['Ahri', 'https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png'], ['Akali', 'https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png'], ['FiddleSticks', 'https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png'], ['Graves', 'https://www.masterypoints.com/assets/img/lol/champion_icons/Graves.png'], ['Evelynn', './assets/placeholder.png'], ['LeeSin', 'https://www.masterypoints.com/assets/img/lol/champion_icons/LeeSin.png']];
const output2 = [['Ahri', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', {attack: 3, defense: 4, magic: 8, difficulty: 5}], ['Akali', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', {attack: 5, defense: 3, magic: 8, difficulty: 7}], ['Evelynn', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg', { attack: 4, defense: 2, magic: 7, difficulty: 10}], ['LeeSin', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg', {attack: 8, defense: 5, magic: 3, difficulty: 6}]];
const output3 = [['LeeSin', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg', {attack: 8, defense: 5, magic: 3, difficulty: 6}], ['Akali', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg', {attack: 5, defense: 3, magic: 8, difficulty: 7}], ['Evelynn', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg', { attack: 4, defense: 2, magic: 7, difficulty: 10}], ['Ahri', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg', {attack: 3, defense: 4, magic: 8, difficulty: 5}]];
const output4 = ['Lee Sin', 'the Blind Monk', 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/_0.jpg', 'As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League\'s High Councilor at the time. While studying at the Arcanum Majoris,...', {attack: 8, defense: 5, magic: 3, difficulty: 6}, {hp: 570.8, hpperlevel: 85, mp: 200, mpperlevel: 0, movespeed: 350, armor: 24.216, armorperlevel: 3.7, spellblock: 32.1, spellblockperlevel: 1.25, attackrange: 125, hpregen: 7.425, hpregenperlevel: 0.7, mpregen: 50, mpregenperlevel: 0, crit: 0, critperlevel: 0, attackdamage: 61.176, attackdamageperlevel: 3.2, attackspeedoffset: -0.04, attackspeedperlevel: 3}];

describe('getAll', () => {
  it('debería ser una función', () => {
    expect(typeof getAll).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(Array.isArray(getAll())).toBe(true);
  });
  it('debería retornar output1 para input1', () => {
    expect(getAll(input1)).toEqual(output1);
  });
});

describe('roleFilter', () => {
  it('debería ser una función', () => {
    expect(typeof roleFilter).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(Array.isArray(roleFilter())).toBe(true);
  });
  it('debería retornar output1 para input1', () => {
    expect(roleFilter(input1, 'Assassin')).toEqual(output2);
  });
});

describe('sortData', () => {
  it('debería ser una función', () => {
    expect(typeof sortData).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(Array.isArray(sortData(output2, 'attack', 'descendent'))).toBe(true);
  });
  it('debería retornar output1 para input1', () => {
    expect(sortData(output2, 'attack', 'descendent')).toEqual(output3);
  });
});

describe('championDetails', () => {
  it('debería ser una función', () => {
    expect(typeof championDetails).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(Array.isArray(championDetails(input1, 'LeeSin'))).toBe(true);
  });
  it('debería retornar output1 para input1', () => {
    expect(championDetails(input1, 'LeeSin')).toEqual(output4);
  });
});

describe('computeStats', () => {
  it('debería ser una función', () => {
    expect(typeof computeStats).toBe('function');
  });
  it('debería retornar un array', () => {
    expect(typeof computeStats(input2)).toBe('number');
  });
  it('debería retornar output1 para input1', () => {
    expect(computeStats(input2)).toEqual(7);
  });
});

/* para una funcion:
testear si es una funcion, si su salida es de tipo array o string, o boolean, su resultado
IMPORTANTE testear que no modifique la data original
.not.toBe se utilizar para verificar este ultimo */
