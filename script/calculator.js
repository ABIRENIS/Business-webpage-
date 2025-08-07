/*     inpbtn.addEventListener("keyup" ,(event) => {
                   if(event.key == "0" || event.key == "1"|| 
                    event.key == "2"|| event.key == "3"||
                     event.key == "4"|| event.key == "5"
                     || event.key == "6"|| event.key == "7"
                     || event.key == "8"|| event.key == "9"
                     || event.key == "+"|| event.key == "-"
                     || event.key == "/"|| event.key == "*"
                     || event.key == "%"|| event.key == "."
                   )
                   {
                     document.getElementById('inpbtn')
                     function append(val){
                     inpbtn.value+=val;      
              }
                   }
               }) */
                document.getElementById('inpbtn')
                     function append(val){
                     inpbtn.value+=val;
                     }
               inpbtn.addEventListener("keyup" ,(event)=> {
                if(event.key == "Enter"){
                    equalex();
                }
               })
              function clearex(){
              inpbtn.value ="";
              }
               function equalex(){
                  inpbtn.value=eval(inpbtn.value);
              }
               function backs(){
                   inpbtn.value= inpbtn.value.slice(0,-1 )
               }
           