# Project Documentation

## Technologies Used

This project utilizes **Drizzle**, **PostgreSQL**, and **Express**. The choice of these technologies is due to the project's small size, making them lightweight and suitable for this type of application.

## Getting Started

To run the project, follow these steps:

1. **Install Dependencies**
   Run the following command to install the required dependencies:
   npm install

2. **Create .env File**
   Copy the `.env.example` file to `.env` and update the environment variables as needed.

3. **Generate Migrations**
   Execute the following command to generate migrations for the database:
   npm run db:generate

4. **Run Migrations**
   Next, run the migrations with this command:
   npm run db:push

5. **Drizzle Studio**
   Optionally, you can use Drizzle Studio to verify that everything is correct in the database.
   npm run studio

6. **Start the Project**
   Finally, you can start the project with:
   npm run build
   npm run start

## API Endpoints

- **GET /api/articles**
- Retrieve all articles.

- **GET /api/articles/:id**
- Retrieve a specific article by ID.

- **POST /api/articles**
- Create a new article.

- **PUT /api/articles/:id**
- Update an existing article by ID.

- **DELETE /api/articles/:id**
- Delete an article by ID.

## Swagger Documentation

You can access the API documentation using Swagger at the following endpoint:
http://localhost:<port>/api-docs

Replace `<port>` with the port number on which your Express application is running.
