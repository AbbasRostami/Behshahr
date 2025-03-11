const PageSkeleton = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6 p-4">
      <div className="skeleton h-10 w-1/3 bg-gray-200 animate-pulse rounded"></div>
      <div className="skeleton h-10 w-2/3 bg-gray-200 animate-pulse rounded"></div>
      <div className="skeleton h-64 w-full bg-gray-200 animate-pulse rounded"></div>
      <div className="skeleton h-10 w-1/4 bg-gray-200 animate-pulse rounded"></div>
    </div>
  );
};

export default PageSkeleton;
