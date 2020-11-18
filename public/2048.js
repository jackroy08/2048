let value1="W"
let value2="E"
let value3="L"
let value4=""

let value5="C"
let value6="O"
let value7="M"
let value8="E"

let value9=""
let value10="T"
let value11="O"
let value12=""

let value13="2"
let value14="0"
let value15="4"
let value16="8"


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        checkup()
    }
    else if (e.keyCode == '40') {
        checkdown()
    }
    else if (e.keyCode == '37') {
       checkleft()
    }
    else if (e.keyCode == '39') {
       checkright()
    }

}

function checkup(){
    if (value1==="W"){
    start()
    }
    else{
        up()
    }
}

function checkdown(){
    if (value1==="W"){
    start()
    }
    else{
        down()
    }
}
function checkright(){
    if (value1==="W"){
    start()
    }
    else{
        right()
    }
}
function checkleft(){
    if (value1==="W"){
    start()
    }
    else{
        left()
    }
}

display()

function start(){
    reset()
    insertNumber()
    insertNumber()
    checkForEnd()
    changeClass()
}
function reset(){
value1="";
value2="";
value3="";
value4="";
value5="";
value6="";
value7="";
value8="";
value9="";
value10="";
value11="";
value12="";
value13="";
value14="";
value15="";
value16="";
}
function display(){
    document.getElementById("1").innerHTML = (value1);
    document.getElementById("2").innerHTML = (value2);
    document.getElementById("3").innerHTML = (value3);
    document.getElementById("4").innerHTML = (value4);  
    document.getElementById("5").innerHTML = (value5);
    document.getElementById("6").innerHTML = (value6);
    document.getElementById("7").innerHTML = (value7);
    document.getElementById("8").innerHTML = (value8);
    document.getElementById("9").innerHTML = (value9);
    document.getElementById("10").innerHTML = (value10);
    document.getElementById("11").innerHTML = (value11);
    document.getElementById("12").innerHTML = (value12);
    document.getElementById("13").innerHTML = (value13);
    document.getElementById("14").innerHTML = (value14);
    document.getElementById("15").innerHTML = (value15);
    document.getElementById("16").innerHTML = (value16);
}

