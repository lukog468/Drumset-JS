
// document.querySelector(".drum").addEventListener("click",function (){
//     alert("got clicked")
// });


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    
    
    
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){

            var exp = this.innerHTML;
            keys(exp);
            butAnim(exp);
            
        });
    
    document.addEventListener("keypress",function(event)
    {
        keys(event.key);
        butAnim(event.key);
    })

    function keys(key)
    {
        switch (key)
            {
                case "w":
                    var aud = new Audio("sounds/tom-1.mp3");
                    aud.play();
                break;

                case "a":
                    var aud = new Audio("sounds/tom-2.mp3");
                    aud.play();
                break;
                
                case "s":
                    var aud = new Audio("sounds/tom-3.mp3");
                    aud.play();
                break;

                case "d":
                    var aud = new Audio("sounds/tom-4.mp3");
                    aud.play();
                break;

                case "j":
                    var aud = new Audio("sounds/snare.mp3");
                    aud.play();
                break;

                case "k":
                    var aud = new Audio("sounds/kick-bass.mp3");
                    aud.play();
                break;

                case "l":
                    var aud = new Audio("sounds/crash.mp3");
                    aud.play();
                break;

                default:
                    console.log(exp);
            }
    }
    
    function butAnim(crt)
    {
        var a = document.querySelector("."+crt);
        a.classList.add("pressed");

        setTimeout(function(){a.classList.remove("pressed")},200);
    }
}