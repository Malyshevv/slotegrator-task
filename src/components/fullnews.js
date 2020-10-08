import React,{ useState, useEffect } from 'react';
import { useParams,Link } from "react-router-dom";


function FullNews() {

  const [news, setNews] = useState([]);
  const [load, setLoad] = useState('false');


  useEffect(() => {
    fetchMyAPInews(PostParam);
  }, []);

  const PostParam = {
    params: useParams(),
    news: true
  }

  async function fetchMyAPInews(PostParam) {
        const idNews = PostParam.params.id;
        let response = await fetch('http://jsonplaceholder.typicode.com/posts/'+idNews)
        response = await response.json()
        if(response.data != undefined) {
          if(response.data.status != 200){
            window.history.back();
          }
        }
        setNews(response);
        setLoad('true');

  }

  return (
    <main className="main-content">
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
        <li className="breadcrumb-item"><Link to="/news">News</Link></li>
        <li className="breadcrumb-item active" aria-current="page">
        {(() => {
          if (load === 'false') {
            return <span>Загрузка...</span>;
          }
          else {
            return(
              <span>{news.title}</span>
            )
           }
        })()}
        </li>
      </ol>
    </nav>

      <div className="section" id="section-content">
        <div className="container">

          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">

            {(() => {
             if (load === 'false') {
               return <div>Загрузка...</div>;
             }
             else {
               const titleNews = news.title;
               const contentNews = news.body;
               return (
               <div>
                 <h3>{titleNews}</h3>
                 <p>{contentNews}</p>
               </div>
              )
             }
            })()}



            </div>
          </div>

        </div>
      </div>

    </main>

  );
}

export default FullNews;
