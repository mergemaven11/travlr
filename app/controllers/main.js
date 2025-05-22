module.exports = {
  index: (req, res) => res.render('index', { title: 'Home' }),
  about: (req, res) => res.render('about', { title: 'About Us' }),
  contact: (req, res) => res.render('contact', { title: 'Contact Us' }),
  meals: (req, res) => res.render('meals', { title: 'Our Meals' }),
  news: (req, res) => res.render('news', { title: 'Latest News' }),
  rooms: (req, res) => res.render('rooms', { title: 'Our Rooms' }),
  travel: (req, res) => res.render('travel', { title: 'Travel Info' }),
};
