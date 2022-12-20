/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {  
    //keeping track of visited nodes. and using Set to avoid visited nodes.
    let visited = new Set();
    
    // Constructing a DFS function.
    const DFS = (room) => {
        if(!visited.has(room)){
            visited.add(room);
            
            for(let i of rooms[room]){
                DFS(i);
            }
        }
    }
    
    //Starting at 0 index
    DFS(0);
    
    //When rooms length is equal to the size of visited, that means all rooms been visited.
    return rooms.length === visited.size;
};
