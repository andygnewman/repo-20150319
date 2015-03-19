##Approach to solving the problem
=================================

###My overall approach to solving this problem was to;

- parse the selector text to find tags, classes and id's
- return the html objects that matched each of those
- concatenate the results into a single array of objects
- work out which objects were common to all individual selectors used
- those that were common were then transferred into the final elements array

### What I found most challenging about this task;

- understanding the behaviour of HTML objects vs arrays in JavaScript
- this led to having to do some manipulations on the objects to get them into
a common format that could be worked with

### Areas I recognise for improvement in this answer;

- There is likely to be a neater solution for parsing the selector text into id,
class and tags than I have used
