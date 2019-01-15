// PROMPT

var myInitials = 'EEEMMMMKKKKKK'
var superBowlChamps = 'EEEEAAAAGGGGLLLLLEEESSSS'
var seventhGradeYearbook = 'LyLaaaaAAAASSSssss'
var alphabetSoup = ['A', 'A', 'B', 'C', 'C', 'C', 'D', 'D', 'E', 'E', 'E']

function noNeighborsTheSame (parameter) {
  let array = []
  let result = []
  if (typeof parameter === 'string') {
    array = parameter.split('')
  } else {
    array = parameter
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      result.push(array[i])
    }
  }
  console.log(result)
}
noNeighborsTheSame(myInitials)
noNeighborsTheSame(superBowlChamps)
noNeighborsTheSame(seventhGradeYearbook)
noNeighborsTheSame(alphabetSoup)