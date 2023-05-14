import Link from "next/link"
import Image from "next/image"
export default function Custom404() {


    return (
      <>
    <dev align="center"style={{position: "absolute",bottom:"50%", left:"40%"}}>
    <Image src="/error-404.png" alt="me" width="80" height="80" />
      <h1>This page does not exists</h1>

    <Link href="/admin">Go back HOME</Link>
    </dev>
      </>
    )
  }