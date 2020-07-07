// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


//Helper functions:::::
function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.

//KATA 1- filter()done
const isActive = users.filter(user => user.isActive === true)

printKata(1, isActive)
console.log(isActive)

//KATA 2- map() done
const email = users.map(user => user.email)

printKata(2, email)
console.log(email)

//KATA 3- some() done
const companyOf = users.some(user => user.company === "OVATION")
printKata(3, companyOf)
console.log(companyOf)

//KATA 4- find()- done
const ageOver38 = users.find(user => user.age > 38)
printKata(4, ageOver38)
console.log(ageOver38)

//KATA 5- filter() and find()

const age = users.filter(user => user.age > 38)


const actives = age.find(user => user.isActive === true)

printKata(5, actives)
console.log(age, actives)

//KATA 6- filter and map() done
const zencoBalance = users
    .filter(user => user.company === "ZENCO")
    .map(user => user.balance)

printKata(6, zencoBalance)
console.log("ZENCO's Balance = ", zencoBalance)











//uggggggggggggggggggggggg

//KATA 7- filter, includes, map. 
// Show the age of every user with the 'Fugiat' tag


const tags = users.map(user => user.tags)
       
const fug = tags
    .includes(user => tags, 'fugiat')
    .filter(user => tags[index])
// const tags = users.filter(user => users.tags === "fugiat")
//    printKata(7, tagTarget)
//    console.log(tagTarget)
   printKata(7, tags,)
   console.log(tags,)
