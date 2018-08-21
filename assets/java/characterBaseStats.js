
var yoda = {
    health: 50,
    attack: 120,
    defence: 120
};
var darthvader = {
    health: 80,
    attack: 120,
    defence: 90
};
var darthmaul = {
    health: 100,
    attack: 130,
    defence: 50
};
var obeone = {
    health: 100,
    attack: 90,
    defence: 80
};
var obeoneOld = {
    health: 80,
    attack: 100,
    defence: 100
};
var jarjar = {
    health: 50,
    attack: 10,
    defence: 10
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