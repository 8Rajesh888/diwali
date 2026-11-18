const lookup = {
    "Mumbai": ["Bangalore", "New Delhi"],
    "New Delhi": ["Bangalore", "Mumbai", "Kolkata"],
    "Bangalore": ["Chennai", "Mumbai"],
    "Kolkata": ["Shillong"],
    "Shillong": ["Guwahati"],
}
const visited = [];
const path = [];

function chechConnection(present, destination, lookup, visited, path) {
    if (present === destination) return visited;
    visited.push(present)
    if (lookup[present] !== undefined)
        for (const city of lookup[present]) {
            console.log(visited);
            if (!visited.includes(city))
                chechConnection(city, destination, lookup, visited, path);
        }
}

// ["Mumbai", "New Delhi", "Kolkata", "Shillong", "Guwahati"];
console.log(chechConnection("Mumbai", "Bangalore", lookup, visited, path))

// const connections = [
//     {
//         city: "Mumbai",
//         connections: ["Bangalore", "New Delhi"],
//     },
//     {
//         city: "New Delhi",
//         connections: ["Bangalore", "Mumbai", "Kolkata"],
//     },
//     {
//         city: "Bangalore",
//         connections: ["Chennai", "Mumbai"],
//     },
//     {
//         city: "Kolkata",
//         connections: ["Shillong"],
//     },
//     {
//         city: "Shillong",
//         connections: ["Guwahati"],
//     },
// ];