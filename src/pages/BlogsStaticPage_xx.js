import { useState } from 'react';
import Wrapper from '../assets/wrapper/Blogs_xx';
import { useDemoContext_xx } from '../context/DemoContext_xx';

const BlogsStaticPage_xx = () => {
  // const [name, setName] = useState('楊凱名');
  // const [id, setId] = useState('210410543');
  const { pName, pId, blogs} = useDemoContext_xx();
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            {pName} {pId}
          </h2>
        </div>
        <div className='blogs-center2'>
          <article className='blog'>
            <img
              src='/images/photo-1.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man Peter Parker</h3>
              <p>In Earth-616</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-2.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Lady <i className='fa-solid fa-globe'></i>
              </span>
              <h3>Spider-Gawn Gawn Stacty</h3>
              <p>In Earth-65</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-3.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man Miles Morales</h3>
              <p>In Earth-1610</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-4.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man 2099 Miguel O'Hara</h3>
              <p>In Earth-928</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-5.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>The Amazing Spider-Man Peter Benjamin Parker</h3>
              <p>In Earth-166100</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-6.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-globe'></i>
              </span>
              <h3>The Amazing Spider-Man Tobey Maguire</h3>
              <p>In Earth-166101</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-7.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man PS5 Peter Parker</h3>
              <p>In Earth-1048</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-8.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man Peter Parker Venom</h3>
              <p>In Earth-616</p>
              <a href='#'>read more</a>
            </div>
          </article>
          <article className='blog'>
            <img
              src='/images/photo-9.jpg'
              alt='Coffee photo'
              className='img blog-img'
            />
            <div className='blog-content'>
              <span>
              Spider-Man <i className='fa-solid fa-mug-saucer'></i>
              </span>
              <h3>Spider-Man Peter Parker MKII</h3>
              <p>In Earth-616</p>
              <a href='#'>read more</a>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogsStaticPage_xx;