function changeClass(){
    switch(value1){
        case "":
            document.getElementById("1").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("1").className = "pannel color2";
        break;
        case 4:
            document.getElementById("1").className = "pannel color3";
        break;
        case 8:
            document.getElementById("1").className = "pannel color4";
        break;
        case 16:
            document.getElementById("1").className = "pannel color5";
        break;
        case 32:
            document.getElementById("1").className = "pannel color6";
        break;
        case 64:
            document.getElementById("1").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("1").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("1").className = "pannel color9";
        break;
        case 512:
            document.getElementById("1").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("1").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("1").className = "pannel color12";
        break;
    }
    switch(value2){
        case "":
            document.getElementById("2").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("2").className = "pannel color2";
        break;
        case 4:
            document.getElementById("2").className = "pannel color3";
        break;
        case 8:
            document.getElementById("2").className = "pannel color4";
        break;
        case 16:
            document.getElementById("2").className = "pannel color5";
        break;
        case 32:
            document.getElementById("2").className = "pannel color6";
        break;
        case 64:
            document.getElementById("2").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("2").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("2").className = "pannel color9";
        break;
        case 512:
            document.getElementById("2").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("2").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("2").className = "pannel color12";
        break;
    }
    
    switch(value3){
        case "":
            document.getElementById("3").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("3").className = "pannel color2";
        break;
        case 4:
            document.getElementById("3").className = "pannel color3";
        break;
        case 8:
            document.getElementById("3").className = "pannel color4";
        break;
        case 16:
            document.getElementById("3").className = "pannel color5";
        break;
        case 32:
            document.getElementById("3").className = "pannel color6";
        break;
        case 64:
            document.getElementById("3").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("3").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("3").className = "pannel color9";
        break;
        case 512:
            document.getElementById("3").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("3").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("3").className = "pannel color12";
        break;
    }
    
    switch(value4){
        case "":
            document.getElementById("4").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("4").className = "pannel color2";
        break;
        case 4:
            document.getElementById("4").className = "pannel color3";
        break;
        case 8:
            document.getElementById("4").className = "pannel color4";
        break;
        case 16:
            document.getElementById("4").className = "pannel color5";
        break;
        case 32:
            document.getElementById("4").className = "pannel color6";
        break;
        case 64:
            document.getElementById("4").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("4").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("4").className = "pannel color9";
        break;
        case 512:
            document.getElementById("4").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("4").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("4").className = "pannel color12";
        break;
    }
    
    switch(value5){
        case "":
            document.getElementById("5").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("5").className = "pannel color2";
        break;
        case 4:
            document.getElementById("5").className = "pannel color3";
        break;
        case 8:
            document.getElementById("5").className = "pannel color4";
        break;
        case 16:
            document.getElementById("5").className = "pannel color5";
        break;
        case 32:
            document.getElementById("5").className = "pannel color6";
        break;
        case 64:
            document.getElementById("5").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("5").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("5").className = "pannel color9";
        break;
        case 512:
            document.getElementById("5").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("5").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("5").className = "pannel color12";
        break;
    }
    
    switch(value6){
        case "":
            document.getElementById("6").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("6").className = "pannel color2";
        break;
        case 4:
            document.getElementById("6").className = "pannel color3";
        break;
        case 8:
            document.getElementById("6").className = "pannel color4";
        break;
        case 16:
            document.getElementById("6").className = "pannel color5";
        break;
        case 32:
            document.getElementById("6").className = "pannel color6";
        break;
        case 64:
            document.getElementById("6").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("6").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("6").className = "pannel color9";
        break;
        case 512:
            document.getElementById("6").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("6").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("6").className = "pannel color12";
        break;
    }
    
    switch(value7){
        case "":
            document.getElementById("7").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("7").className = "pannel color2";
        break;
        case 4:
            document.getElementById("7").className = "pannel color3";
        break;
        case 8:
            document.getElementById("7").className = "pannel color4";
        break;
        case 16:
            document.getElementById("7").className = "pannel color5";
        break;
        case 32:
            document.getElementById("7").className = "pannel color6";
        break;
        case 64:
            document.getElementById("7").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("7").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("7").className = "pannel color9";
        break;
        case 512:
            document.getElementById("7").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("7").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("7").className = "pannel color12";
        break;
    }
    
    switch(value8){
        case "":
            document.getElementById("8").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("8").className = "pannel color2";
        break;
        case 4:
            document.getElementById("8").className = "pannel color3";
        break;
        case 8:
            document.getElementById("8").className = "pannel color4";
        break;
        case 16:
            document.getElementById("8").className = "pannel color5";
        break;
        case 32:
            document.getElementById("8").className = "pannel color6";
        break;
        case 64:
            document.getElementById("8").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("8").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("8").className = "pannel color9";
        break;
        case 512:
            document.getElementById("8").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("8").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("8").className = "pannel color12";
        break;
    }
    
    switch(value9){
        case "":
            document.getElementById("9").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("9").className = "pannel color2";
        break;
        case 4:
            document.getElementById("9").className = "pannel color3";
        break;
        case 8:
            document.getElementById("9").className = "pannel color4";
        break;
        case 16:
            document.getElementById("9").className = "pannel color5";
        break;
        case 32:
            document.getElementById("9").className = "pannel color6";
        break;
        case 64:
            document.getElementById("9").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("9").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("9").className = "pannel color9";
        break;
        case 512:
            document.getElementById("9").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("9").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("9").className = "pannel color12";
        break;
    }
    
    switch(value10){
        case "":
            document.getElementById("10").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("10").className = "pannel color2";
        break;
        case 4:
            document.getElementById("10").className = "pannel color3";
        break;
        case 8:
            document.getElementById("10").className = "pannel color4";
        break;
        case 16:
            document.getElementById("10").className = "pannel color5";
        break;
        case 32:
            document.getElementById("10").className = "pannel color6";
        break;
        case 64:
            document.getElementById("10").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("10").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("10").className = "pannel color9";
        break;
        case 512:
            document.getElementById("10").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("10").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("10").className = "pannel color12";
        break;
    }
    
    switch(value11){
        case "":
            document.getElementById("11").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("11").className = "pannel color2";
        break;
        case 4:
            document.getElementById("11").className = "pannel color3";
        break;
        case 8:
            document.getElementById("11").className = "pannel color4";
        break;
        case 16:
            document.getElementById("11").className = "pannel color5";
        break;
        case 32:
            document.getElementById("11").className = "pannel color6";
        break;
        case 64:
            document.getElementById("11").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("11").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("11").className = "pannel color9";
        break;
        case 512:
            document.getElementById("11").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("11").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("11").className = "pannel color12";
        break;
    }
    
    switch(value12){
        case "":
            document.getElementById("12").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("12").className = "pannel color2";
        break;
        case 4:
            document.getElementById("12").className = "pannel color3";
        break;
        case 8:
            document.getElementById("12").className = "pannel color4";
        break;
        case 16:
            document.getElementById("12").className = "pannel color5";
        break;
        case 32:
            document.getElementById("12").className = "pannel color6";
        break;
        case 64:
            document.getElementById("12").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("12").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("12").className = "pannel color9";
        break;
        case 512:
            document.getElementById("12").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("12").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("12").className = "pannel color12";
        break;
    }
    
    switch(value13){
        case "":
            document.getElementById("13").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("13").className = "pannel color2";
        break;
        case 4:
            document.getElementById("13").className = "pannel color3";
        break;
        case 8:
            document.getElementById("13").className = "pannel color4";
        break;
        case 16:
            document.getElementById("13").className = "pannel color5";
        break;
        case 32:
            document.getElementById("13").className = "pannel color6";
        break;
        case 64:
            document.getElementById("13").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("13").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("13").className = "pannel color9";
        break;
        case 512:
            document.getElementById("13").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("13").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("13").className = "pannel color12";
        break;
    }
    
    switch(value14){
        case "":
            document.getElementById("14").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("14").className = "pannel color2";
        break;
        case 4:
            document.getElementById("14").className = "pannel color3";
        break;
        case 8:
            document.getElementById("14").className = "pannel color4";
        break;
        case 16:
            document.getElementById("14").className = "pannel color5";
        break;
        case 32:
            document.getElementById("14").className = "pannel color6";
        break;
        case 64:
            document.getElementById("14").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("14").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("14").className = "pannel color9";
        break;
        case 512:
            document.getElementById("14").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("14").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("14").className = "pannel color12";
        break;
    }
    
    switch(value15){
        case "":
            document.getElementById("15").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("15").className = "pannel color2";
        break;
        case 4:
            document.getElementById("15").className = "pannel color3";
        break;
        case 8:
            document.getElementById("15").className = "pannel color4";
        break;
        case 16:
            document.getElementById("15").className = "pannel color5";
        break;
        case 32:
            document.getElementById("15").className = "pannel color6";
        break;
        case 64:
            document.getElementById("15").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("15").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("15").className = "pannel color9";
        break;
        case 512:
            document.getElementById("15").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("15").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("15").className = "pannel color12";
        break;
    }
    
    switch(value16){
        case "":
            document.getElementById("16").className = "pannel noColor";
        break;
        case 2:
            document.getElementById("16").className = "pannel color2";
        break;
        case 4:
            document.getElementById("16").className = "pannel color3";
        break;
        case 8:
            document.getElementById("16").className = "pannel color4";
        break;
        case 16:
            document.getElementById("16").className = "pannel color5";
        break;
        case 32:
            document.getElementById("16").className = "pannel color6";
        break;
        case 64:
            document.getElementById("16").className = "pannel color7";
        break;
        case 128: 
            document.getElementById("16").className = "pannel color8";  
        break;
        case 256:
            document.getElementById("16").className = "pannel color9";
        break;
        case 512:
            document.getElementById("16").className = "pannel color10";
        break;
        case 1024:
            document.getElementById("16").className = "pannel color11";
        break;
        case 2048:
            document.getElementById("16").className = "pannel color12";
        break;
    }




}
function checkForEnd(){
    if (value1 > 0 && value2 > 0 &&  value3 > 0 &&  value4 > 0 &&  value5 > 0 &&  value6 > 0 &&  value7 > 0 &&  value8 > 0 &&  value9 > 0 &&  value10 > 0 &&  value11 > 0 &&  value12 > 0 &&  value13 > 0 &&  value14 > 0 &&  value15 > 0 && value16 > 0 ){
        value1="G";
        value2="A";
        value3="M";
        value4="E";
        value5="O";
        value6="V";
        value7="E";
        value8="R";
        
        display();
    }
  
}




