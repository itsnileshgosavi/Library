import { useParams } from "react-router-dom"
import Card from "../components/Card";
import { useSelector } from "react-redux";

function Category() {
    const { category } = useParams();
    const books = useSelector(state => state.books.items);//getting books from store
    const filteredBooks = books.filter((book) => book.language.toLowerCase() === category.toLowerCase());//filtering books based on category
    if(filteredBooks.length === 0) {
        return <h1 className="text-3xl">Oops.. There are no books in this category</h1>
    }
  return (
    <div className="flex flex-col items-center">
        <h1 className="capitalize text-3xl font-mono font-semibold">{category} Books</h1>
        <div className="flex flex-wrap">
        {filteredBooks.map((book) => (
            <Card key={book.title} book={book} />
        ))}

        </div>
    </div>
  )
}

export default Category