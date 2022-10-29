import { useContext } from "react";
import { WorkoutsContext } from "../context/WorkoutContext";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if(!context) {
        throw Error('Must be used inside a workoutocntext provider')
    }

    return context
}