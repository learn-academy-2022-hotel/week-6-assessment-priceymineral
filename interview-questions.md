# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: Modifications to a model can be made via the use of migrations. A specific migration to add a column in the students table indicating the cohort they belong to needs to be made. The name of this foreign key should be cohort_id by convention. Once the migration is created, the rails db:migrate command needs to be ran to ensure the change takes place. 

Researched answer: The has_many :students statement has to be used in the class Cohort < ActiveRecord::Base and belongs_to :cohort goes in the class Student < ActiveRecord::Base.

2. Which RESTful routes must always be passed params? Why?

Your answer: SHOW (READ), UPDATE, DELETE. All these routes require information on the record that is being requested in order for it to be retrieved.

Researched answer: SHOW, EDIT, UPDATE, DESTROY all need an id parameter to identify which record will be handled accordingly. 

3. Name three rails generator commands. What is created by each?

Your answer: rails generate Model: creates a model file for the database. rails generate Controller: creates the controller file, rails generate Migration: creates a migration file for changes to the database structure. rails generate Resource: performs both the Model and Controller actions.

Researched answer: -rails generate Model- creates a migration file with a class (named whatever was passed after ...Model) that represents data that will go in a database table. running rails db:migrate will create the schema file for that model. 
-rails generate Controller- will create a controller file for the model specified where the specific actions for each of the RESTful routes are stated.
-rails generate Migration- is used to make changes to a database schema. Creates a file with the specific changes made (specificed in the command).
(sidenote: 'rails generate' alone    will output a list of all available generators and information about global options.
rails generate GENERATOR --help will list the options that can be passed to the specified generator.)

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students => index

action: "POST" location: /students => create

action: "GET" location: /students/new => new

action: "GET" location: /students/2 => show

action: "GET" location: /students/2/edit => edit

action: "PATCH" location: /students/2 => update

action: "DELETE" location: /students/2 => destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

-1- As a user, I can see a landing page with To Do in the header.
-2- As a user, I can see a list of my to do's in the landing page.
-3- As a user, I can click on a to do to navigate to a details page (title, details, date added, deadline).
-4- As a user, I can return to my list of to do's from the single to do view.
-5- As a user, I can delete the to do I am currently on and it will automatically redirect me to the landing page. 
-6- As a user, on the landing page I can add a to do. 
-7- As a user, I can edit a to do. 
-8- To do's title cannot be nil.
-9- As a user, I can sort my to do's by deadline (soonest, latest) as well as title (alphabetical).
-10- Each page has a pleasant demeanor.