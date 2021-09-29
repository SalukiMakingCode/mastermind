(() => {
    // Set variable
    let colorPion1="#CB2E1F";
    let colorPion2="#178C2C";
    let colorPion3="#E3D652";
    let colorPion4="#1F69C4";
    let colorPion5="#FFFFFF";
    let colorPion6="#000000";
    let colorPion7="#75552E";
    let colorPion8="#D67922";
    document.querySelector("#stageChecker").dataset.nbcolor="4";
    document.querySelector("#stageChecker").dataset.board="4";
    let combinaison=[];

    //end of a level
    function endGame(action) {
        let level=document.querySelector("#stageChecker").dataset.level;
        if (action==="lose") {
            document.getElementById("welcome").innerText = "Oh noooo ! You lose the game at level " + level;
            document.getElementById("line1").innerText = "";
            document.getElementById("line2").innerText = "Sorry, you have to retry from the beginning to win the game :/";
            document.getElementById("line3").innerText = "";
            document.getElementById("pushTheButton").innerHTML = "<a href='play.html'>Retry Now</a>";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="lose";
        }
        if (action==="win" && level!=="10") {
            document.getElementById("welcome").innerText = "Yes, you did it ! You win the level "+ level +" !";
            document.getElementById("line1").innerText = "";
            document.getElementById("line2").innerText = "Ok, you can continue to the next level";
            document.getElementById("line3").innerText = "";
            document.getElementById("pushTheButton").innerText = "Go to level " + (Number(level)+1).toString(10);
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="noStart";
            document.querySelector("#stageChecker").dataset.level=(Number(level)+1).toString(10);
        }
        if (action==="win" && level==="10") {
            document.getElementById("welcome").innerText = "Waoouuhh : Yes, you did it ! You win the level 10 !";
            document.getElementById("line1").innerText = "";
            document.getElementById("line2").innerText = "Incredible, you are a real champion !!";
            document.getElementById("line3").innerText = "";
            document.getElementById("pushTheButton").innerHTML = "<a href='play.html'>Retry from the beginning</a>";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="win";
        }

    }

    // function random picker to set the color to discover
    function randomPicker () {
        for (let i=0; i<document.querySelector("#stageChecker").dataset.board; i++) {
           combinaison[i]= Math.floor(Math.random()*Number(document.querySelector("#stageChecker").dataset.nbcolor)) + 1;
        }
        console.log(combinaison);
    }

    // bouton pushTheButton on the modal
    document.getElementById("pushTheButton").addEventListener("click", () => {
        //level 1
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="1") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="4";
            document.querySelector("#stageChecker").dataset.board="4";
            document.getElementById("board4").style.display = "flex";
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="1") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 1";
            document.getElementById("line1").innerText = "4 Colors - 4 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 1";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
        }
        // end level 1
        //level 2
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="2") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="5";
            document.querySelector("#stageChecker").dataset.board="4";
            document.getElementById("board4").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="2") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 2";
            document.getElementById("line1").innerText = "5 Colors - 4 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 2";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 2";
        }
        // end level 2
        //level 3
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="3") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="6";
            document.querySelector("#stageChecker").dataset.board="4";
            document.getElementById("board4").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="3") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 3";
            document.getElementById("line1").innerText = "6 Colors - 4 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 3";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 3";
        }
        // end level 3
        //level 4
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="4") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="4";
            document.querySelector("#stageChecker").dataset.board="5";
            document.getElementById("board4").style.display = "none";
            document.getElementById("board5").style.display = "flex";
            document.querySelector("#bonus-5-1").dataset.nb=document.querySelector("#bonus-4-1").dataset.nb;
            document.getElementById("bonus-5-1").innerText="One position ("+ document.querySelector("#bonus-4-1").dataset.nb + ")";
            document.querySelector("#bonus-5-2").dataset.nb=document.querySelector("#bonus-4-2").dataset.nb;
            document.getElementById("bonus-5-2").innerText="One line back ("+ document.querySelector("#bonus-4-2").dataset.nb + ")";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="4") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 4";
            document.getElementById("line1").innerText = "4 Colors - 5 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 4";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 4";
        }
        // end level 4
        //level 5
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="5") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="5";
            document.querySelector("#stageChecker").dataset.board="5";
            document.getElementById("board5").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="5") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 4";
            document.getElementById("line1").innerText = "5 Colors - 5 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 5";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 5";
        }
        // end level 5
        //level 6
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="6") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="6";
            document.querySelector("#stageChecker").dataset.board="5";
            document.getElementById("board5").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="6") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 6";
            document.getElementById("line1").innerText = "6 Colors - 5 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 6";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 6";
        }
        // end level 6
        //level 7
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="7") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="7";
            document.querySelector("#stageChecker").dataset.board="5";
            document.getElementById("board5").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="7") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 7";
            document.getElementById("line1").innerText = "7 Colors - 5 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 7";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 7";
        }
        // end level 7
        //level 8
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="8") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="5";
            document.querySelector("#stageChecker").dataset.board="6";
            document.getElementById("board5").style.display = "none";
            document.getElementById("board6").style.display = "flex";
            document.querySelector("#bonus-6-1").dataset.nb=document.querySelector("#bonus-5-1").dataset.nb;
            document.getElementById("bonus-6-1").innerText="One position ("+ document.querySelector("#bonus-5-1").dataset.nb + ")";
            document.querySelector("#bonus-6-2").dataset.nb=document.querySelector("#bonus-5-2").dataset.nb;
            document.getElementById("bonus-6-2").innerText="One line back ("+ document.querySelector("#bonus-5-2").dataset.nb + ")";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="8") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 8";
            document.getElementById("line1").innerText = "5 Colors - 6 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 8";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 8";
        }
        // end level 8
        //level 9
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="9") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="6";
            document.querySelector("#stageChecker").dataset.board="6";
            document.getElementById("board6").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="9") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 9";
            document.getElementById("line1").innerText = "6 Colors - 6 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 9";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 9";
        }
        // end level 9
        //level 10
        if (document.querySelector("#stageChecker").dataset.status==="toStart" && document.querySelector("#stageChecker").dataset.level==="10") {
            document.getElementById("myModal").style.display = "none";
            document.querySelector("#stageChecker").dataset.status="1";
            document.querySelector("#stageChecker").dataset.nbcolor="8";
            document.querySelector("#stageChecker").dataset.board="6";
            document.getElementById("board6").style.display = "flex";
            resetBoard();
            randomPicker();
        }
        if (document.querySelector("#stageChecker").dataset.status==="noStart" && document.querySelector("#stageChecker").dataset.level==="10") {
            document.getElementById("myModal").style.display = "none";
            document.getElementById("welcome").innerText = "Level 10";
            document.getElementById("line1").innerText = "8 Colors - 6 Positions";
            document.getElementById("line2").innerText = "";
            document.getElementById("line3").innerText = "Good luck !";
            document.getElementById("pushTheButton").innerText = "Start Level 10";
            document.getElementById("myModal").style.display = "flex";
            document.querySelector("#stageChecker").dataset.status="toStart";
            document.getElementById("stageChecker").innerText = "Level 10";
        }
        // end level 10

    })
    // reset the board
    function resetBoard () {
        document.querySelectorAll('.pawn').forEach((element) => {
            document.querySelector("#" + element.id).dataset.fixed="0";
            document.querySelector("#" + element.id).dataset.value="0";
            document.querySelector("#" + element.id).style.backgroundColor="transparent";
            });
        document.querySelectorAll('.check').forEach((element) => {
            document.querySelector("#" + element.id).style.backgroundColor="transparent";
        });
    }
    // use bonus
    function useBonus(id) {
        if (id==="bonus-4-2" || id==="bonus-5-2" || id==="bonus-6-2") {
            if (document.querySelector("#stageChecker").dataset.status==="1") alert("Vous ne pouvez pas utilisez ce bonus avant d'avoir validé au moins une ligne");
            else {
                document.querySelector("#stageChecker").dataset.status=(Number(document.querySelector("#stageChecker").dataset.status)-1).toString(10);
                document.querySelector("#" + id).dataset.nb=(Number(document.querySelector("#" + id).dataset.nb)-1).toString(10);
                document.getElementById(id).innerText="One line back ("+ document.querySelector("#" + id).dataset.nb + ")";
                let limit=0;
                if (id==="bonus-4-2") { limit=4; }
                if (id==="bonus-5-2") { limit=5; }
                if (id==="bonus-6-2") { limit=6; }
                for (let i=1; i<=limit; i++) {
                    let idToChange="line" + document.querySelector("#stageChecker").dataset.status + "-b" + limit + "-" + i;
                    document.querySelector("#" + idToChange).dataset.fixed = "0";
                    document.querySelector("#" + idToChange).dataset.value = "0";
                    document.querySelector("#" + idToChange).style.backgroundColor = "transparent";
                    document.querySelector("#check" + idToChange).style.backgroundColor = "transparent";
                }

            }
        }
        if (id==="bonus-4-1" || id==="bonus-5-1" || id==="bonus-6-1") {
            let limit = 0;
            if (id === "bonus-4-1") {
                limit = 4;
            }
            if (id === "bonus-5-1") {
                limit = 5;
            }
            if (id === "bonus-6-1") {
                limit = 6;
            }
            let checkBonusCanUse = 0;
            for (let i = 1; i <= limit; i++) {
                let idToCheck = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + limit + "-" + i;
                if (document.querySelector("#" + idToCheck).dataset.fixed === "1") checkBonusCanUse++;
            }
            if (checkBonusCanUse === limit) alert("You should be joking ?? You allready have all the pawn position !");
            else {
                let selected = false;
            while (selected === false) {
                let randMeThis = Math.floor(Math.random() * limit) + 1;
                let randMeThisPosition = randMeThis--;
                let idToChange = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + limit + "-" + randMeThisPosition;
                if (document.querySelector("#" + idToChange).dataset.fixed === "0") {
                    selected = true;
                    let correctPawn = combinaison[randMeThis];
                    let theColor = "colorPion" + correctPawn;
                    let lineToChange = Number(document.querySelector("#stageChecker").dataset.status);
                    for (let i = document.querySelector("#stageChecker").dataset.status; i < 13; i++) {
                        let idToChange = "line" + lineToChange + "-b" + limit + "-" + randMeThisPosition;
                        document.querySelector("#" + idToChange).dataset.fixed = "1";
                        document.querySelector("#" + idToChange).dataset.value = correctPawn;
                        document.querySelector("#" + idToChange).style.backgroundColor = eval(theColor);
                        lineToChange++;
                    }
                    document.querySelector("#" + id).dataset.nb = (Number(document.querySelector("#" + id).dataset.nb) - 1).toString(10);
                    document.getElementById(id).innerText = "One position (" + document.querySelector("#" + id).dataset.nb + ")";
                }
            }
        }
        }

    }


    // listen the click on bonus
    document.querySelectorAll('.bonus').forEach((element) =>
        element.addEventListener('click', () => {
            if (Number(document.querySelector("#" + element.id).dataset.nb)>0) useBonus(element.id);
            else alert("Vous n'avez plus ce bonus en réserve");
        }));

    // listen the click on the pawn
    document.querySelectorAll('.pawn').forEach((element) =>
        element.addEventListener('click', () => {
            if (document.querySelector("#" + element.id).dataset.fixed==="0") changeColor(element.id);
        }));
    // function change the color of the pawn
    function changeColor (id) {
        if (document.querySelector("#stageChecker").dataset.nbcolor===document.querySelector("#" + id).dataset.value) {
            document.querySelector("#" + id).dataset.value="1";
            document.querySelector("#" + id).style.backgroundColor=colorPion1;
        }
        else {
            document.querySelector("#" + id).dataset.value=(Number(document.querySelector("#" + id).dataset.value) + 1).toString(10);
            document.querySelector("#" + id).style.backgroundColor=eval("colorPion"+(Number(document.querySelector("#" + id).dataset.value)).toString(10));
        }
    }

    // listen to the check button and check if it's good then put black and white pawn and pass to the next line
    document.querySelectorAll(".checkbutton").forEach( (element)=> {element.addEventListener("click", () => {
            let count = 0;
            let idToCatch = "";
            for (let i = 1; i <= document.querySelector("#stageChecker").dataset.board; i++) {
                idToCatch = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + document.querySelector("#stageChecker").dataset.board + "-" + i;
                if (document.querySelector("#" + idToCatch).dataset.value !== "0") count++;
            }
            if (count < document.querySelector("#stageChecker").dataset.board) alert("La ligne doit être entièrement remplie");
            else {
                let whitePawn = 0;
                let blackPawn = 0;
                let arrayCheck = [];
                let arrayPawnCheck = [];
                let board = Number(document.querySelector("#stageChecker").dataset.board);
                for (let i = 0; i < board; i++) {
                    arrayCheck.push(false);
                    arrayPawnCheck.push(false);
                }

                for (let i = 0; i < board; i++) {
                    let indice = i + 1;
                    idToCatch = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + board + "-" + indice;
                    if (Number(document.querySelector("#" + idToCatch).dataset.value) === combinaison[i]) {
                        blackPawn++;
                        arrayCheck[i] = true;
                        arrayPawnCheck[i] = true;
                    }
                }

                for (let i = 0; i < board; i++) {
                    let indice = i + 1;
                    if (arrayPawnCheck[i] === false) {
                        idToCatch = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + board + "-" + indice;
                        for (let j = 0; j < board; j++) {
                            if (arrayCheck[j] === false) {
                                if (Number(document.querySelector("#" + idToCatch).dataset.value) === combinaison[j]) {
                                    if (arrayCheck[j] === false && arrayPawnCheck[i] === false) {
                                        whitePawn++;
                                        arrayPawnCheck[i] = true;
                                        arrayCheck[j] = true;
                                    }
                                }
                            }
                        }
                    }
                }
                let win = false;
                let indice = 1;
                if (blackPawn === board) {
                    win = true;
                }
                while (blackPawn > 0) {
                    idToCatch = "checkline" + document.querySelector("#stageChecker").dataset.status + "-b" + board + "-" + indice;
                    document.querySelector("#" + idToCatch).style.backgroundColor = "#000000";
                    blackPawn--;
                    indice++;
                }
                while (whitePawn > 0) {
                    idToCatch = "checkline" + document.querySelector("#stageChecker").dataset.status + "-b" + board + "-" + indice;
                    document.querySelector("#" + idToCatch).style.backgroundColor = "#FFFFFF";
                    whitePawn--;
                    indice++;
                }
                for (let i = 0; i < board; i++) {
                    let indice = i + 1;
                    idToCatch = "line" + document.querySelector("#stageChecker").dataset.status + "-b" + board + "-" + indice;
                    document.querySelector("#" + idToCatch).dataset.fixed = "1";
                }
                document.querySelector("#stageChecker").dataset.status = (Number(document.querySelector("#stageChecker").dataset.status) + 1).toString(10);
                if (win) endGame("win");
                else if (document.querySelector("#stageChecker").dataset.status === "13") endGame("lose");
            }
        })
    })
})();