function left(){
    checkForEnd();
    rowOneX(left);
    rowTwoX(left);
    rowThreeX(left);
    rowFourX(left);
    insertNumber();
    display();
    changeClass();
    console.log(document.getElementById("1").className)
    
   
    
}


function right(){
    checkForEnd();
    rowOneX(right);
    rowTwoX(right);
    rowThreeX(right);
    rowFourX(right);
    insertNumber();
    display();
    changeClass();
    
}

function up(){
    checkForEnd();
    columnOneY(up);
    columnTwoY(up);
    columnThreeY(up);
    columnFourY(up);
    insertNumber();
    display();
    changeClass();
    
}


function down(){
    checkForEnd()
    columnOneY(down);
    columnTwoY(down);
    columnThreeY(down);
    columnFourY(down);
    insertNumber();
    display();
    changeClass();
    
}


function rowOneX(direction){
    switch(direction){
        case left:
            if(value3=="") {
                value3=value4;
                value4=""
            }
            
            if (value2=="") {
                value2=value3;
                value3=value4;
                value4="";
            }
            
            if (value1==""){
                value1=value2;
                value2=value3;
                value3=value4;
                value4="";
            }
 

            
            if (value2==value1){
                value1=(value1*2);
                value2=""
                
                
                if (value3==value4){
                    value3=(value3*2);
                    value4=""
                    
                }
                else{
                    value2=value3;
                    value3=value4
                    
                }
                
                value4="";
                
            }
            
            else if (value2==value3){
                value2=(value2*2);
                value3=value4;
                value4=("");
                
            }
            

            else if (value3==value4){
                value3=(value3*2);
                value4=""
            }

            if(value3=="") {
                value3=value4;
                value4=""
            }
            
            if (value2=="") {
                value2=value3;
                value3=value4;
                value4="";
            }
            
            if (value1==""){
                value1=value2;
                value2=value3;
                value3=value4;
                value4="";
            }
            
            
            break;
        
            case right:
                if(value2=="") {
                    value2=value1;
                    value1=""
                }
                
                if (value3=="") {
                    value3=value2;
                    value2=value1;
                    value1="";
                }
                
                if (value4==""){
                    value4=value3;
                    value3=value2;
                    value2=value1;
                    value1="";
                }
     
    
                
                if (value3==value4){
                    value4=(value4*2);
                    value3=""
                    
                    
                    if (value2==value1){
                        value2=(value2*2);
                        value1=""
                        
                    }
                    else{
                        value3=value2;
                        value2=value1;
                        
                    }
                    
                    value1="";
                    
                }
                
                else if (value3==value2){
                    value3=(value3*2);
                    value2=value1;
                    value1=("");
                    
                }
                
    
                else if (value2==value1){
                    value2=(value2*2);
                    value1=""
                }
    
                if(value2=="") {
                    value2=value1;
                    value1=""
                }
                
                if (value3=="") {
                    value3=value2;
                    value2=value1;
                    value1="";
                }
                
                if (value4==""){
                    value4=value3;
                    value3=value2;
                    value2=value1;
                    value1="";
                }
                
                
                break;
        
    }
        
}


