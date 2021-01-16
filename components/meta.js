import Head from 'next/head';
import {useRouter} from 'next/router';

function meta() {
    
  const {basePath}  = useRouter();

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href={`${basePath}/favicon.ico`} />
            <title className='no-print'>Ηλεκτρονικοί Κατάλογοι</title>
        </Head>
    );
}

export default meta;