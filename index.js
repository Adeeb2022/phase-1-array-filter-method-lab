// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Adeeb'];
function findMatching(p,q) {
    return p.filter(p => p.toLowerCase() === q.toLowerCase());
};
function fuzzyMatch(p,q) {
    return p.filter(p => p.charAt(0) === q.charAt(0));
};
function matchName(p,q) {
    return p.filter(p => p.name === q);
};