import React from 'react';

function StoriesPage() {
  const tempStories = [
    {
      title: "Alice in Wonderland",
      author: "Author Here",
      bookCover: ""
    },
    {
      title: "The Little Prince",
      author: "Author Here",
      bookCover: ""
    },
    {
      title: "Cinderella",
      author: "Author Here",
      bookCover: ""
    },
    {
      title: "Alice in Wonderland",
      author: "Author Here",
      bookCover: ""
    },
  ];

  return (
    <>
    <div>
      THIS IS THE ** STORIES ** PAGE
    </div><div className="grid">
        {tempStories.map((story) => (
          <div
            className="card border-primary mb-3"
            style={{ maxWidth: '20rem' }}
            key={story}
          >
            <div className="card-header">{story.title}</div>
            <div className="card-body">
              <h4 className="card-title">{story.author}</h4>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" class="d-block user-select-none" width="100%" height="200" aria-label="Placeholder: Image cap" focusable="false" role="img" preserveAspectRatio="xMidYMid slice" viewBox="0 0 318 180" style="font-size:1.125rem;text-anchor:middle">
              <rect width="100%" height="100%" fill="#868e96"></rect>
              <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Book Cover</text>
            </svg>
          </div>
        ))}
      </div>
      </>

  );
}

export default StoriesPage;
