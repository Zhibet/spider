const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://baha12:zJVkh42Hb8CsNVqE@project-spider.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=project-spider')
    .then(() => {
        console.log('MongoDB connected');
        
        const cardSchema = new mongoose.Schema({
            img: { type: String },
            title: { type: String },
            description: { type: String }
        });

        const cardModel = mongoose.model('Card', cardSchema);

        const sampleCards = [
            {
                img: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/08/how-strong-is-spider-man-in-comics-movies-and-beyond.jpg',
                title: 'Card Title 1',
                description: 'Description for Card 1'
            },
            {
                img: 'https://pyxis.nymag.com/v1/imgs/903/7c8/56338589748e89ab9832f673c2ee205acb-19-spider-man-casting.2x.rsocial.w600.jpg',
                title: 'Card Title 2',
                description: 'Description for Card 2'
            },
            {
                img: 'https://i.ytimg.com/vi/3dA55-uDkUw/maxresdefault.jpg',
                title: 'Card Title 3',
                description: 'Description for Card 3'
            }
        ];

        // Delete existing cards before saving new seed data
        cardModel.deleteMany({})
            .then(() => {
                return cardModel.insertMany(sampleCards);
            })
            .then(() => {
                console.log('The seed data is saved');
                mongoose.connection.close(); // Close the connection when done
            })
            .catch((error) => {
                console.error('Error saving seed data:', error);
            });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
