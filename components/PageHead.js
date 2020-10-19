import Head from 'next/head';

const PageHead = ({ title, description }) => (
  <div>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title ? title : 'Simple Calculator'}</title>
      <meta
        name="description"
        content={description ? description : 'Simple Calculator in React'}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  </div>
);

export default PageHead;
