document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("#reset");

    let turn = true; // for players

    const winningPattern = [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];

    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (!box.innerText) {
                box.innerText = turn ? "O" : "X";
                turn = !turn;
                checkWinners();
            }
        });
    });

    const checkWinners = () => {
        for (let array of winningPattern) {
            let val1 = boxes[array[0]].innerText;
            let val2 = boxes[array[1]].innerText;
            let val3 = boxes[array[2]].innerText;
            if (val1 && val1 === val2 && val1 === val3) {
                setTimeout(() => {
                    alert(`Winner is ${val1}`);
                    resetGame();
                }, 100); 
                return;
            }
        }
    }

    const resetGame = () => {
        boxes.forEach(box => {
            box.innerText = "";
            box.disabled = false;
        });
        turn = true; 
    }

    
    resetbtn.addEventListener("click", resetGame);
});
