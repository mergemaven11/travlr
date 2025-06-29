# Travlr Getaways - Customer-Facing Website

This is the front-end portion of the **Travlr Getaways** full-stack web application. It is built using the **Express.js** framework with **Handlebars (HBS)** templating engine, following the **MVC architecture pattern**.

## 📁 Project Structure

```
travlr/
├── app.js # Express app entry point
├── package.json # Project dependencies
├── /static # Static assets (CSS, images, etc.)
│ ├── /css
│ │ └── style.css
│ └── /images
├── /app
│ ├── /controllers # Route logic
│ │ └── main.js
│ ├── /routes # Route definitions
│ │ └── index.js
│ └── /views # HBS views and layouts
│ ├── /layouts
│ │ └── main.hbs
│ ├── index.hbs
│ ├── about.hbs
│ ├── contact.hbs
│ ├── meals.hbs
│ ├── news.hbs
│ ├── rooms.hbs
│ └── travel.hbs
```

### Install Dependencies

```bash
npm install
```

### Run app

```
node run dev
```

### API Routes

- http://localhost:3000
- http://localhost:3000/api/trips
- http://localhost:3000/api/trips/GALR210214


## 👤 Author

**Tobias Scott**  
[Portfolio](https://tcs-portfolio.netlify.app/)
[GitHub](https://github.com/mergemaven11)  
[LinkedIn](https://www.linkedin.com/in/tobias-scott-he-him-b3572751/)

--
# Module 8

## Travlr 

At the beginning of the course, I created the foundation of a full stack web application using Node.js and Express. The first task was to get a working shell of the Travlr Getaways customer-facing site running. I set up the Express server, organized the folder structure, and served static HTML content to the browser. This helped me understand the client-server relationship and got me comfortable working with Express and routing content. From there, I built on that foundation by bringing in more dynamic frontend behavior and backend logic.

As the project progressed, I experimented with different frontend methods, starting with simple HTML and JavaScript and then moving to a single-page application (SPA) structure using Angular. Compared to serving static content with Express, the SPA provided a much more fluid user experience. Pages didn’t have to reload, and everything felt more responsive and interactive. It was a clear example of how frontend technologies have evolved to meet user expectations.

MongoDB was the backend database because of how flexible and easy it is to use with JavaScript. Its NoSQL structure let me store documents in a way that matched the data my app was working with—without needing to set up rigid tables or schemas. Plus, the fact that data is stored in JSON-like format made it simple to pass between the frontend and backend.

JSON played a major role in tying everything together. While it looks like JavaScript, JSON is just a data format—it can’t run code. But it allowed my frontend and backend to communicate smoothly. Any time I sent or received data from the server, JSON was the format. That consistency made development much easier.

During development, I made several improvements by refactoring code. For example, I noticed some repeated logic in my Angular components, so I created reusable components and services. This not only made my app more efficient but also easier to maintain and extend. It really highlighted the importance of clean, modular code.

Testing my endpoints involved working with GET, POST, PUT, and DELETE methods. Using Postman helped me verify that my routes were working properly. Once I added security features like user authentication and role restrictions, I had to make sure endpoints were protected and could only be accessed with valid tokens. This added a layer of complexity but also taught me the importance of secure API design in full stack applications.

Looking back, this course has helped me grow both technically and professionally. I’ve gained experience with key technologies like Node.js, Express, MongoDB, and Angular—and I now understand how they all work together. I’ve also built stronger debugging, testing, and refactoring skills. Most importantly, I feel more confident in my ability to take a project from concept to deployment, which is a big step forward in my journey toward becoming a full stack developer.
