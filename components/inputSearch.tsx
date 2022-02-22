import type { NextPage } from "next";


interface Props {
  search: string;
  handleSearch: any;
}

const InputSearch: NextPage<Props> = ({ search, handleSearch }) => {
  return (
    <>
      <div className="text-center  ">
        <input
          className="font-bold 
          text-center 
          text-white 
          border-2 
          border-white 
          bg-black 
          font-bold 
          px-4 
          rounded-full"
          value={search}
          onChange={handleSearch}
          placeholder="Search..."
        ></input>
      </div>
    </>
  );
};

export default InputSearch;
