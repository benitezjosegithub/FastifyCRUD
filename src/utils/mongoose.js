const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/local');
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));
mongoose
  .connect("mongodb://0.0.0.0:27017/fastifycrud")
  .then(() => console.log("Mongodb conencted"))
  .catch((err) => console.log(err));