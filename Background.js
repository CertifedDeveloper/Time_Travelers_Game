//### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ###

var LevelContents = `Level$1
n
_____*n
n
n
n
_______________________________________c_________________________________________________________________________________________________________________________________________
_________________________________________________________________________________________________________________c____________________________________c___________e_____________
________________c______________________e______________________________c_____________________________________e__________p_______________________________p_______#########_________
_________________________________#############__________________________________________________________________________________________e________________________________________
_________________________________###########__________________________p___________________________________________c_________########################_____________________________
#############_____#_######################_______________e_________________________e___________________________________p______####################______p____e___________________
____________________________________________________###########_______________###########_________________________p_________________________________________p____________________
_________________________________________________############___________________############________________p___________________________e________________________________________
__________________________c___________________#############_______________________#############____________________________________________________________________c____________x            
#############_______################################################################################################################_________####################################



Level$2
____________________c_________________________________________________________________________c________________________________________c_______________c_____________e__________x
____________________e_________________________________________________________________________p_________________________e____p____###########__________p__________###############
_______________###########_______________________________e__________________________####_____________####_______________p________________________________________________________
_________________###########____p___________________###########___________________####_________________####_______p_________________________________########_____________________
________________________________________________________________________c_______####_____________________####____________________________________________________________________
___________________________________###############               ###############____________________________________________________________________________e________________c___   
______________________p__________###############___________________###########_________________e_________________________________________________e_____###########________#######
_________c______p__________c______________________________________________________c______#############________________________________e_____######################________#######
*________e____________e__________________________________p_____________e__________p______________________________________________#################################________#######
#################################################________________#############___________________________________#################################################________#######`

//### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ### TEMPLEVEL ###


String.prototype.rsplit = function(sep, maxsplit) {//from https://stackoverflow.com/questions/5202085/javascript-equivalent-of-pythons-rsplit
    var split = this.split(sep);
    return maxsplit ? [ split.slice(0, -maxsplit).join(sep) ].concat(split.slice(-maxsplit)) : split;
}
function partition(text){
    var final = [];
    var line = "";
    for(var i = 0;i < text.length; i++){
        if(text[i] != "\n"){
            line += text[i];
        }
        else{
            final.push(line);
            line = "";
        }
    }
    final.push(line);
    return final;
}

function BackGround(lvl){
// LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # 
    var level;
    var rectarray = [];
    var enemyarray = [];
    var enemyArray = [];
    var start = false;//                     TODO
    var line = null;
    var SPAWN = [0,0];
    var lines = partition(LevelContents);
    var yOffset = 0; //the offset of y
    var offsety;    // the y that has been offset

    for(var y = 0; y < lines.length; y++){
        var line = lines[y];
        if (line.indexOf("$") != -1 && start){//if next level start tag found and already started, stop executing
            break;
        }
        if (start){
            offsety = (y-yOffset);
            for(var x = 0;x<line.length;x+=1){
                var character = line[x];
                //#SPECIAL CASES #SPECIAL CASES #SPECIAL CASES #SPECIAL CASES #
                if (character == " " || character == "_"){
                    continue;
                }
                if (character == "n"){
                    break;
                }
                else if (character == "*"){
                    var SPAWN = [x*stdSize,offsety*stdSize];
                }
                else if (character == "e"){
                    L = new Enemy(IMAGEDICT["7"], x*stdSize,offsety*stdSize) //Standard block loading
                    L.w = stdSize;
                    L.h = stdSize;
                    enemyArray.push(L);
                }
                // else if (character.toLowerCase() == "k"){
                //     temp = new HitRect(IMAGEDICT["misc"]["key"], x*stdSize,offsety*stdSize)
                //     temp.imageName = "key";
                //     objarray.push(temp);
                // }
                // else if (character.toLowerCase() == "d"){
                //     temp = new HitRect(IMAGEDICT["misc"]["DoorClosed"], x*stdSize,offsety*stdSize)
                //     temp.imageName = "DoorClosed";
                //     objarray.push(temp);
                // }
                
                else{
                    L = new HitRect(IMAGEDICT["5"], x*stdSize,offsety*stdSize) //Standard block loading
                    L.w = stdSize;
                    L.h = stdSize;
                    rectarray.push(L)
                }
//#LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # LEVEL FINDING # 
            }
        }
        if (line.indexOf("$") != -1 && line.indexOf("#") == -1){ //level start tag is found
            level = line.rsplit("$",1);
            if (level[1]==lvl){//If level number is correct, translating into loaded level.
                start = true;
            }
        }
    }
    return [rectarray, SPAWN, enemyarray, level[0], enemyArray];
}