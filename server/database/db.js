import mongoose from "mongoose"



const Connection = async(username,password) => {
    const URL = `mongodb+srv://${username}:${password}@blog-app.5xmewny.mongodb.net/?retryWrites=true&w=majority`;

    try {
        
        await mongoose.connect(URL, { useNewUrlParser: true});
        console.log("Mongoose Database Connected...");
    } catch (error) {
        console.log("Error while connecting to database", error);
    }

}



export default Connection;