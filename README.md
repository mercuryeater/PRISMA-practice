# PRISMA PRACTICE

## Process

- **Creating the table persons:**

    I start by creating the table persons, so later I can fill it with the contacts throught POST requests. I create the model "persons" with an unique id that will be the PK and two other fields, name and phone_number. Then I execute `npx prisma migrate dev` to generate the model and leave the version made.

- **Adapting the POST request:**

    I followed the class and looked at the *REST* section of the Prisma documentation, where I adapted the POST request to my model/table, instead of usinf *find* I used *create*. I had some inconveniences when testing it because I changed the column name from *phone* to *phone_book* and the server wasn't updating it, when running `npx prisma studio` the column remained phone so the POST wasn't working, I read a couple of post about on the internet and figured out it was better to run `npx prisma migrate reset` to make the change in the column effective. After that it worked but kept breakig after using more than 10 digits as the phone number, I searched and 10 digits it's the usual limit for Integer type data, I leave it like that.

    While filling the persons with contacts I encountered various error with the Int type data, due to first: **being unable to have a 0 as the first number** and second: **having a limit for the phone number**, It's mandatory to think about the data type for this kind of things, maybe using a *Long* isntead of *Int* or having a string for the phone number...

    Also I added a Try Catch because everytime there was an error the server fell, with this at least continue working and prints the error.

    








## References and some other things:

- Encountered an error when migrating, solved it as it said here: https://github.com/prisma/prisma/issues/9184

- If there is an error then the whole server stops? 