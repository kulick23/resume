import { useMemo } from "react";
import workExperienceStore from "../Stores/experienceStore";

export function useSortedExperiences() {
  return useMemo(
    () => [...workExperienceStore.experiences].sort((a, b) => a.id - b.id),
    [workExperienceStore.experiences]
  );
}