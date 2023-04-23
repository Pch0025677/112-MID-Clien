import { useState, useEffect } from 'react';

// import axios from 'axios';
//import json_data from '../data/blogData2_xx';
// let api_url = `http://localhost:5002/api/card2_xx`;
// let api_url = `https://one112-sever-card-demo-43.onrender.com/api/card2_xx`;
import { supabase } from '../db/clientSupabse';

import Wrapper from '../assets/wrapper/Blogs_xx';

const BlogsSupabasePage_xx = () => {
  const [name, setName] = useState('楊凱名');
  const [id, setId] = useState('210410543');

  const [data, setData] = useState([]);
  // console.log('blog data', data);

  const fetchBlogDataFromSupabase = async () => {
    try {
        
    let { data, error } = await supabase.from('card_xx').select('*')

      console.log("data", data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }


  
  useEffect(() => {
    fetchBlogDataFromSupabase();
  }, []);
  
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>
            Fetch Blogs From Supabase -- {name} {id}
          </h2>
        </div>
        <div className='blogs-center2'>
          {data.map((item) => {
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

export default BlogsSupabasePage_xx;
