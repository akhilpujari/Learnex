const quizData = [
    {
        question: "A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
        a: "3.6",
        b: "7.2",
        c: "8.4",
        d: "10",
        correct: "b",
    },
    {
        question: "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:",
        a: "50",
        b: "56",
        c: "70",
        d: "80",
        correct: "a",
    },
    {
        question: "A train can travel 50% faster than a car. Both start from point A at the same time and reach point B 75 kms away from A at the same time. On the way, however, the train lost about 12.5 minutes while stopping at the stations. The speed of the car is:",
        a: "100",
        b: "110",
        c: "120",
        d: "130",
        correct: "c",
    },
    {
        question: "A man complete a journey in 10 hours. He travels first half of the journey at the rate of 21 km/hr and second half at the rate of 24 km/hr. Find the total journey in km.",
        a: "220 km",
        b: "224 km",
        c: "230 km",
        d: "234 km",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button class="reload" id="reload" onclick="location.reload()">Reload</button>

         <a class="soln" href="solution.html" >  <button class="soln" id="soln" >Solutions</button></a>

          <a class="teacher" href="teacher.html" >  <button class="teacher" id="teacher" >Teacher</button></a>
          
           `
         
       }
    }
})