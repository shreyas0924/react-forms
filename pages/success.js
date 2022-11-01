import { useRouter } from "next/router"
const Success = () => {
    const routers = useRouter();
  return (
    <main className="flex h-screen items-center justify-center">
    <div className='bg-white text-gray-700 p-16 rounded-lg w-1/2 shadow-lg shadow-gray-300 '>
        <h1 className="text-3xl pb-4 font-bold"> Thanks for the email {routers.query.name}</h1>
        <p className="text-lg text-gray-500">We have sent you an email at {routers.query.email}. We will get back to you as soon as we can!! </p>
    </div>

    </main>
  )
}

export default Success
