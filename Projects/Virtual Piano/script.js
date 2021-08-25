document.addEventListener("keydown", function (e){
    if (e.code === "KeyA"){
        let audioObj = new Audio("white_keys/A.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyS"){
        let audioObj = new Audio("white_keys/S.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyD"){
        let audioObj = new Audio("white_keys/D.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyF"){
        let audioObj = new Audio("white_keys/F.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyG"){
        let audioObj = new Audio("white_keys/G.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyH"){
        let audioObj = new Audio("white_keys/H.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyJ"){
        let audioObj = new Audio("white_keys/J.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyW"){
        let audioObj = new Audio("black_keys/W.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyE"){
        let audioObj = new Audio("black_keys/E.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyT"){
        let audioObj = new Audio("black_keys/T.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyY"){
        let audioObj = new Audio("black_keys/Y.mp3");
        audioObj.play();
        delete audioObj;
    }
    else if (e.code === "KeyU"){
        let audioObj = new Audio("black_keys/U.mp3");
        audioObj.play();
        delete audioObj;
    }
    else return;
});
