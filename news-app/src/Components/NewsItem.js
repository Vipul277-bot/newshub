import React, { Component } from 'react'

export default class NewsItem extends Component {



 /* render() {
    let {Title, description,ImageUrl,newsUrl} = this.props;
    return (
        
    <div>


        <div className="card" style={{width: "20rem"}}>
        <img src={ImageUrl} className="card-img-top" alt="..."/>
         <div className="card-body">
         <h5 className="card-title">{Title}...</h5>
         <p className="card-text">{description}...</p>
         <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
         <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
  </div>
</div>    

      </div>
    )
  }*/
 render() {
  let { Title, description, ImageUrl, newsUrl } = this.props;

  return (
    <div className="d-flex justify-content-center">
      <div 
        className="card shadow-lg border-0 position-relative"
        style={{
          width: "21rem",
          borderRadius: "15px",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.20)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.10)";
        }}
      >

        {/* Badge */}
        <span className="badge bg-danger position-absolute" 
          style={{ 
            top: "10px", 
            right: "10px", 
            padding: "10px", 
            fontSize: "0.8rem",
            borderRadius: "12px"
        }}>
          Trending
        </span>

        {/* Image */}
        <img src={ImageUrl} alt="News" style={{ height: "180px", objectFit: "cover" }} />

        {/* Content */}
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{ fontSize: "18px" }}>
            {Title.slice(0, 80)}...
          </h5>

          <p className="card-text text-muted" style={{ fontSize: "14px" }}>
            {description.slice(0, 120)}...
          </p>

          {/* Button */}
          <a 
            href={newsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark w-100"
            style={{ borderRadius: "10px", padding: "8px" }}
          >
            Read More →
          </a>
        </div>

      </div>
    </div>
  );
}

}
