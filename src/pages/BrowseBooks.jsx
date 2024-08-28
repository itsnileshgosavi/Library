import Card from "../components/Card";
import { useState } from "react";
import { useSelector } from "react-redux";
function BrowseBooks() {
  const books = useSelector((state) => state.books.items); //getting books from store
  const [searchBy, setSearchBy] = useState("title"); //default search by title
  const [filteredBooks, setFilteredBooks] = useState(books);

  //function to handle search
  const handleChange = (e) => {
    if (searchBy === "title") {
      setFilteredBooks(
        books.filter((book) =>
          book.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else if (searchBy === "author") {
      setFilteredBooks(
        books.filter((book) =>
          book.author
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
       )
  }}

  return (
    <div className="flex flex-col items-center min-h-screen">
      <form className="form relative" onSubmit={(e) => e.preventDefault()}>
       <label htmlFor="searchby" className=" mb-2 -translate-y-1/2 top-1/2 p-1 text-black">Search By</label> 
      <select id="searchby" onChange={(e) => {setSearchBy(e.target.value)}}  className="bg-slate-200 mb-2 text-black border-2 rounded-full py-2 shadow-md px-5 mx-2 focus:bg-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150">
        <option value="title">Book Title</option>
        <option value="author">Author Name</option>
      </select>  
       
        <input
          onChange={(e) => {
            handleChange(e);
          }}
          className="w-full md:w-72 bg-slate-200 placeholder:text-gray-900 rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md placeholder:capitalize"
          placeholder={`Search ${searchBy}...`}
          required=""
          type="text"
        />
        <button
          onClick={() => {setFilteredBooks(books); setSearchBy("title")}}
          type="reset"
          className="absolute right-4 top-16 md:right-3 md:-translate-y-1/2 md:top-1/2 p-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>

      <div className="flex flex-wrap">
        {filteredBooks.map((book) => (
          <Card key={book.title} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;
