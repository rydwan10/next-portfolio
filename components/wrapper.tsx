import React, { ReactComponentElement } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./navbar";
import Hero from "./hero";
import style from "./styles/Wrapper.module.css"


interface paramsType {
    children: React.ReactNode,
    customMeta: {},
}

export default function Wrapper({ children, ...customMeta }: paramsType): ReactComponentElement<any> {
    const router = useRouter();

    const meta = {
        title: "Rydwan",
        description: "lorem ipsum dolor sit amet",
        image: "/avatar.jpg",
        type: "website",
        ...customMeta
    }

    return (
        <div className={style.wrapper}>
            <Head>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                // TODO make change to personal website link
                <meta
                    property="og:url"
                    content={`https://yourwebsite.com${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://yourwebsite.com${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Rydwan" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />

            </Head>


            <Navbar />
            <div className="px-">{children}</div>
            {/*<Footer />*/}

        </div>
    )

}