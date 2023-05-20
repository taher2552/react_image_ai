import React , { useState, useEffect } from 'react';
import { Card, FormFields, Loader } from '../component';

const RenderCards= ({data, title}) =>{
if(data?.length > 0) {
    return data.map(post=><Card key={post.id} {...post}></Card>)
}

return (
    <h2 className='mt-5 font-bold text-[#6469ff] uppercase text-xl'>{title}</h2>
)
}

const Home = () => {

    const [loading, setLoading] = useState(false);
    const [allPost, setAllPost] = useState(null);
    const [searchText, setSearchText] = useState('');

  return (
<section className='max-w-7xl mx-auto'>
<div>
    <h1 className='font-extrabold text-[#222328] text-[32px]'>The Community Showcase</h1>
    <p className='mt-2 max-w[500px]  text-[#666e75] text-[18px]'>Lets dive into a Collection of Creative and Visually Stunning Images</p>
</div>

<div className='mt-16'>
    <FormFields/>
</div>

<div className="mt-10">
    {
        loading ? (<div className='flex justify-center items-center'><Loader /></div>) 
        : (<>

          {searchText && (
            <h2 className='font-medium text-[#666e75] text-xl mb-3'>Showing results for <span className='text-[#222328]'>{searchText}</span></h2>
          )}

        </>)

    }
</div>


<div className='grid lg:grid-cols-4 sm::grid-cols-3 xs::grid-cols-2 grid-cols-1 gap-3'>
{searchText ?

<RenderCards 
    data={[]}
    title="no search results"
/> : (
    <RenderCards 
    data={[]}
    title="no Post found"
/>
)

}

</div>

</section>
  )
}

export default Home
