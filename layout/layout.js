
export default function Layout( { children }){
    return (
            <div className="m-auto h-screen  grid lg:grid-cols-5">
                <div className="bg-black h-full lg:col-span-2 justify-center flex items-center" >
                   <p className='font-montserrat font-bold text-6xl leading-tight text-white'>Board.</p>
                </div>
                <div className="right h-full bg-gray-100 flex flex-col justify-evenly lg:col-span-3 sm:col-span-2">
                    <div >
                        {children}
                    </div>
                </div>
            </div>
    )
}