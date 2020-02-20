class Deque {
    constructor() {
        this._storage = [];
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
}

const graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': [],
}

const mangoList = ['peggy'];

function whoHasMango(firstNode) {
    let searchQueue = new Deque();
    searchQueue.push(graph[firstNode]);
    while (searchQueue.getLength()) {
        let person = searchQueue.pop();
        if (mangoList.includes(person)) {
            return `${person} has mango!`;
        } else {
            searchQueue.push(graph[person]);
        }
    }
    return false;
}

console.log(whoHasMango('you'));