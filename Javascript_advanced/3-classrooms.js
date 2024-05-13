function createClassRoom(numbersOfStudents){
    function studentSeat(seat) {
        return () => {
            return seat
        }
    }
    let students = [];
    for(let i = 0;i <= numbersOfStudents;i++) {
        let seatNumber = i + 1;
        students.push(studentSeat(seatNumber));
        
    }
    return students;
}
