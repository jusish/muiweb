import { Box } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box
      flexGrow={4}
      justifyContent={"center"}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
    >
      <Post
        image={"international-cat-day-1200x834.jpg"}
        title="Cat"
        body="The cat, commonly referred to as the domestic cat or house cat, is the only domesticated species in the family Felidae. Recent advances in archaeology and genetics have shown that the domestication of the cat occurred in the Near East around 7500 BC."
      />
      <Post
        image={"/triangle_background-9df4fa2e10f0e294779511e99083c2bc.jpg"}
        title="Background"
        body="The linear-gradient() CSS function creates an image consisting of a progressive transition between two or more colors along a straight line."
      />
      <Post
        image={"/two-male-lions-Kenya-520.jpg"}
        title="Lion"
        body="The lion is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane."
      />
      <Post
        image={"/World-Lizard-Day-1200x834.jpg"}
        title="Lizard"
        body="Lizard is the common name used for all squamate reptiles other than snakes, encompassing over 7,000 species, ranging across all continents except Antarctica, as well as most oceanic island chains. The grouping is paraphyletic as some lizards are more closely related to snakes than they are to other lizards."
      />
    </Box>
  );
};

export default Feed;
