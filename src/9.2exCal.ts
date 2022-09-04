//interface object for the result
  interface Result {
    periodLength: number;
    trainingDays: number;
    // success: boolean;
    rating: number;
    // ratingDescription: string;
    target: number;
    average: number;
  }

  //Sum of total exercise hours of the week
let dailyEx: number[] = [3, 0, 2, 4.5, 0, 3, 1]
const totalHours: number = dailyEx.reduce((total, hours) => total + hours, 0);

  const calculateExercises = (ex: number[], target: number): Result => {
   const periodLength = ex.length;
   const trainingDays = ex.reduce(
    (sum, currentDay) => sum + (currentDay > 0 ? 1 : 0),0
   );
   const average = totalHours / periodLength;
  //  
  //  const average = totalHours / periodLength;

  const rating = average >= target + 0.5 ? 3 : average >= target ? 2 : 1;

   return{
    periodLength,
    trainingDays,
    // success,
    rating,
    // ratingDescription,
    target,
    average
   }

  }
  console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))

  // const input: Array<number> = [];
  // for (let i = 3; i < process.argv.length; i++) {
  //   input.push(Number(process.argv[i]));
  // }
  
  // console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));
