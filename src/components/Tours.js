import Title from './Title';
import { tours } from '../data';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subTitle='tours' />
      <div className="section-title">
        <h2>featured <span>tours</span></h2>
      </div>

      <div className="section-center featured-center">
        {tours.map((tour)=>{
          const {id, image, date, title, info, location, duration, cost} = tour
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={title} 
                
                onError={(e) => {
                  console.log('Image not found')
                  e.target.src = {image};
                  e.target.alt = 'Image not found';
                }}
                
                />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {location}
                  </p>
                  <p>{duration}</p>
                  <p>from ${cost}</p>
                </div>
              </div>
            </article>
          );
        })}
        

        
      </div>
    </section>
  );
}

export default Tours
