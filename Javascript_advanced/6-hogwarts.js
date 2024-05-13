function studentHogwarts() {
    let _privateScore = 0;
    let _name = null;
    
    //Private method
    function _changeScoreBy(points) {
        return () => {
            if(points) {
                return _privateScore += points
            }
            return _privateScore -= points;
        };
    }
    
    return () => {
        return {
            setName (newName) {
                return _name = newName;
            },
            rewardStudent() {
                return _changeScoreBy(1)
            },
            penalizeStudent() {
                return _changeScoreBy(-1)
            },
            getScore () {
                return `${_name}: ${_privateScore}`
            }
        }
    }
}


// Hary data
let harry = studentHogwarts();
console.log(harry());
harry().setName('Harry')
harry().rewardStudent()()
harry().rewardStudent()()
harry().rewardStudent()()
harry().rewardStudent()()
let harryResult = harry().getScore()
console.log(harryResult);
// draco data 
let draco = studentHogwarts();
draco().setName('draco')
draco().rewardStudent()()
draco().penalizeStudent()()
draco().penalizeStudent()()
draco().penalizeStudent()()
let dracoResult = draco().getScore()
console.log(dracoResult);
