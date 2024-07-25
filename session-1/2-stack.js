// 2. In a previous exercise, we wrote a queue from scratch. For your homework, try implementing a stack from scratch. Whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). Methods we’ll need are push, pop,  and check. Make the push function accept an array as an input, where it only accepts the strings within that array. Name this file 2-stack.js. 

// ------------ START OF ACTUAL CODE ------------

class Stack {
    //create constructor with empty list
    constructor() {
        this.list = []
    }

    // push method
    push(item) {
        // check if item is a string
        if (typeof item === 'string') {
            this.list.push(item)
            console.log(`Added ${item} in list.`)
        }
        // check if item is an array
        else if (Array.isArray(item)) {
            // check if array (as item) is empty
            if (Array.isArray(item) && item.length === 0){
                console.error(`Error: Pushed array is null/empty.`)
            }
            // if array (as item) has contents
            else {
                item.forEach(element => {
                    // check if element of array (as item) is a string
                    if (typeof element === 'string') {
                        this.list.push(element)
                        console.log(`Added ${element} from pushed array in list.`)
                    }
                    // check if element of array (as item) is an array and shouldn't be accepted
                    else if (Array.isArray(element)) {
                        console.error(`Error: Array element from pushed array is not a string value and is not accepted.`)
                    }
                    // if other types of data are present in the array (as item), they are not acccepted
                    else {
                        console.error(`Error: ${element} from pushed array is not a string value.`)
                    }
                })
            }
        } // other types of data won't be accepted
        else {
            console.error(`Error: ${item} is not a string value.`)
        }
    }

    // pop method
    pop() {
        // check if the current stack is empty
        if (this.list.length === 0) {
            console.log('Stack is currently empty.')
            return null
        }
        // if stack is not empty, remove most recent item added
        else {
            const removedItem = this.list.pop()
            console.log(`Removed ${removedItem} from list.`)
            return removedItem
        }
    }

    // check the current stack
    check() {
        console.log(this.list)
    }
}

// instantiate new stack and push/pop various items and check
const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.push('Fish') // Added Fish as another example
stack.check()       // [“Milk”, “Eggs”, "Fish"]
stack.pop()
stack.check()       // [“Milk”, "Eggs"]
stack.pop()
stack.check()       // [“Milk”]
stack.pop()
stack.check()       // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()       // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()       // [“Cellphone”]
stack.pop()
stack.check()       // []
stack.pop()         // “Stack is currently empty.”
stack.push(1)       // Attempt to add whole number
stack.push(1.5)     // Attempt to add decimal
stack.push([])      // Attempt to add empty array

// ------------ END OF ACTUAL CODE ------------