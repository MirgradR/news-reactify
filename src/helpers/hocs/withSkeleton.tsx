import React from "react";
import Skeleton from "../../components/Skeleton/Skeleton";

type SkeletonType = "banner" | "item";
type SkeletonDirection = "row" | "column";

interface WithSkeletonProps {
  isLoading: boolean;
}

function withSkeleton<P extends object>(
  Component: React.ComponentType<P>,
  type: SkeletonType,
  count: number,
  direction?: SkeletonDirection
): React.FC<P & WithSkeletonProps> {
  return function WithSkeleton(props: P & WithSkeletonProps) {
    const { isLoading, ...restProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }

    return <Component {...(restProps as P)} />;
  };
}

export default withSkeleton;
