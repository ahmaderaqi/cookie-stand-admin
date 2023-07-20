import Head from 'next/head';

export default function Home() {


  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body>
        {/* Header */}
        <Header />
        <main className='flex flex-col min-h-screen items-center py-4 space-y-8'>
          {/* form */}
          <Form handler={submitHandler} />



        </main>
        <footer className="p-4 mt-auto bg-lime-900 text-gray-50 ">
          &copy; 2023
        </footer>
      </body>
    </>
  )
}

function Header() {
  return (
    <header className='flex items-center justify-between p-4 bg-lime-900 text-gray-50'>
      <h1 className='text-4xl'>Cookie Stand Admin</h1>

    </header>
  )
}

function Form(props) {
  return (
    <form onSubmit={props.handler} className="w-1/2 p-2 mx-auto my-4 bg-lime-500">
      <h1 className="text-center mb-4 font-bold">Create Cookie Stand</h1>

      <div className="flex mb-4">
        <label className="flex-auto pl-1">Location</label>
        <input name="question1" className="flex-auto pl-1" />
      </div>

      <div className="flex mb-4">
        <label className="flex-auto pl-1">Minimum Customers per hour</label>
        <input name="question2" className="flex-auto pl-1" />
      </div>

      <div className="flex mb-4">
        <label className="flex-auto pl-1">Maximum Customers per hour</label>
        <input name="question3" className="flex-auto pl-1" />
      </div>

      <div className="flex mb-4">
        <label className="flex-auto pl-1">Average Customers per hour</label>
        <input name="question4" className="flex-auto pl-1" />
      </div>

      <div className="flex mb-4">
        <button className="flex-auto px-2 py-1 bg-lime-900 text-gray-50">Ask</button>
      </div>
    </form>

  )
}


