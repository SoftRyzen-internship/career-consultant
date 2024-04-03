import RiseLoader from 'react-spinners/RiseLoader';

const override: any = {
  display: 'block',
  margin: '0 auto',
};
export const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-[106px]">
      <RiseLoader color="#c8d4f3" cssOverride={override} speedMultiplier={1} />
    </div>
  );
};