function rowTwoX(direction){
    switch(direction){
        case left:
            if(value7=="") {
                value7=value8;
                value8=""
            }
            
            if (value6=="") {
                value6=value7;
                value7=value8;
                value8="";
            }
            
            if (value5==0){
                value5=value6;
                value6=value7;
                value7=value8;
                value8="";
            }

            
            if (value6==value5){
                value5=(value5*2);
                value6=""
                
               
                if (value7==value8){
                    value7=(value7*2);
                    value8=""
                    
                }
                else{
                    value6=value7;
                    value7=value8
                   
                }
               
                value8="";
                
            }
            
            else if (value6==value7){
                value6=(value7*2);
                value7=value8;
                value8=("");
                
            }
            

            else if (value7==value8){
                value7=(value8*2);
                value8=""
            }

            if(value7=="") {
                value7=value8;
                value8=""
            }
            
            if (value6=="") {
                value6=value7;
                value7=value8;
                value8="";
            }
            
            if (value5==""){
                value5=value6;
                value6=value7;
                value7=value8;
                value8="";
            }
            
            
            break;

            case right:
                if(value6=="") {
                    value6=value5;
                    value5=""
                }
                
                if (value7=="") {
                    value7=value6;
                    value6=value5;
                    value5="";
                }
                
                if (value8==""){
                    value8=value7;
                    value7=value6;
                    value6=value5;
                    value5="";
                }
     
    
                
                if (value7==value8){
                    value8=(value8*2);
                    value7=""
                    
                    
                    if (value6==value5){
                        value6=(value6*2);
                        value5=""
                        
                    }
                    else{
                        value7=value6;
                        value6=value5;
                        
                    }
                    
                    value5="";
                    
                }
                
                else if (value7==value6){
                    value7=(value7*2);
                    value6=value5;
                    value5=("");
                    
                }
                
    
                else if (value6==value5){
                    value6=(value6*2);
                    value5=""
                }
    
                if(value6=="") {
                    value6=value5;
                    value5=""
                }
                
                if (value7=="") {
                    value7=value6;
                    value6=value5;
                    value5="";
                }
                
                if (value8==""){
                    value8=value7;
                    value7=value6;
                    value6=value5;
                    value5="";
                }
                
                
                break;
        
        }
}   

