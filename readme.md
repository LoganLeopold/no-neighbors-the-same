# No Neighbors the Same

## Objective

Write a function which takes a string as an argument and returns an array of items without any elements with the same value next to each other AND preserving the original order of elements.

For example, the following strings will return the subsequent arrays.
```
var myInitials = 'EEEMMMMKKKKKK'
// ['E', 'M', 'K']

var superBowlChamps = 'EEEEAAAAGGGGLLLLLEEESSSS'
// ['E', 'A', 'G', 'L', 'E', 'S']

var seventhGradeYearbook = 'LyLaaaaAAAASSSssss'
['L', 'y', 'L', 'a', 'A', 'S', 's']

```

## Bonus

Update the function to run if the argument is an array, as well as a string. If given the following array, the subsequent array will be returned.
```
var alphabetSoup = ['A', 'A', 'B', 'C', 'C', 'C', 'D', 'D', 'E', 'E', 'E']
// ['A', 'B', 'C', 'D', 'E']
```
