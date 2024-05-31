const socket = io();
const chess = new Chess();
const boardElement = document.querySelector(".chessboard");

let draggedPeice = null;
let sourceSquare = null;
let playerRole = null;

const renderBoard = () => { 
    const board=chess.board();
    boardElement.innerHTML = "";
    board.forEach((row,rowIndex) =>{
        row.forEach((sqaure,squareIndex)=>{
            const sqaureElement = document.createElement("div");
            sqaureElement.classList.add(
                "sqaure",
                (rowIndex + squareIndex ) % 2 === 0 ? "light" : "dark"
            );

            sqaureElement.dataset.row = rowIndex;
            sqaureElement.dataset.col = squareIndex; 

            if(sqaure){
                const pieceElement = document.createElement("div");
                pieceElement.classList.add(
                    "piece",
                    sqaure.color === "w" ? "white" : "black"
                );

                pieceElement.innerText = "";
                pieceElement.draggable = playerRole === sqaure.color;

                pieceElement.addEventListener("dragstart", () => {
                    if(pieceElement.draggable){
                        draggedPeice = pieceElement;
                        sourceSquare = { row : rowIndex, col : squareIndex };
                    }
                });

            };
        });
    });
};

const handleMove = () => {};

const getPieceUnicode = () => {};

renderBoard();
