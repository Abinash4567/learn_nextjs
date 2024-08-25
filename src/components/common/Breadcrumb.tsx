import Link from "next/link"

import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function BreadcrumbCollapsed({paths}: {paths: Array<String>}) {
    if(paths.length >= 4)
        return(
        <>
            <Breadcrumb>
                <BreadcrumbList>

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">{paths[0]}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbEllipsis />
                    </BreadcrumbItem>

                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/docs/components">{paths.slice(-2, -1)}</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>


                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                        <BreadcrumbPage>{paths.slice(-1)}</BreadcrumbPage>
                    </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
        </>);
    else
        return (
            <Breadcrumb>
                <BreadcrumbList>

                {paths.map((item, index)=>{
                    return(
                    <section key={index} className="flex borer-2 border-green-600 -ml-1">
                    <BreadcrumbItem className="boder-2 border-red-400">
                    <BreadcrumbLink asChild>
                        <Link href="/">{item}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                
                {index!=paths.length -1 && <BreadcrumbSeparator className="mt-1 order-2"/>}
                </section>)
                })}

                </BreadcrumbList>
            </Breadcrumb>
        )
}