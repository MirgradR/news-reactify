import { ComponentType } from "react";
import { Skeleton } from "./Skeleton";
import { DirectionType, SkeletonType } from "./Skeleton.types";

interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

export function withSkeleton<P extends object>(
  Component: ComponentType<P>,
  count?: number
) {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, type, direction = "column", ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component type={type} {...(restProps as P)} />;
  };
}