function rowThreeX(direction){
    switch(direction){
        case left:
            if(value11=="") {
                value11=value12;
                value12=""
            }
            
            if (value10=="") {
                value10=value11;
                value11=value12;
                value12=""
            }
            
            if (value9==""){
                value9=value10;
                value10=value11;
                value11=value12;
                value12="";
            }

            if(value11=="") {
                value11=value12;
                value12=""
            }
            
            if (value10=="") {
                value10=value11;
                value11=value12;
                value12=""
            }
            
            if (value9==""){
                value9=value10;
                value10=value11;
                value11=value12;
                value12="";
            }

            
            if (value10==value9){
                value9=(value9*2);
                value10=""
                
               
                if (value11==value12){
                    value11=(value11*2);
                    value12=""
                    
                }
                else{
                    value10=value11;
                    value11=value12;
                   
                }
               
                value12="";
                
            }
            
            else if (value10==value11){
                value10=(value11*2);
                value11=value12;
                value12=("");
                
            }
            

            else if (value11==value12){
                value11=(value12*2);
                value12=""
            }

            if(value11=="") {
                value11=value12;
                value12=""
            }
            
            if (value10=="") {
                value10=value11;
                value11=value12;
                value12="";
            }
            
            if (value9==""){
                value9=value10;
                value10=value11;
                value11=value12;
                value12="";
            }
            
            
            break;
            case right:
                if(value10=="") {
                    value10=value9;
                    value9=""
                }
                
                if (value11=="") {
                    value11=value10;
                    value10=value9;
                    value9="";
                }
                
                if (value12==""){
                    value12=value11;
                    value11=value10;
                    value10=value9;
                    value9="";
                }
     
    
                
                if (value11==value12){
                    value12=(value12*2);
                    value11=""
                    
                    
                    if (value10==value9){
                        value10=(value10*2);
                        value9=""
                        
                    }
                    else{
                        value11=value10;
                        value10=value9;
                        
                    }
                    
                    value9="";
                    
                }
                
                else if (value11==value10){
                    value11=(value11*2);
                    value10=value9;
                    value9=("");
                    
                }
                
    
                else if (value10==value9){
                    value10=(value10*2);
                    value9=""
                }
    
                if(value10=="") {
                    value10=value9;
                    value9=""
                }
                
                if (value11=="") {
                    value11=value10;
                    value10=value9;
                    value9="";
                }
                
                if (value12==""){
                    value12=value11;
                    value11=value10;
                    value10=value9;
                    value9="";
                }
                
                
                break;
        
    }
}  



