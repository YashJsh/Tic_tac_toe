import { useState } from "react";

const initialBoard = ()=>Array(9).fill(null);

const Use_ttt = ()=>{
    const [board, setBoard] = useState(initialBoard()); 
    const [isXturn, isYturn] = useState(true);

    const Winning_Patters = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    const CalculateWinner = (currentBoard)=>{
        for(let i=0; i<Winning_Patters.length;i++){
            const [a,b,c] =Winning_Patters[i];
            if(currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[b] === currentBoard[c]){
                return currentBoard[a]
            }    
        }
        return null;
    }


    const HandleClick = (index)=>{
        //check winner
        const winner = CalculateWinner(board);
        if(winner || board[index]){
            return;
        }
        const newBoard = [...board];
        newBoard[index] = isXturn ? "X" : "O";
        setBoard(newBoard);
        isYturn(!isXturn);
    }

    const getStatusMessage = ()=>{
        const winner = CalculateWinner(board);
        if(winner){
            return `Player ${winner} wins`
        }
        if(!board.includes(null)) return `Its a draw`;
        return `Player ${isXturn ? "X" : "O"} turn`;
    }

    const resetBoard = ()=>{
        setBoard(initialBoard());
        isYturn(true);
    }

    return {board, resetBoard, HandleClick, getStatusMessage}
};

export default Use_ttt;