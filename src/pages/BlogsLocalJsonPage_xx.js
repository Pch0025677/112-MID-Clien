import { useState } from 'react';
import json_data from '../data/blogData2_xx';
import Wrapper from '../assets/wrapper/Blogs_xx';
import { useDemoContext_xx } from '../context/DemoContext_xx';

const BlogsLocalJsonPage_xx = () => {
  // const [name, setName] = useState('楊凱名');
  // const [id, setId] = useState('210410543');
  // const [data, setData] = useState(json_data);
  // console.log('blog data', data);
  const { pName, pId, blogs} = useDemoContext_xx();
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Fetch Blogs From Local Json --
          </h2>
          <h3> {pName} {pId}</h3>
        </div>
        <div className='blogs-center2'>
          {blogs.map((item) => {
            const { id, img, remote_img, category, title, desc } = item;
            return (
              <article key={id} className='blog'>
                <img src={img} alt={title} className='img blog-img' />
                <div className='blog-content'>
                  <span>
                    {category} <i className='fa-solid fa-mug-saucer'></i>
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href='#'>read more</a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogsLocalJsonPage_xx;
