"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
        {/* this error message is shown in the page.tsx  */}
        {/* The reset button will try again to reslove error */}
      {error.message} <button onClick={reset}>Try again</button>
    </div>
  );
}
