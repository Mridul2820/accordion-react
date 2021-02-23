import { useState } from 'react'
import Question from './components/Question'
import data from './data'
import './App.scss';

import React from 'react'

const App = () => {
    const [questions] = useState(data)

    return (
        <main>
            <div className="container">
                <h3>Question Answers about Login</h3>
                <section className="info">
                    {questions.map(question => {
                        return <Question key={question.id} {...question} />
                    })}
                </section>
            </div>
        </main>
    )
}

export default App

