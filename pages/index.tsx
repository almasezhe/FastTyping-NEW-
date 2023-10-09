import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Notiflix from 'notiflix';

const inter = Inter({ subsets: ['latin'] })
interface FormData{
  name:string
  surname:string
  classnum:string
  phoneNumber:string
  selectedLang:string
}

export default function Home() {
  const[form,setForm]= useState({name:'',surname:'',classnum:'',phoneNumber:'',selectedLang:''})

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(() => setForm({
        name:'',
        surname:'',
        classnum:'',
        phoneNumber:'',
        selectedLang:''
      }
        ))
    } catch (error) {
      console.log(error);
    }
  }



  const handleSubmit = async (data:FormData)=>{
    try{
      create(data)
    }
    catch(error){
      console.log(error)
    }
  }
  return (
<main>
<div className="text-center bg-white border-black border-2 border-t-0 pb-2">
  <div className=" ml-96 flex items-center justify-center" >
    <div className=" mr-96"> 
      <h1 className="text-4xl font-bold mb-2">FastTyping Tournament</h1>
      <div className='flex items-center justify-center'>
      <p className="text-gray-600 text-xl">at NIS School by </p> <p className='text-green-600 text-xl font-bold'>&nbsp;Asset Almas 11C</p>
      </div>
      <p className="text-gray-600">Club: Fullstack Development</p>
    </div>
    <Image src="/nis.png" alt="NIS Image" width={80} height={100} />
  </div>
</div>

    <div className='flex'>
        <div className="mt-28">
            <div className="text-center w-500">
                <h2 className="text-6xl font-bold mb-16 text-green-500">About FastTyping Tournament</h2>
                <p className="text-gray-700 text-2xl">Welcome to the Fast Typing Tournament at NIS School, organized by Asset Almas from 11C. This exciting competition will test your typing speed and accuracy. Join us for a fun and challenging event! And don't forget, we have sweet prizes for the top three winners!</p>
            </div>
        </div>

    <div className="w-1/3 pr-8 pl-3 mt-8">
        <div className="mt-8 mr-6 bg-white p-4 rounded-3xl text-center  border-black border-2">
            <h2 className="text-2xl font-bold mb-4">Registration</h2>
            <form className="space-y-4" onSubmit={e=>{
                e.preventDefault()
                handleSubmit(form)
                Notiflix.Notify.success('Вы успешно зарегистрировались!')
            }}>
                <input type="text" placeholder="Name" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" value={form.name} onChange={e => setForm({... form, name:e.target.value})}/>
                <input type="text" placeholder="Surname" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" value={form.surname} onChange={e => setForm({... form, surname:e.target.value})}/>
                <input type="text" placeholder="Class" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" value={form.classnum} onChange={e => setForm({... form, classnum:e.target.value})}/>
                <input type="text" placeholder="Phone number" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" value={form.phoneNumber} onChange={e => setForm({... form, phoneNumber:e.target.value})}/>
                <input type="text" placeholder="Kazakh/English/Russian" className="w-full px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-500" value={form.selectedLang} onChange={e => setForm({... form, selectedLang:e.target.value})}/>
                <button type="submit" className="w-full  bg-green-500 border-2 text-white py-2 rounded-lg hover:bg-white hover:text-black transition duration-200 hover:border-green-500">Submit</button>
            </form>
        </div> 
    </div>
    </div>
    <script src="dist/notiflix-aio-3.2.6.min.js"></script>
</main>



  )
}