function rowFourX(direction){
    switch(direction){
        case left:
            if(value15=="") {
                value15=value16;
                value16=""
            }
            
            if (value14=="") {
                value14=value15;
                value15=value16;
                value16=""
            }
            
            if (value13==0){
                value13=value14;
                value14=value15;
                value15=value16;
                value16="";
            }

            
            if (value14==value13){
                value13=(value13*2);
                value14=""
                
               
                if (value15==value16){
                    value15=(value15*2);
                    value16=""
                    
                }
                else{
                    value14=value15;
                    value15=value16;
                   
                }
               
                value16="";
                
            }
            
            else if (value14==value15){
                value14=(value14*2);
                value15=value16;
                value16=("");
                
            }
            

            else if (value15==value16){
                value15=(value16*2);
                value16=""
            }

            if(value15=="") {
                value15=value16;
                value16=""
            }
            
            if (value14=="") {
                value14=value15;
                value15=value16;
                value16="";
            }
            
            if (value13==""){
                value13=value14;
                value14=value15;
                value15=value16;
                value16="";
            }
            
            
            break;

            case right:
                if(value14=="") {
                    value14=value13;
                    value13=""
                }
                
                if (value15=="") {
                    value15=value14;
                    value14=value13;
                    value13="";
                }
                
                if (value16==""){
                    value16=value15;
                    value15=value14;
                    value14=value13;
                    value13="";
                }
     
    
                
                if (value15==value16){
                    value16=(value16*2);
                    value15=""
                    
                    
                    if (value14==value13){
                        value14=(value14*2);
                        value13=""
                        
                    }
                    else{
                        value15=value14;
                        value14=value13;
                        
                    }
                    
                    value13="";
                    
                }
                
                else if (value15==value14){
                    value15=(value15*2);
                    value14=value13;
                    value13=("");
                    
                }
                
    
                else if (value14==value13){
                    value14=(value14*2);
                    value13=""
                }
    
                if(value14=="") {
                    value14=value13;
                    value13=""
                }
                
                if (value15=="") {
                    value15=value14;
                    value14=value13;
                    value13="";
                }
                
                if (value16==""){
                    value16=value15;
                    value15=value14;
                    value14=value13;
                    value13="";
                }
                
                
                break;
        
    }
}  

function columnOneY(direction){
    switch(direction){
        case up:
            if(value9=="") {
                value9=value13;
                value13=""
            }
            
            if (value5=="") {
                value5=value9;
                value9=value13;
                value13="";
            }
            
            if (value1==""){
                value1=value5;
                value5=value9;
                value9=value13;
                value13="";
            }
 

            
            if (value5==value1){
                value1=(value1*2);
                value5=""
                
                
                if (value9==value13){
                    value9=(value9*2);
                    value13=""
                    
                }
                else{
                    value5=value9;
                    value9=value13
                    
                }
                
                value13="";
                
            }
            
            else if (value5==value9){
                value5=(value5*2);
                value9=value13;
                value13=("");
                
            }
            

            else if (value9==value13){
                value9=(value9*2);
                value13=""
            }

            if(value9=="") {
                value9=value13;
                value13=""
            }
            
            if (value5=="") {
                value5=value9;
                value9=value13;
                value13="";
            }
            
            if (value1==""){
                value1=value5;
                value5=value9;
                value9=value13;
                value13="";
            }
            
            
            break;
        
            case down:
                if(value5=="") {
                    value5=value1;
                    value1=""
                }
                
                if (value9=="") {
                    value9=value5;
                    value5=value1;
                    value1="";
                }
                
                if (value13==""){
                    value13=value9;
                    value9=value5;
                    value5=value1;
                    value1="";
                }
     
    
                
                if (value9==value13){
                    value13=(value13*2);
                    value9=""
                    
                    
                    if (value5==value1){
                        value5=(value5*2);
                        value1=""
                        
                    }
                    else{
                        value9=value5;
                        value5=value1;
                        
                    }
                    
                    value1="";
                    
                }
                
                else if (value9==value5){
                    value9=(value9*2);
                    value5=value1;
                    value1=("");
                    
                }
                
    
                else if (value5==value1){
                    value5=(value5*2);
                    value1=""
                }
    
                if(value5=="") {
                    value5=value1;
                    value1=""
                }
                
                if (value9=="") {
                    value9=value5;
                    value5=value1;
                    value1="";
                }
                
                if (value13==""){
                    value13=value9;
                    value9=value5;
                    value5=value1;
                    value1="";
                }
                
                
                break;
        
    }
        
}

