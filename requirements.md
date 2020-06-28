# Software Requirements

As a final project for 201d, and as a collaborative effort between 5 students, `this.md` will outline what we have learned and apply it into a single repository called Play&Learn.

`this.md` is an attempt at producing an edtech type of product, with an aim towards children of varying interests and skill levels. A good level of collaboration that will be expressed in this work, along with the interest in developing edtech is what we aim to achieve.

## In of scope
The app would allow users to enter their credentials for the purpose of of score keeping, and an admin role to add questions when needed. Once they enter, they would be greeted by a daily reminder to do some tasks, including quiz answering, daily journal and check out his scores.

## Out of scope
The app is not a fully fledged app, but a proof of concept of edtech, what it cannot do is:

- have multiple ways of testing with max of two, multiple choice and another type.
- transfer data since no databases are implemented
- do meaningful popups and achievement animations - until we have some spare time to learn about doing it.
- protect against inspect elements and edits with basic security measures.
- be mobile friendly for now.

## Functional Requirements
Includes all requirements to make the app up and running as intended. such: 

- A separate admin/user functionality to add/use questions 
- A results interface to show data in a meaningful way
- Daily Learning Journal to add thoughts and such
- Wrapping all data around storage and login authentication for different users.

### The basic dataflow 
It starts with admin login >>> input of questions >>> into local storage >>> user login >>> get questions >>> store result >>> display them

In addition to a separate learning journal where the user has input >>> storage >>> display in a useful manner.

## Non-Functional Requirements
Does not include most measures as it is out of scope of study at the moment.
