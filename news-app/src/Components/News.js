import React, { Component } from 'react'
import NewsItem from './NewsItem'
import"./News.css";

export default class News extends Component {

   

  constructor()
    {
      super();
      console.log("const");
      this.state={
        
        
        articles:[],
        loading:false,
        page:1
      }
    }
  

    async componentDidMount(){
      
      console.log("me")
      let url=` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bce0e718d16b4b56bf4f2b9c13f4c812&pageSize=6`;
      let data=await fetch(url);
      let parseData=  await data.json()
      console.log(parseData);
      this.setState({articles:parseData.articles})


    }

     goToprevious= async()=>{
      console.log("me")
      let url=` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bce0e718d16b4b56bf4f2b9c13f4c812&page=${this.state.page -1}
      &pageSize=6`;
      let data=await fetch(url);
      let parseData=  await data.json()
      console.log(parseData);
      
      this.setState({
        page:this.state.page - 1,
        articles:parseData.articles
        })
    }

    goTonext=async ()=>{
     console.log("me")
      let url=` https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=bce0e718d16b4b56bf4f2b9c13f4c812&page=${this.state.page + 1}
      &pageSize=6`;
      let data=await fetch(url);
      let parseData=  await data.json()
      console.log(parseData);
      
      this.setState({
        page:this.state.page + 1,
        articles:parseData.articles
        })
    }

  /*render() {
    return (
        <>
       <div className="container">
        <h1>News-app Top heading </h1>
          <div className="row" >
          
           {this.state.articles.map((Element)=>{
              
             return <div className="col-md-4" key={Element.url}>
            <NewsItem  Title={Element.title?Element.title.slice(0,44):""} description={Element.description?Element.description.slice(0,65):""} ImageUrl={Element.urlToImage} newsUrl={Element.url}/>
 
            </div>

               
           })} 
          <div>
            <div className="container d-flex justify-content-between">
<button  disabled={this.state.page<=1}onClick={this.goToprevious}type="button" className="btn btn-primary">Previous</button>
<button onClick={this.goTonext} type="button" className="btn btn-primary">Next</button>
</div>
 </div>


          </div>

       </div>
      
      </>
    )
  }*/
 render() {
  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center fw-bold mb-4 news-heading">
          📰 Top Headlines
        </h1>

        <div className="row g-4">
          {this.state.articles.map((article) => (
            <div className="col-md-4" key={article.url}>
              <NewsItem
                Title={article.title ? article.title.slice(0, 50) : ""}
                description={article.description ? article.description.slice(0, 90) : ""}
                ImageUrl={article.urlToImage}
                newsUrl={article.url}
              />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button
            disabled={this.state.page <= 1}
            onClick={this.goToprevious}
            className="btn btn-outline-primary px-4 py-2"
          >
            ⬅ Previous
          </button>

          <button
            onClick={this.goTonext}
            className="btn btn-primary px-4 py-2"
          >
            Next ➡
          </button>
        </div>
      </div>
    </>
  );
}

}
