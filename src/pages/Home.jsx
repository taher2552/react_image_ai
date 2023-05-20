import React , { useState, useEffect } from 'react';
import { Card, FormFields, Loader } from '../component';

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [allPost, setAllPost] = useState(null)

  return (
<section className='max-w-7xl mx-auto'>
<div>
    <h1 className='font-extrabold text-[#222328]'>The Community Showcase</h1>
</div>

</section>
  )
}

export default Home
