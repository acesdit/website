'use client'

import {useState} from 'react';

const Option = ({ option, selectedOption, handleOptionSelect }) => {
    return (
        <li className={'box-border border-2 border-amber-950 p-4 rounded-2xl bg-amber-100 hover:cursor-pointer'}>
            <label>
                <input
                    type="radio"
                    name={"option"}
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => handleOptionSelect(option.id)}
                />
                {option.text}
            </label>
        </li>
    );
};

// Question component
const Question = ({ question, options, selectedOption, handleOptionSelect }) => {
    return (
        <div className={''}>
            <h1 className={'text-3xl leading-[160%] font-bold mb-6'}>{question}</h1>
            <ul className={'flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-2'}>
                {/* Map through options for the current question */}
                {options.map(option => (
                    <Option
                        key={option.id}
                        option={option}
                        selectedOption={selectedOption}
                        handleOptionSelect={handleOptionSelect}
                    />
                ))}
            </ul>
        </div>
    );
};


export default function Quiz() {
    const quizData = {
        quizID: 'QZ104',
        quizTitle: 'Something Something',
        totalQuestions: 5,
        hasTimer: true,
        timeForEachQuestionInSeconds: 120,
        questions: [
            {
                id: 1,
                question: 'What is the capital of France?',
                options: [
                    {
                        id: 1,
                        text: 'Paris',
                    },
                    {
                        id: 2,
                        text: 'London',
                    },
                    {
                        id: 3,
                        text: 'Berlin',
                    },
                    {
                        id: 4,
                        text: 'Madrid',
                    },
                ]
            },
            {
                id: 2,
                question: 'What is the largest planet in our solar system?',
                options: [
                    {
                        id: 1,
                        text: 'Earth',
                    },
                    {
                        id: 2,
                        text: 'Mars',
                    },
                    {
                        id: 3,
                        text: 'Jupiter',
                    },
                    {
                        id: 4,
                        text: 'Saturn',
                    },
                ]
            },
            {
                id: 3,
                question: 'What is the smallest country in the world?',
                options: [
                    {
                        id: 1,
                        text: 'Vatican City',
                    },
                    {
                        id: 2,
                        text: 'Monaco',
                    },
                    {
                        id: 3,
                        text: 'San Marino',
                    },
                    {
                        id: 4,
                        text: 'Liechtenstein',
                    },
                ]
            },
            {
                id: 4,
                question: 'What is the currency of Japan?',
                options: [
                    {
                        id: 1,
                        text: 'Yen',
                    },
                    {
                        id: 2,
                        text: 'Euro',
                    },
                    {
                        id: 3,
                        text: 'Dollar',
                    },
                    {
                        id: 4,
                        text: 'Pound',
                    },
                ]
            },
            {
                id: 5,
                question: 'Which of these is not a programming language?',
                options: [
                    {
                        id: 1,
                        text: 'Python',
                    },
                    {
                        id: 2,
                        text: 'Java',
                    },
                    {
                        id: 3,
                        text: 'HTML',
                    },
                    {
                        id: 4,
                        text: 'C++',
                    },
                ]
            },
        ]
    }

    // State variables to track current question index and selected options
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1);
    const [selectedOptions, setSelectedOptions] = useState(Array(quizData.totalQuestions).fill(null));

    // Function to handle moving to the next question
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    // Function to handle moving to the previous question
    const handlePreviousQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
    };

    // Function to handle selecting an option for the current question
    const handleOptionSelect = (optionId) => {
        const updatedOptions = [...selectedOptions];
        updatedOptions[currentQuestionIndex] = optionId;
        setSelectedOptions(updatedOptions);
    };

    // Function to handle submitting the quiz
    const handleSubmit = () => {
        const response = {
            quizID: quizData.quizID,
            answers: selectedOptions.map((optionId, index) => ({
                questionID: quizData.questions[index].id,
                selectedOptionID: optionId
            }))
        };
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        console.log(response); // Send this response to your server
    };

    const progress = ((currentQuestionIndex + 1) / quizData.totalQuestions) * 100;

    // JSX to render the Quiz component
    return (
        <div className={'h-fit'}>
            <div className="hero-container nav-target">
                <main className="hero-bg">
                    <div className="container mx-auto p-4 md:px-6">
                        <div className="flex items-center pt-8 md:pt-10 text-white">
                        </div>
                    </div>
                </main>
            </div>
            <section className={`p-2 h-full`}>
                <div className={'p-2 border-2 border-solid border-amber-950 overflow-hidden rounded-2xl h-full box-border bg-amber-100'}>
                    {currentQuestionIndex === -1 ? (
                    <div className={'flex flex-col gap-4 py-10'}>
                        <p className={'text-md font-light'}>QuizID: {quizData.quizID}</p>
                        <p className={'text-6xl font-bold tracking-tighter'}>{quizData.quizTitle}</p>
                        <p className={'text-xl font-medium tracking-tight'}>Total Questions: {quizData.totalQuestions}</p>
                        <p className={'text-xl font-medium tracking-tight'}>Time for Each
                            Question: {quizData.timeForEachQuestionInSeconds} Secs</p>
                        <button onClick={handleNextQuestion}
                                className={'box-border border-2 py-4 rounded-2xl border-amber-950 bg-amber-100 md:w-fit md:px-10'}>Begin Quiz</button>
                    </div>
                    ) : currentQuestionIndex < ((quizData.totalQuestions) - 1) ? (
                    <div>
                        <div className={'relative h-2 bg-gray-200 mb-12 mt-4 rounded-full'}>
                            <div className={'absolute top-0 left-0 h-full bg-red-950 rounded-full'} style={{ width: `${progress}%` }} />
                        </div>
                        <Question
                            question={quizData.questions[currentQuestionIndex].question}
                            options={quizData.questions[currentQuestionIndex].options}
                            selectedOption={selectedOptions[currentQuestionIndex]}
                            handleOptionSelect={handleOptionSelect}
                        />
                        <div className={'flex h-fit gap-4'}>{currentQuestionIndex > 0 &&
                            <button className={'box-border w-full border-2 py-4 rounded-2xl border-amber-950 bg-amber-100 my-4 right-0'}
                                    onClick={handlePreviousQuestion}>Previous</button>}
                            <button
                                className={'box-border w-full border-2 py-4 rounded-2xl border-amber-950 bg-amber-100 my-4 right-0'}
                                onClick={handleNextQuestion}>Next
                            </button>
                        </div>
                    </div>
                    ) : currentQuestionIndex === ((quizData.totalQuestions) - 1) ? (
                    <div>
                        <div className={'relative h-2 bg-gray-200 mb-12 mt-4 rounded-full'}>
                            <div className={'absolute top-0 left-0 h-full bg-red-950 rounded-full'} style={{ width: `${progress}%` }} />
                        </div>
                        <Question
                            question={quizData.questions[currentQuestionIndex].question}
                            options={quizData.questions[currentQuestionIndex].options}
                            selectedOption={selectedOptions[currentQuestionIndex]}
                            handleOptionSelect={handleOptionSelect}
                        />
                        <div className={'flex gap-2'}>{currentQuestionIndex > 0 &&
                            <button
                                className={'box-border w-full border-2 py-4 rounded-2xl border-amber-950 bg-amber-100 my-4 right-0'}
                                onClick={handlePreviousQuestion}>Previous</button>}
                            <button
                                className={'box-border w-full border-2 py-4 rounded-2xl border-amber-950 bg-amber-100 my-4 right-0'}
                                onClick={handleSubmit}>Submit
                            </button>
                        </div>
                    </div>
                    ) : (
                    <div className={'m-20 flex items-center justify-center text-center align-middle'}>
                        <h1 className={'text-5xl font-black'}>Quiz Completed!</h1>
                    </div>
                    )}
                </div>
            </section>
        </div>
    );
}