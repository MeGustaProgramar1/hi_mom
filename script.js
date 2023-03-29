const start = q('#start-div');
const blueDiv = q('#blue-div');
const redDiv = q('#red-div');
const qDiv = q('#q-div');
const failDiv = q('#fail-div');
const winDiv = q('#win-div');

function blueShow(){
    start.hide();
    blueDiv.show();
    setTimeout(function(){
        blueDiv.hide();
        qDiv.show();
    },1000);
}

function redShow(){
    start.hide();
    redDiv.show();
    setTimeout(function(){
        redDiv.hide();
        qDiv.show();
    },1000);
}

for(let i=0;i<48;i++){
    let img = make("img","",[],{"src":"https://freepngimg.com/thumb/raspberry/10-2-raspberry-transparent.png"},{"height":"10vh"});
    blueDiv.appendChild(img);
    
    let img2 = make("img","",[],{"src":"https://www.freepnglogos.com/uploads/blueberries-png/blueberries-blueberry-sch-boden-spies-7.png"},{"height":"10vh"});
    redDiv.appendChild(img2);
}

function checkScore(){
    if(q('input').value != 48){
        fail();
    } else {
        win();
    }
}

function fail(){
    qDiv.hide();
    failDiv.show();
    setTimeout(function(){
        location.reload();
    },1500);
}

function win(){
    qDiv.hide();
    winDiv.show();
}
