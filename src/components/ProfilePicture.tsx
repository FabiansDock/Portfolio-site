import { motion } from "framer-motion";
import image from "../assets/profilePicture.jpeg";
import { Box } from "@chakra-ui/react";

const ProfilePicture = () => {
  return (
    <Box margin={6}>
      <motion.div
        style={{
          width: 300,
          height: 300,
          borderRadius: "50%",
          overflow: "hidden",
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image}
          alt="Profile picture"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </motion.div>
    </Box>
  );
};

export default ProfilePicture;