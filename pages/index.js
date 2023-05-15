
import Mylayout from "./components/layout"
import Footer from "./components/footer"
import Image from "next/image"
export default function Home() {
  return (
    <>
    <Mylayout title = "Home"/>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-20 mx-auto flex flex-wrap flex-col">
            <div className="flex mx-auto flex-wrap mb-20">
            </div>
            <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" >
            <Image src="/home.jpg" alt="me" width="500" height="900" />
            </div>
            <div className="flex flex-col text-center w-full">
              <h1 className="text-xl font-medium title-font mb-4 text-teal-800">Welcome to Hospital management</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Our system enables hospitals to manage informationand data related to all aspects of healthcare processes, providers,patients, and more, which in turn ensures that processes arecompleted swiftly and effectively.</p>
            </div>
          </div>
    </section>
    <Footer/>
      
    </>
  )
}
