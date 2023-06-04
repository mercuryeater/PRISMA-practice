# PRISMA PRACTICE

## Process

- **Creating the table persons:**

    I start by creating the table persons, so later I can fill it with the contacts throught POST requests. I create the model "persons" with an unique id that will be the PK and two other fields, name and phone_number. Then I execute `npx prisma migrate dev` to generate the model and leave the version made.

- **Adapting the POST request:**