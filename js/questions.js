



var mathQuestions = [];
var arabicQuestions = [];
var generalQuestions = [];
var englishQuestions = [];

function Question(category, imgSrc, question, choiceA, choiceB, choiceC, correctAnswer) {
    this.category = category.toLowerCase();
    this.imgSrc = imgSrc;
    this.question = question;
    this.choiceA = choiceA;
    this.choiceB = choiceB;
    this.choiceC = choiceC;
    this.correctAnswer = correctAnswer;
    this.addQuestionToArray = function () {
        // if(eval("typeof " +this.category + "Questions=='undefined'")){
        //     console.log('array is not defined');
        //     eval('window.' + this.category + 'Questions' + '=[];');            
        // }else{
        //     console.log('array is defined');
        //     eval('window.' + this.category + 'Questions')=JSON.parse(localStorage.getItem(eval("'window.' + this.category + 'Questions'"))
        //     )
        // }
        // eval(this.category+ 'Questions').push(this);
        // console.log('englishQuestions: ',window.arabicQuestions);
        if (this.category == 'general') {
            if (!localStorage.getItem('generalQuestions')) {
                generalQuestions.push(this);
            } else {
                generalQuestions = JSON.parse(localStorage.getItem('generalQuestions'));
                generalQuestions.push(this);
            }
            localStorage.setItem('generalQuestions', JSON.stringify(generalQuestions));
        }
        else if (this.category == 'math') {
            if (!localStorage.getItem('mathQuestions')) {
                mathQuestions.push(this);
                console.log('new')
            } else {
                mathQuestions = JSON.parse(localStorage.getItem('mathQuestions'));
                mathQuestions.push(this);
                console.log('old')

            }
            localStorage.setItem('mathQuestions', JSON.stringify(mathQuestions));
        }
        else if (this.category == 'arabic') {
            if (!localStorage.getItem('arabicQuestions')) {
                arabicQuestions.push(this);
            } else {
                arabicQuestions = JSON.parse(localStorage.getItem('arabicQuestions'));
                arabicQuestions.push(this);
            }
            localStorage.setItem('arabicQuestions', JSON.stringify(arabicQuestions));
        }
        else if (this.category == 'english') {
            if (!localStorage.getItem('englishQuestions')) {
                console.log('local storage empty');
                englishQuestions.push(this);

            } else {
                console.log('local storage contain english array');
                englishQuestions = JSON.parse(localStorage.getItem('englishQuestions'));
                englishQuestions.push(this);
            }
            localStorage.setItem('englishQuestions', JSON.stringify(englishQuestions));

        }
        else { console.log('No array for the category: ', this.category) }
    };
    this.addQuestionToArray();
    //localStorage.setItem(eval("this.category+ 'Questions'"),JSON.stringify(eval(this.category+ 'Questions')));    

}


if (!localStorage.getItem('generalQuestions')) {
    console.log('localStorage is empty');
    new Question('english', 'https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('english', 'https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('english', 'https://fluencycorp.com/wp-content/uploads/2019/01/hardest-part-learning-english.jpg', 'q', 'aa', 'ab', 'ac', 'A');

    new Question('arabic', 'https://ahlan.b-cdn.net/wp-content/uploads/arabic-modern-colloquial.jpg', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('arabic', 'https://ahlan.b-cdn.net/wp-content/uploads/arabic-modern-colloquial.jpg', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('arabic', 'https://ahlan.b-cdn.net/wp-content/uploads/arabic-modern-colloquial.jpg', 'q', 'aa', 'ab', 'ac', 'A');

    new Question('general', 'https://www.thailandtourpackages.net/pages/1721348336.png', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('general', 'https://www.thailandtourpackages.net/pages/1721348336.png', 'q', 'aa', 'ab', 'ac', 'A');
    new Question('general', 'https://www.thailandtourpackages.net/pages/1721348336.png', 'q', 'aa', 'ab', 'ac', 'A');

    new Question('general', "", "What does HTML stand for?", "Hyper Text Markup Language", "Hyper Text Mail License",
        "High Transfer Markup Language", "A");
    new Question('general', "", "What does CSS stand for?", "Cascading Style System", "Cascading Style Sheet", "Casting Style System", "B");
    new Question('general', "", "What does JS stand for?", "Java Since", "Java Source", "Java Script", "C");
    new Question('general', "", "How many legs the cat has?", "4", "6", "2", "A");
    new Question('general', "", "How many legs the monkey has?", "4", "6", "2", "C");
    new Question('general', "", "Capital of Palestine", "Aquds", "Gaza", "Abudees", "A");
    new Question('general', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBXqGtFin1o43lDryWqnE9Rcm2saysDNtz8A&usqp=CAU", "The past of the verb write", "wrote", "written", "writted", "A");


    new Question('general', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBXqGtFin1o43lDryWqnE9Rcm2saysDNtz8A&usqp=CAU",
        "The past of the verb play", "play", "ply", "palyed", "C");

new Question('general', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBXqGtFin1o43lDryWqnE9Rcm2saysDNtz8A&usqp=CAU",
    "The past of the verb understand", "understanded", "understod", "understand", "B")

new Question('general', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBXqGtFin1o43lDryWqnE9Rcm2saysDNtz8A&usqp=CAU",
    "President of USA", "Donald Trump", "John Borson", "Messi", "A")

new Question('math', 'https://image.freepik.com/free-vector/maths-chalkboard_23-2148178220.jpg', 'q', 'aa', 'ab', 'ac', 'A');
new Question('math', 'https://image.freepik.com/free-vector/maths-chalkboard_23-2148178220.jpg', 'q', 'aa', 'ab', 'ac', 'A');
new Question('math', 'https://image.freepik.com/free-vector/maths-chalkboard_23-2148178220.jpg', 'q', 'aa', 'ab', 'ac', 'A');

new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSWNjPvVeaREIulnT4DgzVH7olodg2hxFn30w&usqp=CAU", "1+1", "2", "3", "4", "A");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_womCcmX5csUIuIZjsetyrGz63wiJbHgJew&usqp=CAU", "1+2", "2", "3", "4", "B");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvhD3lo5Zb7HhK1AVKu4rXcSM6TQRig_6tLg&usqp=CAU", "2x2", "2", "3", "4", "C");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrMurBzqxC1L_J4lXLyqFIQzhDSCkgRaA-_g&usqp=CAU", "9+1", "10", "11", "12", "A");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT89HSePT6wd72yksiIPARS4c89Ik9WtJ3y6A&usqp=CAU", "2+6", "8", "6", "2", "A");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvhD3lo5Zb7HhK1AVKu4rXcSM6TQRig_6tLg&usqp=CAU", "2+4", "4", "6", "2", "B");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvhD3lo5Zb7HhK1AVKu4rXcSM6TQRig_6tLg&usqp=CAU", "5x5", "24", "25", "10", "B");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_womCcmX5csUIuIZjsetyrGz63wiJbHgJew&usqp=CAU", "12+12", "144", "1212", "24", "C");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_womCcmX5csUIuIZjsetyrGz63wiJbHgJew&usqp=CAU", "5x10", "15", "50", "510", "B");
new Question('math', "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrMurBzqxC1L_J4lXLyqFIQzhDSCkgRaA-_g&usqp=CAU", "7x8", "56", "54", "58", "A");
}



