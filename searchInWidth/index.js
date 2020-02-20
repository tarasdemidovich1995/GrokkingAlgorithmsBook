class Deque {
    constructor() {
        this._storage = [];
        this._checkList = [];
    }
    push(data) {
        this._storage = this._storage.concat(data);
    }
    pop() {
        return this._storage.shift();
    }
    getLength() {
        return this._storage.length;
    }
    addInCheckList(person) {
        this._checkList.push(person);
    }
    isChecked(person) {
        return this._checkList.includes(person);
    }

}

const graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny', 'you'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': [],
}

const mangoList = [];

function whoHasMango(firstNode) {
    let searchQueue = new Deque();
    searchQueue.push(graph[firstNode]);
    while (searchQueue.getLength()) {
        let person = searchQueue.pop();
        if (!searchQueue.isChecked(person)) {
            if (mangoList.includes(person)) {
                return `${person} has mango!`;
            } else {
                searchQueue.push(graph[person]);
                searchQueue.addInCheckList(person);
            }
        }
    }
    return false;
}

console.log(whoHasMango('you'));