import { useSelector, type TypedUseSelectorHook } from "react-redux";
// eslint-disable-next-line no-restricted-imports
import { RootState } from "@/app/appStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
