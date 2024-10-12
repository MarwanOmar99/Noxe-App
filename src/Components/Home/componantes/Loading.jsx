import React from "react";

export default function Loading() {
  return (
    <div className="row spin">
      <div>
        <h1>Loading</h1>
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}
