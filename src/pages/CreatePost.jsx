import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets';
import { FormFields, Loader } from '../component';
import { getRandomPrompt } from '../utils';

const CreatePost = () => {
    const navigate = useNavigate();
    const [form,setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })

    const [generatingImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {

    }
    const handleChange = (e) => {

    }
    const handleSurpriseMe = () => {

    }

  return (
    <section className='max-w-7xl mx-auto'>

      <div>
    <h1 className='font-extrabold text-[#222328] text-[32px]'>Create</h1>
    <p className='mt-2 max-w[500px]  text-[#666e75] text-[18px]'>Lets dive into a Collection of Creative and Visually Stunning Images and Share it with Community</p>
</div>


<form action="" onSubmit={handleSubmit} className='mt-16 max-w-3xl'>
 <div className="flex flex-col gap-5">
    <FormFields
        labelName="your name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={form.name}
        handleChange={handleChange}
    />
    <FormFields
        labelName="your name"
        type="text"
        name="name"
        placeholder="John Doe"
        value={form.name}
        handleChange={handleChange}
    />
    <FormFields
        labelName="prompt"
        type="text"
        name="prompt"
        placeholder="a plush toy robot sitting at a yellow wall"
        value={form.prompt}
        handleChange={handleChange}
        isSurpriseMe
        handleSurpriseMe={handleSurpriseMe}
    />
 </div>
</form>

    </section>
  )
}

export default CreatePost
