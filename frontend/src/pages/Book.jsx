import { useLoaderData, useParams } from "react-router-dom"
import { generateBookPrice } from "../util/generateBookPrice";

export default function BookPage(){
    const {bookId} = useParams();
    const data = useLoaderData()
    console.log(data);
    
    return <main>
        hello {bookId}
        <img src="" alt="" />
    </main>
}
export async function loader({params, request}){
    try {
        // const res = await fetch (`https://openlibrary.org/works/${params.bookId}.json`);
        const res = await fetch (`https://openlibrary.org/search.json?q=/works/${params.bookId}`);
        const data = await res.json();
        console.log(res);
        console.log(data);
        const { docs } = data;
        const book = docs.filter(b=>b.key===`/works/${params.bookId}`).map((book) => ({
          id: book.key.replace('/works/',''),
          author: book.author_name,
          title: book.title,
          year: book.publish_year,
          ratings_average: book.ratings_average,
          ratings_count: book.ratings_count,
          cover_id: book.cover_i,
          cover_img:book.cover_i?`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`:'',
          price: generateBookPrice(),
    
        }))
        // const authorReq = await fetch(`https://openlibrary.org${data.authors[0].author.key}.json`);
        // const author = await authorReq.json();
        // console.log(author);
        // const book = {
        //     id:params.bookId,
        //     title: data.title,
        //     author: author.name,
        //     published_year: new Date(data.created.value).getFullYear(),
        //     subjects:data.suubjects,
            
        // }
        return book;
    } catch (error) {
        return error;
    }
}