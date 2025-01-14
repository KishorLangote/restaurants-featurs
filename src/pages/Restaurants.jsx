const Restaurants = () => {
  return (
    <main className="container py-3">
      <h1 className="">Restaurants</h1>

      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_640.jpg"
              alt="Foody India"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5>Foody India</h5>
              <p>
                Enjoy authentic Indian cuisine at Taste of India. Explore a
                variety of delicious dishesh from different regions of India.
              </p>
              <p>
                <small className="text-body-secondary">
                  Rating: 4.7 | Open New
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/31/11/22/man-2557408_640.jpg"
              alt="Pizza Hamiltan"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Pizza Hamiltan</h5>
              <p className="card-text">
                Indulge in mouth-watering pizzas at Hamiltan. With a variety of
                toppings and crusts, it's a pizza lover's dream.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Rating: 4.5 | Open New
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Restaurants;
