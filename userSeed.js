const mongoose = require('mongoose');
const User = require('./models/user'); // Make sure the path matches your project structure

// Connect to MongoDB
mongoose.connect('mongodb+srv://baha12:zJVkh42Hb8CsNVqE@project-spider.uo6wr.mongodb.net/?retryWrites=true&w=majority&appName=project-spider');


// Function to seed the database with a user
async function seedUser() {
  try {
    // Create a new user instance
    const user = new User({ username: 'zhibet' });

    // Set the password for the user (passport-local-mongoose handles password hashing)
    await User.register(user, 'zhibet23'); // Replace 'password123' with the desired password

    console.log('User seeded successfully!');
  } catch (err) {
    console.error('Error seeding user:', err);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
}

// Run the seed function
seedUser();
