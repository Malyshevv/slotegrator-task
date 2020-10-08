import React,{ useState, useEffect,Component } from 'react';
import { useParams,Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';


function News() {

  const [news, setNews] = useState([]);
  const [load, setLoad] = useState('false');

  const [currentPage, setPage] = useState(['1']);
  const [countPage, setCountPage] = useState([]);
  const [offset, setOffset] = useState([0]);
  const perPage = 2;


  const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        console.log(offset);

        setPage(selectedPage);
        setOffset(selectedPage);

        fetchMyAPInews(offset,perPage,currentPage)
  };

  useEffect(() => {
    fetchMyAPInews(offset,perPage,currentPage);
  }, []);

  async function fetchMyAPInews(offset,perPage,currentPage) {
        let response = await fetch('http://jsonplaceholder.typicode.com/posts')
        response = await response.json()
        if(response.data != undefined) {
          if(response.data.status != 200){
            window.history.back();
          }
        }

        const slice = response.slice(offset, offset + perPage)

        const postData =  slice.map(news =>
          <React.Fragment>
           <article key={news.id}>
             <header className="text-center">
               <h3>
                  <Link className="nav-link" to={'/news/'+news.id} >{ news.title } </Link>
               </h3>
             </header>
             <div className="card-block">
               <p className="text-justify"> { news.body}</p>
               <p className="text-center mt-40">
                 <Link className="btn btn-primary btn-round" to={'/news/'+news.id}>Reed more..</Link>
               </p>
             </div>
               <hr/>
           </article>
           </React.Fragment>
         )

        setNews(postData);

        const matchCountPage = Math.ceil(response.length / perPage);

        setCountPage(matchCountPage);

        setLoad('true');
  }

  return (
    <main className="main-content bg-gray">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">News</li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
        {news}
        <ReactPaginate
                   previousLabel={'previous'}
                   nextLabel={'next'}
                   breakLabel={'...'}
                   breakClassName={'break-me'}
                   pageCount={countPage}
                   previousClassName={"page-item"}
                   previousLinkClassName={"page-link"}
                   nextClassName={"page-item"}
                   nextLinkClassName={"page-link"}
                   marginPagesDisplayed={2}
                   pageRangeDisplayed={5}
                   pageClassName={"page-item"}
                   pageLinkClassName={"page-link"}
                   onPageChange={handlePageClick}
                   containerClassName={'pagination'}
                   subContainerClassName={'nav pagination'}
                   activeClassName={'active'}
                   />

        </div>

      </div>

    </main>

  );
}

export default News;
