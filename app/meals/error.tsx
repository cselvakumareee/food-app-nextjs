"use client";
export default function MealsErrorPage({ error }) {
  return (
    <>
      <h1 className="error">Failed to load meals. Please try again later.</h1>
      <p>{error.message}</p>
    </>
  );
}
