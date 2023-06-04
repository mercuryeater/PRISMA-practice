# PRISMA PRACTICE

## Process

- **Creating the table persons:**

  I start by creating the table persons, so later I can fill it with the contacts throught POST requests. I create the model "persons" with an unique id that will be the PK and two other fields, name and phone_number. Then I execute `npx prisma migrate dev` to generate the model and leave the version made.

- **Adapting the POST method:**

  I followed the class and looked at the _REST_ section of the Prisma documentation, where I adapted the POST request to my model/table, instead of usinf _find_ I used _create_. I had some inconveniences when testing it because I changed the column name from _phone_ to _phone_book_ and the server wasn't updating it, when running `npx prisma studio` the column remained phone so the POST wasn't working, I read a couple of post about on the internet and figured out it was better to run `npx prisma migrate reset` to make the change in the column effective. After that it worked but kept breakig after using more than 10 digits as the phone number, I searched and 10 digits it's the usual limit for Integer type data, I leave it like that.

  While filling the persons with contacts I encountered various error with the Int type data, due to first: **being unable to have a 0 as the first number** and second: **having a limit for the phone number**, It's mandatory to think about the data type for this kind of things, maybe using a _Long_ isntead of _Int_ or having a string for the phone number...

  Also I added a Try Catch because everytime there was an error the server fell, with this at least continue working and prints the error.

- **Creating the /info path:**

  Honestly I copied what I have made in the previous exercise, however I changed the way of retrieving the data assigned to the var _persons_ with `const persons = await prisma.persons.findMany();`, then the length of persons it's assigned to a variable. And at the same time another variable is created to show the current time with `new Date();`

- **GET method by Id:**

  Really similar to the normal GET but with a condition _WHERE_, first the path is written as you can get the id in the params: `/api/persons/:id`, then inside the callback you assigned the _:id_ to a variable with `const id = req.params.id`. Then you search/bring the person with the same `prisma.persons.findMany()` method,. however inside it a WHERE clause is created, so what matches the id declared before will be returned (in a certain way). And finally if the _person_ is empty (meaning it does not exist that id) return _status 404_ and the message _person not found_.

  However if there's a match it returns the person.

- **DELETE method:**

  Similar to the post I used the `req.params.id` to acquire the id and instead of using a `findMany()` method I changed it for `delete()`, and inside it a WHERE clause is created, so what matches the id declared before. The code used:

  ```
  await prisma.persons.delete({
    where: {
      id: id,
    },
  });
  ```

  Also added a console.log for the terminal stating wich id had been deleted, and finally return status 204 because we are not returning any content, the same with `.end()` to end the response process.

- **Error handling in the POST method:**

  I copied and adapted the previous exercise error handling to this method, again assigning the data to the prisma object, so it can compared for example whats on the table/model right now so it knows if a name already exists.

  Again for the use of Int it was a bit weird to state that it is empty, because if the body of the POST it's empty the Prisma returns an error by default.

## References and some other things:

- Encountered an error when migrating, solved it as it said here: https://github.com/prisma/prisma/issues/9184

- If there is an error then the whole server stops, better to use _Try Catchs_ so this does not happen.
