function Question (question, option1,option2,option3,option4,point =10, answer){
    this.question=question;
    this.option1=option1;
    this.option2=option2;
    this.option3=option3;
    this.option4=option4;
    this.point = point;     
    this.answer= answer;
}

let points =0;
const arrayOfQuestions= [];
const article = document.querySelector('article');
const buttonChecked = document.querySelector('button');
const p= document.querySelector('p');

let question1 = new Question('How can you open a link in a new tab/browser window?',
                ' <a href="url" target="new">' ,
                ' <a href="url" new>',
                ' <a link="new_url" >',
                ' <a href="url" target="_blank">',10,4 );
arrayOfQuestions.push(question1);
let question2 = new Question('second question?',
                ' <a href="url" target="new">' ,
                ' adfadfadf',
                ' <a link="new_url" >',
                ' adfadfadf',10,4 );
arrayOfQuestions.push(question2);
let question3 = new Question('3 question?',
                ' <a href="url" target="new">' ,
                ' adfadfadfadf ',
                ' <a link="new_url" >',
                ' adfadfadfa',10,4 );
arrayOfQuestions.push(question3);
let question4 = new Question('4 question?',
                ' <a href="url" target="new">' ,
                ' <a href="url" new>',
                ' <a link="new_url" >',
                ' adfadsfasdfadf ',10,4 );
arrayOfQuestions.push(question4);

console.log(arrayOfQuestions);


    
    p.textContent = arrayOfQuestions[0].question;
    //article.appendChild(p);
    let radioLabel = document.querySelectorAll('label');
    console.log(radioLabel);
    for(let j=0; j<4; j++){
        
        switch(j){
            case 0:radioLabel[j].innerText = arrayOfQuestions[0].option1;
            break;
            case 1:radioLabel[j].innerText = arrayOfQuestions[0].option2;
            break;
            case 2:radioLabel[j].innerText = arrayOfQuestions[0].option3;
            break;
            case 3:radioLabel[j].innerText = arrayOfQuestions[0].option4;
             break;
         }
        }
        

let index =1;
function calculate (){
    
        
        if(buttonChecked.click && index<4){

        p.innerText = arrayOfQuestions[index].question;
       
        console.log(arrayOfQuestions[index].question);
        let radioLabel = document.querySelectorAll('label');

       let radioButtons = document.querySelectorAll('input');
       if(radioButtons[arrayOfQuestions[index-1].answer-1].checked){
           points =points+ arrayOfQuestions[index-1].point;
           alert('you answer correct and your point is :' + points)
       }
        console.log(radioLabel);
        for(let j=0; j<4; j++){
        
        switch(j){
            case 0:radioLabel[j].innerText = arrayOfQuestions[index].option1;
            break;
            case 1:radioLabel[j].innerText = arrayOfQuestions[index].option2;
            break;
            case 2:radioLabel[j].innerText = arrayOfQuestions[index].option3;
            break;
            case 3:radioLabel[j].innerText = arrayOfQuestions[index].option4;
             break;
         }
        }
        index= index+1;
    }