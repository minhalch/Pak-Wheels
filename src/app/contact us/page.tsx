import Link from "next/link";
export default function contact() {
    return (
        <div>
            <p> Hi, this is contact us page .thankyou for visiting us on our contact us page </p>
            <Link href="/"> <p className="text-blue-800 underline">  back to home page</p>
         </Link>
        </div>
        );
}