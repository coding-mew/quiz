import React from 'react'
import { useGameContext } from '../../global/Context'


function Top() {
  const { result, gameData} = useGameContext()


  return (
    <div>Top
        Score: { result.score}
        <br />
        Correct:{result.correctAnswers}
        <br />

        Wrong {result.wrongAnswers}
        <br />

        GameData.length: {gameData.length}
        <br />

       {/* do you want to review your SAVED QUESTIONS? - navigate to*/}

    </div>

  )
}

export default Top