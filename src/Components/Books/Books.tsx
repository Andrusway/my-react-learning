import css from './Books.module.css';

interface Book {
id: string;
name: string;
}

const books: Book[] = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Query overview" },
];

export default function Books() {
    return (
        <>
            <h1 className={css.sectionName}>Books List</h1>
            <ul>
                {
                    books.map((book) => (
                        <li key={book.id} className = {css.bookItem}>{book.name}</li>
                    ))
                }
            </ul>
        </>
    )
}