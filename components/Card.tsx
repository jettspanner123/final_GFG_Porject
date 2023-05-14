const Card = (props: any) => {
  return (
    <div className="w-[25rem]  h-[20rem] rounded-b-xl bg-[#1a1a1a] text-white text-2xl ">
      <h1 className="font-bold text-[2rem] m-6 ">{props.heading}</h1>
      <p className="text-justify text-xl mx-6">{props.paragraph}</p>
    </div>
  );
};

export default Card;
