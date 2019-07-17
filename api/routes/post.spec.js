// const db = require("../../data/dbConfig");
// const Post = require("./postModel");

// describe("post db methods", () => {
//   const testPost = {
//     userId: 1,
//     imageURL: "some link",
//     description: "some description",
//     location: "some location",
//     theme: "some theme",
//     pricing: "some pricing",
//     features: "some features",
//     vendors: "some vendors"
//   };

//   describe("insert method", () => {
//     beforeEach(() => {
//       return db("posts").truncate();
//     });

//     it("should insert a new post into the database", async () => {
//       const newPost = await Post.insert(testPost);
//       expect(newPost.status).toBe(401);
//     });
//   });
// });
