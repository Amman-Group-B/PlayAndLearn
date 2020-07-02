var mathQuestions = [];
var arabicQuestions = [];
var generalQuestions = [];
var englishQuestions = [];

function Question(category, imgSrc, question, choiceA, choiceB, choiceC, correctAnswer) {
    this.category = category.toLowerCase();
    if (!imgSrc) {
        this.imgSrc = "";
    }
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
            console.log('general this.imgSrc:', this.imgSrc);

            if (this.imgSrc == '') {
                this.imgSrc = "img/general_information.jpg";
            }
            if (!localStorage.getItem('generalQuestions')) {

                generalQuestions.push(this);
            } else {
                generalQuestions = JSON.parse(localStorage.getItem('generalQuestions'));

                generalQuestions.push(this);
            }
            localStorage.setItem('generalQuestions', JSON.stringify(generalQuestions));
        }
        else if (this.category == 'math') {
            console.log('math this.imgSrc:', this.imgSrc);

            if (this.imgSrc == '') {
                this.imgSrc = "img/math.jpg";
            }
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
            console.log('arabic this.imgSrc:', this.imgSrc);

            if (this.imgSrc == '') {
                console.log('No image set');
                this.imgSrc = "img/Arabic.jpg";
            }
            if (!localStorage.getItem('arabicQuestions')) {
                arabicQuestions.push(this);
            } else {
                arabicQuestions = JSON.parse(localStorage.getItem('arabicQuestions'));
                arabicQuestions.push(this);
            }
            localStorage.setItem('arabicQuestions', JSON.stringify(arabicQuestions));
        }
        else if (this.category == 'english') {
            console.log('english this.imgSrc:', this.imgSrc);

            if (this.imgSrc == '') {
                this.imgSrc = "img/english01.jpg";
            }
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
    new Question('english', '', 'Find the word whose underlined part is pronounced differently from the others.',
        'fight', 'figure', 'bright', 'B');
    new Question('english', '', 'George..... fly to Stockholm tomorrow',
        'go to', 'goes to', ' is going to', 'C');
    new Question('english', '', 'David is the boss, you need to speak to …..',
        'them', 'him', 'her', 'B');
    new Question('english', '', 'I wanted an orange car, but they only had ....',
        'a red one', 'a red', 'one red', 'A');
    new Question('english', '', 'Which pen do you want?',
        'A one blue', 'One blue', 'The blue one', 'C');
    new Question('english', '', ' I haven’t got …..',
        'no money', 'money', 'any money', 'C');
    new Question('english', '', 'We haven’t got ..... mineral water.',
        'a lot', 'much', 'too', 'B');
    new Question('english', '', 'We\'ll never get to the airport! There is ..... time!',
        'few', 'too little', 'too few', 'C');
    new Question('english', '', 'Don’t start ..... That\'s for babies!',
        'to crying!', ' crying!', 'cry!', 'B');
    new Question('english', '', 'Micheal ..... in Paris since 1999.',
        'has lived', 'lives', 'is living', 'A');
    new Question('english', '', '25.  On a windy morning, I arrived ..... Chicago Airport',
        'on', 'in', 'at', 'C');

    new Question('arabic', '', 'ما هو جمع كلمة مركبة', 'مركبات', 'مراكب', 'مراكيب', 'A');
    new Question('arabic', '', 'ما معنى صَه؟', ' اُسْكت', 'تعالى', 'اِنطِق', 'A');
    new Question('arabic', '', 'ما جمع عندليب', 'عندلون', 'عندليبون', 'عنادل', 'C');
    new Question('arabic', '', 'مؤنث عطشان', 'عطشة', 'عطشى', 'عطيشة', 'B');
    new Question('arabic', '', 'ما جمع دَلْوٌ؟', 'دِلاءٌ', 'لا تجمع', 'دلوون', 'A');
    new Question('arabic', '', 'ما معنى الدوحة؟', 'الدار الكبيرة', 'الشجرة الكبيرة', 'المدينة الجميلة', 'B');
    new Question('arabic', '', 'ما معنى القيلولة؟', 'الجلوس للراحة', 'تركُ الشيء', 'النوم بعد الظهر', 'C');
    new Question('arabic', '', 'ما جمع فردوس؟', 'لا جمع لها', 'فراديس', 'فردسات', 'B');

    new Question('general', '', "What does HTML stand for?", "Hyper Text Markup Language", "Hyper Text Mail License",
        "High Transfer Markup Language", "A");
    new Question('general', '', "What does CSS stand for?", "Cascading Style System", "Cascading Style Sheet", "Casting Style System", "B");
    new Question('general', '', "What does JS stand for?", "Java Since", "Java Source", "Java Script", "C");
    new Question('general', '', "How many legs the cat has?", "4", "6", "2", "A");
    new Question('general', '', "How many legs the monkey has?", "4", "6", "2", "C");
    new Question('general', '', "Capital of Palestine", "Aquds", "Gaza", "Abudees", "A");
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



