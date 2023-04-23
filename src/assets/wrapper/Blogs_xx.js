import styled from "styled-components";

const Wrapper = styled.div`
.blogs {
  --primary: #645cff;
  --primary-dark: #3c3799;
  --grey-light: #f1f5f9;
  --grey: #64748b;
  --grey-dark: #0f172a;
  --letter-spacing: 2px;
  --fluid-width: 90vw;
  --max-width: 1170px;
  --border-radius: 0.15rem;
  padding: 5rem 0;

  .section-title {
    text-align: center;
    text-transform: capitalize;
    margin: 2rem;
    letter-spacing: 2px;
  }

  .blogs-center {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    /* max-width: 500px; */
  }

  @media screen and (min-width: 450px) {
    .blogs-center {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 768px) {
    .blogs-center {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .blogs-center {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .blogs-center2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    gap: 2rem;
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    /* max-width: 500px; */
  }

  .blog {
    background-color: white;
    padding: 0.75rem;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out all;

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }

    .img {
      width: 100%;
      height: 12rem;
      display: block;
      object-fit: cover;
    }

    &-img {
      border-radius: var(--border-radius);
      margin-bottom: 0.5rem;
    }

    &-content {
      padding-bottom: 1rem;
    }

    .blog-content span {
      text-transform: uppercase;
      color: var(--primary);
      letter-spacing: var(--letter-spacing);
      font-weight: 500;
    }

    .blog-content h3 {
      text-transform: capitalize;
      letter-spacing: var(--letter-spacing);
      margin: 0.5rem 0;
    }

    .blog-content p {
      color: var(--grey);
      margin-bottom: 0.5rem;
    }

    .blog-content a {
      text-transform: capitalize;
      color: var(--primary-dark);
      letter-spacing: 1px;
    }
  }
}
`

export default Wrapper;