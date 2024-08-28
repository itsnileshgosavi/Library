import React from "react";
import { baseUrl } from "../utils/mockData/books";
import { Link } from "react-router-dom";

function Card({ book }) {
  const image = book.coverImage ? book.coverImage : `${baseUrl}${book.imageLink}`
  return (
    <div className="w-64 my-5 mx-5 h-96 bg-slate-300 rounded-3xl text-teal-600 cursor-pointer  flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
      <div className="w-full h-[50%] bg-sky-300 rounded-2xl overflow-hidden">
        <img src={image} alt="cover" className="w-full h-full" />
      </div>
      <div className="px-3">
        <p className="font-bold text-xl">{book.title}</p>
        <p>Language: {book.language}</p> 
        <p className="my-2">Author : {book.author}</p>
      </div>
      <Link to={`/books/${book.title}`}>
      <button className="bg-teal-700 my-2 mx-2 text-slate-300 font-extrabold p-2 px-6 rounded-xl hover:bg-teal-500 transition-colors">
        View Details
      </button>
      </Link>
    </div>
  );
}

export default Card;
