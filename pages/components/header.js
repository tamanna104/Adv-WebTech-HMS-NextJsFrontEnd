import Head from "next/head"
export default function Myheader(props){
    return(
    <>
    <Head>
    <title>{props.title}</title>
    </Head>
    </>
    )
}
