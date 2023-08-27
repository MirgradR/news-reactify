import Skeleton from "../../components/Skeleton/Skeleton";

export const withSkeleton = (Component, type, count) => {
  return function WithSkeleton(props) {
    const { isLoading, ...rest } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }
    return <Component {...rest} />;
  };
};
