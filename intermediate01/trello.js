//To Do function

const toDoList = [];

toDoList.unshift('Walking')
toDoList.unshift('Eating')
toDoList.unshift('Sleeping')
toDoList.unshift('Jogging')

for (let index = 0; index < toDoList.length; index++) {
 console.log(`My toDoList at index ${index+ 1} is ${toDoList[index]}`)
    
}