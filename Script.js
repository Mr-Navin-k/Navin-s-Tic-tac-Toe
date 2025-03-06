let boxes = document.querySelectorAll(".box");
        let msg = document.querySelector(".hide");
        let newbtn = document.querySelector(".new-btn");
        let resetbtn = document.querySelector(".reset-btn");
        let turn = true;
        let count = 0;
        const winpatterns = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]];
            boxes.forEach((box)=>{
                box.addEventListener("click",()=>{
                    if(turn===true){
                        box.innerText = "X";
                        turn=false;
                        box.style.color = "orange";
                        count++;
                        console.log(count)
                        console.log(box.innerText,"was Clicked")
                        for(let box of boxes){
                        }
                    }else{
                        box.innerText = "O";
                        turn=true;
                        count++;
                        console.log(count)
                        turn.disabled=true;
                        box.style.color = "green";
                        console.log(box.innerText,"was Clicked")
                    }
                    box.disabled=true;
                    showdraw();
                    checkwinner();
                });
            });
            const showdraw = () =>{
                if(count===9){
                    // alert("Oops ! It's Draw");
                    msg.classList.add("msg");
                    msg.classList.remove("hide");
                    msg.innerText = "Oops ! It's Draw"
                }
            }
        const enableboxes = () =>{
            for(let box of boxes){
                box.disabled = false;
                box.innerText= "";
            }
        }
        const disabledboxes = () =>{
            for(let box of boxes){
                box.disabled=true;
            }
        }
        const resetgame = () => {
            turn=true;
            location.reload()
            enableboxes()
            msg.classList.add("hide");
        }
        const checkwinner = () =>{
            for(let pattern of winpatterns){
                let p1 = boxes[pattern[0]].innerText;
                let p2 = boxes[pattern[1]].innerText;
                let p3 = boxes[pattern[2]].innerText;
                if(p1!="" && p2!="" && p3!=""){
                    if(p1===p2 && p2===p3){
                        console.log(`Winner ${p1}`);
                        disabledboxes();
                        msg.classList.add("msg")
                        msg.innerText = `Congratulation Winner is ( ${p1} )`
                        msg.classList.remove("hide");
                    }
                }
            }   
        }
        // newbtn.addEventListener("click",(resetgame));
        resetbtn.addEventListener("click",(resetgame));