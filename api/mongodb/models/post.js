import { Mongoose } from "mongoose";

const Post = new Mongoose.Schema({
    name: { type: String, required: true },
    prompt: { type: String, required: true },
    photo: { type: String, required: true }
});
const PostSchema = Mongoose.model('Post', Post);
export default PostSchema