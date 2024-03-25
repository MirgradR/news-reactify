import { useDispatch } from "react-redux";
// eslint-disable-next-line no-restricted-imports
import { AppDispatch } from "@/app/appStore";

export const useAppDispatch = useDispatch<AppDispatch>;
