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
{/* <div className="text-center bg-white border-black border-2 border-t-0 pb-2">
  <div className=" ml-96 flex items-center justify-center" >
    <div className=" mr-96"> 
      <h1 className="text-4xl font-bold mb-2 sm:xl">FastTyping Tournament</h1>
      <div className='flex items-center justify-center'>
      <p className="text-gray-600 text-xl">at NIS School by </p> <p className='text-green-600 text-xl font-bold'>&nbsp;Asset Almas 11C</p>
      </div>
      <p className="text-gray-600">Club: Fullstack Development</p>
    </div>
    <Image src="/nis.png" alt="NIS Image" width={80} height={100} />
  </div>
</div> */}

<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="" className="flex items-center">
      <Image src="/nis.png" className="h-8 mr-3" alt="Flowbite Logo" width={30} height={90}/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FastTyping Tournament</span>
  </a>

  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Asset Almas 11C</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Fullstack Development</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

<div className=" lg:flex mt-32">
<div className='block w-2/3 ml-12 mt-12 items-center'>
<h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-gray-700 md:text-5xl lg:text-6xl">About <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-700 from-green-500">FastTyping Tournament</span></h1>
<p className="text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-600 mt-8">Welcome to the Fast Typing Tournament at NIS School, organized by Asset Almas from 11C.</p>
<p className="text-xl font-normal text-gray-500 lg:text-2xl dark:text-gray-600">This exciting competition will test your typing speed and accuracy. Join us for a fun and challenging event! And don't forget, we have sweet prizes for the top three winners!</p>


</div>
<div className="max-md:flex max-md:justify-center max-md:items-center max-md:min-h-screen">
  <div className=" max-md:mt-12 w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
    <form className="space-y-6" onSubmit={e=>{
                e.preventDefault()
                handleSubmit(form)
                Notiflix.Notify.success('Вы успешно зарегистрировались!')
            }}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our competition</h5>
                    
        <div>
            <input type="text" placeholder="Name" required  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"value={form.name} onChange={e => setForm({... form, name:e.target.value})}/>

        </div>
        <div>
        <input type="text" placeholder="Surname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={form.surname} onChange={e => setForm({... form, surname:e.target.value})}/>
        </div>
        <div>
        <input type="text" placeholder="Class" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={form.classnum} onChange={e => setForm({... form, classnum:e.target.value})}/>
        
        </div>
        <div>
        <input type="text" placeholder="Phone number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={form.phoneNumber} onChange={e => setForm({... form, phoneNumber:e.target.value})}/>
        </div>
        <div>
        <input type="text" placeholder="Kazakh/English/Russian" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" value={form.selectedLang} onChange={e => setForm({... form, selectedLang:e.target.value})}/>
        </div>
        <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</div>
</div>
</div>



    <script src="dist/notiflix-aio-3.2.6.min.js"></script>
</main>



  )
}
