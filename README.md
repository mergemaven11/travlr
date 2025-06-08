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


