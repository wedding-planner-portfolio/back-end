exports.seed = function(knex) {
  return knex("posts")
    .del()
    .then(function() {
      return knex("posts").insert([
        {
          id: 1,
          userId: 1,
          imageURL: "https://cdn141.picsart.com/299246752097201.jpg?c256x256",
          description: "This wedding rocked!",
          location: "Los Angeles, CA",
          theme: "Theme 01",
          pricing: "999.99",
          features: "Feature 01, Feature 02",
          vendors: "Food, Photo, Flowers"
        },
        {
          id: 2,
          userId: 2,
          imageURL:
            "http://www.kennington-hall.co.uk/images/home/news/kennington-hall-wedding-fayre-sml.png",
          description: "This wedding was the best!",
          location: "Austin, TX",
          theme: "Theme 02",
          pricing: "3999.99",
          features: "Feature 01, Feature 02",
          vendors: "Food, Photo, Flowers"
        }
      ]);
    });
};
