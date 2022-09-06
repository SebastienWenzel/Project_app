//invoque le router directement pour éviter de stocker expres dans un étape intermédiaire
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home');
})

module.exports = router;