const FormSuccessMsg = ({ msg }: { msg: string }) => {
  return (
    <div className=" h-8 leading-7 mx-auto rounded text-white bg-green-500 w-4/5">
      {msg}
    </div>
  );
};

export default FormSuccessMsg;
