const bestScore = {

    currentHighestScore: 0,
    dateOfcurrentHighestScore: 0,

    update(points){

        bestScore.currentHighestScore = bestScore.getLocalStorage()
        
        if(points > bestScore.currentHighestScore){
            bestScore.currentHighestScore = points
            bestScore.dateOfcurrentHighestScore = new Date().toLocaleDateString()
            bestScore.showPoints(bestScore.currentHighestScore, bestScore.dateOfcurrentHighestScore)
            bestScore.saveLocalStorage(bestScore.currentHighestScore)
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