function columnTwoY(direction){
    switch(direction){
        case up:
            if(value10=="") {
                value10=value14;
                value14=""
            }
            
            if (value6=="") {
                value6=value10;
                value10=value14;
                value14="";
            }
            
            if (value2==0){
                value2=value6;
                value6=value10;
                value10=value14;
                value14="";
            }

            
            if (value6==value2){
                value2=(value2*2);
                value6=""
                
               
                if (value10==value14){
                    value10=(value10*2);
                    value14=""
                    
                }
                else{
                    value6=value10;
                    value10=value14
                   
                }
               
                value14="";
                
            }
            
            else if (value6==value10){
                value6=(value10*2);
                value10=value14;
                value14=("");
                
            }
            

            else if (value10==value14){
                value10=(value14*2);
                value14=""
            }

            if(value10=="") {
                value10=value14;
                value14=""
            }
            
            if (value6=="") {
                value6=value10;
                value10=value14;
                value14="";
            }
            
            if (value2==""){
                value2=value6;
                value6=value10;
                value10=value14;
                value14="";
            }
            
            
            break;

            case down:
                if(value6=="") {
                    value6=value2;
                    value2=""
                }
                
                if (value10=="") {
                    value10=value6;
                    value6=value2;
                    value2="";
                }
                
                if (value14==""){
                    value14=value10;
                    value10=value6;
                    value6=value2;
                    value2="";
                }
     
    
                
                if (value10==value14){
                    value14=(value14*2);
                    value10=""
                    
                    
                    if (value6==value2){
                        value6=(value6*2);
                        value2=""
                        
                    }
                    else{
                        value10=value6;
                        value6=value2;
                        
                    }
                    
                    value2="";
                    
                }
                
                else if (value10==value6){
                    value10=(value10*2);
                    value6=value2;
                    value2=("");
                    
                }
                
    
                else if (value6==value2){
                    value6=(value6*2);
                    value2=""
                }
    
                if(value6=="") {
                    value6=value2;
                    value2=""
                }
                
                if (value10=="") {
                    value10=value6;
                    value6=value2;
                    value2="";
                }
                
                if (value14==""){
                    value14=value10;
                    value10=value6;
                    value6=value2;
                    value2="";
                }
                
                
                break;
        
        }
}   

function columnThreeY(direction){
    switch(direction){
        case up:
            if(value11=="") {
                value11=value15;
                value15=""
            }
            
            if (value7=="") {
                value7=value11;
                value11=value15;
                value15=""
            }
            
            if (value3==""){
                value3=value7;
                value7=value11;
                value11=value15;
                value15="";
            }

            if(value11=="") {
                value11=value15;
                value15=""
            }
            
            if (value7=="") {
                value7=value11;
                value11=value15;
                value15=""
            }
            
            if (value3==""){
                value3=value7;
                value7=value11;
                value11=value15;
                value15="";
            }

            
            if (value7==value3){
                value3=(value3*2);
                value7=""
                
               
                if (value11==value15){
                    value11=(value11*2);
                    value15=""
                    
                }
                else{
                    value7=value11;
                    value11=value15;
                   
                }
               
                value15="";
                
            }
            
            else if (value7==value11){
                value7=(value11*2);
                value11=value15;
                value15=("");
                
            }
            

            else if (value11==value15){
                value11=(value15*2);
                value15=""
            }

            if(value11=="") {
                value11=value15;
                value15=""
            }
            
            if (value7=="") {
                value7=value11;
                value11=value15;
                value15="";
            }
            
            if (value3==""){
                value3=value7;
                value7=value11;
                value11=value15;
                value15="";
            }
            
            
            break;
            case down:
                if(value7=="") {
                    value7=value3;
                    value3=""
                }
                
                if (value11=="") {
                    value11=value7;
                    value7=value3;
                    value3="";
                }
                
                if (value15==""){
                    value15=value11;
                    value11=value7;
                    value7=value3;
                    value3="";
                }
     
    
                
                if (value11==value15){
                    value15=(value15*2);
                    value11=""
                    
                    
                    if (value7==value3){
                        value7=(value7*2);
                        value3=""
                        
                    }
                    else{
                        value11=value7;
                        value7=value3;
                        
                    }
                    
                    value3="";
                    
                }
                
                else if (value11==value7){
                    value11=(value11*2);
                    value7=value3;
                    value3=("");
                    
                }
                
    
                else if (value7==value3){
                    value7=(value7*2);
                    value3=""
                }
    
                if(value7=="") {
                    value7=value3;
                    value3=""
                }
                
                if (value11=="") {
                    value11=value7;
                    value7=value3;
                    value3="";
                }
                
                if (value15==""){
                    value15=value11;
                    value11=value7;
                    value7=value3;
                    value3="";
                }
                
                
                break;
        
    }
}  



