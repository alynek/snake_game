const bestScore = {

    currentHighestScore: 0,
    dateOfcurrentHighestScore: 0,

    update(lastScore){

        bestScore.currentHighestScore = bestScore.getLocalStorage()

        if(bestScore.currentHighestScore != null){
            if(lastScore > bestScore.currentHighestScore){
                bestScore.currentHighestScore = lastScore
                bestScore.dateOfcurrentHighestScore = new Date().toLocaleString()
                bestScore.showPoints(bestScore.currentHighestScore, bestScore.dateOfcurrentHighestScore)
                bestScore.saveLocalStorage(bestScore.currentHighestScore)
            }else{
                bestScore.showPoints(bestScore.currentHighestScore, bestScore.dateOfcurrentHighestScore)
            }
        }
        else{
            bestScore.dateOfcurrentHighestScore = new Date().toLocaleString()
            bestScore.showPoints(lastScore, bestScore.dateOfcurrentHighestScore)
            bestScore.saveLocalStorage(lastScore)
        }
    },

    getLocalStorage(){
        return localStorage.getItem('bestScore')
    },

    saveLocalStorage(currentHighestScore){
        localStorage.setItem('bestScore', currentHighestScore)
    },

    showPoints(currentHighestScore, dateOfcurrentHighestScore){
        let bestScore = document.getElementById('bestScore')
        bestScore.innerHTML = `HIGHSCORE: ${currentHighestScore} points ${dateOfcurrentHighestScore}`
    }
}