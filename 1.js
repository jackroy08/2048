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
