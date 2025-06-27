import React from 'react';
import {Footer, Header} from "@/components";


export function Layout({children} : {children: React.ReactNode}) {
    return (
       <>
           <Header />
           <main>{children}</main>
           <Footer />
       </>
    );
}
