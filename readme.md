# No Neighbors the Same

## Objective

Write a function which takes a string as an argument and returns an array of items without any elements with the same value next to each other AND preserving the original order of elements.

For example, if given the following string 
`var myInitials = 'EEEMMMMKKKKKK'`
the function will return the array
`['E', 'M', 'K']`

The string
`var superBowlChamps = 'EEEEAAAAGGGGLLLLLEEESSSS'`
will return `['E', 'A', 'G', 'L', 'E', 'S']`

And the string
`var seventhGradeYearbook = 'LyLaaaaAAAASSSssss'`
will return
`['L', 'y', 'L', 'a', 'A', 'S', 's']`

## Bonus

Update the function to run if the argument is an array, as well as a string. If given the array
`var alphabetSoup = ['A', 'A', 'B', 'C', 'C', 'C', 'D', 'D', 'E', 'E', 'E']`
will return
`['A', 'B', 'C', 'D', 'E']`