/*
The Problem:

Suppose we have a matrix of N by M elements. The elements will be one of the following:

"O" Entrance or Exit

"_" Traversable Path

"X" Untraversable Path

let matrix = [
  [X,_,X,O],
  [O,_,X,_],
  [_,X,_,_],
  [_,_,_,X]
]

Design an algorthm that will determine the length of the shortest path between the two "O"s

Considerations:

Assume exactly 2 entrances/exits

Nodiagonal movement

Return -1 if there is no path
*/
