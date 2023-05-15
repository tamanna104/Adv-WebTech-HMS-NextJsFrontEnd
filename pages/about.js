import Mylayout from "./components/layout"
import Footer from "./components/footer"
export default function About() {
    return (
      <>
      <Mylayout title = "About"/>
      <main>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium text-center title-font text-green-800 mb-4">About US</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">The Team Members of Hospital Management System.</p>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Dr Sano Manjiro</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">manjiro@gmail.com</h2>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Tamanna Akter</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">20-42406-1</h2>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Kamado Tanjiro</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">tanjiro@gmail.com</h2>
      </div>
      <div class="p-4 lg:w-1/4 sm:w-1/2 w-full">
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">Hatake Kakashi</h2>
        <h2 class="font-medium title-font tracking-widest text-gray-900 mb-4 text-sm text-center sm:text-left">kakashi@gmail.com</h2>
      </div>
    </div>
    <div class="flex justify-center">
    <a href="/" class="flex mx-auto mt-16 text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-green-300 rounded text-lg">
          Home
        </a>
    </div>
  </div>
</section>
<Footer/>
    </main>
        
      </>
    )
  }