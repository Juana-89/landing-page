import mongoose from 'mongoose';

//Connection to the database in mongodb
(async () => {
    const db = await mongoose.connect('mongodb://localhost/images',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    console.log('conectadooooooo', db.connection.name)
}) ()