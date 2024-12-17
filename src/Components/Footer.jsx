import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[70vh] rounded-t-3xl bg-gray-800 flex pt-20 '>
        <div className="flex flex-col text-white md:flex-row w-full justify-between  px-10 md:px-32">
            <div className="">

            </div>
            <div className="flex gap-10 font-[300]">
            <div className="">
                    <h1 className='text-xl font-semibold'>Top Projects</h1>
                    <ul>
                        <a href="" className='hover:underline'>
                            <li> Old Portfolio</li>
                        </a>
                        <a href="" className='hover:underline'>
                            <li> Tailor E-com</li>
                        </a>

                        <a href="" className='hover:underline'>
                            <li> Itahari Medicals</li>
                        </a>

                        <a href="" className='hover:underline'>
                            <li> To-Do Web App</li>
                        </a>

                        <a href="" className='hover:underline'>
                            <li> Weather Web App</li>
                        </a>

                        <a href="" className='hover:underline'>
                            <li> Consultancy web</li>
                        </a>

                        <a href="" className='hover:underline'>
                            <li> Burger House</li>
                        </a>

                        <a href="/projects" className='underline text-blue-500'>
                            <li> View All Projects</li>
                        </a>
                    </ul>
                </div>
                <div className="">
                    <h1 className='text-xl font-semibold '>Quick Links</h1>
                    <ul>
                    <a href="/" className='hover:underline'>
                            <li>Home</li>
                        </a>
                        <a href="#introduction" className='hover:underline'>
                            <li>Introduction</li>
                        </a>
                        <a href="" className='hover:underline'>
                            <li>Skills</li>
                        </a>
                        <a href="/projects" className='hover:underline'>
                            <li>Projects</li>
                        </a>
                        <a href="" className='hover:underline'>
                            <li>Contact</li>
                        </a>
                        <a href="" className='hover:underline'>
                            <li>Hire Me</li>
                        </a>
                    </ul>
                </div>

                <div className="">
                    <h1 className='text-xl font-semibold'>Support me</h1>
                    <ul>
                       <a href="" className='hover:underline'>
                        <li>Github</li>
                       </a>

                       <a href="" className='hover:underline'>
                        <li>Twitter</li>
                       </a>

                       <a href="" className='hover:underline'>
                        <li>Facebook</li>
                       </a>
                   </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
