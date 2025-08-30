        var arr=["images/dice1.png",
            "images/dice2.png",
            "images/dice3.png",
            "images/dice4.png",
            "images/dice5.png",
            "images/dice6.png"
        ]

        var  temp1=Math.random()*5;
        var temp2=Math.random()*5;

        var num1=Math.floor(temp1);
        var num2=Math.floor(temp2);

        if(num1>num2){
            document.querySelector("h2").innerHTML="Player 1 Wins";
        }
        else if(num1<num2){
            document.querySelector("h2").innerHTML="Player 2 Wins";
        }
        else{
            document.querySelector("h2").innerHTML="Match Draws";
        }

document.querySelector(".img1").src=arr[num1];
document.querySelector(".img2").src=arr[num2];