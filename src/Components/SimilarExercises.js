import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizonatalScrollBar";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0px" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollbar data={targetMuscleExercises} />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length && (
          <HorizontalScrollbar data={targetMuscleExercises} />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
