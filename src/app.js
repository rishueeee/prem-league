//Progression 1 - create a Manager sammelan and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  maa = [managerName, managerAge, currentTeam, trophiesWon];
  return maa;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation objhaect and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation) {
  if (formation.length == 0) {
    return null;
  }
  var letplay = {
    defender: formation[0],
    midfield: formation[1],
    forward: formation[2],
  };
  return letplay;
}
// Dont edit the following code

try {
  var formationObjhaect = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(saal) {
  var information = players.filter((players) => players.debut == saal);
  return information;
}
//Progression 4 - Filter players that play at the position _______
function filterByPosition(ranking) {
  var information = players
    .filter((players) => players.position == ranking)
    .map((player) => player);
  return information;
}
// filterByPosition()
//Progression 5 - Filter players that have won ______ award
function filterByAward(bravery) {
  let group = [];
  for (let inde = 0; inde < players.length; inde++) {
    for (let k = 0; k < players[inde].awards.length; k++) {
      if (players[inde].awards[k].name === bravery) {
        group.push(players[inde]);
      }
    }
  }
  return group;
}
// filterbyaward();

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(bravery, winners) {
  let sammelan = [];
  let ginti = 0;
  for (let inde = 0; inde < players.length; inde++) {
    for (jha = 0; jha < players[inde].awards.length; jha++) {
      if (players[inde].awards[jha].name == bravery) {
        ginti++;
      }
    }
    if (ginti == winners) {
      sammelan.push(players[inde]);
    }
    ginti = 0;
  }
  return sammelan;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(bravery, country) {
  var awardinformation = filterByAward(bravery);
  var information = awardinformation.filter(
    (players) => players.country == country
  );
  return information;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(braver, grp, age) {
  var information = players.filter(
    (players) =>
      players.age < age &&
      players.team == grp &&
      players.awards.length >= braver
  );
  return information;
}
//Progression 9 - Sort players in descending order of their age
function sortByAge() {
  for (let inde = 0; inde < players.length; inde++) {
    for (let jha = inde + 1; jha < players.length; jha++) {
      if (players[inde].age < player[jha].age) {
        let desorder = players[inde];
        players[inde] = players[jha];
        players[jha] = desorder;
      }
    }
  }
}
//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAward(team) {
  let ginti = 0;
  let descending = [];
  for (let inde = 0; inde < players.length; inde++) {
    if (players[inde].team == team) {
      descending[ginti++] = player[inde];
    }
  }
  for (let inde = 0; inde < descending.length; inde++) {
    for (let jha = inde + 1; jha < descending.length; jha++) {
      if (descending[inde].awards.length < descending[jha].awards.length) {
        let temp = descending[inde];
        descending[inde] = descending[jha];
        descending[jha] = temp;
      }
    }
  }
  return descending;
}
//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function win(fst, sec) {
  let count = 0;
  if (fst.name > sec.name) {
    count = 1;
  } else if (fst.name < sec.name) {
    count = -1;
  } else {
    count = 0;
  }
}
function alpha(bravery, winners, country) {
  var infoo = filterByAwardxTimes(bravery, winners);
  var infooo = infoo.filter((player) => player.country == country);
  return infooo.sort(win);
}
//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function old(play) {
  var inf = players.filter((player) => player.play > play);
  return inf;
}
