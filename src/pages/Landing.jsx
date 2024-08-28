import { Link } from "react-router-dom";
import Card from "../components/Card";
function Landing() {
  return (
    <div className="flex flex-col">
      <div className=" flex md:flex-row flex-col space-y-5">
        <div className="md:w-1/2 w-full flex flex-col space-y-10 justify-center pl-5">
          <h2 className="text-4xl font-serif font-bold">
            Welcome to Online Library System
          </h2>
          <p className="text-xl">
            Welcome to the online library system. Your ultimate place to find and manage books in your library. You can also add new books to the library or just search them by title or author name. You can find books in various languages.
          </p>
          <div className="flex space-x-3">
            <Link to="/browse/english">
              <button className="p-3 bg-teal-700 rounded-lg shadow-lg text-white">
                English
              </button>
            </Link>
            <Link to="/browse/french">
              <button className="p-3 bg-teal-700 rounded-lg shadow-lg text-white">
                French
              </button>
            </Link>
            <Link to="/browse/german">
              <button className="p-3 bg-teal-700 rounded-lg shadow-lg text-white">
                German
              </button>
            </Link>
            <Link to="/browse/italian">
              <button className="p-3 bg-teal-700 rounded-lg shadow-lg text-white">
                Italian
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 w-full h-[80%] flex justify-center items-center order-first">
          <img
            className="h-[80%]"
            src="https://task-manager.nileshgosavi.tech/hero.png"
            alt="hero image"
          />
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <div className="flex justify-center items-center">
          <h4 className="text-3xl text-teal-500 font-semibold font-sans">
            Popular Books
          </h4>
        </div>
        <div className=" flex justify-center flex-col md:flex-row items-center">
          <Card
            book={{
              author: "Jane Austen",
              country: "United Kingdom",
              imageLink: "images/pride-and-prejudice.jpg",
              language: "English",
              link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
              pages: 226,
              title: "Pride and Prejudice",
              year: 1813,
            }}
          />
          <Card
            book={{
              author: "Emily Bront\u00eb",
              country: "United Kingdom",
              imageLink: "images/wuthering-heights.jpg",
              language: "English",
              link: "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
              pages: 342,
              title: "Wuthering Heights",
              year: 1847,
            }}
          />
          <Card
            book={{
              author: "Geoffrey Chaucer",
              country: "England",
              imageLink: "images/the-canterbury-tales.jpg",
              language: "English",
              link: "https://en.wikipedia.org/wiki/The_Canterbury_Tales\n",
              pages: 544,
              title: "The Canterbury Tales",
              year: 1450,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Landing;
