import { Link, useParams } from "react-router-dom"
import { baseUrl } from "../utils/mockData/books";
import { useSelector } from "react-redux";


function BookDetails() {
  const { title } = useParams(); //fetching title from url
  const books = useSelector(state => state.books.items);//fetching books from store
  const book = books.find((b) => b.title.includes(title)); //finding book by title
  const image = book.coverImage ? book.coverImage : `${baseUrl}${book.imageLink}` //there are two different types of book cover image links

  return (
    <div className="flex flex-col md:flex-row space-x-20 my-20 mx-5">
      <figure className="flex justify-center items-center p-1 md:p-5 w-screen md:w-fit bg-teal-400 rounded-lg ring-2 ring-teal-500 shadow-xl ml-0 md:ml-10"><img src={image} alt="book cover image" /></figure>
      <div className="space-y-5 ">
        <h1 className="text-4xl font-serif text-teal-800 mt-3">{book.title}</h1>
        <p className="text-xl">Author : <span className="text-teal-500 font-medium font-serif my-3">{book.author}</span></p>
        <div className="flex flex-col md:flex-row items-center space-x-3">
        <a href={book.link} target="_blank"><button className="flex bg-teal-700 my-2 text-slate-300 font-extrabold p-2 px-6 rounded-xl hover:bg-teal-500 transition-colors"><span className="mr-2">Read More</span> <img className="w-5 h-5" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGQ9Ik0gNDEuNDcwNzAzIDQuOTg2MzI4MSBBIDEuNTAwMTUgMS41MDAxNSAwIDAgMCA0MS4zMDg1OTQgNSBMIDI3LjUgNSBBIDEuNTAwMTUgMS41MDAxNSAwIDEgMCAyNy41IDggTCAzNy44Nzg5MDYgOCBMIDIyLjQzOTQ1MyAyMy40Mzk0NTMgQSAxLjUwMDE1IDEuNTAwMTUgMCAxIDAgMjQuNTYwNTQ3IDI1LjU2MDU0NyBMIDQwIDEwLjEyMTA5NCBMIDQwIDIwLjUgQSAxLjUwMDE1IDEuNTAwMTUgMCAxIDAgNDMgMjAuNSBMIDQzIDYuNjg5NDUzMSBBIDEuNTAwMTUgMS41MDAxNSAwIDAgMCA0MS40NzA3MDMgNC45ODYzMjgxIHogTSAxMi41IDggQyA4LjM3NTQ5OTEgOCA1IDExLjM3NTQ5OSA1IDE1LjUgTCA1IDM1LjUgQyA1IDM5LjYyNDUwMSA4LjM3NTQ5OTEgNDMgMTIuNSA0MyBMIDMyLjUgNDMgQyAzNi42MjQ1MDEgNDMgNDAgMzkuNjI0NTAxIDQwIDM1LjUgTCA0MCAyNS41IEEgMS41MDAxNSAxLjUwMDE1IDAgMSAwIDM3IDI1LjUgTCAzNyAzNS41IEMgMzcgMzguMDAzNDk5IDM1LjAwMzQ5OSA0MCAzMi41IDQwIEwgMTIuNSA0MCBDIDkuOTk2NTAwOSA0MCA4IDM4LjAwMzQ5OSA4IDM1LjUgTCA4IDE1LjUgQyA4IDEyLjk5NjUwMSA5Ljk5NjUwMDkgMTEgMTIuNSAxMSBMIDIyLjUgMTEgQSAxLjUwMDE1IDEuNTAwMTUgMCAxIDAgMjIuNSA4IEwgMTIuNSA4IHoiPjwvcGF0aD4KPC9zdmc+"/></button></a>
        <Link to="/BrowseBooks"><button className="bg-blue-700 my-2 mx-2 text-slate-300 font-extrabold p-2 px-6 rounded-xl hover:bg-teal-500 transition-colors">Back to Browse</button></Link>
        </div>
      </div>
      <div className="flex flex-col space-y-5 text-xl">
        <h6 className="text-teal-500 font-bold font-serif text-2xl">Book Details</h6>
        <p>Language: <span className="text-teal-600 font-semibold">{book.language}</span></p>
        <p>No. of Pages: <span className="text-teal-600 font-semibold">{book.pages}</span></p>
        <p>Country of Origin: <span className="text-teal-600 font-semibold">{book.country}</span></p>
        <p>Published Year: <span className="text-teal-600 font-semibold">{book.year}</span></p>
        
      </div>
      
    </div>
  )
}

export default BookDetails