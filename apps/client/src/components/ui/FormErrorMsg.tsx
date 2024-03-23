const FormErrorMsg = ({ msg }: { msg: string }) => {
  return (
    <div className=" h-8 leading-7 mx-auto rounded text-white bg-red-500 w-4/5">
      {msg}
    </div>
  );
};

export default FormErrorMsg;
