import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [queryType, setQueryType] = useState('')
    const [queryType2, setQueryType2] = useState('')
    const [msg, setMsg] = useState('')
    const [error, setError] = useState('')
    const [isChecked, setIsChecked] = useState(false)

    const navigate = useNavigate()
  
    function handleFormSubmit(e){
        console.log(isChecked);
      e.preventDefault()
      if(!firstName || !lastName || !email || !queryType || !isChecked){
        setError("Please fill in all fields")
        setTimeout(() => {
            setError('')
        },3000)
      }else{
        localStorage.setItem('user', JSON.stringify({firstName, lastName, email}))
        navigate('/dashboard')
      }

    }

  return (
    <div className='flex justify-center min-h-[100vh] items-center w-[] bg-[#E0F1E7]'>
        <form onSubmit={handleFormSubmit}>
          <div className='w-[350px] md:w-[450px] bg-white rounded-[12px] py-[30px] px-[40px]'>
            {
                error && <p className='rounded text-center bg-red-400 text-white mb-5 py-1'>{error}</p>
            }
          <div>
            <h1 className='text-[18px] font-[700]'>Contact Us</h1>
          </div>
          <div className='flex justify-between mt-[20px] text-[12px]'>
            <div className='flex gap-[4px]'>
            <p className='mb-[10px]'>First Name</p>
            <span className='text-red-500'>*</span>
            </div>
            <div className='flex gap-[4px]'>
            <p className='mb-[10px] text-left'>Last Name</p>
            <span className='text-red-500'>*</span>
            </div>
          </div>
          <div className='flex justify-between gap-5'>
            <label className='block'>
              <span className='sr-only'>Input your firstname</span>
              <input type="text" value={firstName} onChange={e => setFirstName(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4' />
            </label>
            <label className='block'>
              <span className='sr-only'>Input your lastname</span>
              <input type="text" value={lastName} onChange={e => setLastName(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4' />
            </label>
          </div>
          <div className='flex gap-[4px] items-center'>
            <p className='text-[12px] mt-[15px] mb-[10px] '>Email address</p>
            <span className='text-red-500 mt-[6px]'>*</span>
          </div>
          <div>
          <label className='block'>
              <span className='sr-only'>Input your email</span>
              <input type="text" value={email} onChange={e => setEmail(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4' />
            </label>
          </div>
          <div className='flex gap-[4px] mt-[10px] items-center'>
            <p className='text-[12px] mt-[15px] mb-[10px]'>Query Type</p>
            <span className='text-red-500 mt-[6px]'>*</span>
          </div>
          <div className='flex gap-5'>
          <label className='block'>
              <span className='sr-only'>Input your lastname</span>
              <input type="text" value={queryType} onChange={e => setQueryType(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4' />
            </label>
            <label className='block'>
              <span className='sr-only'>Input your lastname</span>
              <input type="text" value={queryType2} onChange={e => setQueryType2(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4' />
            </label>
          </div>
          <div className='text-[12px] mt-[15px]'>
            <p className='mb-[10px]'>Message</p>
          </div>
          <div>
          <label className='block'>
              <span className='sr-only'>Input your lastname</span>
              <textarea type="text" value={msg} onChange={e => setMsg(e.target.value) } className='pl-[6px] block w-full text-sm bg-white rounded-[6px] border-2 text-black py-2 px-4 resize-none' />
            </label>
          </div>
          <div className='py-[15px] text-[12px] items-center'>
            <label><input type="checkbox" onChange={() => setIsChecked(!isChecked)} /> I consent to being contacted by the team <span className='text-red-500'>*</span> </label>
          </div>
          <div>
            <button className='bg-[#0C7D69] text-white w-full py-[5px] rounded-[50px]'>Submit</button>
          </div>
          </div>
        </form>
    </div>
  )
}

export default SignUp
