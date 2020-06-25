var position=0// array value must be 0
var board,status,question,choice,A,B,C,Total_crt=0;
var questions=[
["Address is declared in C programming as? ","*","&","%","B"],
["% operator in C is used to give ?","Reminder","Quotient","Not such symbol","A"],
["Conditional Operator in C programming is?","||","&&","?:","C"],
["10%3 is","0","2","1","C"],
["a++ is also written as","a=a+1","a+=1","Both","C"]
];
function Display()
{
    board=document.getElementById("board"); //innerHTML is div tag in quizz.html
    if(position>=questions.length)
    {
        board.innerHTML=" <h1> You got "+Total_crt+ " out of "+questions.length+ "</h1>";
        document.getElementById("status").innerHTML="<h1>Thank You-Quiz Completed</h1>";
        position =0;
        Total_crt=0;
        return false
    }
    document.getElementById("status").innerHTML="<h2>Question " +(position+1)+" of " +questions.length+"</h2>";

    question=questions[position][0];//1st question in array
    A=questions[position][1];
    B=questions[position][2];
    C=questions[position][3];

    board.innerHTML="<h2>"+question+"</h2><br><br>" ;
    board.innerHTML+="<lable><input type='radio' name='choices' value='A' >"+A+"</lable><br><br>" ;
    board.innerHTML+="<lable><input type='radio' name='choices' value='B' >"+B+"</lable><br><br>" ;
    board.innerHTML+="<lable><input type='radio' name='choices' value='C' >"+C+"</lable><br><br><br><br>" ;
    board.innerHTML+="<button onClick='check()'>Submit</button>";
}
function check()
{ 
    var choice;
    choices=document.getElementsByName("choices");
    for(var i=0;i<choices.length;i++)
    {
        if(choices[i].checked)
        {
                choice=choices[i].value
        }
    }
    if(choice==questions[position][4])
    {
            Total_crt++;
    }
    position++;
    Display();

}

