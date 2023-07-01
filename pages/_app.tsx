import '../styles/globals.css'
import type { AppProps } from 'next/app'
    ;
import { DevSupport } from "@react-buddy/ide-toolbox-next";
import { ComponentPreviews, useInitial } from "../components/dev";
import { ThemeProvider } from '@material-tailwind/react';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider>
            <DevSupport ComponentPreviews={ComponentPreviews}
                useInitialHook={useInitial}
            >
                <Component {...pageProps} />
            </DevSupport>
        </ThemeProvider>
    );
}

export default MyApp
