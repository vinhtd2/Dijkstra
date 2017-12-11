const problem = {
    start: {A: 5, B: 2},
    A: {C:  4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    finish: {}
};

const lowestCostNode = (costs, processed) => {
    return Object.keys(costs).reduce((lowest, node) => {
        if (lowest === null || costs[node] < costs[lowest]) {
            if(!processed.includes(node)) {
                lowest = node;
            }
        }
        return lowest;
    }, null)
}

const dijkstra = (graph) => {
    const cost = Object.assign({finish: Infinity}, graph.start);

    const parents = {finish: null};
    for (let child in graph.start) {
        parents[child] = 'start'; 
    }

    const processed = [];

    let node = lowestCostNode(cost, processed);

    while (node) {
        let cost = costs[node];
        let children = graph[node];
        for (let n in children) {
            let newCost = cost + children[n];
            if(!costs[n]) {
                costs[n] = newCost;
                parents[n] = node;
            }
            if(costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = lowestCostNode(costs, processed);
    }
}