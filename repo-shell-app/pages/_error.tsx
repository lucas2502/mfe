function Error({ statusCode }: { statusCode?: number }) {
  return (
    <p>
      {statusCode
        ? `Erro no servidor: ${statusCode}`
        : 'Erro no cliente'}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;
  return { statusCode };
};

export default Error;