function columnFourY(direction){
    switch(direction){
        case up:
            if(value12=="") {
                value12=value16;
                value16=""
            }
            
            if (value8=="") {
                value8=value12;
                value12=value16;
                value16=""
            }
            
            if (value4==0){
                value4=value8;
                value8=value12;
                value12=value16;
                value16="";
            }

            
            if (value8==value4){
                value4=(value4*2);
                value8=""
                
               
                if (value12==value16){
                    value12=(value12*2);
                    value16=""
                    
                }
                else{
                    value8=value12;
                    value12=value16;
                   
                }
               
                value16="";
                
            }
            
            else if (value8==value12){
                value8=(value8*2);
                value12=value16;
                value16=("");
                
            }
            

            else if (value12==value16){
                value12=(value16*2);
                value16=""
            }

            if(value12=="") {
                value12=value16;
                value16=""
            }
            
            if (value8=="") {
                value8=value12;
                value12=value16;
                value16="";
            }
            
            if (value4==""){
                value4=value8;
                value8=value12;
                value12=value16;
                value16="";
            }
            
            
            break;

            case down:
                if(value8=="") {
                    value8=value4;
                    value4=""
                }
                
                if (value12=="") {
                    value12=value8;
                    value8=value4;
                    value4="";
                }
                
                if (value16==""){
                    value16=value12;
                    value12=value8;
                    value8=value4;
                    value4="";
                }
     
    
                
                if (value12==value16){
                    value16=(value16*2);
                    value12=""
                    
                    
                    if (value8==value4){
                        value8=(value8*2);
                        value4=""
                        
                    }
                    else{
                        value12=value8;
                        value8=value4;
                        
                    }
                    
                    value4="";
                    
                }
                
                else if (value12==value8){
                    value12=(value12*2);
                    value8=value4;
                    value4=("");
                    
                }
                
    
                else if (value8==value4){
                    value8=(value8*2);
                    value4=""
                }
    
                if(value8=="") {
                    value8=value4;
                    value4=""
                }
                
                if (value12=="") {
                    value12=value8;
                    value8=value4;
                    value4="";
                }
                
                if (value16==""){
                    value16=value12;
                    value12=value8;
                    value8=value4;
                    value4="";
                }
                
                
                break;
        
    }
}  

function insertNumber(){
    let rndnum=(Math.floor(Math.random() * 16) + 1)
    console.log(rndnum)
    switch(rndnum) {
        case 1:
            if (value1==""){
                value1=2;
            }
            else{
                insertNumber()  
            }
        break

        case 2:
            if (value2==""){
                value2=2;
            }
            else{
                insertNumber()  
            }
        break

        case 3:
            if (value3==""){
                value3=2;
            }
            else{
                insertNumber()  
            }
        break

        case 4:
            if (value4==""){
                value4=2;
            }
            else{
                insertNumber()  
            }
        break

        case 5:
            if (value5==""){
                value5=2
            }
            else{
                insertNumber()  
            }
        break

        case 6:
            if (value6==""){
                value6=2
            }
            else{
                insertNumber()  
            }
        break

        case 7:
            if (value7==""){
                value7=2
            }
            else{
                insertNumber()  
            }
        break

        case 8:
            if (value8==""){
                value8=2
            }
            else{
                insertNumber()  
            }
        break

        case 9:
            if (value9==""){
                value9=2
            }
            else{
                insertNumber()  
            }
        break

        case 10:
            if (value10==""){
                value10=2
            }
            else{
                insertNumber()  
            }
        break

        case 11:
            if (value11==""){
                value11=2
            }
            else{
                insertNumber()  
            }
        break

        case 12:
            if (value12==""){
                value12=2
            }
            else{
                insertNumber()  
            }
        break

        case 13:
            if (value13==""){
                value13=2
            }
            else{
                insertNumber()  
            }
        break

        case 14:
            if (value14==""){
                value14=2
            }
            else{
                insertNumber()  
            }
        break

        case 15:
            if (value15==""){
                value15=2
            }
            else{
                insertNumber()  
            }
        break

        case 16:
            if (value16==""){
                value16=2
            }
            else{
                insertNumber()  
            }
        break
    }
    display()
}




document.getElementById("startbtn").addEventListener("click", () => start() );
document.getElementById("left").addEventListener("click", () => left() );
document.getElementById("right").addEventListener("click", () => right() );
document.getElementById("up").addEventListener("click", () => up() );
document.getElementById("down").addEventListener("click", () => down() );






