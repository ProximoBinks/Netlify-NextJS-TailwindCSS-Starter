import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netlify NextJS TailwindCSS Starter</title>
        <meta name="description" content="A modern starter template for Next.js with TailwindCSS and Netlify deployment" />
      </Head>

      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            Netlify NextJS TailwindCSS Starter
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="mb-4">
              Follow these steps to get your project up and running:
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">1. Clone the repository</h3>
                <code className="block bg-gray-100 p-3 rounded">
                  git clone https://github.com/proximobinks/Netlify-NextJS-TailwindCSS-Starter.git
                </code>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">2. Navigate to the project directory</h3>
                <code className="block bg-gray-100 p-3 rounded">
                  cd Netlify-NextJS-TailwindCSS-Starter
                </code>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">3. Install dependencies</h3>
                <code className="block bg-gray-100 p-3 rounded">
                  npm install
                  # or
                  yarn install
                </code>
              </div>

              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium mb-2">4. Start the development server</h3>
                <code className="block bg-gray-100 p-3 rounded">
                  npm run dev
                  # or
                  yarn dev
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Next Steps</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Edit <code className="bg-gray-100 px-2 py-1 rounded">pages/index.js</code> to customize this page</li>
              <li>Modify <code className="bg-gray-100 px-2 py-1 rounded">styles/globals.css</code> for global styles</li>
              <li>Update <code className="bg-gray-100 px-2 py-1 rounded">tailwind.config.js</code> to customize TailwindCSS</li>
              <li>Deploy to Netlify for production</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}