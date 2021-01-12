import Head from 'next/head';

function meta() {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/new-cat/favicon.ico" />
            <title className='no-print'>Ηλεκτρονικοί Κατάλογοι</title>
        </Head>
    );
}

export default meta;