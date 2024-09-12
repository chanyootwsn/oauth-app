import React from "react";

interface AuthorizeCallbackPageProps<T> {
  searchParams?: T;
}

export default function AuthorizeCallbackPage<T>({
  searchParams,
}: AuthorizeCallbackPageProps<T>) {
  return (
    <div className="text-2xl">
      <h1 className="mb-2">AuthorizeCallbackPage</h1>
      <p className="text-sm text-gray-600">searchParams</p>
      <p>{JSON.stringify(searchParams)}</p>
    </div>
  );
}
