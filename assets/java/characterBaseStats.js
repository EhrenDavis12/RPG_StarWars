

var yoda = {
    health: 10,
    attack: 5
};
var darthvader = {
    health: 10,
    attack: 5
};
var darthmaul = {
    health: 10,
    attack: 5
};
var obeone = {
    health: 7,
    attack: 3
};
var obeoneOld = {
    health: 5,
    attack: 4
};
var jarjar = {
    health: 5,
    attack: 1
};

function getCharacter(name) {
    switch (name) {
        case 'yoda':
            return yoda;
            break;
        case 'darth-vader':
            return darthvader;
            break;
        case 'darth-maul':
            return darthmaul;
            break;
        case 'obe-one':
            return obeone;
            break;
        case 'obe-one-Old':
            return obeoneOld;
            break;
        default:
            return jarjar;
    }
}